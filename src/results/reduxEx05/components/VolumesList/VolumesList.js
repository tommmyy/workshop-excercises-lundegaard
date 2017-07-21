import R from 'ramda';
import React, { Component } from 'react';
import './VolumesList.css';

// TODO: oodělit položku, prop-types
class VolumesList extends Component {
	componentDidMount() {
		this.props.fetchVolumes();
	}

	render() {
		const { volumes } = this.props;
		return (
			<section>
				<h2>Volumes</h2>
				{R.isEmpty(volumes) ?
					<div>Načítám...</div> :
					<ul className="VolumesList">
						{volumes.map(({ id, name, countOfIssues, image: { thumbUrl } }) => (
							<li key={id} className="VolumesList-item">
								{name}
								<figure>
									<img src={thumbUrl} alt={name} />
								</figure>
								<p>Issues: {countOfIssues}</p>
							</li>
						))}
					</ul>
				}
			</section>
		);
	}
}


export default VolumesList;