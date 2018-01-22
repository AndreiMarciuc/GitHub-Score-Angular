import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = ' GitHub Score ';
  name: string;
  score: number;
  status: string[] = [];
  userexistance = null;
  promise;
  constructor(private _httpService: HttpService) { }
  calculateScore() {
    this.promise = this._httpService.retrieveScore(this.name)

    if (this.promise) {
      this.promise.then(User => {
        this.userexistance = true;
        this.score = User.public_repos + User.followers;
        if (this.score < 20) {
          this.status[0] = 'red';
          this.status[1] = 'Needs work!';
        }
        else if (this.score < 50) {
          this.status[0] = "orange";
          this.status[1] = "A Decent Start!";
        }
        else if (this.score < 100) {
          this.status[0] = "black";
          this.status[1] = "Doing Good!";
        }
        else if (this.score < 200) {
          this.status[0] = "green";
          this.status[1] = "Great Job!";
        }
        else {
          this.status[0] = "blue";
          this.status[1] = "GitHub Elite!";
        }

      })
        .catch(error => { this.userexistance = false })
    } else {
      this.userexistance = false;
    }
  }
}
