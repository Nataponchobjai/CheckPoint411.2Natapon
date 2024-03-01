import { combineReducers } from 'redux';

const user = (state = null) => state;

// Updated listings reducer to handle actions
const listings = (state = [], action) => {
  switch(action.type) {
      case 'ADD_LISTING':
          // Assuming action.value is a listing object
          return [ ...state, action.value ];
      case 'REMOVE_LISTING':
          // Assuming action.value is the id of the listing to remove
          const cars = [ ...state ]
            cars.splice(action.value, 1)
            return cars
        default:
            return state
    }
}

const makes = (state = [], action) => {
    switch(action.type) {
        case "FETCH_MAKES":
        return action.value;
        case "DELETE_MAKE":
            const makes = [ ...state ]
            makes.splice(action.value, 1)
            return makes
        
        default:
            return state
            
    }
}








export default combineReducers({ user, listings, makes });
