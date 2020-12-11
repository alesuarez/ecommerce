import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/commerce.png'
import useStyles from './styles'

const Navbar = ({ totalItems }) => {
    const classes = useStyles()
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" varian="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="General 3D" height="25px" className={classes.image} />
                        General 3D
                    </Typography>
                    <div className={classes.grow}/>
                    { location.pathname === '/' && ( 
                    /* Only in home page I am going to available to see the cart */
                    <div className={classes.button}>
                        { /* <Link to="/cart"> Ir al carrito </Link> */ }
                        <IconButton component={Link} to="/cart" aria-label="Ver items del carrito" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>) }
                </Toolbar>
            </AppBar>   
        </>
    )
}

export default Navbar
