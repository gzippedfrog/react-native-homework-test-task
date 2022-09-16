import { TextStyle, ViewStyle } from "react-native";
import Button, { Props } from "./Button";

const OutlinedButton = (props: Props) => {
    const { label, style, labelStyle, ...extraProps } = props;

    return (
        <Button
            label={label}
            style={[{ backgroundColor: "transparent" }, style] as ViewStyle[]}
            labelStyle={[{ color: "#3785CC" }, labelStyle] as TextStyle[]}
            {...extraProps}
        />
    );
};

export default OutlinedButton;
