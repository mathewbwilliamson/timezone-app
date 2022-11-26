import React from "react";
import { Text, View } from "../Themed";
import { Clock } from "../Clock/Clock";

interface ClockContainerProps {
  timezone: string;
  label: string;
}

export const ClockContainer: React.FC<ClockContainerProps> = ({
  timezone,
  label,
}) => {
  return (
    <View>
      <Clock timezone={timezone} label={label} />
    </View>
  );
};
