import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-todo-item',
    template: `<child (click)="onClick.emit('42')">{{ name }} {{ lastName$ | async }}</child>`,
})
export class ItemDetailComponent {
  @Input() name: string;
  @Input() lastName$: Observable<string>;
  @Output() onClick = new EventEmitter<string>();
}