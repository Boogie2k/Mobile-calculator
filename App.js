import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const [screen, setSCreen] = useState(0);
  const [result, setResult] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <Text
          style={{
            textAlign: "right",
            width: "100%",
            paddingRight: "7%",
            fontSize: 36,
          }}
        >
          {screen}
        </Text>
      </View>
      <View style={styles.buttonsView}>
        <View
          style={{
            width: "20%",
            minHeight: "50%",

            justifyContent: "space-evenly",
          }}
        >
          <TouchableHighlight
            onPress={() => {
              if (screen === 0 || screen === "Syntax error") {
                setSCreen(7);
              } else {
                setSCreen(screen + "" + 7);
              }
            }}
          >
            <Text style={styles.buttons}>7</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (screen === 0 || screen === "Syntax error") {
                setSCreen(4);
              } else {
                setSCreen(screen + "" + 4);
              }
            }}
          >
            <Text style={styles.buttons}>4</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (screen === 0 || screen === "Syntax error") {
                setSCreen(1);
              } else {
                setSCreen(screen + "" + 1);
              }
            }}
          >
            <Text style={styles.buttons}>1</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (screen !== "Syntax error") {
                setSCreen(Math.sqrt(screen));
              }
            }}
          >
            <Text style={styles.buttons}>√x</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (screen !== "Syntax error") {
                setSCreen(Math.pow(screen, 2));
              }
            }}
          >
            <Text style={styles.buttons}>x²</Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            width: "20%",
            minHeight: "50%",

            justifyContent: "space-evenly",
          }}
        >
          <TouchableHighlight
            onPress={() => {
              if (screen === 0 || screen === "Syntax error") {
                setSCreen(8);
              } else {
                setSCreen(screen + "" + 8);
              }
            }}
          >
            <Text style={styles.buttons}>8</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (screen === 0 || screen === "Syntax error") {
                setSCreen(5);
              } else {
                setSCreen(screen + "" + 5);
              }
            }}
          >
            <Text style={styles.buttons}>5</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (screen === 0 || screen === "Syntax error") {
                setSCreen(2);
              } else {
                setSCreen(screen + "" + 2);
              }
            }}
          >
            <Text style={styles.buttons}>2</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (screen === 0 || screen === "Syntax error") {
                setSCreen(0);
              } else {
                setSCreen(screen + "" + 0);
              }
            }}
          >
            <Text style={styles.buttons}>0</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (screen === "Syntax error") {
                setSCreen("Syntax error");
              } else {
                setSCreen(screen + "/");
              }
            }}
          >
            <Text style={styles.buttons}>/</Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            width: "20%",
            minHeight: "50%",

            justifyContent: "space-evenly",
          }}
        >
          <TouchableHighlight
            onPress={() => {
              if (screen === 0 || screen === "Syntax error") {
                setSCreen(9);
              } else {
                setSCreen(screen + "" + 9);
              }
            }}
          >
            <Text style={styles.buttons}>9</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (screen === 0 || screen === "Syntax error") {
                setSCreen(6);
              } else {
                setSCreen(screen + "" + 6);
              }
            }}
          >
            <Text style={styles.buttons}>6</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              if (screen === 0 || screen === "Syntax error") {
                setSCreen(3);
              } else {
                setSCreen(screen + "" + 3);
              }
            }}
          >
            <Text style={styles.buttons}>3</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (screen === "Syntax error") {
                setSCreen("Syntax error");
              } else {
                setSCreen(screen + ".");
              }
            }}
          >
            <Text style={styles.buttons}>.</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setSCreen(0);
            }}
          >
            <Text style={styles.buttons}>CE</Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            width: "20%",
            minHeight: "50%",

            justifyContent: "space-evenly",
          }}
        >
          <TouchableHighlight
            onPress={() => {
              if (screen.length > 1 && screen !== "Syntax error") {
                setSCreen(screen.slice(0, -1));
              } else {
                setSCreen(0);
              }
            }}
          >
            <Text style={styles.buttons}>⌫</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (screen === "Syntax error") {
                setSCreen("Syntax error");
              } else {
                setSCreen(screen + "*");
              }
            }}
          >
            <Text style={styles.buttons}>*</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (screen === 0 || screen === "Syntax error") {
                setSCreen("-");
              } else {
                setSCreen(screen + "-");
              }
            }}
          >
            <Text style={styles.buttons}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              if (screen === "Syntax error") {
                setSCreen("Syntax error");
              } else {
                setSCreen(screen + "+");
              }
            }}
          >
            <Text style={styles.buttons}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              try {
                setSCreen(eval(screen));
              } catch (error) {
                console.log(error);
                setSCreen("Syntax error");
              }
            }}
          >
            <Text style={styles.buttons}>=</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dde1ef",
  },
  screen: {
    minHeight: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsView: {
    minHeight: "70%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  buttons: {
    backgroundColor: "white",
    fontSize: 16,
    minHeight: "10%",
    color: "black",
    textAlign: "center",
    paddingTop: "50%",
  },
});
