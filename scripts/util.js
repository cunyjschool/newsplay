var Util = function(){};

Array.prototype.getValueFromRandomIndex = function(){
	var util = new Util();
	return this[util.getRandomIntInclusive(0,this.length-1)];
}

// get the current date
Date.prototype.yyyymmdd = function() {
	var yyyy = this.getFullYear().toString();
	var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
	var dd  = this.getDate().toString();
	return yyyy + (mm[1] ? mm:"0" + mm[0]) + (dd[1] ? dd:"0" + dd[0]); // padding
};

Util.prototype.getRandomIntInclusive = function(min,max){
	if (max == null) {
		max = min;
		min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};

Util.prototype.buildQuery = function(){

	var date = new Date();

	var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?',
		q = 'q=new+york', // TODO user set keywords
		begin = '&begin_date=' + date.yyyymmdd(),
		end = '&end_date=' + date.yyyymmdd(),
		sort = '&sort=newest',
		fl = '&fl=web_url%2Clead_paragraph%2Cheadline%2Csection_name%2Csource', // only ask for relevant fields
		page = '&page=' + this.getRandomIntInclusive(1,10), // get a random page from the results
		apiKey = '&api-key=28257ad14bad04d08426a1ca4fd73a42%3A13%3A67431648';

	var query= [url,begin,end,sort,page,apiKey].join('');

	return query
};

Util.prototype.buildMediaUrl = function(partialurl){ //partial url will be acquired when api call is parsed

	var static = 'https://static01.nyt.com'; // server where the thumbnails live

	return static + partialurl
};

module.exports = Util;
