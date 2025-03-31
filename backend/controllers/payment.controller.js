import dotenv from 'dotenv';
// Configure .env
dotenv.config();
import { createRazorpayInstance } from "../config/razorpay.config.js";
import  crypto from "crypto"

//create razorpay instance 
const razorpayInstance =  createRazorpayInstance(); //return instance


const createOrder = async(req , res) =>{

    const { couresId , amount} = req.body;
    //database call and fetch all data about coures and then process;

    console.log("couresId : " , couresId);
    console.log("amount : " , amount);
    // console.log("razorpayInstance : " , razorpayInstance);

    //create order
    const options = {
        amount: amount *100, //valus give in smallest unite
        currency: "INR",
        receipt: "receipt#1",
    }


    try {

        razorpayInstance.orders.create( options , (err , order)=>{
                if(err){
                            return res
                            .status(500)
                            .json({
                                success : false,
                                message : "something went wronng!",
                            })
                       }

                console.log("order : " , order);
           return res.status(200).json(order);  

        })
        
    } catch (error) {

    return res
    .status(500)
    .json({
        success : false,
        message : " create order failed ! try agine",
        error: error.message
    })
        
    }



}


const verifyPayment =(req , res)=>{

    const { order_Id , paymentId , signature} = req.body;

    console.log("data in coming :", order_Id , paymentId , signature);

    const secrate = process.env.KETSECRET;

    //create hmac
    const hmac = crypto.createHmac("sha256" , secrate);
    hmac.update(order_Id+"|"+paymentId);
    const genratedSignture = hmac.digest("hex");


    if(genratedSignture === signature){

        return res
        .status(201)
        .json({
            success : true,
            message : " payment is verify",
        })

      

    }else{
        return res
        .status(401)
        .json({
            success : false,
            message : "something went wronng! , payment is not verify",
        })
    }




}



export {
    createOrder,
    verifyPayment
}
   




