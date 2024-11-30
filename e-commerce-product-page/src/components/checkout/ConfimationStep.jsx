const ConfirmationStep = ({ onClose }) => (
    <div className="text-center">
      <img src="/images/icon-success.png" alt="success" className="mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2">Payment Successful!</h3>
      <p className="mb-4">Your order is confirmed</p>
      <button 
        onClick={onClose}
        className="w-full bg-Orange text-white py-3 rounded"
      >
        Continue Shopping
      </button>
    </div>
  )

  export default ConfirmationStep