import { Todo } from '../todo-declarative/todo';
import { Sidebar } from '../dashboard/sidebar';

export const AdminSidebarPermission: string[] = [
  Sidebar.HOME,
  Sidebar.DASHBOARD,
  Sidebar.ORDERS,
  Sidebar.PRODUCTS,
  Sidebar.CUSTOMERS,
];

export const AdminTodoPermissions: string[] = [Todo.EDIT, Todo.DELETE];
