import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class HttpService {

  constructor(private _http:Http) {}
    retrieveScore(name: string) {
      return this._http.get(`https://api.github.com/users/${name}`).map(data=>data.json()).toPromise();
    
  }

}
