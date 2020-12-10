import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'
import useStyle from './styles'

const Products = ({products, onAddToCart}) => {
    const classes = useStyle()
    return(
        <main className={classes.content}>
            {/* todo: simula el espacio de la navbar, se puede mejorar? */}
            <div className={classes.toolbar}/> 
            <Grid container justify="center" spacing={4}>
                { products.map((product) => (
                    // xs mobile devices sm small devices 
                    <Grid key={product.updated} item xs={12} sm={6} md={4} lg={3}>      
                        <Product product={product} onAddToCart={onAddToCart}/>          
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;
