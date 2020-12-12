import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'

import usesStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {

    const classes = usesStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            No tienes ningun producto en tu carrito de compras, 
            <Link to="/" className={classes.link}> Empieza a anadir </Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}> 
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}> 
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.CardDetails}>
                <Typography variant="h4"> Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Vaciar carrito</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Comprar</Button>
                </div>
            </div>
        </>
    )

    if (!cart.line_items) return 'Loading...'
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom> Tu carrito de compras</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }  
        </Container>
    )
}

export default Cart
