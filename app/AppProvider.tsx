import { Provider as StoreProvider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { registerRootComponent } from "expo";
import {
    ActionSheetProvider,
    connectActionSheet,
} from "@expo/react-native-action-sheet";

import App from "./App";

import { store } from "./store";

const AppProvider = () => (
    <StoreProvider store={store}>
        <SafeAreaProvider>
            <ActionSheetProvider>
                <App />
            </ActionSheetProvider>
        </SafeAreaProvider>
    </StoreProvider>
);

export default registerRootComponent(connectActionSheet(AppProvider));
