import { ClockType } from "../types/clock";

// For timezones:
// https://stackoverflow.com/questions/38399465/how-to-get-list-of-all-timezones-in-javascript/54500197#54500197

export const clocksConfig: ClockType[] = [
  {
    timezone: "America/Los_Angeles",
    label: "Los Angeles",
    backgroundColor: "#FFF8D9",
  },
  {
    timezone: "America/Phoenix",
    label: "Phoenix",
    backgroundColor: "#ECFBFF",
  },
  {
    timezone: "America/New_York",
    label: "Eastern",
    backgroundColor: "#E5D1FF",
  },
  {
    timezone: "Europe/London",
    label: "London",
    backgroundColor: "#F3FFD9",
  },
  {
    timezone: "Europe/Tallinn",
    label: "Tallinn",
    backgroundColor: "#EEEEEE",
  },
  {
    timezone: "Asia/Kolkata",
    label: "New Delhi",
    backgroundColor: "#FFEEEE",
  },
];
