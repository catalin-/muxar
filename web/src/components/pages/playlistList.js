"use strict";

var React = require('react');

var PlaylistList = React.createClass({
	propTypes: {
		playlist: React.PropTypes.array.isRequired
	},

	render: function() {
		var createBox = function(play) {
			return (
				<div className="playItem">
					<div className="playImageHolder"><img src={play.Thumbnail} className="playThumbnail"/></div>
					<label className="playLabel">{play.Name}</label>
				</div>
			);
		};

		return (
			<div>
				{this.props.playlist.map(createBox, this)}
			</div>
		);
	}
});

module.exports = PlaylistList;