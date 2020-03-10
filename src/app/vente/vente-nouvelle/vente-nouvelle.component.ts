import { Component, OnInit } from '@angular/core';
import {AdherentService} from '../../shared/adherent/adherent.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {Adherent} from '../../shared/adherent/adherent.model';
import {ArticleService} from '../../shared/stock/article.service';
import {Article} from '../../shared/stock/article.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'lpr-vente-nouvelle',
  templateUrl: './vente-nouvelle.component.html',
  styleUrls: ['./vente-nouvelle.component.scss']
})
export class VenteNouvelleComponent implements OnInit {

  adherents: Adherent[];

  allArticles: Article[];
  filteredArticles: Observable<Article[]>;

  form: FormGroup;
  loading: boolean;

  constructor(
    private adherentService: AdherentService,
    private articleService: ArticleService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      adherent: [''],
      dateVente: null,
      quantite: [1, [Validators.required]],
      article: ['']
    });

    this.form.get('adherent')
      .valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(value => this.adherentService.search(value, { size: 10 }))
      )
      .subscribe(adherents => this.adherents = adherents.content);

    this.articleService.getAll()
      .subscribe(articles => this.allArticles = articles);

    this.filteredArticles = this.form.get('article')
      .valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        map(value => this.allArticles.filter(article => article.nom.toLowerCase().startsWith(value)))
      );
  }

  displayAdherentSelected(selected: Adherent) {
    if (selected) {
      return selected.prenom + ' ' + selected.nom;
    }
  }

  displayArticleSelected(selected: Article) {
    if (selected) {
      return selected.nom;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;

      // this.venteService.create(this.vente)
      //   .subscribe(() => this.loading = false);
    }
  }
}
