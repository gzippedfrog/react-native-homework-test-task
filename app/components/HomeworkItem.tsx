import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

import {
    IHomeworkItem,
    removeItem,
    toggleCompleted,
} from "../store/homeworkSlice";

import Checkbox from "./Checkbox";
import DeleteIcon from "./Icons/DeleteIcon";

export type Props = {
    item: IHomeworkItem;
};

export default function HomeworkItem({ item }: Props) {
    const dispatch = useDispatch();

    function deleteItem() {
        dispatch(removeItem(item.id));
    }

    function toggleItem() {
        dispatch(toggleCompleted(item.id));
    }

    return (
        <View style={styles.container}>
            <Checkbox checked={item.completed} onPress={toggleItem} />
            <View style={styles.text}>
                <Text style={styles.title}>{item.title}</Text>
                <Text
                    style={[
                        styles.task,
                        item.completed ? styles.taskCompleted : undefined,
                    ]}
                >
                    {item.task}
                </Text>
            </View>

            <TouchableOpacity onPress={deleteItem}>
                <DeleteIcon />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderTopColor: "#EEF8FD",
        borderTopWidth: 1,
        paddingVertical: 10,
    },
    text: {
        flex: 1,
    },
    title: {
        fontSize: 17,
    },
    task: {
        fontSize: 13,
        color: "#6F767E",
    },
    taskCompleted: {
        textDecorationLine: "line-through",
    },
    checkbox: {
        marginRight: 10,
    },
});
