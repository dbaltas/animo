if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

}

    Router.route('/browse', function () {
      this.render('browse');
    });

    Router.route('/', function () {
      this.render('index');
    });

    Router.route('/foo', function () {
      this.render('foo');
    });

    Router.route('/error', function () {
      this.render('error');
    });