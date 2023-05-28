import {
  AdminSidebarPermission,
  AdminTodoPermissions,
} from './admin-permissions';
import {
  StaffSidebarPermission,
  StaffTodoPermissions,
} from './staff-permissions';

export enum Roles {
  ADMIN = 'admin',
  STAFF = 'staff',
}

export interface Permissions {
  user: Roles;
  view: View;
  permissions: string[];
}

export enum View {
  SIDEBAR = 'sidebar',
  TODO = 'todo',
}

export const Permissions: Permissions[] = [
  {
    user: Roles.ADMIN,
    view: View.SIDEBAR,
    permissions: AdminSidebarPermission,
  },
  {
    user: Roles.ADMIN,
    view: View.TODO,
    permissions: AdminTodoPermissions,
  },
  {
    user: Roles.STAFF,
    view: View.SIDEBAR,
    permissions: StaffSidebarPermission,
  },
  {
    user: Roles.STAFF,
    view: View.TODO,
    permissions: StaffTodoPermissions,
  },
];
