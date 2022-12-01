import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { BasicformComponent } from './basicform/basicform.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { DataManipulateComponent } from './data-manipulate/data-manipulate.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { IfElseComponent } from './if-else/if-else.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormGuardService } from './services/form-guard.service';

const routes: Routes = [
  { path: '', component: BasicComponent },
  { path: 'list', component: DataManipulateComponent, canActivate: [FormGuardService] },
  {
    path: 'ifelse',
    component: IfElseComponent,
  },
  { path: 'forloop', component: ForLoopComponent },
  { path: 'basicform', component: BasicformComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  {
    path: 'children',
    children: [
      { path: 'child', component: ChildOneComponent },
      { path: 'child2/:id', component: ChildTwoComponent },
    ],
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
