import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { ListadoLibrosComponent } from './pages/listado-libros/listado-libros.component';
import { ListaAlbumesComponent } from './pages/lista-albumes/lista-albumes.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'libros',
    component: ListadoLibrosComponent
  },
  {
    path: 'clientes',
    component: ListaClientesComponent
  },
  {
    path: 'albumes',
    component: ListaAlbumesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
