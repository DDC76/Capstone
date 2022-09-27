import html from "html-literal";

export default state => html`
  <section id="Maps">
    <form id="maps" method="Search" action=" "></form>
<h2>Let's plan a route</h2>
<div> 
<label for="Location">Map:</label>
        <select id="Local" name="Rides">
          <option value="">'GET'</option>
            </select>
      </div>
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
  params: {latlng: '40.714224,-73.96145', language: 'en'},
  headers: {
    'X-RapidAPI-Key': '6abfe24913msh71dbee813a74c24p1e6de0jsn9e02cda21d8a',
    'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});