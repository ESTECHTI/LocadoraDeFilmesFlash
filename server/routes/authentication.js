module.exports = (app) => {
  const authentication = app.controllers.authentication;
  app.routes.post('/forgot', authentication.forgot);
  app.routes.post('/login', authentication.login);
  app.routes.post('/register', authentication.register);
  app.routes.post('/reset/:email/:token', authentication.checkReset);
  app.routes.post('/reset', authentication.reset);
}
