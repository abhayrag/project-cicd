import { Routes } from '@angular/router';

export const routes: Routes = [
  { loadComponent: () => import('./feature/home/home').then(m => m.Home), path: '' },
  { loadComponent: () => import('./feature/users/users').then(m => m.Users), path: 'users' },
  { loadComponent: () => import('./feature/dashboard/dashboard').then(m => m.Dashboard), path: 'dashboard' },
  { path: '**', redirectTo: '' },
];
