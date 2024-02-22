import { connect } from 'react-redux'
import AddCar from '../components/AddListing'
import {addCar} from '../redux/actions'

const mapDispatchtoProps = (dispatch) => {
    return {
        addACar: (newCar) => dispatch(addCar(newCar)),
    }
}

export default connect(null,mapDispatchtoProps)(AddCar)
