import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './FormInput'

import { commerce } from '../../lib/commerce'

const AddressForm = ({ checkoutToken }) => {
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState('')

    const methods = useForm();
    
    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0])
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [])

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name}));

    return (
        <>
            <Typography variant="h6" gutterButton> Direccion de entrega </Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='Nombre'/>
                        <FormInput required name='lastName' label='Apellido'/>
                        <FormInput required name='addressOne' label='Direccion'/>
                        <FormInput required name='email' label='Correo electronico'/>
                        <FormInput required name='city' label='Ciudad'/>
                        <FormInput required name='zip' label='Codigo postal'/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel> Pais destino </InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                { countries.map( (country) => (
                                    <MenuItem key={country.id} value={country.id}> {country.label} </MenuItem>
                                ))}
                                
                            </Select>
                        </Grid>
                        {/*<Grid item xs={12} sm={6}>
                            <InputLabel> Subdivicion entrega </InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItemkey key={} value={}> Seleccioname </MenuItemkey>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel> Opciones de entrega </InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItemkey key={} value={}> Seleccioname </MenuItemkey>
                            </Select>
                        </Grid>*/}
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
