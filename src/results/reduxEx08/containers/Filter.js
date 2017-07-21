import R from 'ramda';
import React from 'react';
import { connect } from 'react-redux';
import { changeFilterValues } from '../actions';
import { isFetching } from '../reducers';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import MyInput from '../components/MyInput';

const CharactersForm = ({ handleSubmit, valid, name, fetching }) => (
	<form onSubmit={handleSubmit}>
		<Field component={MyInput} label="Volume title" name="name" />
		<button type="submit" disabled={fetching || name === ''}>
			Search
		</button>
	</form>
);

const validate = ({ name }) => ({
	name: !name ? 'Required.' : null,
})


const form = 'search';

const nameSelector = formValueSelector(form);

const connector = connect(
	(state) =>({
		fetching: isFetching(state),
		name: nameSelector(state, 'name'),
	}),
	{
		onSubmit: ({ name }) => changeFilterValues(name)
	}
);

export default R.compose(
	connector,
	reduxForm({
		form,
		validate,
	})
)(CharactersForm);


// export default connector(reduxForm({
// 	form,
// 	validate,
// })(CharactersForm));