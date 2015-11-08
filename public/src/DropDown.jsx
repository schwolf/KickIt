import React from 'react';

export default class DropDown extends React.Component {
	constructor(props) {
		super(props);
		// event handlers have to be bound to the object
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
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
	
	render() {
		// todo use arrow function instead below
		if (this.props.selectedTeam !== null) {
			return (
				<div />
			);
		}
		return (
			  <select onChange={this.handleChange}>
				<option>Bitte wähle Dein Team</option>
				{
					this.props.options.map(o => 
						<option key={o.key}>{o.value}</option>
					)
				}
			  </select>
      );
	}
}

// make properties explicit
DropDown.defaultProps = {
	options: [],
	onChange: function() {},
	selectedTeam: null
};