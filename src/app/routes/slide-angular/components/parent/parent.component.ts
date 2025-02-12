import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  selector: 'app-parent' = 'app-parent';
  message: string = 'Hello from Parent';

  receiveMessage($event: string) {
    this.message = $event;
  }
}

/* > Lifecycle <

  - OnInit: permette di eseguire del codice all'inizializzazione del componente.
  - OnChanges: permette di eseguire del codice quando una proprietà di input del componente cambia valore.
  - AfterViewInit: permette di eseguire del codice dopo la creazione della vista del componente.
  - AfterViewChecked: permette di eseguire del codice dopo che la vista del componente è stata verificata per eventuali cambiamenti.
  - OnDestroy: permette di eseguire del codice alla distruzione del componente.

  Used:: una volta che si decide di implementare una di queste interfacce il componente,
  sarà obbligato implementare i rispettivi metodi ngOnInit, ngOnChange...

*/

/* > Comunication Parent to/from Children <

  - @Input e @Output: 
  Children receve data by Parent used @Input
  Children send data to Parent used @Output
  - Used Service
  - BehaviorSubject di RxJS: Observable di RxJS Observable di RxJS 
  - By Events:  (Es. EventEmitter)
*/
