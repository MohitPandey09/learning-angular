import { TodoService } from './services/todo.service';
import { inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, mergeMap, Observable } from 'rxjs';
import { Todo } from './todo';

/**
 * To fetch to-do by id
 */
export const fetchTodoByIdFn = function (): Observable<Todo | undefined> {
  const todoService: TodoService = inject(TodoService);

  return inject(ActivatedRoute).params.pipe(
    map((params: Params) => +params['id']),
    mergeMap((id: number) => todoService.getTodoById(id)),
  );
};

/**
 * To generate id
 */
export const uid = (): number => {
  return Math.floor(Math.random() * 100 + 1);
};
