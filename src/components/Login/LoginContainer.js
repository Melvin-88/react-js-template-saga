import { connect } from 'react-redux'
import {
    LoginDisplay
} from './LoginDisplay';
import {

} from './../../actions'
import {

} from './../../selectors'

const mapStateToProps = (state) => {
    return {
        isCheckingOut: '222'
    }
};
const mapDispatchToProps = (dispatch) => ({

});

export const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginDisplay);