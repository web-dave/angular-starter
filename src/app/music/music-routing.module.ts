import { MusicComponent } from './music/music.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: MusicComponent,
    children: [
      {
        path: '',
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
