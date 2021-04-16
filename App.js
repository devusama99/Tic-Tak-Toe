import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  const [{ board, playerTurn }, updateState] = useState({
    board: [
      ["?", "?", "?"],
      ["?", "?", "?"],
      ["?", "?", "?"],
    ],
    playerTurn: true,
  });

  function pressFunction(boAddr) {
    if (board[boAddr[0]][boAddr[1]] === "?") {
      if (playerTurn) {
        //player 1
        board[boAddr[0]][boAddr[1]] = "X";
      } else {
        //player 2
        board[boAddr[0]][boAddr[1]] = "0";
      }
      // let newTurn = !playerTurn;
      updateState({ board, playerTurn: !playerTurn });
    }
  }
  return (
    <View style={styles.container}>
      <Text>Current Turn {playerTurn ? "P1" : "P2"}</Text>
      <StatusBar style="auto" />
      <View>
        <View style={styles.subButtonView}>
          <Pressable onPressIn={pressFunction.bind(this, ["0", "0"])}>
            <Text style={styles.buttonText}>{board[0][0]}</Text>
          </Pressable>
          <Pressable onPressIn={pressFunction.bind(this, ["0", "1"])}>
            <Text style={styles.buttonText}>{board[0][1]}</Text>
          </Pressable>
          <Pressable onPressIn={pressFunction.bind(this, ["0", "2"])}>
            <Text style={styles.buttonText}>{board[0][2]}</Text>
          </Pressable>
        </View>
        <View style={styles.subButtonView}>
          <Pressable onPressIn={pressFunction.bind(this, ["1", "0"])}>
            <Text style={styles.buttonText}>{board[1][0]}</Text>
          </Pressable>
          <Pressable onPressIn={pressFunction.bind(this, ["1", "1"])}>
            <Text style={styles.buttonText}>{board[1][1]}</Text>
          </Pressable>
          <Pressable onPressIn={pressFunction.bind(this, ["1", "2"])}>
            <Text style={styles.buttonText}>{board[1][2]}</Text>
          </Pressable>
        </View>
        <View style={styles.subButtonView}>
          <Pressable onPressIn={pressFunction.bind(this, ["2", "0"])}>
            <Text style={styles.buttonText}>{board[2][0]}</Text>
          </Pressable>
          <Pressable onPressIn={pressFunction.bind(this, ["2", "1"])}>
            <Text style={styles.buttonText}>{board[2][1]}</Text>
          </Pressable>
          <Pressable onPressIn={pressFunction.bind(this, ["2", "2"])}>
            <Text style={styles.buttonText}>{board[2][2]}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "red",
    padding: "10px",
    fontSize: 20,
    fontWeight: 400,
    cursor: "pointer",
  },
  subButtonView: {
    display: "flex",
    flexDirection: "row",
  },
});
