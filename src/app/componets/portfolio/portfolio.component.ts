import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  VerLinkIn(): void {
    const link = document.createElement('a');
    link.href = 'https://github.com/GonzaloDark2/Gestion-Instituto-ProyectoFinal' ; // Ruta al archivo PDF dentro del proyecto Angular
    link.target = '_blank'; // Abrir en una nueva pestaña
    link.click();
  }
  CursoTICMAS(): void {
    const link = document.createElement('a');
    link.href = 'img/Curso-Ticmas.pdf'; // Ruta al archivo PDF dentro del proyecto Angular
    link.download = 'Curso-Ticma-Gonzalo'; // Nombre del archivo descargado
    link.click();
  }
  CursoMDP(): void {
    const link = document.createElement('a');
    link.href = 'img/Curso-MDP.pdf'; // Ruta al archivo PDF dentro del proyecto Angular
    link.download = 'Curso-MDP-Gonzalo'; // Nombre del archivo descargado
    link.click();
  }

}
