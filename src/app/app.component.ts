import { Component } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Randomuser';


  constructor(private http: HttpClient) {}
}

