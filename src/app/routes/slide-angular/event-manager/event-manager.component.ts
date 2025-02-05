import { EventManager } from '@angular/platform-browser';
import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.scss'],
})
export class EventManagerComponent implements OnInit, OnDestroy {
  selector: 'app-event-manager' = 'app-event-manager';
  count: number = 0;

  // - ⚠️ Note: Angular v15 EventManager Non espose removeEventListener ma contiene addEventListener
  // - Da capire meglio se versione successive espongono removeEventListener nell'EventManager, per quello che ho visto NO

  constructor(private eventManager: EventManager, private el: ElementRef) {}

  private removeClickListenerFn: Function | null = null;

  handleClick() {
    console.log('pulsante cliccato');
    const btn = this.el.nativeElement.querySelector('button');
    btn.innerText = `Click: ${++this.count}`;
  }

  ngOnInit(): void {
    this.removeClickListenerFn = this.eventManager.addEventListener(
      this.el.nativeElement.querySelector('button'),
      'click',
      this.handleClick.bind(this)
    );
  }

  ngOnDestroy(): void {
    if (this.removeClickListenerFn) {
      this.removeClickListenerFn(); // Rimuove il listener quando il componente viene distrutto
      this.removeClickListenerFn = null;
    }
  }
}
