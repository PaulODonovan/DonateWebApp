

describe('Spinner', function () {
	var $rootScope, $compile, $scope, element;

	beforeEach(module('directive.spinner'));
	beforeEach(inject( function ( _$rootScope_, _$compile_ ) {
		$rootScope = _$rootScope_;
		$compile = _$compile_;

		// Set up the scope.
		$scope = $rootScope.$new();
		$scope.number = 5;

		// Render the element.
		element = angular.element('<spinner amount="number"></spinner>');
		$compile(element)($scope);
		$scope.$digest();
	}));



// // LOGIC STARTED BUT NOT FINISHED YET, I don't know how to integrate/reference the for loop here. Should I use element.isolateScope()?

// 	// first find sum of all project donations
// 	$scope.sumProjectDonations = function ($scope) {
// 		var project = $scope.projects;
// 		var sumProjects = 0;
// 		for (i=0; i<project.length; i++) {
// 			sumProjects += project[i].donation;
// 			console.log("donation for " `+ project[i].name + " : " + project[i].donation);
// 		}
// 		return sumProjects;
// 	};
// 	$scope.sumProjects = $scope.sumProjectDonations ($scope);
// 	var sumProjects = $scope.sumProjects;
// 	console.log("sumProjects : " + sumProjects);


	xit('the sum of all project.donations should equal the donation "amount"', function () {
		expect( element.isolateScope().amount ).toEqual( sumProjects );

	});
});