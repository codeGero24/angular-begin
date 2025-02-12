import { Component, ElementRef, OnInit } from '@angular/core';
import { MyService } from '@routes/slide-angular/services/my.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  respUsers: any;

  constructor(private service: MyService, private el: ElementRef) {}

  ngOnInit(): void {
    this.getUsers();
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
}
