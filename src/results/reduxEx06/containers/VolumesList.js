import VolumesList from '../components/VolumesList';
import { connect } from 'react-redux';
import { fetchVolumes } from '../actions';
import { getVolumes, isFetching } from '../reducers';

const mapStateToProps = (state) => ({
	volumes: getVolumes(state),
	fetching: isFetching(state),
});



export default connect(
	mapStateToProps,
	{
		fetchVolumes,
	}
)(VolumesList);