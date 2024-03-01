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
        return action.value; // Correctly sets the makes array
      case "DELETE_MAKE":
        // Assuming action.value is the id of the make to delete
        return state.filter(make => make.id !== action.value);
      default:
        return state;
    }
  }






  export default combineReducers({ user, listings, makes });

