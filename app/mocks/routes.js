module.exports = [

  // sample API service
  { url:'/api/users', method: 'GET', run: 'api/users#get'},
  { url:'/api/users', method: 'POST', run: 'api/users#post'},
  { url:/^\/api\/users\/(\d+)/, method: 'GET', run: 'api/users#getById'},
  { url:/^\/api\/users\/(\d+)/, method: 'PUT', run: 'api/users#putById'},
  { url:/^\/api\/users\/(\d+)/, method: 'DELETE', run: 'api/users#deleteById'},

];
