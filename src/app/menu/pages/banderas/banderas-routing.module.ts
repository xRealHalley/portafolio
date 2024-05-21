import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'countries',
    loadChildren: () => import('./banderas/countries.module').then( m => m.BanderasModule ),
  },
  {
    path: '**',
    redirectTo: 'countries'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
