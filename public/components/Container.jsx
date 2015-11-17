import React from 'react';
import SelectedTeam from './SelectedTeam.jsx!'
import Players from './Players.jsx!'
import Transfermarkt from './Transfermarkt.jsx!'

export default class Container extends React.Component {
    render() {
		if (this.props.team === null) {
			return (<div />);
		}
		return (
			<div>
				<button>Spieler</button>
				<button>Freundschaftsspiel</button>
				<button>Bundesliga</button>
				
				<SelectedTeam team={this.props.team} />
				
				<br /><br />
				
				<Players players={this.props.players} />
				
				<br /><br />
				
				<Transfermarkt />
			</div>
		);
	}
}