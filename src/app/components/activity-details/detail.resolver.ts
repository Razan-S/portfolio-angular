import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';

export const detailResolver: ResolveFn<any> = () => {
  const router = inject(Router);

  let activityId = null;;

  if (router.getCurrentNavigation()?.extras.state) {
    const state = router.getCurrentNavigation()?.extras.state;
  }

  if (activityId) {
    console.log(activityId);
  }

  return { id: activityId };
};
