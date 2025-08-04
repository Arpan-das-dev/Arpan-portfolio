import { Routes } from '@angular/router';
import { NameGuard } from './guards/name-guard';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    canActivate: [NameGuard]
  },
  { path: '**', redirectTo: 'login' }
];

