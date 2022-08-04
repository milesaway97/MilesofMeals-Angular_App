import { Component } from '@angular/core';
import {DataService} from "./core/services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cooking-app';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //Fetches all meals from themealdb.com a single time when the app is loaded
    this.dataService.fetchData();
  }
}
