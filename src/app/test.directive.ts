import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewContainerRef,
  ChangeDetectorRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective
  implements OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked {
  @Input() appTest: any;

  constructor(
    { nativeElement }: ElementRef,
    vcr: ViewContainerRef,
    cdr: ChangeDetectorRef,
    renderer: Renderer2,
  ) {
    console.log('TestDirective applied on', nativeElement);
    console.log('TestDirective ViewContainerRef', vcr);
    console.log('TestDirective ChangeDetectorRef', cdr);
    console.log('TestDirective Renderer', renderer);
  }

  ngOnInit(): void {
    console.log('TestDirective#ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('TestDirective#ngOnChanges', changes);
  }

  ngOnDestroy(): void {
    console.log('TestDirective#ngOnDestroy');
  }

  ngAfterViewInit(): void {
    console.log('TestDirective#ngAfterViewInit');
  }

  ngAfterContentInit(): void {
    console.log('TestDirective#ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('TestDirective#ngAfterViewChecked');
  }

  ngAfterContentChecked(): void {
    console.log('TestDirective#ngAfterContentChecked');
  }
}
