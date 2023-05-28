import { Injectable } from '@angular/core';
import { Permissions, Roles, View } from '../../permission';
import { defaultIfEmpty, find, from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  /**
   * to get if user has permission from array
   * @param scope
   * @param view
   * @param field
   */
  getPermission(scope: Roles, view: View, field: string): Observable<boolean> {
    return from(Permissions).pipe(
      find(
        (permission: Permissions) =>
          permission.user === scope && permission.view === view,
      ),
      map(
        (user: Permissions | undefined) =>
          !!user && user.permissions.includes(field),
      ),
      defaultIfEmpty(false),
    );
  }
}
