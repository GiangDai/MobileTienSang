const siteRouters = require('./site.route');

const adminRouters = require('./admin.route');

function route(app){
  
  app.use('/admin',adminRouters);

  app.use('/',siteRouters);
  

   
}

module.exports = route;