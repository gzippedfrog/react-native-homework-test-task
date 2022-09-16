import { useState } from "react";
import Dialog from "react-native-dialog";

import { useDispatch } from "react-redux";
import { addItem } from "../store/homeworkSlice";

export default function AddItemModal({ visible, setVisible }) {
    const [title, setTitle] = useState("");
    const [task, setTask] = useState("");

    const dispatch = useDispatch();

    function hideModal() {
        setVisible(false);
        setTitle("");
        setTask("");
    }

    function addNewTask() {
        if (!title || !task) return;

        dispatch(
            addItem({
                id: Date.now(),
                title,
                task,
                completed: false,
            })
        );
        hideModal();
    }

    return (
        <Dialog.Container visible={visible}>
            <Dialog.Title>Добавить предмет</Dialog.Title>
            <Dialog.Description>Укажите заголовок и задание</Dialog.Description>
            <Dialog.Input
                placeholder="Заголовок"
                value={title}
                onChangeText={setTitle}
            />
            <Dialog.Input
                placeholder="Задание"
                value={task}
                onChangeText={setTask}
            />
            <Dialog.Button label="Отмена" onPress={hideModal} />
            <Dialog.Button
                label="Сохранить"
                disabled={!title || !task}
                onPress={addNewTask}
            />
        </Dialog.Container>
    );
}
