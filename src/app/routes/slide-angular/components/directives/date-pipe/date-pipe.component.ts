import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

type formatDate = {
  short: string; //      - 'M/d/yy, h:mm a'                  - 6/15/15, 9:03 AM
  medium: string; //     - 'MMM d, y, h:mm:ss a'             - Jun 15, 2015, 9:03:01 AM
  long: string; //       - 'MMMM d, y, h:mm:ss a z'          - June 15, 2015 at 9:03:01 AM GMT+1
  full: string; //       - 'EEEE, MMMM d, y, h:mm:ss a zzzz' - Monday, June 15, 2015 at 9:03:01 AM GMT+01:00
  shortDate: string; //  - 'M/d/yy'                          - 6/15/15
  mediumDate: string; // - 'MMM d, y'                        - Jun 15, 2015
  longDate: string; //   -  'MMMM d, y'                      - June 15, 2015
  fullDate: string; //   - 'EEEE, MMMM d, y'                 - Monday, June 15, 2015
  shortTime: string; //  - 'h:mm a'                          - 9:03 AM
  mediumTime: string; // - 'h:mm:ss a'                       - 9:03:01 AM
  longTime: string; //   - 'h:mm:ss a z'                     - 9:03:01 AM GMT+1
  fullTime: string; //   - 'h:mm:ss a zzzz'                  - 9:03:01 AM GMT+01:00
};

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.scss'],
})
export class DatePipeComponent implements OnInit {
  currentDate = new Date();
  textDate: string | null = null;

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.textDate = this.datePipe.transform(this.currentDate, 'longDate', 'it');
  }
}
