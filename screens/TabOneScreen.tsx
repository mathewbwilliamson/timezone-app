import { StyleSheet } from "react-native";
import { Clock } from "../components/Clock/Clock";
import { ClockContainer } from "../components/ClockContainer/ClockContainer";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { clocksConfig } from "../configuration/clocksConfig";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      {clocksConfig.map((clockInfo) => {
        return (
          <ClockContainer
            key={clockInfo.label}
            timezone={clockInfo.timezone}
            label={clockInfo.label}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
