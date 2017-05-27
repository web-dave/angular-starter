import { IArtist } from './../shared/iartist';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'artist-preview',
  templateUrl: './artist-preview.component.html',
  styleUrls: ['./artist-preview.component.scss']
})
export class ArtistPreviewComponent implements OnInit {
  @Input() artist: IArtist;
  @Output() onselect = new EventEmitter<IArtist>();

  oState: boolean = true;
  
  constructor() { }

  selectThisArtist() {
    this.onselect.emit(this.artist);
  }

  ngOnInit() {
  }

}
