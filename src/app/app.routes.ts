import { Routes } from '@angular/router';
import { ViewTasksComponent } from './navigation/view-tasks/view-tasks.component';
import { SetTaskComponent } from './navigation/set-task/set-task.component';

export const routes: Routes = [
    { path: 'tasks', component: ViewTasksComponent },
    { path: 'tasks/pending', component: ViewTasksComponent },
    { path: 'tasks/create', component: SetTaskComponent },
    { path: 'tasks/edit/:id', component: SetTaskComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }
  ];
