# User the Service

* Generate a `search` component with angular-cli
* Use this new `search` component in the `appComponnet` view
* Instantiate the service in this component
* Use the searchstring to search Spotify


#### hints

`ng generate component search`

`<input type="text" placeholder="Search Music..." (keyup)="searchMusic(searchStr)" [(ngModel)]="searchStr" >`
<pre>

import { SpotifyService } from '../../shared/spotify.service';

searchMusic(str: string) {
    if (str.length !== 0) {
         this._spotify.searchArtists(this.searchStr)
            .subscribe(res => {
              console.log(res);
              this.searchResult = res.artists;
         });
    }   
}
</pre>