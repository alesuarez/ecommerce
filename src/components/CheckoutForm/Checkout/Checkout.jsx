import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'

import { commerce } from '../../../lib/commerce'

const steps = ['Shipping address', 'Payment details']

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState([]);
    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'})
                setCheckoutToken(token);
            } catch (error) {

            }
        }
        generateToken();
    }, [cart])

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )
    */ todo: put more steps with switch? */
    const Form = () =>  activeStep === 0 
        ? <AddressForm checkoutToken={checkoutToken} next={next} /> 
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} onCaptureCheckout={onCaptureCheckout}/> 

    return (
            <div className={classes.toolbar}>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography varian="h4" align="center"> Comprar </Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            { steps.map((step) => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        { activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form /> }
                    </Paper>
                </main>
            </div>
    )
}

export default Checkout
