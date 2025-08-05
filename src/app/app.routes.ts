import { Routes } from '@angular/router';
import { NameGuard } from './guards/name-guard';
import { Login } from './pages/login/login';
import { About } from './components/about/about';
import { Education } from './components/education/education';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    canActivate: [NameGuard]
  },
  {path:'education', component:Education},
  {path:'about',component:About},
  {path:'skills', component:Skills},
  {path:'projects', component:Projects},
  { path: '**', redirectTo: 'login' }
];

