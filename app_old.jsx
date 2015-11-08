var React = require('react');
var ReactDOM = require('react-dom');

var teams = [ 
	{key:1, value:"FC Bayern München"},
	{key:2, value:"Borussia Dortmund"},
	{key:3, value:"Schalke 04"},
	{key:4, value:"Bayer 04 Leverkusen"},
	{key:5, value:"VFL Wolfsburg"},
	{key:6, value:"Borussia Mönchengladbach"},
	{key:7, value:"FSV Mainz 05"},
	{key:8, value:"FC Augsburg"},
	{key:9, value:"1899 Hoffenheim"},
	{key:10, value:"Hannover 96"},
	{key:11, value:"Hertha BSC"},
	{key:12, value:"Werder Bremen"},
	{key:13, value:"Eintracht Frankfurt"},
	{key:14, value:"SC Freiburg"},
	{key:15, value:"VFB Stuttgart"},
	{key:16, value:"Hamburger SV"},
	{key:17, value:"1. FC Köln"},
	{key:18, value:"SC Paderborn 07"},
	{key:19, value:"FC Ingolstadt 04"},
	{key:20, value:"SV Darmstadt 98"},
	{key:21, value:"1.FC Nürnberg"},
	{key:22, value:"FC Bayern Kickers"},
	{key:23, value:"SV Laufamholz"}
];


var DropDown = React.createClass({
    render: function() {
        if (this.props.selectedTeam !== null) {
			return (<div />);
		}
		return (
			  <select onChange={this.handleChange}>
				<option>Bitte wähle Dein Team</option>
				{
					this.props.options.map(function(option) {
						return <option key={option.key}>{option.value}</option>
					})
				}
			  </select>
      );
    },
	handleChange: function(e) {
		var selectedTeam, t, i = 0;
		for (i; i<this.props.options.length; i++) {
			t = this.props.options[i];
			// I would like to get the key here instead of the value, but no clue how to do this :-(
			if (t.value == e.target.options[e.target.selectedIndex].value) {
				selectedTeam = t;
			}
		}
		
		this.props.onChange(selectedTeam);
	  }
});

var Container = React.createClass({
    render: function() {
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
				
				<Transfermarkt />
			</div>
		);
	}
});

var Players = React.createClass({
    render: function() {
        // note that border does not work here because jsx table does not know it
		return (
			  <table border="1">
				<tr>
					<td>Nummer</td>
					<td>Name</td>
					<td>Speed</td>
					<td></td>
				</tr>
				{
					this.props.players.map(function(player) {
						// do not omit the braces, otherwise the new line for the tr will cause trouble (element is then not being rendered). alternatively, start in the same line
						return (
						<tr key={player.number}>
							<td>{ player.number }</td>
							<td>{ player.name }</td>
							<td>{ player.speed } km/h</td>
							<td><button onClick={this.optimize}>verbessern</button></td>
						</tr>
					)}.bind(this))
				}
			  </table>
      );
    },
	optimize: function() {
		alert("Geht noch nicht!");
	}
});

var SelectedTeam = React.createClass({
	render: function() {
		if (this.props.team === null) {
			// alternatively set a css class display: none
			return (<div />);
		}

		return (
			<div>
				Dein Team heißt: {this.props.team.value}
				<img src={"bilder/" + this.props.team.key + ".png"} alt="" width="50" height="50" />
			</div>
		);
	}
});

var Transfermarkt = React.createClass({
	render: function() {
		return (
			<div>
	            <b>Transfermarkt</b>
	            <table>
	            <tr>
	                <td>
	                    <b>Name:</b>
	                </td>
	                <td>Uli</td>
	                <td>Tim</td>
	                <td>Tobi</td>
	                <td>Max</td>
	                <td>Jan</td>
	                <td>Lucas</td>
	                <td>Franz</td>
	                <td>Tom</td>
	                <td>Sam</td>
	                <td>Felix</td>
	            </tr>
	            <tr>
	                <td>
	                    <b>Preis:</b>
	                </td>
	                <td>1000 &euro;</td>
	                <td>2000&euro;</td>
	                <td>3000&euro;</td>
	                <td>4000&euro;</td>
	                <td>5000&euro;</td>
	                <td>6000&euro;</td>
	                <td>7000&euro;</td>
	                <td>8000&euro;</td>
	                <td>9000&euro;</td>
	                <td>10000&euro;</td>
	            </tr>
	            <tr>
	                    <td>
	                        <b>Speed:</b>
	                    </td>
	                    <td>5,4 Km/h</td>
	                    <td>5,8 Km/h</td>
	                    <td>6,6 Km/h</td>
	                    <td>7,4 Km/h</td>
	                    <td>8,2 Km/h</td>
	                    <td>9,0 Km/h</td>
	                    <td>9,8 Km/H</td>
	                    <td>10,6 Km/h</td>
	                    <td>11,4 Km/h</td>
	                    <td>13 Km/h</td>
	            </tr>
	            <tr>
	                    <td></td>
	                    <td>
	                        <a>Kaufen</a>
	                    </td>
	                    <td>
	                        <a>Kaufen</a>
	                    </td>
	                    <td>
	                        <a>Kaufen</a>
	                    </td>
	                    <td>
	                        <a>Kaufen</a>
	                    </td>
	                    <td>
	                        <a>Kaufen</a>
	                    </td>
	                    <td>
	                        <a>Kaufen</a>
	                    </td>
	                    <td>
	                        <a>Kaufen</a>
	                    </td>
	                    <td>
	                        <a>Kaufen</a>
	                    </td>
	                    <td>
	                        <a>Kaufen</a>
	                    </td>
	                    <td>
	                        <a>Kaufen</a>
	                    </td>
	            </tr>
	        </table>
	        </div>
		);
	}
});

var App = React.createClass({
	getInitialState: function() {
		// note that all the state is within the component root
		return { 
			team: null,
		    players: [
				{number: 1, name: "Uli", speed: 5},
				{number: 2, name: "Tim", speed: 5.8},
				{number: 3, name: "Tobi", speed: 6.6},
				{number: 4, name: "Max", speed: 7.4},
				{number: 5, name: "Jan", speed: 8.2},
				{number: 6, name: "Lucas", speed: 9},
				{number: 7, name: "Franz", speed: 9.8},
				{number: 8, name: "Tom", speed: 10.6},
				{number: 9, name: "Sam", speed: 11.4},
				{number: 10, name: "Felix", speed: 12.2},
				
				]
			};
	},
	
	onTeamSelected: function(newTeam) {
		if (confirm('Bist Du sicher, dass Du ' + newTeam.value + ' auswählen willst?')) {
			this.setState( { team: newTeam });	
		}
	},
	render: function() {
		// parent->child communication is done using props in the child (UI does automatically update when they are changed by the owner)
		// child->parent communication is done passing functions defined in the parent to the child. Child will call the function when appropriate
		return (
			<div>
				<DropDown options={teams} 
					onChange={this.onTeamSelected} 
					selectedTeam={this.state.team}></DropDown>
				
				<Container team={this.state.team} 
					players={this.state.players} />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));

