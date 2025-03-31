import { Router } from "express"
import * as paymentControllers from "../controllers/payment.controller.js"


const router = Router();


router.post("/create-order" , paymentControllers.createOrder );
router.post("/verify-payment" , paymentControllers.verifyPayment);


export default router;