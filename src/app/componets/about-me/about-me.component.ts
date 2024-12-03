import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

  correo : string ="gonzaloddarkangel2@gmail.com";
  descargarCV(): void {
    const link = document.createElement('a');
    link.href = 'img/gonza4x4.pdf'; // Ruta al archivo PDF dentro del proyecto Angular
    link.download = 'Mi-CV'; // Nombre del archivo descargado
    link.click();
  }

}
