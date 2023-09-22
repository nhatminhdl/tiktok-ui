import React from "react";
import propTypes from "prop-types";
import "./GlobalStyles.scss";
function GlobalStyles({ children }) {
    // return React.Children.only(children);
    return children;
}

GlobalStyles.propTypes = {
    children: propTypes.node.isRequired,
};
export default GlobalStyles;
