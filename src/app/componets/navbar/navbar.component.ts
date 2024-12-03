import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {



  menuVisible = true;

  // Función que oculta o muestra el menú
  mostrarOcultarMenu(): void {
    this.menuVisible = !this.menuVisible;
  }


}
