var DropDown = React.createClass({
    render: function() {
        return (
          <select>
            {
				this.props.options.map(function(option) {
					return <option key={option.key}>{option.value}</option>
				})
			}
          </select>
      );
    }
});

var SelectedTeam = React.createClass({
	render: function() {
		return (<div>Dein Team heißt: {this.props.name}</div>);
	}
});

React.render(<DropDown options={[ {key:1, value:"FC Bayern München"}, {key:2, value:"Borussia Dortmund"} ]}/>, document.getElementById('app'));

React.render(<SelectedTeam name="xxx" />, document.getElementById('app2'));