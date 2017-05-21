import { increase, decrease } from '../redux01/actions';
import Counter from '../redux01/Counter';
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