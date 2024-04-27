import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51P5OyASHpKI0QqYqJlp1FbhsiOyFWYffimmaP4bNndeg4JE8oKpHN6sRGOU8d3aZN1rlbTQO90PW6iK02wSOJvdN007IcA73jl"
);

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    setIsProcessing(true);

    const orderData = {};

    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin },
      redirect: "if_required",
    });

    if (error) {
      setIsProcessing(false);
      console.log(error);
      return toast.error(error.message || "Something Went Wrong");
    }

    if (paymentIntent.status === "succeeded") {
      console.log("Placing Order");
      navigate("/orders");
    }
    setIsProcessing(false);
  };
  return (
    <div className="checkout-container">
      <form onSubmit={submitHandler}>
        <PaymentElement />
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Pay"}
        </button>
        <p className="paypara">
          <CiLock /> Payments are secure and encrypted.
        </p>
      </form>
    </div>
  );
};

const Checkout = () => {
  return (
    <Elements
      options={{
        clientSecret:
          "pi_3PAJpFSHpKI0QqYq1l3f7Wpw_secret_2ClTeyPfxX6kAASbmSt7BWMxP",
      }}
      stripe={stripePromise}
    >
      <h1 className="payhead">Payment Details</h1>
      <CheckOutForm />
    </Elements>
  );
};

export default Checkout;
