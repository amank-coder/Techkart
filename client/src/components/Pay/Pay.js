import React, { useEffect } from 'react'
import './Pay.scss'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../util/newRequest"
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const stripePromise = loadStripe("pk_test_51MYkCeSAtWGZLOcAkxuDCFS5FP0W4opV2aYFaMAxpDiOCFebPVOQNXPwcctVue2YovnV1tYaK2vHw5GCYVVAGl6l00CbVtFKZU");

const Pay = () => {
  const { id } = useParams(); 
  const [clientSecret, setClientSecret] = useState("");
    useEffect(()=>{
        const makeRequest = async()=>{
        try {
            const res = await newRequest.post(`/orders/create-payment-intent`)
            setClientSecret(res.data.clientSecret)
            console.log(clientSecret)
        } catch (err) {
            console.log(err)
        } 
      }
      makeRequest()
    },[])

    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

    return (
    <div className='pay'>
    <div>Amount:1200</div>
        {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
    )
}

export default Pay