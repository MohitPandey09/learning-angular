import { Todo } from '../todo-declarative/todo';
import { Sidebar } from '../dashboard/sidebar';

export const StaffSidebarPermission: string[] = [
  Sidebar.HOME,
  Sidebar.DASHBOARD,
  Sidebar.PRODUCTS,
  Sidebar.CUSTOMERS,
];

export const StaffTodoPermissions: string[] = [Todo.EDIT, Todo.DELETE];
