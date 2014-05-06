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
			ration: 0.4,
		},
		$scope.amount = 500;
		

		// Render the element.
		element = angular.element('<progress-bar amount="{{amount}}" project="project" ></progress-bar>');
		$compile(element)($scope);
		$scope.$digest();
	}));

	xit('the percentage (width) of the progressBar should equal project.raised plus project.donation divided by project.target', function () {
		expect( element.isolateScope().percentage / 100 ).toEqual( ($scope.project.raised + $scope.project.donation) / $scope.project.target);
	});


});