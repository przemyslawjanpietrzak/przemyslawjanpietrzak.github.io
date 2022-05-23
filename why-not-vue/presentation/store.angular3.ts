@Component({
  selector: 'app-component',
  template: `
    <div *ngIf="isLoading$ | async">loading<div>
    <div *ngElse>{{ data$ | async }}<div>
  `
})
export class AppComponent implements OnInit {

  public isLoading$: Observable<boolean>;
  public data$: Observable<Date>;

  constructor(private store$: Store<RootStore>) {}

  ngOnInit() {
    this.isLoading$ = this.store$.pipe(select(selectIsLoading));
    this.data$ = this.store$.pipe(select((store) => store.data));

   this.store$.dispatch(new Action());
  }

}