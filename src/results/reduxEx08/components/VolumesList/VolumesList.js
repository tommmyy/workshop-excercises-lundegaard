import R from 'ramda';
import React, { Component } from 'react';
import './VolumesList.css';

// TODO: oodělit položku, prop-types
class VolumesList extends Component {
	componentDidMount() {
		this.props.fetchVolumes();
	}

	render() {
		const { volumes, fetching, fetchNextPageVolumes } = this.props;
		return (
			<section>
				<h2>Volumes</h2>
				{fetching ? <span>Loading ...</span>: null}
				{!fetching && R.isEmpty(volumes) ?
					<div>No items.</div> :
					<div>
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
						<button type="button" disabled={fetching} onClick={() => fetchNextPageVolumes()}>Načíst další</button>
					</div>
				}
			</section>
		);
	}
}


export default VolumesList;