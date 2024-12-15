import { ResolveFn } from '@angular/router';

export const detailResolver: ResolveFn<boolean> = (route, state) => {
  console.log(state);

  return true;
};
