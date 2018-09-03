import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, DYN_COMP } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { TestDirective } from './test.directive';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, DynamicComponent, TestDirective ],
  entryComponents: [ DynamicComponent ],
  providers: [ { provide: DYN_COMP, useValue: DynamicComponent } ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
