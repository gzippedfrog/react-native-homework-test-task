import { Key, useMemo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSelector } from "react-redux";
import { homeworkSelector } from "./store/homeworkSlice";

import OutlinedButton from "./components/OutlinedButton";
import HomeworkItem from "./components/HomeworkItem";
import AddItemModal from "./components/AddItemModal";
import Button from "./components/Button";

const options = ["Показывать все задания", "Выполненные", "Не выполненные"];

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [filterIndx, setFilterIndx] = useState(0);

    const items = useSelector(homeworkSelector);

    const filteredItems = useMemo(() => {
        switch (filterIndx) {
            case 1:
                return items.filter((item) => item.completed);
            case 2:
                return items.filter((item) => !item.completed);
            default:
                return items;
        }
    }, [items, filterIndx]);

    const { showActionSheetWithOptions } = useActionSheet();

    function showFilterOptions() {
        showActionSheetWithOptions(
            {
                options,
                showSeparators: true,
            },
            (buttonIndex) => {
                setFilterIndx(buttonIndex);
            }
        );
    }

    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <ScrollView style={styles.container}>
                <OutlinedButton
                    label={options[filterIndx]}
                    style={styles.showAllButton}
                    onPress={showFilterOptions}
                />

                <View style={styles.separator} />

                {filteredItems.map((item) => (
                    <HomeworkItem item={item} key={item.id as Key} />
                ))}

                <Button
                    label="Добавить"
                    style={styles.addButton}
                    onPress={() => setModalVisible(true)}
                />
                <AddItemModal
                    visible={modalVisible}
                    setVisible={setModalVisible}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingHorizontal: 10,
    },
    showAllButton: {
        marginVertical: 44,
    },
    separator: {
        backgroundColor: "#EEEEEF",
        height: 1,
    },
    addButton: {
        borderRadius: 8,
        height: 55,
        marginTop: 36,
    },
});
