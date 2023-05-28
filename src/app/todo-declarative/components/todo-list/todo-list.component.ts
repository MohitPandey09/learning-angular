import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { map, Observable } from 'rxjs';
import { ITodo } from '../../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  displayedColumns: string[] = ['title', 'action'];

  private todoService: TodoService = inject(TodoService);

  public todo$: Observable<ITodo[]> = this.todoService.getTodos().pipe(
    map((todo: ITodo[] | null) => {
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
