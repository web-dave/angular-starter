import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  restRoot: string = `https://api.spotify.com/v1/`;

  constructor(private http: Http) { }
  searchArtists(str: string) {
    let url = `${this.restRoot}search?offset=0&limit=20&type=artist&market=US&query=${str}`;
    return this.http.get(url)
      .map(res => res.json());
  }

  getArtist(id: string) {
    let url = `${this.restRoot}artists/${id}`;
    return this.http.get(url)
      .map(res => res.json());
  }

  getAlbums(id: string) {
    let url = `${this.restRoot}artists/${id}/albums`;
    return this.http.get(url)
      .map(res => res.json());
  }


}
