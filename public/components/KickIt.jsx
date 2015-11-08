import React from 'react';
import DropDown from './DropDown.jsx!'
import Container from './Container.jsx!'

export default class KickIt extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			team: null,
			players: [
				{ number: 1, name: "Uli", speed: 5 },
				{ number: 2, name: "Tim", speed: 5.8 },
				{ number: 3, name: "Tobi", speed: 6.6 },
				{ number: 4, name: "Max", speed: 7.4 },
				{ number: 5, name: "Jan", speed: 8.2 },
				{ number: 6, name: "Lucas", speed: 9 },
				{ number: 7, name: "Franz", speed: 9.8 },
				{ number: 8, name: "Tom", speed: 10.6 },
				{ number: 9, name: "Sam", speed: 11.4 },
				{ number: 10, name: "Felix", speed: 12.2 }]
		}
		
		// event handlers have to be bound to the object
		this.onTeamSelected = this.onTeamSelected.bind(this);
	}

	render() {
		return (
			<div>
			<DropDown options={ this.props.teams }
				onChange = { this.onTeamSelected }
				selectedTeam = { this.state.team } ></DropDown>
				
			<Container team={this.state.team} 
					players={this.state.players} />
		< /div>
		);
	}

	onTeamSelected(newTeam) {
		if (confirm('Bist Du sicher, dass Du ' + newTeam.value + ' auswählen willst?')) {
			this.setState({ team: newTeam });
		}
	}
}

KickIt.defaultProps = {
	teams: [
		{ key: 1, value: "FC Bayern München" },
		{ key: 2, value: "Borussia Dortmund" },
		{ key: 3, value: "Schalke 04" },
		{ key: 4, value: "Bayer 04 Leverkusen" },
		{ key: 5, value: "VFL Wolfsburg" },
		{ key: 6, value: "Borussia Mönchengladbach" },
		{ key: 7, value: "FSV Mainz 05" },
		{ key: 8, value: "FC Augsburg" },
		{ key: 9, value: "1899 Hoffenheim" },
		{ key: 10, value: "Hannover 96" },
		{ key: 11, value: "Hertha BSC" },
		{ key: 12, value: "Werder Bremen" },
		{ key: 13, value: "Eintracht Frankfurt" },
		{ key: 14, value: "SC Freiburg" },
		{ key: 15, value: "VFB Stuttgart" },
		{ key: 16, value: "Hamburger SV" },
		{ key: 17, value: "1. FC Köln" },
		{ key: 18, value: "SC Paderborn 07" },
		{ key: 19, value: "FC Ingolstadt 04" },
		{ key: 20, value: "SV Darmstadt 98" },
		{ key: 21, value: "1.FC Nürnberg" },
		{ key: 22, value: "FC Bayern Kickers" },
		{ key: 23, value: "SV Laufamholz" }],

};