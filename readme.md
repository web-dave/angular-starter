# Create a Service

* Generate a `spotify` service in a shared folder with angular-cli

#### hints

`https://api.spotify.com/v1/`

`search?offset=0&limit=20&type=artist&market=US&query=:str`

`artists/:id`

`artists/:id/albums`

`albums/:id`

`ng g service shared/spotify`

<pre>
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';


searchArtists(str: string) {
    let url = `${this.restRoot}search?offset=0&limit=20&type=artist&market=US&query=${str}`;
    return this._http.get(url)
      .map(res => res.json());
}
</pre>