'use client';

import Image from 'next/image';
import { axiosInstance } from '@/lib/axios';
import {  useEffect } from 'react';





const Card = ({ courseName, amount, description, imageUrl }) => {

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  useEffect(() => {
    const scriptSrc = 'https://checkout.razorpay.com/v1/checkout.js';
    loadScript(scriptSrc)
      .then((loaded) => {
        if (loaded) {
          console.log('Razorpay script loaded successfully');
        } else {
          console.error('Failed to load Razorpay script');
        }
      })
      .catch((error) => {
        console.error('Error loading Razorpay script:', error);
      });
  }
  , []);



  const onPurchase = async (name , amount) => {

    const respone = await axiosInstance.post("/create-order",{
      couresId : name,
      amount : amount
    } );

    console.log("respone  of create order : " , respone.data);

    //after create order
    const paymentObject = new window.Razorpay({
      key : "rzp_test_eV5MfFOc9KWsdo",
      order_id : respone.data.id,
      ...respone.data,
      handler : function(response){
        console.log("payment response : " , response);
        //after payment is successful
        const orderId = response.razorpay_order_id;
        const paymentId = response.razorpay_payment_id;
        const signature = response.razorpay_signature;
        //verify the payment
        axiosInstance.post("/verify-payment", {
          order_Id : orderId,
          paymentId : paymentId,
          signature : signature
        }).then((response) => {

          console.log("payment verified successfully : " , response.data);
          alert("Payment verified successfully");

        }).catch((error) => {

          console.log("payment verification failed : " , error);
          alert("Payment verification failed");

        })
      }

    })

    paymentObject.open();
   
 


  }




  return (
    <div className="w-80 h-96 rounded-2xl m-4 shadow-xl border border-gray-300 p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="relative w-full h-32 mb-4">
        <Image 
          src={imageUrl} 
          alt={courseName} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg"
        />
      </div>
      <div className="mb-2">
        <h2 className="text-xl font-semibold">{courseName}</h2>
      </div>
      <p className="mb-4 text-gray-200">{description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-lg font-bold">₹{amount}</span>
        <button 
          className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition cursor-pointer active:bg-amber-600" 
          onClick={ ()=>onPurchase(courseName, amount)}
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Card ;
