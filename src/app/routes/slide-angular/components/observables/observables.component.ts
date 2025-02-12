import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';

import {
  Subject,
  BehaviorSubject,
  filter,
  forkJoin,
  fromEvent,
  map,
  Observable,
  of,
} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit {
  constructor(private http: HttpClient, private el: ElementRef) {}

  ngOnInit(): void {
    this.subscribeObservers();
  }

  // - "Understending Observable"
  subscribeObservers() {
    // - operator RxJs:
    // - pipe: utilizzato per concatenare serire di operatori in sequenza
    // - of: operatore creazionale RxJs che permette di creare Observable
    // - tap: utilizzato per eseguire azione laterale
    // - map: utilizzato per trasformare flusso di dati
    // - filter: utilizzato per filtrare e manipolare i dati
    // - forkJoin: combina output di più observer.
    // - fromEvent: crea Observabe che rappresenta eventi primitivi
    // - Subject: fa da ponte tra gli observable e i subscribers
    // - BehaviorSubject : rappresenta un observable che mantiene uno stato interno
    // - catchError: gestire errori

    this.observableFromEvent();
    this.observableGenNumber();
    this.observableOf();
    this.observableForkJson();
    this.observableObserver();
    this.observableSubject();
    this.observableBehaviorSubject();
  }

  // - "Multipart"
  sendMultipart(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('text', 'Hello, world!');

    this.http.post('/api/update', formData).subscribe((resp) => {
      console.log('Risposta dal server', resp);
    });
  }

  //\\\\\ Osservable 1 /////\\
  //\\\\\ fromEvent /////\\
  observableFromEvent() {
    const btn = this.el.nativeElement.querySelector('button');
    const clicks = fromEvent(btn, 'click');

    clicks.subscribe(() => {
      console.log('Clicked!!!');
      btn.innerText = 'Clicked!!!';
    });
  }

  //\\\\\ Osservable 2 /////\\
  observableGenNumber() {
    const number = new Observable<number>((subscribe) => {
      setInterval(() => {
        const random = Math.floor(Math.random() * 10);
        subscribe.next(random);
      }, 1000);
    });

    number.subscribe((value) => console.log(value));
    // - Output: "random number each second"
  }

  //\\\\\ Osservable 3 /////\\
  //\\\\\ operator: pipe, of, filter, map /////\\
  observableOf() {
    console.log('Osservable:: ofNumber start');
    const ofNumber = of(1, 2, 3, 4, 5);
    ofNumber.subscribe(
      (value) => console.log(value),
      (error) => console.error(error),
      () => console.log('Observable:: ofNumber complete')
    );
    // - Output: 'Osservable:: ofNumber start'
    // - Output: 1 2 3 4 5
    // - Output: 'Observable:: ofNumber complete'

    const result = ofNumber.pipe(
      filter((x) => x % 2 === 0),
      map((x) => x * 2)
    );

    result.subscribe(console.log);
    // - Output: 4, 8
  }

  //\\\\\ Osservable 4 /////\\
  //\\\\\ operator: forkJoin /////\\
  //\\\\\\ Note: emetterà solo dopo che tutti gli observable di input hanno emesso almeno un valore
  observableForkJson() {
    const surce1 = of('foo-value');
    const surce2 = of('bar-value');
    const fork = forkJoin({
      foo: surce1,
      bar: surce2,
    });
    fork.subscribe(console.log);
    // - Output: { foo: 'foo-value', bar: 'bar-value'}
  }

  //\\\\\ Osservable 5 /////\\
  observableObserver() {
    // - dichiarazione metodi observer
    type observerType<T extends string | number> = {
      next: (value: T) => void;
      error: (value: T) => void;
      complete: VoidFunction;
    };
    const observer: observerType<number> = {
      next: (value) => console.log(`Valore ricevuto ${value}`),
      error: (error) => console.log(`Errore: ${error}`),
      complete: () => console.log('Stream Complete'),
    };
    const observable = new Observable<number>((subscribe) => {
      subscribe.next(1);
      subscribe.complete();
    });

    observable.subscribe(observer);
  }

  //\\\\\ Osservable 6 /////\\
  //\\\\\ Subject /////\\
  observableSubject() {
    // - Note:
    // Tipo speciale di observable che permette sia di emettere valori che di osservare quei valori.
    // È una componente fondamentale per gestire flussi di dati asynchroni in RxJS.
    // Un Subject è multicasting per natura, il che significa che
    // tutti i subscribers ascoltano lo stesso flusso di dati emessi dal Subject.
    // In altre parole, ogni volta che si emette un valore tramite un Subject,
    // tutti i subscribers ricevono quel valore.
    const subject = new Subject();

    // - Primo subscriber
    subject.subscribe((value) => console.log(`Subscriber 1: ${value}`));

    // - Emettiamo un valore
    subject.next(1);

    // - Secondo subscriber
    subject.subscribe((value) => console.log(`Subscriber 2: ${value}`));

    // - Emettiamo un valore
    subject.next(2);

    // - Output:
    // - Subcriber 1: 1
    // - Subcriber 1: 2
    // - Subcriber 2: 2
  }

  //\\\\\ Osservable 7 /////\\
  //\\\\\ BehaviorSubject /////\\
  observableBehaviorSubject() {
    const behaviorSubject = new BehaviorSubject('Initial Value');

    behaviorSubject.subscribe(console.log);

    behaviorSubject.next('Next value');
  }
}
