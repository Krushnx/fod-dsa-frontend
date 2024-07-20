import React from 'react';
import './payment.css';

const Payment = () => {
  const handlePayment = async (amount) => {
    try {
      // Update the fetch URL to include the full backend URL for local testing
      const response = await fetch('http://localhost:8000/payments/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });
      const data = await response.json();

      if (data) {
        const options = {
          key: 'rzp_test_2ukvpFdCWkp', // Your Razorpay key ID
          amount: data.amount,
          currency: 'INR',
          name: 'Your Company Name',
          description: 'Test Transaction',
          order_id: data.id,
          handler: async function (response) {
            // Verify the payment on your server
            await fetch('http://localhost:8000/payments/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                order_id: response.razorpay_order_id,
                payment_id: response.razorpay_payment_id,
                signature: response.razorpay_signature
              }),
            });
            alert('Payment successful');
          },
          prefill: {
            name: 'Customer Name',
            email: 'customer@example.com',
            contact: '9999999999',
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-option">
        <h3>Basic</h3>
        <p>₹ 4</p>
        <button className="pay-button" onClick={() => handlePayment(4)}>Pay</button>
      </div>
      <div className="payment-option">
        <h3>Medium</h3>
        <p>₹ 5</p>
        <button className="pay-button" onClick={() => handlePayment(5)}>Pay</button>
      </div>
      <div className="payment-option">
        <h3>Advance</h3>
        <p>₹ 7</p>
        <button className="pay-button" onClick={() => handlePayment(7)}>Pay</button>
      </div>
    </div>
  );
}

export default Payment;
