import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmailPopupComponent } from '../register-user/email-popup/email-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AuthService } from '../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgSelectModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    EmailPopupComponent,
    NgIf,
    MatDialogModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    MatProgressBarModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private http = inject(HttpClient); // Uso do HttpClient via inject
  loading: boolean = false;  
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login bem-sucedido:', response);
        this.router.navigate(['/mainpage']);
      },
      (error) => {
        console.error('Erro no login:', error);
      }
    );
  }

  // Método para redirecionar para a tela de cadastro
  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
  
}
