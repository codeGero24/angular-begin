import { Component, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
})
export class AddressBookComponent {
  phoneNumber: string = '+ 39 351898794';
  userName: string = 'calogero';
}
