Template.browse.rendered = function(){
	if (!Meteor.userId()) {
		Router.go('/error');
	}
};
