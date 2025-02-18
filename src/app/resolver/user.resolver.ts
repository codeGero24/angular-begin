import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '@services/user/user.service';
import { Observable } from 'rxjs';

export const UserResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  userService: UserService = inject(UserService)
): Observable<{}> => userService.getUsers();
