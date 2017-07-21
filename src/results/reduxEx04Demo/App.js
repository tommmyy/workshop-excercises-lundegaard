import { increase, decrease } from '../reduxEx02bDemo/actions';
import Counter from '../reduxEx02bDemo/Counter';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	value: state,
});

const mapDispatchToProps = (dispatch) => ({
	onIncrease: () => dispatch(increase()),
	onDecrease: () => dispatch(decrease()),
});

/*
const mapDispatchToProps = {
	onIncrease: increase,
	onDecrease: decrease,
};
*/

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);

export default App;