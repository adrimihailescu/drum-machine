import "./Layout.scss";

import React from "react";

const Layout = (props) => {
	return <main {...props}>{props.children}</main>;
};

export default Layout;
