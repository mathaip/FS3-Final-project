import React, { Component } from 'react'
import FormUserDetails from './formUserDetails'
export class userform extends Component {
    state = {
        step:1,
        firstName:'',
        lastName:'',
        dietRestriction:'',
        city:'',
        province:'',
        paymentMethod:''
    }
    //proceed to next step
    nextStep = ()=>{
        const {step} = this.state;
        this.setState({
            step:step + 1
        });
    }
    prevStep = ()=>{
        const {step} = this.state;
        this.setState({
            step:step - 1
        });
    }

    handleChange = input => e =>{
        this.setState({[input]:e.target.value});
    }
     
    render() {
        const {step} = this.state;
        const {firstName,lastName , dietRestriction,city,province,paymentMethod} = this.state;
        const values = {firstName,lastName , dietRestriction,city,province,paymentMethod};

        switch(step){
            case 1: 
            return(
                <FormUserDetails 
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
                />
            )
            case 2:
            return(
                <h1>FormAddressInfo</h1>
            )
            case 3:
                return(
                    <h1>FormPaymentInfo</h1>
                )
            case 4:
                return(
                    <h1>Confirm</h1>
                        )
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default userform



 