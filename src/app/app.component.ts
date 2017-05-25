import { SpotifyService } from './shared/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  constructor(private SpotifyService: SpotifyService){  }

  ngOnInit(){
    this.SpotifyService.searchArtists('ll').subscribe(m => console.log(m))
  }
}
