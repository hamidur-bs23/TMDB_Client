import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { AppStoreApiGroupActions } from './app.store.actions';

@Injectable({
  providedIn: 'root',
})
export class AppStoreService {
  public handleError(error: any): Action {
    console.log(error);
    return AppStoreApiGroupActions.testerror({ payloads: error });
  }
}
