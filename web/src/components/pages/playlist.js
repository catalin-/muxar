'use strict';

var React = require ("react");
var hack = require('./searchHack');
var SongsApi = require('../api/songsApi');
var PlaylistList = require('./playlistList');

var Playlist = React.createClass({
	getInitialState: function() {
		return {
			playlist: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			var self = this;
			SongsApi.getPlaylistByCountry(hack.getSearch(), function(response){
				self.setState({ playlist: response });
				console.log("play");
				console.log(response);
			});
		}
	},

	render: function(){
		return (
	        <div className="playBox">
				<PlaylistList playlist={this.state.playlist} />
	        </div>
		);
	}
});

module.exports = Playlist;