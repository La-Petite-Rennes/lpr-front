import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdherentService} from '../../shared/adherent/adherent.service';
import {Coordonnees} from '../../shared/adherent/coordonnees.model';
import {NouvelAdherent} from '../../shared/adherent/new-adherent.model';

@Component({
  selector: 'lpr-adherent-new',
  templateUrl: './adherent-new.component.html',
  styleUrls: ['./adherent-new.component.scss']
})
export class AdherentNewComponent implements OnInit {

  adherent: NouvelAdherent;
  form: FormGroup;
  loading: boolean;

  constructor(
    private adherentService: AdherentService,
    private fb: FormBuilder
  ) {
    this.adherent = new NouvelAdherent();
    this.adherent.coordonnees = new Coordonnees();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      prenom: [this.adherent.prenom, [Validators.required]],
      nom: [this.adherent.nom, [Validators.required]],
      adresse: [this.adherent.coordonnees.adresse],
      codePostal: [this.adherent.coordonnees.codePostal],
      ville: [this.adherent.coordonnees.ville],
      email: [this.adherent.coordonnees.email, [Validators.email]],
      telephone: [this.adherent.coordonnees.telephone],
      typeAdhesion: [this.adherent.typeAdhesion, [Validators.required]],
      prixAdhesion: [this.adherent.prixAdhesion, [Validators.min]],
      dateAdhesion: [this.adherent.dateAdhesion, [Validators.required]],
      benevole: [this.adherent.benevole],
      remarqueBenevolat: [this.adherent.remarqueBenevolat],
      autreRemarque: [this.adherent.autreRemarque]
    });
  }

  get prenom() { return this.form.controls.prenom; }
  get nom() { return this.form.controls.nom; }
  get email() { return this.form.controls.email; }

  onSubmit(): void {
    if (this.form.valid) {
      this.loading = true;

      this.adherentService.create(this.adherent)
        .subscribe(() => this.loading = false);
    }
  }
}
