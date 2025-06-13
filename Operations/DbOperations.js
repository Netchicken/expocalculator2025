import React, { useState, useEffect } from "react";
import SQLite from "react-native-sqlite-2";
import {
  Text, // Renders text
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { useDbOperationStyles } from "./dbOperationStyles"; // Import styles

const databaseName = "calcDB.db";
let singleAnswer = "";

// Function to set the answer to be inserted
export const PassData = ({ data }) => {
  singleAnswer = data;
};

// Component to get and display database answers
export const GetDb = () => {
  const styles = useDbOperationStyles(); // Use custom hook for styles
  const [listAnswers, setListAnswers] = useState([]); // State for answers

  useEffect(() => {
    // Open the database
    const db = SQLite.openDatabase({
      name: databaseName,
      location: "default",
      createFromLocation: "~calcDB.db",
    });

    // SQL to create table if it doesn't exist
    const createString =
      "CREATE TABLE IF NOT EXISTS AllAnswers(Id INTEGER PRIMARY KEY AUTOINCREMENT, answer TEXT)";

    db.transaction((txn) => {
      // Create table
      txn.executeSql(
        createString,
        [],
        () => {},
        (error) => {
          console.log("execute error: " + JSON.stringify(error));
        }
      );

      // Insert answer if available
      if (singleAnswer !== "") {
        txn.executeSql("INSERT INTO AllAnswers (answer) VALUES (?)", [
          singleAnswer,
        ]);
        singleAnswer = ""; // Reset after insert
      }

      // Select all answers from the table
      txn.executeSql(
        "SELECT answer FROM AllAnswers",
        [],
        (tx, result) => {
          const answers = [];
          for (let i = 0; i < result.rows.length; ++i) {
            answers.push(result.rows.item(i).answer);
          }
          setListAnswers(answers); // Update state
        },
        (error) => {
          console.log("select error: " + JSON.stringify(error));
        }
      );
    });
  }, []); // Run only once when component mounts

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {listAnswers.map((item, index) => (
          <View key={index}>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
