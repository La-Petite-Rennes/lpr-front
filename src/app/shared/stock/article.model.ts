import {Provider} from './provider.model';
import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject()
export class Article {

  constructor(obj ?: any) {
    Object.assign(this, obj);
  }

  @JsonProperty('id', Number)
  id: number = undefined;

  @JsonProperty('name', String)
  nom: string = undefined;

  @JsonProperty('provider', Provider)
  fournisseur: Provider = undefined;

  @JsonProperty('reference', String)
  reference: string = undefined;

  @JsonProperty('quantity', Number)
  quantite: number = undefined;

  @JsonProperty('stockWarningLevel', Number)
  stockWarningLevel: number = undefined;

  @JsonProperty('salePrice', Number)
  prixVente: number = undefined;

  @JsonProperty('unitPrice', Number)
  prixAchatUnitaire: number = undefined;


}
