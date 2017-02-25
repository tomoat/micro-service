'use strict';

const {json} = require('micro');
const fetch = require('node-fetch')

module.exports = async (req, res) => {
	// const body = await json(req);

	// let's echo the text
	// return {text: body.text};
  // return 'Data logged to your console'

  const response = await fetch('https://apiv2.okoer.com/v2/articles?type=news')
  const json = await response.json()
  console.log(json)
  return json
};

// module.exports = (req, res) => 'Welcome to micro'
