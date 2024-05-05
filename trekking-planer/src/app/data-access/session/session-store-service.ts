import {Injectable} from "@angular/core";
import {Subject} from "rxjs";


@Injectable({providedIn: "root"})
export class SessionStoreService {
  private subject$: Subject<{ key: string, value: string }> = new Subject();

  set(key: string, value: string): void {
    this.subject$.next({key: key, value: value})
    sessionStorage.setItem(key, value)
  }

  subscribe(fun: (x: { key: string, value: string }) => void) {
    return this.subject$.subscribe(fun)
  }
}
