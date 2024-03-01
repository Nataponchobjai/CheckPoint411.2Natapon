import { combineReducers } from 'redux';

const user = (state = null) => state;

// Updated listings reducer to handle actions
const listings = (state = [], action) => {
    switch(action.type) {
      case 'ADD_LISTING':
        return [...state, action.value]; // Correctly adds a listing in an immutable way
        case 'REMOVE_LISTING':
            const listings = [ ...state ]
            listings.splice(action.value, 1)
            return listings
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

