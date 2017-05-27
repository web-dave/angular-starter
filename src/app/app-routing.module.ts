import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
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
       path: 'album/:id', 
       component: AlbumComponent,
       pathMatch: 'full'
  },
  { 
       path: '', 
       redirectTo: '/search',
       pathMatch: 'full'
  },
  { 
       path: '**', 
       redirectTo: '/about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
