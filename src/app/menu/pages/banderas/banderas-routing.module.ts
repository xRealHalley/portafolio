import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'banderas',
     loadChildren: () => import('./banderas/countries.module').then( m => m.CountriesModule ),
  },
  {
    path: '**',
    redirectTo: 'banderas'
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

export class BanderasRoutingModule { }
