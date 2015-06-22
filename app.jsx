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

var App = React.createClass({
	getInitialState: function() {
		// note that all the state is within the component root
		return { 
			team: null,
		    players: [
				{number: 1, name: "Uli", speed: 5},
				{number: 2, name: "Uli", speed: 5},
				{number: 3, name: "Uli", speed: 5},
				{number: 4, name: "Uli", speed: 5},
				{number: 5, name: "Uli", speed: 5},
				{number: 6, name: "Uli", speed: 5},
				{number: 7, name: "Uli", speed: 5},
				{number: 8, name: "Uli", speed: 5},
				{number: 9, name: "Uli", speed: 5},
				{number: 10, name: "Uli", speed: 5},
				{number: 11, name: "Uli", speed: 5}
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

React.render(<App />, document.getElementById('app'));

