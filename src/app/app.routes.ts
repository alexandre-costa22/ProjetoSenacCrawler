//Arquivo de Rotas, aos vai atribuir um alias para cada componente, que podera ser chamado de qualquer outro componente

import { Routes } from '@angular/router';
import { MainPageComponent } from './modules/main-page/main-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },

];
