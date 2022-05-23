@Injectable()
export class AppEffects {

  constructor(
      private actions$: Actions<AppActions>,
      private apiService: ApiService,
      private store$: Store<RootStore>,
  ) {}

  @Effect()
  data$ = this.actions$.pipe(
    ofType<Action>(AppAcions.Action),
    withLatestFrom(this.store$.select(selector)),
    switchMap(([payload, dataFromSelector]) => {
      return this.apiService
        .fetch()
        .pipe(
          concatMap(() => EMPTY),
        );
    }),
  );
}