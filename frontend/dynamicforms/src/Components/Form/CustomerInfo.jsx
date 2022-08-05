import { Button, FormLabel, Grid, TextField } from '@mui/material';
import React from 'react';
import AddContact from './AddContact';
import ErrorTypography from "./ErrorTypography"

function CustomerInfo({handleCustomerInfoChange,handleContactChange,handleContactMethodChange,addContactFields,addContactMethod,removeContactField,removeContactMethod,contacts,toggleDrawer,handleSwitchChange,formErrors,inputField,dirty,errors,onBlurHandle,onContactBlur,contactErrors}) {
    return (
        <>
            <Grid container spacing={2} sx={{p:2}}> 
              <Grid item xs={12}>
              <Grid>
                <TextField id="customerName"  name="customerName" label="Customer Name" onChange={handleCustomerInfoChange} onBlur={onBlurHandle}  variant="outlined" fullWidth />
                <span><ErrorTypography errors={errors.customerName}></ErrorTypography></span>
                
              </Grid>
              
              </Grid>
              <Grid item xs={12}>
              <FormLabel >
                  <h4>Billing Address</h4>
              </FormLabel>
              </Grid>
              <Grid item  sm={8}>
              <TextField id="streetAddress"  name="streetAddress" label="Street Address" onChange={handleCustomerInfoChange} onBlur={onBlurHandle} variant="outlined" fullWidth/>
              <span><ErrorTypography errors={errors.streetAddress}></ErrorTypography></span>
              </Grid>
              <Grid item sm={4}>
              <TextField id="unitNumber" name='unitNumber' label="Unit Number" onChange={handleCustomerInfoChange} variant="outlined" fullWidth/>
              </Grid>
   
            <Grid item sm={6}>
            <TextField id="city"  name='city' label="City" onChange={handleCustomerInfoChange} variant="outlined" onBlur={onBlurHandle} fullWidth/>
            <span><ErrorTypography errors={errors.city}></ErrorTypography></span>
            </Grid>
            <Grid item sm={2}>
            <TextField id="state"  name='state' label="State" onChange={handleCustomerInfoChange} variant="outlined" onBlur={onBlurHandle} fullWidth/>
            <span><ErrorTypography errors={errors.state}></ErrorTypography></span>
            </Grid>
            <Grid item sm={4}>
            <TextField id="zipCode"  name='zipCode' label="Zip Code" onChange={handleCustomerInfoChange} variant="outlined" onBlur={onBlurHandle} fullWidth/>
            <span><ErrorTypography errors={errors.zipCode}></ErrorTypography></span>
            </Grid>
            <Grid item xs={12}>
            
            </Grid>
             {/* Add contact Component start */} 
            <Grid item sm={12} >
              <AddContact addContactFields={addContactFields} addContactMethod={addContactMethod} removeContactField={removeContactField} removeContactMethod={removeContactMethod} handleContactChange={handleContactChange} handleContactMethodChange={handleContactMethodChange} contacts={contacts}  handleSwitchChange={handleSwitchChange} formErrors={formErrors} onContactBlur={onContactBlur} dirty={dirty} errors={errors} contactErrors={contactErrors}/>
            </Grid>
            {/* Add contact Component end */} 
            
                  <Grid item display={'flex'} sm={12} justifyContent={'space-between'}>
                  <Grid item>
                      <Button variant='outlined' color={'inherit'} onClick={()=>toggleDrawer("right", false)}>Cancel</Button>
                  </Grid>
                  <Grid item>
                      <Button variant='contained' type='submit' color={'inherit'} >Create</Button>
                  </Grid>
              </Grid>
            </Grid>
        </>
    );
}

export default CustomerInfo;