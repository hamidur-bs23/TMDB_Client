import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthenticatedUserComponent } from './shared/components/authenticated-user/authenticated-user.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import {DefaultLayoutComponent} from "./layout/default/default.layout.component";
import {EmptyLayoutComponent} from "./layout/empty/empty.layout.component";

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
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
      {
        path: 'movie',
        children: [
          {
            path: 'popular',
            loadChildren: () =>
              import('./modules/movies/popular/popular.module').then((m) => m.PopularModule),
          }
        ]
      }
    ]
  },
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: 'authenticated-user',
        component: AuthenticatedUserComponent,
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
