import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import {SignupComponent} from "./signup/signup.component";


const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'sign-up',
        loadChildren: ()=>import('./signup/signup.module').then(m=>m.SignupModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
