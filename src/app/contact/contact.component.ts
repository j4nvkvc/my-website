import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    contactForm!: FormGroup;
  
    constructor(private fb: FormBuilder, private http: HttpClient) {
      this.createForm();
    }
  
    createForm() {
      this.contactForm = this.fb.group({
        name: ['', Validators.required],
        firstname: ['', Validators.required],
        company: [''],
        phone: [''],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required]
      });
    }
  
    onSubmit() {
      if (this.contactForm.valid) {
        const formData = this.contactForm.value;
  
        // Envoi des informations par e-mail
        this.http.post('URL_DE_VOTRE_API_D_ENVOI_EMAIL', formData).subscribe(() => {
          // Actions après envoi réussi
          console.log('Email envoyé avec succès');
          // Réinitialiser le formulaire ou afficher un message de confirmation ici
        }, error => {
          console.error('Erreur lors de lenvoi de le-mail', error);
          // Gérer les erreurs d'envoi d'e-mail ici
        });
      }
    }
  }
  
