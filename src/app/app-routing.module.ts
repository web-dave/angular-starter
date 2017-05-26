import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   children: []
  // }
  { 
       path: 'search', 
       component: SearchComponent,
       pathMatch: 'full'
  },
  { 
       path: 'artist/:id', 
       component: ArtistComponent,
       pathMatch: 'full'
  },
  { 
       path: '', 
       redirectTo: '/search',
       pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
