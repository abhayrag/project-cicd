import { Routes } from '@angular/router';

export const routes: Routes = [
  { loadComponent: () => import('./feature/home/home').then(m => m.Home), path: '' },
  { loadComponent: () => import('./feature/users/users').then(m => m.Users), path: 'users' },
  { path: '**', redirectTo: '' },
];
