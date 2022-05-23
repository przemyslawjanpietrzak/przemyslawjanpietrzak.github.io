import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-component',
    stylesUrl: `./app-component.scss`,
    template: `<div>42</div>`,
    encapsulation: ViewEncapsulation.None | ViewEncapsulation.Emulated | ViewEncapsulation.ShadowDom,
})
export class AppComponent {}