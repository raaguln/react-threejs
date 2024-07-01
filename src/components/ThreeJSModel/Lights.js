import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const Lights = () => {
    return (_jsxs(_Fragment, { children: [_jsx("ambientLight", { intensity: 1 }), _jsx("spotLight", { intensity: 0.5, angle: 0.1, penumbra: 1, position: [10, 15, 10], castShadow: true })] }));
};
export default Lights;
