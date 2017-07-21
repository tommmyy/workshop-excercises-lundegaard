import VolumesList from '../components/VolumesList';
import { connect } from 'react-redux';
import { fetchVolumes, fetchNextPageVolumes } from '../actions';
import { getVisibleVolumes, isFetching } from '../reducers';

const mapStateToProps = (state) => ({
	volumes: getVisibleVolumes(state),
	fetching: isFetching(state),
});



export default connect(
	mapStateToProps,
	{
		fetchVolumes,
		fetchNextPageVolumes,
	}
)(VolumesList);