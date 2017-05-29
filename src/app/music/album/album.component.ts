import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
album;
  constructor() { }

  ngOnInit() {
    this.album={
    album_type : '',
    artists : '',
    available_markets : [],
    external_urls : {
      spotify : ''
    },
    href :  '',
    id :  '',
    images : [],
    name : '',
    type : '',
    uri : '',
    tracks:{
        items:[
            {track_number: 1,
            name: 'Fooooo',
            duration_ms : 123456789
            }

        ]
    }
}
  }

}
