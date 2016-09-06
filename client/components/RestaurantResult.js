import React from 'react';

const RestaurantResult = (props) => {
    return (
        <button onClick={() => {props.handleRestaurantChoice(props.result)}} className="restaurant-result">
            <div> {props.result.name} </div>
            <div> {props.result.formatted_address} </div>
        </button>
    );
}

export default RestaurantResult;
