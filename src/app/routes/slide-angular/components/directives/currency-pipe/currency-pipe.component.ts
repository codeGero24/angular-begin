import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  templateUrl: './currency-pipe.component.html',
  styleUrls: ['./currency-pipe.component.scss'],
})
export class CurrencyPipeComponent {
  prince: string | number = 30000;
}
