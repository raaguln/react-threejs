import App from "../App"
import { ScratchIn, ScratchInOut } from "../layouts"

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
    name: "Home",
    description: "",
    path: "*",
    page: <App />,
  },
]

export default routes
