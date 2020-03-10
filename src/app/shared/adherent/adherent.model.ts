import {JsonObject, JsonProperty} from 'json2typescript';
import * as dayjs from 'dayjs';
import {DayjsDateTimeConverter} from '../../core/converters/dayjs-date-time.converter';
import {Coordonnees} from './coordonnees.model';

@JsonObject()
export class Adherent {

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  @JsonProperty('id', Number)
  id: number = undefined;

  @JsonProperty('prenom', String)
  prenom: string = undefined;

  @JsonProperty('nom', String)
  nom: string = undefined;

  @JsonProperty('coordonnees', Coordonnees)
  coordonnees: Coordonnees = undefined;

  @JsonProperty('lastAdhesion', DayjsDateTimeConverter)
  lastAdhesion: dayjs.Dayjs = undefined;

  @JsonProperty('benevole', String)
  benevole: boolean = undefined;

  @JsonProperty('remarqueBenevolat', String)
  remarqueBenevolat: string = undefined;

  @JsonProperty('autreRemarque', String)
  autreRemarque: string = undefined;
}
