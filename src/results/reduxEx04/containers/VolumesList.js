import VolumesList from '../components/VolumesList';
import { connect } from 'react-redux';
import { getFilterValues, getVolumesByFilter } from '../reducers';

const mapStateToProps = (state) => ({
	volumes: getVolumesByFilter(state, getFilterValues(state)),
});

export default connect(
	mapStateToProps,
)(VolumesList);