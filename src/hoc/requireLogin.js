import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { Icon } from 'semantic-ui-react';


import EmptyCenteredTitle from '../components/EmptyCenteredTitle';

const mapStateToProps = state => ({
    isLoggedIn: state.session.username !== '',
    pathname: state.routing.locationBeforeTransitions.pathname,
    query: state.routing.locationBeforeTransitions.query,
});

export default function requireLogin(Component) {
    class AuthentificatedComponent extends React.Component {
        render() {
            const { isLoggedIn, ...otherProps } = this.props;

            return isLoggedIn
                ? <Component {...otherProps} />
                : <EmptyCenteredTitle title="Please login first..." />;
        }
    }

    return connect(mapStateToProps, { replace })(AuthentificatedComponent);
}
