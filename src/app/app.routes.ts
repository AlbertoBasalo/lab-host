import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.page'),
  },
  {
    path: 'remote1',
    // loadComponent: () =>
    //loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
    loadChildren: () =>
      loadRemoteModule('mfe1', './routes').then((m) => m.routes),
  },
];
