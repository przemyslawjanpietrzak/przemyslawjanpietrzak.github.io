import {Component, OnChanges, SimpleChanges} from '@angular/core';
 
@Component({
  selector: 'app-emp',
  templateUrl: './xapp.component.html'
})
export class AppComponent implements OnChanges {
  attr: string;
  ngOnChanges({ attr }: SimpleChanges) {
     if (attr.oldValue !== attr.newValue) {
         // HERE
     }
  }
} 