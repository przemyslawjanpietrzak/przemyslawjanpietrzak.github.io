import { TestBed, async } from '@angular/core/testing'; // 1
import { AppComponent } from './app.component';
 
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));
 
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.label').textContent).toContain('label');
  });
});