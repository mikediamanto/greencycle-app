import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GuidesComponent } from './guides/guides.component';
import { RecycleWidgetComponent } from './recycle-widget/recycle-widget.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: DashboardComponent,
        title: 'Home'
    },
    {
        path: 'rewards',
        component: RewardsComponent,
        title: 'Home'
    },
    {
        path: 'guides',
        component: GuidesComponent,
        title: 'Home'
    },
    {
        path: 'recycle',
        component: RecycleWidgetComponent,
        title: 'Home'
    },
    {
        path: 'profile',
        component: ProfileComponent,
        title: 'Home'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Home'
    }, {
        path: 'register',
        component: RegisterComponent,
        title: 'Home'
    }
];
