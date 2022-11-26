import React from "react";
import { Text, View } from "../Themed";
import {
  getCurrentTime,
  changeTimeZone,
  formatDateToTime,
  getTimezoneOffset,
} from "../../services/dates";

interface ClockProps {
  timezone: string;
  label: string;
}

export const Clock: React.FC<ClockProps> = ({ label, timezone }) => {
  const [time, setTime] = React.useState<Date>(new Date());

  // create a clock that ticks every second
  React.useEffect(() => {
    setInterval(() => {
      // Want TIME to be a string that looks like this: "HH:MM PM/AM" with TZ offset
      setTime(getCurrentTime());
    }, 10000);
  }, []);

  const formattedTime = changeTimeZone(time, timezone);
  const offset = getTimezoneOffset(timezone);

  return (
    <Text>
      {label}: {formattedTime} = {offset}
    </Text>
  );
};
