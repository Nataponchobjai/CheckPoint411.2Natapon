import { connect } from 'react-redux';
import Listings from '../components/Listings';
import { removeListing } from '../redux/actions.js' // Ensure this is the updated action creator
import { fetchMakes } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    listings: state.listings,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMakes: () => dispatch(fetchMakes()),
      // Updated to use removeListing with an id rather than an index
      removeListing: (id) => dispatch(removeListing(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);