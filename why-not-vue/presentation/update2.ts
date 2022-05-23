import {Component, Input} from '@angular/core';
 
@Component({
  selector: 'app-component',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private _attr: string;

  get attr() {
    return this._attr;
  }
  @Input('attr') set attr(value: string) {
    this._attr = value;
    // HERE
  }
} 