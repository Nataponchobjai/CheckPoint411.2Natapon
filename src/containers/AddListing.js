import { connect } from 'react-redux';
import AddListing from '../components/AddListing'; 
import { addListing } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        
        addListing: (Listing) => dispatch(addListing(Listing)),
        
        
    };
};


export default connect(null, mapDispatchToProps)(AddListing);
