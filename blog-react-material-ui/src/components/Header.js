import React, { Component } from 'react';
import { Link,  BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  button: {
    fontSize: 14,
  },
};

const Header = (props) => {
	const { classes } = props;
	return <div className={classes.root}>
		<AppBar position="static">
	        <Toolbar>
	          	<Typography variant="display2" color="inherit" className={classes.flex}>
	          		<Hidden xsUp>
	            		PeopleLife
	            	</Hidden>
	            	<Hidden  smDown>
	            		PeopleLife
	            	</Hidden>
	          	</Typography>
	          	<div className="links-container">
		          	<Button color="inherit" className={classes.button}><a href="/">Home</a></Button>
		          	<Button color="inherit" className={classes.button}><a href="/about">About</a></Button>
		          	<Button color="inherit" className={classes.button}><a href="/news">News</a></Button>
	            	<Hidden xsDown>
		          		<Button color="inherit" className={classes.button}><a href="/products">products</a></Button>
					</Hidden>
				</div>
	        </Toolbar>
	     </AppBar>
	</div>
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);