import { CommonModule,  } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contacto',
  imports: [ CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  correo = "gonzalodarkangel2@gmail.com"

 /* formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    const serviceID = 'name';
    const templateID = 'email';
    const userID = 'message';

    emailjs.send(serviceID, templateID, this.formData, userID)
      .then(() => {
        alert('Correo enviado correctamente');
      })
      .catch((error) => {
        alert('Error al enviar el correo');
        console.error(error);
      });
  }*/

}
