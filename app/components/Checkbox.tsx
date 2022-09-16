import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import TickIcon from "./Icons/TickIcon";

export type Props = {
    checked: Boolean;
    onPress: () => void;
};

const Checkbox = ({ checked, onPress }: Props) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.checkbox, checked ? styles.checkboxTicked : undefined]}
    >
        <TickIcon
            color={checked ? "#fff" : "#3B3B3B"}
            opacity={checked ? 1 : 0.34}
        />
    </TouchableOpacity>
);

export default Checkbox;

const styles = StyleSheet.create({
    checkbox: {
        borderRadius: 10,
        borderColor: "#000",
        borderWidth: 2,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    tick: {
        color: "#3B3B3B",
        opacity: 0.34,
    },
    checkboxTicked: {
        borderColor: "#469D3E",
        backgroundColor: "#469D3E",
    },
});
