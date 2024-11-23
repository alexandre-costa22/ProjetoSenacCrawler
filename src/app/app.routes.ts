//Arquivo de Rotas, aos vai atribuir um alias para cada componente, que podera ser chamado de qualquer outro componente

import { Routes } from '@angular/router';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './modules/login-component/login.component';
import { HttpClient } from '@angular/common/http';

export const routes: Routes = [
    { path: 'mainpage', component: MainPageComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent },
];
