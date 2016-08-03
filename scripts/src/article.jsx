var React = require('react');
var $ = require('zeptojs');
var Util = require('../util.js');
var test = require('../attributes.json');

var Article = React.createClass({
	getInitialState: function(){
		return {
			headline:'',
			lead: '',
			source: '',
			link: '',
			thumb: false
		}
	},
	componentDidMount: function(){
		var util = new Util();
		var apiCall = util.buildQuery();

		if (this.isMounted()){
			$.get(apiCall,function(data){
				var articles = data.response.docs, // an array
					chosenArticle = articles.getValueFromRandomIndex(), // pick a random article on that page of results, see util.js
					possibleMedia;

				if (chosenArticle.multimedia[0] != undefined){  //this first object is thumbnail for the article
					possibleMedia = util.buildMediaUrl(chosenArticle.multimedia[0]); //see util.js for static media url reconstruction
				} else {
					possibleMedia = false
				}

				this.setState({
					headline: chosenArticle.headline.main,
					lead: chosenArticle.lead_paragraph,
					source: chosenArticle.source,
					link: chosenArticle.web_url,
					thumb: possibleMedia
				});
			}.bind(this));
		}
	},
	render: function(){
		// var image;

		// only insert thumb if there is one
		// if (this.state.thumb) {
		// 	image = <img src={this.state.thumb}/>
		// } else {
		// 	image = <p>¶</p>
		// }

		return (
			<div className="article">
				<div className="title">
					<h1 className="headline">{this.state.headline}</h1>
				</div>
				<div className="content">
					<p className="lead">{this.state.lead}</p>
					<div className="source">
						<p>Source:{this.state.source}</p>
						<button><a href={this.state.link} target="_blank">visit the original article</a></button>
					</div>
				</div>
			</div>
		);
	}
});

React.render(
	<Article />,
	document.getElementById('article')
);