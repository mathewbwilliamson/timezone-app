import { formatWithOptions, parseJSON } from "date-fns/fp";
import { eo } from "date-fns/locale";
import { zonedTimeToUtc } from "date-fns-tz";
import moment from "moment-timezone";

const timeFormat = "hh:mm a";

export const formatDateToTime = (date: string | Date) => {
  return formatWithOptions({ locale: eo }, timeFormat, date);
};

export const changeTimeZone = (date: Date, timeZone: string) => {
  const newTime = moment(date).tz(timeZone).format(timeFormat);
  return newTime;
};

export const getCurrentTime = () => new Date();

export const getTimezoneOffset = (timezone: string) => {
  const offset = moment().tz(timezone).format("Z");
  const easternOffset = formatOffsetToEastern(offset);

  return easternOffset;
};

const formatOffsetToEastern = (offset: string) => {
  const minutes = offset.match(/:(..)/g);

  if (!!minutes) {
    const offsetNumber = parseInt(offset) + 5;
    const sign = offsetNumber > 0 ? "+" : "-";

    return `${sign}${offsetNumber}${minutes}`;
  }

  return offset;
};
