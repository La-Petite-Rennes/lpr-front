import {JsonObject, JsonProperty} from 'json2typescript';
import * as dayjs from 'dayjs';
import {DayjsDateTimeConverter} from '../../core/converters/dayjs-date-time.converter';

enum PaymentType {

  Cash,
  Check,
  Galleco,
  Waiting,
  NotSpecified // Used only to map old membership
}

@JsonObject()
export class SoldItem {

  constructor(obj ?: any) {
    Object.assign(this, obj);
  }

  @JsonProperty('id', Number)
  id: number = undefined;

  @JsonProperty('articleId', Number)
  articleId: number = undefined;

  @JsonProperty('articleId', Number)
  quantity: number = undefined;

  @JsonProperty('articleId', Number)
  price: number = undefined;
}

@JsonObject()
export class Sale {

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

  @JsonProperty('id', Number)
  id: number = undefined;

  @JsonProperty('date', DayjsDateTimeConverter)
  date: dayjs.Dayjs = undefined;

  @JsonProperty('adherentId', Number)
  adherentId: number = undefined;

  @JsonProperty('paymentType', PaymentType)
  paymentType: PaymentType = undefined;

  @JsonProperty('items', [SoldItem])
  soldItems: SoldItem[] = undefined;
}

