import { Component, inject, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged, signOut, User } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuth = false;
  selectedBanca: string = ''; 
  currentUser: User | null = null;
  bancas: string[] = ['Todas','FINEP', 'Fundect', 'FAPESC', 'FAPERGS']; 
  router: Router = inject(Router);

  constructor(private auth: Auth) {}

  ngOnInit() {
    // Escuta as mudanças no estado de autenticação
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isAuth = true;
        this.currentUser = user;
        // Salva informações básicas no localStorage (opcional)
        localStorage.setItem('credencial', JSON.stringify({ email: user.email, uid: user.uid }));
      } else {
        this.isAuth = false;
/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Realiza o logout do usuário.
   * 
   * Se o usuário estiver logado, remove a credencial do localStorage e altera o estado da variável
   * this.isAuth para false. Se o usuário não estiver logado, exibe uma mensagem de erro.
   * 
   * @returns undefined
   */
/******  0bdebbe7-5381-459f-b8ad-71a92ed5452a  *******/        
        this.currentUser = null;
        localStorage.removeItem('credencial');
      }
    });
  }

  realizarLogout() {
    signOut(this.auth)
      .then(() => {
        this.isAuth = false;
        localStorage.removeItem('credencial');
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.error("Erro ao deslogar:", err);
      });
  }


}
