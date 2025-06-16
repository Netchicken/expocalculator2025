import { StyleSheet } from "react-native";
import { useMemo } from "react";

export const useDbOperationStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        text: {
          fontSize: 20,
          fontWeight: "bold",
          margin: 2,
        },
        container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        UpdateButton: {
          width: 120,
          height: 40,
          borderRadius: 10,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          margin: 5,
        },
        UpdateButtonText: {
          color: "#fff",
        },
        DeleteButton: {
          width: 120,
          height: 40,
          borderRadius: 10,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          margin: 5,
        },
        DeleteButtonText: {
          color: "#fff",
        },
        sectionContainer: {
          marginTop: 10,
          paddingHorizontal: 24,
        },
        sectionTitle: {
          fontSize: 24,
          fontWeight: "600",
          justifyContent: "center",
          textAlign: "center",
        },
      }),
    []
  );
