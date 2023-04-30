import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Todo } from '../todo';

@Injectable()
export class TodoService {
  private todoState: BehaviorSubject<Todo[] | null> = new BehaviorSubject<
    Todo[] | null
  >([
    {
      id: 11,
      title: 'hi',
    },
  ]);

  /**
   * To get value of state
   */
  public snapshot(): Todo[] {
    const value: Todo[] | null = this.todoState.getValue();
    if (!value) {
      throw new Error('Todo not initialized yet!');
    }
    return value;
  }

  /**
   * To get all to-do data
   */
  public getTodos(): Observable<Todo[] | null> {
    return this.todoState.asObservable();
  }

  /**
   * To add to-do
   * @param todo
   */
  public addTodo(todo: Todo): Observable<boolean> {
    const state: Todo[] = this.snapshot();
    state.push(todo);
    this.todoState.next(state);
    return of(true);
  }

  /**
   * To get to-do by id
   * @param id
   */
  public getTodoById(id: number): Observable<Todo | undefined> {
    const state: Todo[] = this.snapshot();
    const todo: Todo | undefined = state.find(
      (todo: Todo): boolean => todo.id === id,
    );
    return of(todo);
  }

  /**
   * To get to-do by id
   * @param id
   * @param todo
   */
  public updateTodo(todo: Todo): Observable<boolean> {
    const state: Todo[] = this.snapshot();
    const todoIndex: number = state.findIndex(
      (existTodo: Todo): boolean => existTodo.id === todo.id,
    );
    state[todoIndex] = todo;
    this.todoState.next(state);
    return of(true);
  }

  /**
   * To remove to-do from state
   * @param id
   */
  public removeTodo(id: number): void {
    const state: Todo[] = this.snapshot();
    const deletedTodo: Todo[] = state.filter(
      (todo: Todo): boolean => todo.id !== id,
    );
    this.todoState.next(deletedTodo);
  }
}
