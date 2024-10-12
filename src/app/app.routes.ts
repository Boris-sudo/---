import { Routes } from '@angular/router';
import { MainPageComponent } from './comps/pages/main-page/main-page.component';
import { ProfileComponent } from './comps/pages/profile/profile.component';
import { LoginComponent } from './comps/pages/login/login.component';
import { RegisterComponent } from './comps/pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { MainPageAuthGuard } from './guards/main-page-auth.guard';
import { FridgesPageAuthGuard } from './guards/fridges-page-auth.guard';
import { FridgesComponent } from './comps/pages/fridges/fridges.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },

  { path: 'main', component: MainPageComponent, canActivate: [MainPageAuthGuard] },
  { path: 'fridges', component: FridgesComponent, canActivate: [FridgesPageAuthGuard] },
  { path: 'fridge/:id', component: FridgesComponent, canActivate: [FridgesPageAuthGuard] },

  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];
