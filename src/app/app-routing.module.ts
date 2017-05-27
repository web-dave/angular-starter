import { MusicComponent } from './music/music/music.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'search',
    loadChildren: './music/music.module#MusicModule'
  },
  { 
       path: '**', 
       redirectTo: '/search'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
