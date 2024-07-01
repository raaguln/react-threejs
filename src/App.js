import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Fragment } from "react";
import withStyles from "react-jss";
import fonts from "./assets/fonts";
import globalStyles from "./styles/globalStyles";
import { Link } from "react-router-dom";
import routes from "./routes";
const styles = {
    ...fonts,
    ...globalStyles,
    header: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        width: "100%",
        padding: "0 2rem",
        textAlign: "left",
        boxSizing: "border-box",
    },
    app: {
        composes: "$header",
        minHeight: "100vh",
    },
};
const App = ({ classes }) => {
    const allRoutesExceptHome = Object.values(routes.slice(0, routes.length - 1));
    return (_jsxs(_Fragment, { children: [_jsxs("header", { className: classes.header, children: [_jsx("h1", { children: "Frontend Experiments" }), _jsx("p", { children: "Playground and proof of concepts for canvas, 2D and 3D in web using React." })] }), _jsx("main", { className: classes.app, children: _jsx("nav", { children: allRoutesExceptHome.map((d, i) => (_jsxs(Fragment, { children: [d.name === "Home" ? (_jsx("h2", { children: d.name })) : (_jsx(Link, { to: d.path, children: _jsx("h2", { children: d.name }) }, i)), _jsx("p", { children: d.description })] }, i))) }) })] }));
};
export default withStyles(styles)(App);
