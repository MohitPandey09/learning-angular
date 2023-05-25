export enum Roles {
  ADMIN = 'admin',
  MANAGER = 'manager',
  STAFF = 'staff',
}

export const AdminPermission: string[] = [
  'sidebar_home',
  'sidebar_dashboard',
  'sidebar_orders',
  'sidebar_products',
  'sidebar_customers',
];

export const ManagerPermission: string[] = [
  'sidebar_home',
  'sidebar_dashboard',
  'sidebar_orders',
  'sidebar_products',
  'sidebar_customers',
];

export const StaffPermission: string[] = [
  'sidebar_home',
  'sidebar_dashboard',
  'sidebar_customers',
];
