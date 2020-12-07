import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './product/Product'

const products = [
    { id: 1, mane: 'Shoes', description: 'Running shoes.', price:'$5', image: 'https://www.tennisnuts.com/images/product/main/NIKE-FREE-50-642198_406_C_PREM.jpg'},
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price:'$15', image: 'https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/MacBook_MC725ZPA/MacBook_MC725ZPA_L_1.jpg'}
];
const Products = () => {
    return(
        <main>
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
