import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';
import { uid } from '../../todoFn';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  todoForm: FormGroup;

  public todoService: TodoService = inject(TodoService);
  public router: Router = inject(Router);

  constructor() {
    this.todoForm = new FormGroup({
      id: new FormControl(uid()),
      title: new FormControl(),
    });
  }

  /**
   * To add to-do
   */
  addTodo(): void {
    this.todoService
      .addTodo(this.todoForm.getRawValue())
      .subscribe(() => this.router.navigate(['../']));
  }
}
