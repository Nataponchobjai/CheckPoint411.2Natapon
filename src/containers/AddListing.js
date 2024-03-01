import { connect } from 'react-redux';
import AddListing from '../components/AddListing'; // Ensure this matches your file/component name
import { addListing, removeListing } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        // Adjusting to use the addListing action
        addListing: (newListing) => dispatch(addListing(newListing)),
        // Optional: Including removeListing if your component needs it
        removeListing: (id) => dispatch(removeListing(id)),
    };
};

// Adjust the component name accordingly if it's not AddListing
export default connect(null, mapDispatchToProps)(AddListing);
