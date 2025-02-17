import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  showMessage: boolean = false;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
}
