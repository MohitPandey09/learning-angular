import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Roles } from '../permission';

@Injectable({
  providedIn: 'root',
})
export class ScopeService {
  protected scope: BehaviorSubject<Roles> = new BehaviorSubject<Roles>(
    Roles.ADMIN,
  );
  scope$: Observable<Roles> = this.scope.asObservable();

  /**
   * to get snapshot of scope state
   */
  snapshot(): Roles {
    const value: Roles = this.scope.getValue();
    if (!value) {
      throw new Error('Value not yet initialized');
    }
    return value;
  }

  /**
   * to set scope state
   * @param scope
   */
  setScope(scope: Roles): void {
    this.scope.next(scope);
  }
}
