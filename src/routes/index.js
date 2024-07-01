import { jsx as _jsx } from "react/jsx-runtime";
import App from "../App";
import { ScratchIn, ScratchInOut, ThreeJSBasics } from "../layouts";
const routes = [
    {
        name: "Scratch to reveal image",
        description: "Solid color on top, scratch to reveal pattern",
        path: "scratch-in",
        page: _jsx(ScratchIn, {}),
    },
    {
        name: "Scratch image to reveal another image",
        description: "Slightly different implementation logic than the previous one. Two layers, 1st layer on top that scratches to a transparent scratch. 2nd layer in the background that scratches to an image / text.",
        path: "scratch-in-out",
        page: _jsx(ScratchInOut, {}),
    },
    {
        name: "ThreeJS - Mesh, events and interactions",
        description: "Create rotating cubes on click.",
        path: "three-js",
        page: _jsx(ThreeJSBasics, {}),
    },
    {
        name: "Home",
        description: "",
        path: "*",
        page: _jsx(App, {}),
    },
];
export default routes;
