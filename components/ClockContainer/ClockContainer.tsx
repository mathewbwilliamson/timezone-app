import React from "react";
import { Text, View } from "../Themed";
import { Clock } from "../Clock/Clock";
import { StyleSheet } from "react-native";
import { ClockType } from "../../types/clock";

interface ClockContainerProps {
  clockInfo: ClockType;
}

export const ClockContainer: React.FC<ClockContainerProps> = ({
  clockInfo,
}) => {
  const { label, timezone, backgroundColor } = clockInfo;

  const backgroundStyles = { backgroundColor };

  return (
    <View style={{ ...styles.container, ...backgroundStyles }}>
      <Clock
        timezone={timezone}
        label={label}
        backgroundColor={backgroundColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    borderColor: "lightgray",
    borderBottomWidth: 1,
    flex: 1,
  },
  selected: {
    backgroundColor: "red",
  },
});
