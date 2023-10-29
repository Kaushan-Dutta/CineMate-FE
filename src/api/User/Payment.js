import React from 'react'
import axios from 'axios';

export const Payment = () => {
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
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
    const handleClick=async(e)=>{
        e.preventDefault();
        const res = await loadScript(
            import.meta.env.VITE_APP_URL
        );
    
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
    
        const result = await axios.post("http://localhost:5000/user/payment");
    
        if (!result) {
            alert("Server error. Are you online?");
            return;
        }
        console.log(result)
        const { id: order_id } = result.data;
    
            const options = {
                key: import.meta.env.VITE_APP_RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
                amount: "100",
                currency: "INR",
                name: "Cine Mate Corporation",
                description: "Test Transaction",
                
                order_id: order_id,
                handler: async function (response) {
                   
                    console.log(response)
                },
                prefill: {
                    name: "Cine Mate",
                    email: "cinemate.test@gmail.com",
                    contact: "9646812364",
                },
                
                theme: {
                    color: "#8039DF",
                },
            };
    
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
    }
    
  return (
    {handleClick}
  )
}

