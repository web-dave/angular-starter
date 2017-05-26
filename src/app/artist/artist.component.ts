import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../shared/spotify.service';
import { IArtist, IAlbum } from './../shared/iartist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: IArtist;
  albums: IAlbum[];
  private sub: any;

  constructor(
    private _spotify: SpotifyService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.id = params['id'];
        this._spotify.getArtist(this.id)
          .subscribe(res => {
            console.log('!!',res);
            
            this.artist = res;
          });
        this._spotify.getAlbums(this.id)
          .subscribe(res => {
            console.log('??',res);

            this.albums = res.items;
          });

      });
  }

  selectAlbum(id: string) {
    this.router.navigate(['/album', id]);
  }

}
