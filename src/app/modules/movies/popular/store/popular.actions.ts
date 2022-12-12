import {
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';

export const PopularMovieActions = createActionGroup({
  source: 'Popular Movie Page',
  events: {
    test: emptyProps(),
    testWithProps: props<{ payload: string }>(),
    testWithPropsFactory: (queryString: string) => {
      return {
        queryString
      };
    },
  },
});
