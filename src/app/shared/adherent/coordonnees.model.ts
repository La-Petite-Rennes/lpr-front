import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject()
export class Coordonnees {

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  @JsonProperty('adresse', String)
  adresse: string = undefined;

  @JsonProperty('codePostal', String)
  codePostal: string = undefined;

  @JsonProperty('ville', String)
  ville: string = undefined;

  @JsonProperty('email', String)
  email: string = undefined;

  @JsonProperty('telephone', String)
  telephone: string = undefined;
}
