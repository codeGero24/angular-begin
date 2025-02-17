import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarServiceService {
  showContent$: BehaviorSubject<boolean> = new BehaviorSubject(true); // - Va messo per convenzione $ alla fine
}
