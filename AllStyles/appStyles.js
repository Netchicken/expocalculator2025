import { StyleSheet, Dimensions } from "react-native";
import { useMemo } from "react";
export const useAppStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        liContainer: {
          backgroundColor: "#fff",
          flex: 1,
          paddingLeft: 5,
        },
        liText: {
          color: "#333",
          fontSize: 17,
          fontWeight: "400",
        },
        image: {
          flex: 1,
          justifyContent: "center",
          width: "100%",
          height: "100%",
        },
        container: {
          fontSize: 40,
          flex: 1,
        },
        calcBox: {
          height: 50,
          borderRadius: 40,
          paddingLeft: 20,
          paddingTop: 10,
          backgroundColor: "oldlace",
          marginBottom: 10,
          borderWidth: 1,
        },
        outputText: {
          fontWeight: "bold",
          textAlignVertical: "center",
          textAlignment: "right",
          fontSize: 30,
        },
        sectionTitle: {
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          textAlignVertical: "center",
        },
      }),
    []
  );
