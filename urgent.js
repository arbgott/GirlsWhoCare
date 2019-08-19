var GoHealthUrgentCareApi = require('go_health_urgent_care_api');

var api = new GoHealthUrgentCareApi.CenterInfoApi()

var authtoken = authtoken_example; // {String} Authorization token to use the API

var opts = {
  'market': market_example, // {String} GoHealth market to retreive info (latitude and longitude are ignored if market is entered).  Current supported options are 'NY', 'NW', 'CA', 'CT', 'SGF', 'STL', 'OKC', 'NWAR', 'NC'
  'latitude': 3.4, // {Float} Latitude component of location.
  'longitude': 3.4, // {Float} Longitude component of location.
  'maxdistance': 3.4 // {Float} Maximum distance/radius to check for nearby clinics in miles.  Default is 25 miles.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.centerInfoGet(authtoken, opts, callback);
