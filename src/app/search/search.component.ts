import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../shared/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchResult: any;

  constructor(private _spotify: SpotifyService) { }

  ngOnInit() {
  }
  searchMusic(str: string) {
    if (str.length !== 0) {
      this._spotify.searchArtists(this.searchStr)
        .subscribe(res => {
          console.log(res);
          this.searchResult = res.artists;
        });
    }
  }

}
