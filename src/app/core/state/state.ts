import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";

export class State<T> {
  private state$: BehaviorSubject<T>;

  constructor(initState: T) {
    this.state$ = new BehaviorSubject<T>(initState);
  }

  protected get state(): T {
    return this.state$.getValue();
  }

  protected select<K>(mappingFunction: (state: T) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map((state: T) => mappingFunction(state)),
      distinctUntilChanged()
    )
  }

  protected setState(newState: Partial<T>): void {
    this.state$.next({ ...this.state, ...newState });
  }
}
