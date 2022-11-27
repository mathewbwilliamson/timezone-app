import { StyleSheet } from "react-native";
import { ClockContainer } from "../components/ClockContainer/ClockContainer";

import { View } from "../components/Themed";
import { clocksConfig } from "../configuration/clocksConfig";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      {clocksConfig.map((clockInfo) => {
        return <ClockContainer key={clockInfo.label} clockInfo={clockInfo} />;
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
