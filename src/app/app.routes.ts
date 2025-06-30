import {Routes} from '@angular/router';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {authGuard} from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./page/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./page/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'noteMe',
    component: NavBarComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'acceuil',
        loadComponent: () =>
          import('./page/acceuil/acceuil.page').then((m) => m.AcceuilPage),
      },
      {
        path: 'share',
        loadComponent: () =>
          import('./page/share/share.page').then((m) => m.SharePage),
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./page/account/account.page').then((m) => m.AccountPage),
      },
      {
        path: 'ai-system',
        loadComponent: () =>
          import('./page/ai-system/ai-system.page').then((m) => m.AiSystemPage),
      },
    ],
  },
  {
    path: 'note-edit/:idParam',
    loadComponent: () => import('./page/note-edit/note-edit.page').then(m => m.NoteEditPage)
  },

];
