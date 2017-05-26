import { SpotifyService } from './shared/spotify.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { SearchComponent } from './search/search.component';
import { ArtistPreviewComponent } from './artist-preview/artist-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    SearchComponent,
    ArtistPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
