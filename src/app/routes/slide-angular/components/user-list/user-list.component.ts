import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@services/user/user.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  respUsers: any;
  firstUser: any;

  constructor(
    private service: UserService,
    private el: ElementRef,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // - Method witout routeResolver
    // - this.getUsers();
    // - Method with routeResolver
    this.getUsersByResolver();

    this.subscribeObservers();
    // - this.service.genNumber();
  }

  subscribeObservers() {
    const btn = this.el.nativeElement.querySelector('button');
    const clicks = fromEvent(btn, 'click');

    clicks.subscribe(() => {
      console.log('Clicked!!!');
      btn.innerText = 'Clicked!!!';
    });
  }

  getUsers(): void {
    this.service.getUsers().subscribe((resp) => (this.respUsers = resp));
  }

  getUsersByResolver(): void {
    this.actRoute.data.subscribe((resp) => {
      this.respUsers = resp['users-list'];
    });
  }
}
