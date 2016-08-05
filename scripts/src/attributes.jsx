var React = require('react');
var data = require('../attributes.json');

var AttributeAll = React.createClass({

	render: function(){
		var attributeOneNodes = this.props.data.map(function(attributeOne){
			return (
				<AttributeOne name={attributeOne.name} options={attributeOne.options} color={attributeOne.color}>
				</AttributeOne>
			);
		});
		return (
			<div className="attributeAll">
				<p id="criteria"><strong>Time to present the story with new criteria!</strong></p>
				<table className="attributeOne">
					{attributeOneNodes}
				</table>
				<div id="submit" className="bottom">
					<strong>Got ideas?</strong>
					<button>submit your approach</button>
				</div>
			</div>
		);
	}
});

var AttributeOne = React.createClass({
	getInitialState: function() {
    	return {
    		option:''
    	};
  	},
	componentDidMount: function(){
		if (this.isMounted()){
			this.setState({
				option: this.props.options.getValueFromRandomIndex() // get a random option from json file whenever component reloads
			});
		}
	},
	render: function(){
		var style = {
			borderColor:this.props.color,
			color:this.props.color
		};
		return (
			<tr>
				<td className="optionName">{this.props.name}</td>
				<td className="optionValue" style={{borderColor:this.props.color}}>{this.state.option}</td>
			</tr>
		);
	}
});

React.render(
	<AttributeAll data={data}/>,
	document.getElementById('attributes')
);