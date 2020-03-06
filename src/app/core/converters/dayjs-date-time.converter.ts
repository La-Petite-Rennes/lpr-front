import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import * as dayjs from 'dayjs';

@JsonConverter
export class DayjsDateTimeConverter implements JsonCustomConvert<dayjs.Dayjs> {

  deserialize(date: string): dayjs.Dayjs {
    if (date) {
      return dayjs(date).second(0);
    }

    return null;
  }

  serialize(date: dayjs.Dayjs): string {
    if (date) {
      return date.toISOString();
    }

    return null;
  }
}
