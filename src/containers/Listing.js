import { connect } from 'react-redux';
import AddListing from '../components/AddListing';
import { addListing } from '../redux/actions'; // Ensure this is the correct import

const mapDispatchToProps = (dispatch) => {
    return {
        // Update to use addListing, and adjust the parameter name to reflect its purpose
        addListing: (newListing) => dispatch(addListing(newListing)),
    }
}

export default connect(null, mapDispatchToProps)(AddListing);
