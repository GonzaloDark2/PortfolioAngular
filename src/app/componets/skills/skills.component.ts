import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',

  imports: [ NgClass, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  // habilidadesTecnicas = [
  //   { nombre: 'Javascript', porcentaje: 75, aplicada: false },
  //   { nombre: 'HTML & CSS', porcentaje: 89, aplicada: false },
  //   { nombre: 'Photoshop', porcentaje: 95, aplicada: false },
  //   { nombre: 'Wordpress', porcentaje: 81, aplicada: false },
  //   { nombre: 'Drupal', porcentaje: 55, aplicada: false }
  // ];

  // habilidadesProfesionales = [
  //   { nombre: 'Comunicación', porcentaje: 80, aplicada: false },
  //   { nombre: 'Trabajo en Equipo', porcentaje: 70, aplicada: false },
  //   { nombre: 'Creatividad', porcentaje: 99, aplicada: false },
  //   { nombre: 'Dedicación', porcentaje: 65, aplicada: false },
  //   { nombre: 'Proyect Management', porcentaje: 94, aplicada: false }
  // ];

  // @HostListener('window:scroll', [])
  // onWindowScroll(): void {
  //   this.efectoHabilidades();
  // }

  // efectoHabilidades(): void {
  //   const skillsElement = document.getElementById('skills');
  //   if (!skillsElement) return;

  //   const distancia_skills =
  //     window.innerHeight - skillsElement.getBoundingClientRect().top;
  //   if (distancia_skills >= 300) {
  //     this.habilidadesTecnicas.forEach(
  //       (habilidad) => (habilidad.aplicada = true)
  //     );
  //     this.habilidadesProfesionales.forEach(
  //       (habilidad) => (habilidad.aplicada = true)
  //     );
  //   }
  // }

  // getClaseHabilidad(habilidad: { nombre: string; aplicada: boolean }): string {
  //   return habilidad.aplicada ? habilidad.nombre.toLowerCase().replace(/ /g, '') : '';
  // }


}
