export const DIRECTIVES = [
  [
    'structural',
    [
      {
        name: 'ngIf',
        description:
          'permette di aggiungere o rimuovere elementi dalla vista in base a una condizione.',
      },
      {
        name: 'ngFor',
        description:
          'permette di creare un ciclo su un array o una collezione di oggetti e generare elementi HTML per ogni elemento.',
      },
      {
        name: 'ngSwitch',
        description:
          'permette di creare una selezione multipla e visualizzare un diverso contenuto HTML in base alla selezione. ',
      },
      {
        name: 'ngContent',
        description:
          "permette di inserire contenuto HTML dinamicamente all'interno di un componente.",
      },
      {
        name: 'ngContainer',
        description:
          "permette di raggruppare più direttive ngContent all'interno di un componente.",
      },
      {
        name: 'ngTemplate',
        description:
          'permette di creare un template HTML riutilizzabile che può essere utilizzato in più punti della vista.',
      },
      {
        name: 'ngSubmit',
        description: "permette di gestire l'evento di submit di un form.",
      },
    ],
  ],
  [
    'attribute',
    [
      {
        name: 'ngStyle',
        description: '',
      },
      {
        name: 'ngClass',
        description: '',
      },
      {
        name: 'ngModel',
        description: '',
      },
    ],
  ],
  [
    'transformPipes',
    [
      {
        name: 'DatePipe',
        description: 'per formattare le date',
      },
      {
        name: 'UpperCasePipe & LowerCasePipe',
        description: 'per convertire i caratteri in maiuscolo o minuscolo',
      },
      {
        name: 'DecimalPipe & CurrencyPipe',
        description: 'per formattare i numeri in un formato specifico',
      },
      {
        name: 'JsonPipe',
        description: 'per visualizzare oggetti JSON',
      },
      {
        name: 'CustomPipe',
        description:
          "è possibile creare pipe di trasformazione personalizzate per adattare alle specifiche esigenze dell'applicazione.",
      },
    ],
  ],
];
