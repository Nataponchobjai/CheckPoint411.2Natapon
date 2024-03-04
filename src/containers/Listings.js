import { connect } from 'react-redux';
import Listings from '../components/Listings';
import { removeListing } from '../redux/actions.js' 
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
     
      removeListing: (index) => dispatch(removeListing(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);