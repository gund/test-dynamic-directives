import { NgComponentOutlet } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  Inject,
  InjectionToken,
  OnDestroy,
  Optional,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { TestDirective } from './test.directive';

export const DYN_COMP = new InjectionToken<Type<any>>('DYN_COMP');

const Reflect = (window as any).Reflect;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild(NgComponentOutlet) ngCompOutlet: NgComponentOutlet;

  get componentRef(): ComponentRef<any> {
    return this.ngCompOutlet['_componentRef'];
  }

  get compInjector() {
    return this.componentRef.injector;
  }

  get hostVcr(): ViewContainerRef {
    return this.componentRef['_viewRef']['_viewContainerRef'];
  }

  private attachedDirs: any[] = [];

  constructor(
    @Inject(DYN_COMP)
    @Optional()
    public comp: Type<any>,
  ) {}

  ngAfterViewInit(): void {
    this.applyDirective(TestDirective);
  }

  ngOnDestroy(): void {
    this.attachedDirs.forEach((dir) => this.callHook(dir, 'ngOnDestroy'));
  }

  applyDirective(dirType: Type<any>, inputs?: any, outputs?: any) {
    if (!this.componentRef) {
      throw Error('ComponentRef not available!');
    }

    const ctorParams: any[] = Reflect.getMetadata('design:paramtypes', dirType);

    console.log('Applying directive', dirType);
    console.log('With params', ctorParams);

    const resolvedParams = ctorParams.map((p) => this.resolveDep(p));
    const instance = new dirType(...resolvedParams);
    const dirRef = {
      instance,
      injector: this.compInjector,
      location: this.componentRef.location,
    };
    this.attachedDirs.push(instance);

    console.log(dirRef);
    console.log('Invoking hooks');
    this.callInitHooks(instance);
  }

  private callInitHooks(obj: any) {
    this.callHook(obj, 'ngOnInit');
    this.callHook(obj, 'ngAfterContentInit');
    this.callHook(obj, 'ngAfterContentChecked');
    this.callHook(obj, 'ngAfterViewInit');
    this.callHook(obj, 'ngAfterViewChecked');
  }

  private callHook(obj: any, hook: string, args: any[] = []) {
    if (obj[hook]) {
      obj[hook](...args);
    }
  }

  private resolveDep(dep: any): any {
    return this.maybeResolveVCR(dep) || this.compInjector.get(dep);
  }

  private maybeResolveVCR(dep: any): ViewContainerRef | undefined {
    if (dep === ViewContainerRef) {
      return this.hostVcr;
    }
  }
}
