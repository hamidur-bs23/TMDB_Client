import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthenticatedUserComponent} from "./shared/components/authenticated-user/authenticated-user.component";
import {HomeComponent} from "./shared/components/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'test',
        loadChildren: () =>
          import('./modules/test/test.module').then((m) => m.TestModule),
      },

    ]
  },
  {
    path: 'authenticated-user',
    component: AuthenticatedUserComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
