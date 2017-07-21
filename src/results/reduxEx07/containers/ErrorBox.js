import React from 'react';
import { connect } from 'react-redux';
import { getError } from '../reducers';

const ErrorBox = ({ error }) => error
								? <div className="ErrorBox Alert">Unexpected error.</div>
								: null;

export default connect(
	(state) => ({
		error: getError(state)
	})
)(ErrorBox);