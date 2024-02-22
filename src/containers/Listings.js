import { connect } from 'react-redux';
import Listings from '../components/Listings';
import { removeCar } from '../redux/actions.js'


const mapStateToProps = (state) => {
  return {
    user: state.user,
    listings: state.listings,
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
      removeCar: (index) => dispatch(removeCar(index)),
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Listings)