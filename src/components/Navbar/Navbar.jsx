import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/commerce.png'
import useStyles from './styles'

const Navbar = ({ totalItems }) => {
    const classes = useStyles()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography varian="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="General 3D" height="25px" className={classes.image} />
                        General 3D
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Ver items del carrito" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>   
        </>
    )
}

export default Navbar
