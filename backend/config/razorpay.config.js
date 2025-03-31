import razorpay from "razorpay"

// export const razorpayInstance = new razorpay({
//     key_id : process.env.KEYID,
//     key_secret : process.env.KETSECRET,
// })



export  const createRazorpayInstance  = () =>{
    return  new razorpay({
        key_id : process.env.KEYID,
        key_secret : process.env.KETSECRET,
    })
}

