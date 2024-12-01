import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';

// Redireciona usuários não autenticados para a rota de login
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
// Redireciona usuários autenticados para a rota principal
const redirectLoggedInToMain = () => redirectLoggedInTo(['main']);

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent, 
    ...canActivate(redirectLoggedInToMain) 
  },
  { 
    path: 'register', 
    component: RegisterComponent, 
    ...canActivate(redirectLoggedInToMain) 
  },
  { 
    path: 'main', 
    component: MainPageComponent, 
    ...canActivate(redirectUnauthorizedToLogin) 
  },
  { 
    path: '', 
    redirectTo: 'main', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: 'main' // Rota curinga para redirecionar rotas inválidas para a home
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
