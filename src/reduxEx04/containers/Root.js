import React from 'react';
import PropTypes from 'prop-types';
import App from '../components/App';

// TODO
const Root = ({ store }) => <App />;

Root.propTypes = {
	store: PropTypes.object.isRequired,
};

export default Root;
