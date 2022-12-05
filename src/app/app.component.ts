import { Component } from '@angular/core';
import {SampleService} from "./sample.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TMDB_Client';

  sampleData: any;

  constructor(private sampleService: SampleService) {
  }

  onLoadData() {
    let url = 'list/1'; //'https://api.themoviedb.org/4/list/1';
    this.sampleService.loadData(url)
      .pipe(
        tap(data => {
          debugger;
        })
      )
      .subscribe(response => {
        debugger;
        this.sampleData = response;
      })
  }
}
