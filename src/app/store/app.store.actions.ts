import { createActionGroup } from '@ngrx/store';

export const AppStoreApiGroupActions = createActionGroup({
  source: '[App Api]',
  events: {
    // testError: props<{ payloads?: any }>(),
    testError: (query: any) => query,
  },
});
