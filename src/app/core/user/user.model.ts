import { JsonObject, JsonProperty } from 'json2typescript';

export class Role {

  @JsonProperty('name', String)
  name: string = undefined;
}

@JsonObject
export class User {

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  @JsonProperty('login', String)
  login: string = undefined;

  @JsonProperty('firstName', String)
  firstName: string = undefined;

  @JsonProperty('lastName', String)
  lastName: string = undefined;

  @JsonProperty('email', String)
  email: string = undefined;

  @JsonProperty('roles', [ String ])
  roles: Role[] = undefined;
}
