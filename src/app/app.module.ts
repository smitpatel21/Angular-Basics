import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfElseComponent } from './if-else/if-else.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BasicComponent } from './basic/basic.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorChangeDirective } from './color-change.directive';
import { BasicformComponent } from './basicform/basicform.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { HeaderComponent } from './header/header.component';
import { DataManipulateComponent } from './data-manipulate/data-manipulate.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    IfElseComponent,
    ForLoopComponent,
    ErrorPageComponent,
    BasicComponent,
    ColorChangeDirective,
    BasicformComponent,
    ReactiveFormComponent,
    ChildOneComponent,
    ChildTwoComponent,
    HeaderComponent,
    DataManipulateComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // this is for using app routing
    HttpClientModule, //this is for using httpClient to make api calls
    FormsModule,      //this is for basic form
    ReactiveFormsModule, // this is for reactive form
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
