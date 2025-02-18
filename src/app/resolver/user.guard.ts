import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { UserService } from '@services/user/user.service';
import { map, Observable } from 'rxjs';

export const userGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  userService: UserService = inject(UserService)
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const currentUser = userService.getUserById(1);
  return currentUser.pipe(
    map((user) => {
      console.log(user);
      if (!user) {
        return inject(Router).createUrlTree(['/', 'login']);
      }

      const userPageId = 1; // route.params['id'];
      const attemptsToAccessItsOwnPage = user.id === userPageId;
      return attemptsToAccessItsOwnPage;
    })
  );
};
