import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { AuthGuard } from './core/guards';
import {EnvironmentSpecificResolver} from './core/services/environment.specific.resolver';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard],
        resolve: { envSpecific: EnvironmentSpecificResolver } },
    //FIXME:
    { path: 'login', component: HomeComponent,
        resolve: { envSpecific: EnvironmentSpecificResolver }
        },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);