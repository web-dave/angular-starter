import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { SpotifyService } from './shared/spotify.service';
import { SearchComponent } from './search/search.component';
import { ArtistPreviewComponent } from './artist-preview/artist-preview.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { MusicComponent } from './music/music.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MusicRoutingModule
  ],
  declarations: [
    SearchComponent,
    ArtistPreviewComponent,
    ArtistComponent,
    AlbumComponent,
    MusicComponent
  ],
  providers: [SpotifyService]
})
export class MusicModule { }
