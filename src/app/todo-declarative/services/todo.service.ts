import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ITodo } from '../todo';

@Injectable()
export class TodoService {
  private todoState: BehaviorSubject<ITodo[] | null> = new BehaviorSubject<
    ITodo[] | null
  >([
    {
      id: 11,
      title: 'hi',
    },
  ]);

  /**
   * To get value of state
   */
  public snapshot(): ITodo[] {
    const value: ITodo[] | null = this.todoState.getValue();
    if (!value) {
      throw new Error('Todo not initialized yet!');
    }
    return value;
  }

  /**
   * To get all to-do data
   */
  public getTodos(): Observable<ITodo[] | null> {
    return this.todoState.asObservable();
  }

  /**
   * To add to-do
   * @param todo
   */
  public addTodo(todo: ITodo): Observable<boolean> {
    const state: ITodo[] = this.snapshot();
    state.push(todo);
    this.todoState.next(state);
    return of(true);
  }

  /**
   * To get to-do by id
   * @param id
   */
  public getTodoById(id: number): Observable<ITodo | undefined> {
    const state: ITodo[] = this.snapshot();
    const todo: ITodo | undefined = state.find(
      (todo: ITodo): boolean => todo.id === id,
    );
    return of(todo);
  }

  /**
   * To get to-do by id
   * @param id
   * @param todo
   */
  public updateTodo(todo: ITodo): Observable<boolean> {
    const state: ITodo[] = this.snapshot();
    const todoIndex: number = state.findIndex(
      (existTodo: ITodo): boolean => existTodo.id === todo.id,
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
    const state: ITodo[] = this.snapshot();
    const deletedTodo: ITodo[] = state.filter(
      (todo: ITodo): boolean => todo.id !== id,
    );
    this.todoState.next(deletedTodo);
  }
}
