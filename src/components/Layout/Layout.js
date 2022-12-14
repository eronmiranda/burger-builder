import React from 'react';

import classes from './Layout.module.css';

function Layout({ children }) {
	return (
		<>
			<div>Toolbar, SideDrawer, Backdrop</div>
			<main className={classes.Content}>{children}</main>
		</>
	);
}

export default Layout;
