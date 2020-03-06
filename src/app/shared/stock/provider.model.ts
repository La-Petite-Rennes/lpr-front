import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject()
export class Provider {

  constructor(obj ?: any) {
    Object.assign(this, obj);
  }

  @JsonProperty('id', Number)
  id: number = undefined;

  @JsonProperty('name', String)
  nom: string = undefined;
}
