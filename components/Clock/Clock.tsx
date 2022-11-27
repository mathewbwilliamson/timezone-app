import React from "react";
import { Text, View } from "../Themed";
import {
  getCurrentTime,
  changeTimeZone,
  formatDateToTime,
  getTimezoneOffset,
} from "../../services/dates";
import { StyleSheet } from "react-native";

interface ClockProps {
  timezone: string;
  label: string;
  backgroundColor?: string;
}

export const Clock: React.FC<ClockProps> = ({
  label,
  timezone,
  backgroundColor,
}) => {
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

  const backgroundStyles = { backgroundColor };

  return (
    <View style={{ ...styles.container, ...backgroundStyles }}>
      <View style={{ ...styles.left, ...backgroundStyles }}>
        <Text style={styles.leftText}>{label}</Text>
      </View>
      <View style={{ ...styles.center, ...backgroundStyles }}>
        <Text style={styles.centerText}>{formattedTime}</Text>
      </View>
      <View style={{ ...styles.right, ...backgroundStyles }}>
        <Text style={styles.rightText}>{offset}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    display: "flex",
    paddingLeft: 15,
    paddingRight: 15,
  },
  selected: {
    backgroundColor: "red",
  },
  left: {
    width: 140,
  },
  leftText: {
    fontSize: 22,
  },
  center: {},
  centerText: {
    fontSize: 26,
  },
  right: {},
  rightText: {
    fontSize: 18,
    color: "#C1C1C1",
  },
});
