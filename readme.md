# Create a album-preview Component

* Generate a `artist-preview` component with angular-cli
* show Artists in a list
* click on this `artist-preview` fire a select event
* create a `IArtist` type (interface) to improve coding.

`ng g interface shared/IArtist`

#### hints
<pre>

import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({...})

export class InOutComp implements OnInit, OnChanges {

  @Input() artist: IArtist;
  
  @Output() onselect = new EventEmitter<IArtist>();

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

