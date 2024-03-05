import { connect } from 'react-redux';
import Listings from '../components/Listings.js';
import { removeListing } from '../redux/actions.js'


const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    users: state.users.username,
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
      removeListing: (index) => dispatch(removeListing(index)),
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Listings)