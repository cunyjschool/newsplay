var React = require('react');
var data = require('../attributes.json');

var AttributeAll = React.createClass({

	render: function(){
		var attributeOneNodes = this.props.data.map(function(attributeOne){
			return (
				<AttributeOne name={attributeOne.name} options={attributeOne.options}>
				</AttributeOne>
			);
		});
		return (
			<div className="attributeAll">
				{attributeOneNodes}
			</div>
		);
	}
});

var AttributeOne = React.createClass({
	render: function(){
		var attributeOptionNodes = this.props.options.map(function(option){
			return (
				<AttributeOption option={option}>
				</AttributeOption>
			)
		});
		return (
			<div className="attributeOne">
				<h2 className={this.props.name}>{this.props.name}</h2>
				{attributeOptionNodes}
			</div>
		);
	}
});

var AttributeOption = React.createClass({
	render:function(){
		return (
			<div className="attributeOption">
				{this.props.option}
			</div>
		);
	}
});

React.render(
	<AttributeAll data={data}/>,
	document.getElementById('attributes')
);