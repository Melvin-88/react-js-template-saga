import { connect } from 'react-redux'
import {
    MainDisplay
} from './MainDisplay';
import {

} from './../../actions'
import {
    currentUserSelector
} from './../../selectors'

const mapStateToProps = (state) => {
    const user = currentUserSelector(state);
    return {
        user,
        fetched: user !== null,
        isCheckingOut: '222'
    }
};
const mapDispatchToProps = (dispatch) => ({

});

export const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainDisplay);