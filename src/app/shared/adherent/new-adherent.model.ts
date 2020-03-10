import {JsonObject, JsonProperty} from 'json2typescript';
import * as dayjs from 'dayjs';
import {DayjsDateTimeConverter} from '../../core/converters/dayjs-date-time.converter';
import {Coordonnees} from './coordonnees.model';
import {TypeAdhesion} from './type-adhesion.model';

@JsonObject()
export class NouvelAdherent {

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  @JsonProperty('prenom', String)
  prenom: string = undefined;

  @JsonProperty('nom', String)
  nom: string = undefined;

  @JsonProperty('coordonnees', Coordonnees)
  coordonnees: Coordonnees = undefined;

  typeAdhesion: TypeAdhesion = undefined;

  @JsonProperty('prixAdhesion', Number)
  prixAdhesion: number = undefined;

  @JsonProperty('dateAdhesion', DayjsDateTimeConverter)
  dateAdhesion: dayjs.Dayjs = undefined;

  @JsonProperty('benevole', String)
  benevole: boolean = undefined;

  @JsonProperty('remarqueBenevolat', String)
  remarqueBenevolat: string = undefined;

  @JsonProperty('autreRemarque', String)
  autreRemarque: string = undefined;
}
