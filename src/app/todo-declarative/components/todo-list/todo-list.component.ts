import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { map, Observable } from 'rxjs';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  displayedColumns: string[] = ['title', 'action'];

  private todoService: TodoService = inject(TodoService);

  public todo$: Observable<Todo[]> = this.todoService.getTodos().pipe(
    map((todo: Todo[] | null) => {
      if (!todo) return [];
      return todo;
    }),
  );

  /**
   * To delete to-do
   * @param id
   */
  public deleteTodo(id: number): void {
    this.todoService.removeTodo(id);
  }
}
