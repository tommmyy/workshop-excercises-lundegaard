import React from "react";
import PropTypes from "prop-types";

const MyInput = ({ type, input, label, meta: { touched, error, warning } }) =>
	<div>
		<label>{label}</label>
		<div>
			<input {...input} placeholder={label} type="text" />
			{touched && error && <span>{error}</span>}
		</div>
	</div>;

MyInput.propTypes = {
	children: PropTypes.node
};

export default MyInput;
