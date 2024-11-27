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
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private http = inject(HttpClient); // Uso do HttpClient via inject
  loading: boolean = false;  
  username = '';
  password = '';
  error = '';

  role: string = 'user'; // Valor padrão para o papel
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService.register(this.username, this.password, this.role).subscribe({
      next: () => {
        this.successMessage = 'Usuário cadastrado com sucesso!';
        setTimeout(() => this.router.navigate(['/login']), 2000); // Redireciona após 2 segundos
      },
      error: (err) => {
        console.error('Erro ao registrar usuário:', err);
        this.errorMessage = 'Não foi possível realizar o cadastro. Verifique os dados.';
      },
    });
  }
}
