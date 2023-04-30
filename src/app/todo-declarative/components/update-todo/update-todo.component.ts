import { Component, OnInit } from '@angular/core';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { Todo } from '../../todo';
import { fetchTodoByIdFn } from '../../todoFn';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-todo',
  templateUrl: '../add-todo/add-todo.component.html',
  styleUrls: ['../add-todo/add-todo.component.scss'],
})
export class UpdateTodoComponent extends AddTodoComponent implements OnInit {
  protected todoToUpdate$: Observable<Todo | undefined> = fetchTodoByIdFn();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.fetchTodoById();
  }

  /**
   * To patch data in to-do form
   */
  public fetchTodoById(): void {
    this.todoToUpdate$.subscribe((todo: Todo | undefined) =>
      !todo ? null : this.todoForm.patchValue(todo),
    );
  }

  /**
   * To update to-do
   */
  public override addTodo(): void {
    this.todoService
      .updateTodo(this.todoForm.getRawValue())
      .subscribe(() => this.router.navigateByUrl('/'));
  }
}
