import React from "react";
import Wrap from '../../../hoc/Wrap';
import Button from '../../UI/Button/Button';
const orderSummery = (props) => {
    const ingredientSummery = Object.keys(props.ingredients)
        .map(igkey => {
            return <li key={igkey}>
                <span style={{ textTransform: 'capitalize' }}>{igkey}</span>
                : {props.ingredients[igkey]}
            </li>
        });

    return (
        <Wrap>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p><strong>Total price:</strong> {props.price}</p>
            <p>Continue to checkout ?</p>
            <Button btnType='Danger' clicked={props.purchaseCancled}>Cancel</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
        </Wrap>
    )
};

export default orderSummery;