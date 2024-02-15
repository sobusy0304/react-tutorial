import React, {useState} from "react"

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleOnNameChange(event){
        setName(event.target.value);
    }

    function handleOnQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleOnCommentChange(event){
        setComment(event.target.value);
    }

    function handleOnPaymentChange(event){
        setPayment(event.target.value);
    }

    function handleOnShippingChange(event){
        setShipping(event.target.value);
    }
    return (
        <>
            <input value={name} onChange={handleOnNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleOnQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleOnCommentChange} 
            placeholder="Enter delivery instruction"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handleOnPaymentChange}>
                <option value="">Select a payment</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"}
                onChange={handleOnShippingChange}/>
                Pick Up
            </label><br/>
            <label>
                <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handleOnShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </>
    )
}

export default MyComponent