import React from 'react';
import foodTypes from '../data/dummyFoods';
import FoodSearchBar from './FoodSearchBar';
import LocationSearchBar from './LocationSearchBar';
import RestaurantSearchBar from './RestaurantSearchBar';
import { Button } from 'react-bootstrap';

const VoteSurvey = (props) => {
    return (
        <div className="vote-survey">
            <p> I had the best </p>
            <FoodSearchBar
                foodPlaceholder={null}
                handleFoodChoice={props.handleFoodChoice}
            />
            <p> in </p>
            <LocationSearchBar
                cityPlaceholder={null}
                handleLocationChoice={props.handleLocationChoice}
            />
            <p> at </p>
            <RestaurantSearchBar
                hasLocationChoice={props.hasLocationChoice}
                handleRestaurantQuery={props.handleRestaurantQuery}
            />
            <Button bsSize="large" className="main-button" onClick={() => {props.handleGoogleSearch()}}> Search For Restaurants </Button>
        </div>
    );
}

export default VoteSurvey;
