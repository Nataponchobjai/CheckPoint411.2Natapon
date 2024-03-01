import { connect } from 'react-redux';
import AddListing from '../components/AddListing'; // Ensure this matches your file/component name
import { addListing } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        // Adjusting to use the addListing action
        addListing: (Listing) => dispatch(addListing(Listing)),
        // Optional: Including removeListing if your component needs it
        
    };
};

// Adjust the component name accordingly if it's not AddListing
export default connect(null, mapDispatchToProps)(AddListing);
