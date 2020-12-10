import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import usesStyles from './styles';

const Cart = ({ cart }) => {

    const classes = usesStyles();
    const isEmpty = cart.length === 0;

    const EmptyCart = () => (
        <Typography variant="subtitle1"> No tienes ningun producto en tu carrito de compras </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}> 
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}> 
                        <div> {item.name} </div>                    
                    </Grid>
                ))}
            </Grid>
            <div className={classes.CardDetails}>
                <Typography variant="h4"> Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Carrito vacio</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Comprar</Button>
                </div>
            </div>
        </>
    )

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3"> Tu carrito de compras</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart /> }  
        </Container>
    )
}

export default Cart
