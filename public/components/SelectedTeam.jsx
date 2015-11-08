import React from 'react';

export default class SelectedTeam extends React.Component {
	render() {
		if (this.props.team === null) {
			// alternatively set a css class display: none
			return (
				<div />
			);
		}

		return (
			<div>
				Dein Team heißt: {this.props.team.value}
				<img src={"bilder/" + this.props.team.key + ".png"} alt="" width="50" height="50" />
			</div>
		);
	}
}