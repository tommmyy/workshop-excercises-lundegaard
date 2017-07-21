import React from 'react';
import PropTypes from 'prop-types';
import './VolumesList.css';

const VolumesList = ({ volumes }) => (
	<section>
		<h2>Volumes</h2>
		<ul className="VolumesList">
			{volumes.length ?
				volumes.map(({ id, name, countOfIssues, image: { thumbUrl } }) => (
					<li key={id} className="VolumesList-item">
						{name}
						<figure>
							<img src={thumbUrl} alt={name} />
						</figure>
						<p>Issues: {countOfIssues}</p>
					</li>
				))
				: null
			}
		</ul>
	</section>
);

VolumesList.propTypes = {
	volumes: PropTypes.array,
};


export default VolumesList;