import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-authenticated-user',
  templateUrl: './authenticated-user.component.html',
  styleUrls: ['./authenticated-user.component.scss'],
})
export class AuthenticatedUserComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  _isApproved: boolean = false;
  _requestToken: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((queryParams) => {
        debugger;
        this._requestToken = queryParams['request_token'];
        this._isApproved = queryParams['approved'] ? true : false;
        console.log(queryParams);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
