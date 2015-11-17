import React from 'react';

export default class Players extends React.Component {
	constructor(props) {
		super(props);
		
		// event handlers have to be bound to the object, see http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/
		this.optimize = this.optimize.bind(this);
	}
	
	render() {
		// note that border does not work here because jsx table does not know it
		return (
			  <table border="1">
				<thead>
					<tr>
						<td>Nummer</td>
						<td>Name</td>
						<td>Speed</td>
						<td></td>
					</tr>
					</thead>
					<tbody>
					{
						// arrow functions preserve the this context, so arrows are the most convenient here. See http://stackoverflow.com/questions/30148827/this-is-undefined-inside-map-function-reactjs
						this.props.players.map(player => {
							// do not omit the braces, otherwise the new line for the tr will cause trouble (element is then not being rendered). alternatively, start in the same line
							return (
							<tr key={player.number}>
								<td>{ player.number }</td>
								<td>{ player.name }</td>
								<td>{ player.speed } km/h</td>
								<td><button onClick={this.optimize}>verbessern</button></td> 
							</tr>
						)})
					}
				</tbody>
			  </table>
      );
	}
	
	optimize() {
		alert("Geht noch nicht!");
	}
}