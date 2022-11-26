import React from "react";
import { Text, View } from "../Themed";
import { Clock } from "../Clock/Clock";
import { StyleSheet } from "react-native";

interface ClockContainerProps {
  timezone: string;
  label: string;
}

export const ClockContainer: React.FC<ClockContainerProps> = ({
  timezone,
  label,
}) => {
  return (
    <View style={styles.container}>
      <Clock timezone={timezone} label={label} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomColor: "green",
    borderBottomWidth: 5,
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
});
