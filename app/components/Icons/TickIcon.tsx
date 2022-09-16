import Svg, { Path } from "react-native-svg";

export default function TickIcon({ color = "#000", opacity = 1 }) {
    return (
        <Svg
            // @ts-ignore:next-line
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="11"
            fill="none"
            viewBox="0 0 15 11"
        >
            <Path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M1.096 5.5l4.245 4.245 8.505-8.49"
                opacity={opacity}
            ></Path>
        </Svg>
    );
}
