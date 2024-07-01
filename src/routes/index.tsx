import App from "../App"
import {
  ScratchIn,
  ScratchInOut,
  ThreeJSBasics,
  ThreeJSModel,
} from "../layouts"

interface Route {
  name: string
  description: string
  path: string
  page: JSX.Element
}

const routes: Route[] = [
  {
    name: "Scratch to reveal image",
    description: "Solid color on top, scratch to reveal pattern",
    path: "scratch-in",
    page: <ScratchIn />,
  },
  {
    name: "Scratch image to reveal another image",
    description:
      "Slightly different implementation logic than the previous one. Two layers, 1st layer on top that scratches to a transparent scratch. 2nd layer in the background that scratches to an image / text.",
    path: "scratch-in-out",
    page: <ScratchInOut />,
  },
  {
    name: "ThreeJS - Mesh, events and interactions",
    description: "Create rotating cubes on click.",
    path: "three-js",
    page: <ThreeJSBasics />,
  },
  {
    name: "ThreeJS Load Models",
    description:
      "Loading external models into three.js. Click and drag the shoe to rotate it.",
    path: "poly",
    page: <ThreeJSModel />,
  },
  {
    name: "Home",
    description: "",
    path: "*",
    page: <App />,
  },
]

export default routes