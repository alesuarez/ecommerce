import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'
import useStyle from './style'

const products = [
    { id: 1, mane: 'Shoes', description: 'Running shoes.', price:'$5', image: 'https://www.tennisnuts.com/images/product/main/NIKE-FREE-50-642198_406_C_PREM.jpg'},
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price:'$15', image: 'https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/MacBook_MC725ZPA/MacBook_MC725ZPA_L_1.jpg'},
    { id: 2, name: 'Yoga mat', description: 'Yoga mat', price:'$20', image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhathayoga.com%2Fwp-content%2Fuploads%2F2014%2F01%2FIntexpensive_Yoga_Mats_YES4ALL-300x300.jpg&f=1&nofb=1'}
];
const Products = () => {
    const classes = useStyle()
    return(
        <main className={classes.content}>
            {/* todo: simula el espeacio de la navbar, se puede mejorar? */}
            <div className={classes.toolbar}/> 
            <Grid container justify="center" spacing={4}>
                { products.map((product) => (
                    // xs mobile devices sm small devices 
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>      
                        <Product product={product}/>          
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;
