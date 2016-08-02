var React = require('react');
var Util = require('../util.js');
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
				<p><strong>How will you present the story with the following mix?</strong></p>
				<table className="attributeOne">
					{attributeOneNodes}
				</table>
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