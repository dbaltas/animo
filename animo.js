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
Router.configure({
  // the default layout
  // https://www.codetutorial.io/meteor-routing-and-layout/
  layoutTemplate: 'layout'
});

    Router.route('/browse', function () {
      this.render('browse');
      this.layout('layout');
    });

    Router.route('/', function () {
      this.render('index');
      this.layout('layout');
    });

    Router.route('/foo', function () {
      this.render('foo');
      this.layout('layout');
    });

    Router.route('/error', function () {
      this.render('error');
      this.layout('layout');
    });