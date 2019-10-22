import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
const APP_ROUTES: Routes = [
{ path: 'heroe/:id', component: HeroeComponent  },
{ path: 'heroes', component: HeroesComponent  },
{ path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];
export const app_routing = RouterModule.forRoot(APP_ROUTES);