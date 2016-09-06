import React from 'react';

const RestaurantSearchBar = (props) => {
    return (
        <input className="input-bar"
            onChange={(evt) => {
                props.handleRestaurantQuery(evt.target.value);
            }}
        />
    );
}

export default RestaurantSearchBar;
