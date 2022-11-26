import { ClockType } from "../types/clock";

// For timezones:
// https://stackoverflow.com/questions/38399465/how-to-get-list-of-all-timezones-in-javascript/54500197#54500197

export const clocksConfig: ClockType[] = [
  {
    timezone: "America/Los_Angeles",
    label: "Los Angeles",
  },
  {
    timezone: "America/Phoenix",
    label: "Phoenix",
  },
  {
    timezone: "America/New_York",
    label: "Eastern",
  },
  {
    timezone: "Europe/London",
    label: "London",
  },
  {
    timezone: "Europe/Tallinn",
    label: "Tallinn",
  },
  {
    timezone: "Asia/Kolkata",
    label: "New Delhi",
  },
];
