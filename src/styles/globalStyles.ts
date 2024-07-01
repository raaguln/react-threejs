export interface Style {
  [key: string]: string | object | number
}

const globalStyles: Style = {
  "@global": {
    body: {
      margin: 0,
      boxSizing: "border-box",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "Kalam, serif",
      fontWeight: 600,
    },
    h1: {
      fontSize: "calc(44px + 2vmin)",
    },
    p: {
      fontFamily: "Inter, sans-serif",
      fontSize: "20px",
    },
  },
}

export const globalCanvasStyles: Style = {
  "@global": {
    // in mobiles, the canvas scrolls up
    // instead of staying in place. To avoid that
    html: {
      position: "fixed",
    },
    canvas: {
      verticalAlign: "bottom",
    },
    // Normal styles override
    body: {
      margin: 0,
      boxSizing: "border-box",
      position: "fixed",
      width: "100%",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "serif",
    },
    h1: {
      fontSize: "calc(44px + 2vmin)",
    },
    p: {
      fontFamily: "sans-serif",
      fontSize: "20px",
    },
  },
}

export default globalStyles
