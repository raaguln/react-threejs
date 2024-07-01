import Inter from "./Inter-Variable.ttf";
import KalamLight from "./Kalam-Light.ttf";
import KalamRegular from "./Kalam-Regular.ttf";
import KalamBold from "./Kalam-Bold.ttf";
const fonts = {
    "@font-face": [
        {
            fontFamily: "Inter",
            src: `url('${Inter}') format("truetype")`,
            fontWeight: 400,
            fontStyle: "normal",
            fontDisplay: "swap",
        },
        {
            fontFamily: "Kalam",
            src: `url('${KalamLight}') format("truetype")`,
            fontWeight: 300,
            fontStyle: "normal",
            fontDisplay: "swap",
        },
        {
            fontFamily: "Kalam",
            src: `url('${KalamRegular}') format("truetype")`,
            fontWeight: 400,
            fontStyle: "normal",
            fontDisplay: "swap",
        },
        {
            fontFamily: "Kalam",
            src: `url('${KalamBold}') format("truetype")`,
            fontWeight: 600,
            fontStyle: "normal",
            fontDisplay: "swap",
        },
    ],
};
export default fonts;