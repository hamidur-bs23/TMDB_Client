import {Component, OnInit} from '@angular/core';
import {SampleService} from "./sample.service";
import {map, tap} from "rxjs";
import {AuthService} from "./core/auth/services/auth.service";
import {ICreateSessionResponse} from "./core/auth/models/models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TMDB_Client';

  sampleData: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }
}
