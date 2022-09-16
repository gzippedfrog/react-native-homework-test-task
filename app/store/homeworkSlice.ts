import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface IHomeworkItem {
    id: Number;
    title: String;
    task: String;
    completed: Boolean;
}

export interface HomeworkState {
    items: IHomeworkItem[];
}

const initialState: HomeworkState = {
    items: [
        {
            id: 1663331112040,
            title: "Математика",
            task: "Стр. 4 , упр. 36 а, б.",
            completed: false,
        },
        {
            id: 1663331112140,
            title: "Русский язык",
            task: "Учебник, стр. 4 , упр. 36 а, б.",
            completed: false,
        },
        {
            id: 1663331112240,
            title: "ИЗО",
            task: "Подготовить клей, ножницы, вл. салфетки, цветную бумагу, ножницы, шерстняые нитки",
            completed: true,
        },
        {
            id: 1663331112340,
            title: "Литература",
            task: "Учебник, стр. 4 , упр. 36 а, б.",
            completed: false,
        },
    ],
};

export const homeworkSlice = createSlice({
    name: "homework",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IHomeworkItem>) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<Number>) => {
            const id = action.payload;

            state.items = state.items.filter((item) => item.id !== id);
        },
        toggleCompleted: (state, action: PayloadAction<Number>) => {
            const id = action.payload;

            const item = state.items.find((item) => item.id == id);
            item.completed = !item.completed;
        },
    },
});

export const homeworkSelector = (state: RootState) => state.homework.items;

export const { addItem, removeItem, toggleCompleted } = homeworkSlice.actions;

export default homeworkSlice.reducer;
