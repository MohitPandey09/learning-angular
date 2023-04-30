import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
  {
    path: 'add',
    component: AddTodoComponent,
  },
  {
    path: 'edit/:id',
    component: UpdateTodoComponent,
  },
];

@NgModule({
  declarations: [TodoListComponent, AddTodoComponent, UpdateTodoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [TodoService],
})
export class TodoDeclarativeModule {}
