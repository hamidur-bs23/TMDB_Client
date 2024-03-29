import { Component, OnInit } from '@angular/core';
import {IAppState} from "./store/app.store.state";
import {Store} from "@ngrx/store";
import {tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TMDB_Client';

  sampleData: any;

  constructor(
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.store.pipe(
      tap(tap => console.log(tap))
    );
  }
}
