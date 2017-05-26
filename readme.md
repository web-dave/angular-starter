# Create a album-preview Component

* Generate a `artist-preview` component with angular-cli
* show Artists in a list
* click on this `artist-preview` fire a select event

#### hints
<pre>

import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({...})

export class ArtistPreviwComponent implements OnInit, OnChanges {

  @Input() artist: any;
  
  @Output() onselect = new EventEmitter();

  oState: boolean = true;
  
  constructor() { }

  toggleOutput() {
    this.oState = !this.oState;
    this.myOutput.emit(this.oState);
  }

  ngOnInit() {
    this.myOutput.emit(this.oState);
  }

  ngOnChanges(changes) {
    if (changes.myInput) {
      console.log('myInput has Changed:', this.myInput);
    }
  }
}
 
</pre>

    `<album-preview *ngFor="let album of albums.items" [album]="album" (onselect)="selectAlbum(album.id)"> </album-preview>`

