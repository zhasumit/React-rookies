import { useState } from "react";

function Name() {
    const [name, setName] = useState("Guest");
    const [comments, setComments] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    const handleNameChange = (e) => setName(e.target.value);
    const handleCommentsChange = (e) => setComments(e.target.value);
    const handlePayement = (e) => setPayment(e.target.value);
    const handleShipping = (e) => setShipping(e.target.value);

    return (
        <>
            <p>Hi, {name} !</p>
            <input type="text" onChange={handleNameChange} value={name} />
            <br />
            <textarea
                placeholder="any comments..."
                onChange={handleCommentsChange}
            ></textarea>
            <p id="comments">{comments}</p>

            <p>💵{payment}</p>
            <select value={payment} onChange={handlePayement}>
                <option value="">Select Payment Method</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Rupay">Rupay</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <br />
            <label>
                <input
                    type="radio"
                    value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShipping}
                />
                Delivery
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="pickup"
                    checked={shipping === "pickup"}
                    onChange={handleShipping}
                />
                Pickup
            </label>
            <p>{shipping}</p>
        </>
    );
}

export default Name;
