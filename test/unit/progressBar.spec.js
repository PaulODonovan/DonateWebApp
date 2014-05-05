describe('ProgressBar', function () {
	var $rootScope, $compile, $scope, element;

	beforeEach(module('directive.progressbar'));
	beforeEach(inject( function ( _$rootScope_, _$compile_ ) {
		$rootScope = _$rootScope_;
		$compile = _$compile_;

		// Set up the scope.
		$scope = $rootScope.$new();
		$scope.project = {
			name: 'Rainwater Harvesting Tanks',
			target: 10000,
			raised: 1000,
			ration: 0.4
		},
		$scope.amount = 500;

		// Render the element.
		element = angular.element('<progress-bar amount="{{ amount }}" project="project" ></progress-bar>');
		$compile(element)($scope);
		$scope.$digest();
	}));

	xit('should give a project donation, "project.donation" that is a product of "amount" and "project.ration"', function () {
		console.log('amount', element.isolateScope().amount);
		expect( $scope.project.ration ).toEqual( $scope.project.donation / element.isolateScope().amount );
	});
});