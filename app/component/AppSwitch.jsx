import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { gray, primary, lightGray } from "../Config/Colors";

const AppSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: lightGray, true: primary }}
        ios_backgroundColor={gray}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AppSwitch;