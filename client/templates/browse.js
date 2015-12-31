console.log('hey');
console.log(Meteor.userId());

Template.browse.rendered = function(){
	if (!Meteor.userId()) {
		Router.go('/error');
	}
};
