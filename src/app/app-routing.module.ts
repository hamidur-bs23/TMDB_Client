import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedUserComponent } from './shared/components/authenticated-user/authenticated-user.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { DefaultLayoutComponent } from './layout/default/default.layout.component';
import { FullwidthLayoutComponent } from './layout/fullwidth/fullwidth.layout.component';

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
              import('./modules/movies/popular/popular-movie.module').then(
                (m) => m.PopularMovieModule
              ),
          },
        ],
      },
      {
        path: 'auth',
        children: [
          {
            path: '',
            loadChildren: ()=>import('./modules/auth/auth.module').then(m=>m.AuthModule),
          }
        ]
      }
    ],
  },
  {
    path: '',
    component: FullwidthLayoutComponent,
    children: [
      {
        path: 'authenticated-user',
        component: AuthenticatedUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
