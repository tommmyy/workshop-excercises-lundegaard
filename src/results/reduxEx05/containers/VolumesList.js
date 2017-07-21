import VolumesList from '../components/VolumesList';
import { connect } from 'react-redux';
import { fetchVolumes } from '../actions';
import { getFilterValues, getVolumesByFilter } from '../reducers';

const mapStateToProps = (state) => ({
	volumes: getVolumesByFilter(state, getFilterValues(state)),
});



export default connect(
	mapStateToProps,
	{
		fetchVolumes,
	}
)(VolumesList);