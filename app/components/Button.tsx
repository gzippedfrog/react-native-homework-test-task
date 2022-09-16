import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

export type Props = {
    label: String;
    style?: ViewStyle | ViewStyle[];
    labelStyle?: TextStyle | TextStyle[];
    onPress?: () => void;
    extraProps?: Props | any[];
};

export default function Button(props: Props) {
    const { label, style, labelStyle, ...extraProps } = props;

    return (
        <TouchableOpacity style={[styles.button, style]} {...extraProps}>
            <Text style={[styles.label, labelStyle]}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#3785CC",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3785CC",
    },
    label: {
        fontSize: 16,
        color: "#fff",
    },
});
