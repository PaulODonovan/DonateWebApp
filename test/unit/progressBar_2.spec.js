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

	it('the percentage (width) of the progressBar should equal project.raised plus project.donation divided by project.target', function () {
		// Are they equal? - Working
		$scope.raisedPlusDonation = $scope.project.raised + $scope.project.donation;
		$scope.tar = $scope.project.target;
		$scope.percent = element.isolateScope().percentage;
		expect( $scope.percent / 100 ).toEqual( $scope.raisedPlusDonation / $scope.tar)
		console.log( $scope.percent / 100 + " = " + $scope.raisedPlusDonation / $scope.tar + " ?");


		// Change amount - Working
		$scope.amount = 600;
		$scope.$digest();
		// update variables
		$scope.raisedPlusDonation = $scope.project.raised + $scope.project.donation;
		$scope.tar = $scope.project.target;
		$scope.percent = element.isolateScope().percentage;
		// expect
		expect( $scope.percent / 100 ).toEqual( $scope.raisedPlusDonation / $scope.tar)
		console.log( $scope.percent / 100 + " = " + $scope.raisedPlusDonation / $scope.tar + " ?");


		// Change Ration - Gives Success but not working because numbers don't change
		$scope.project.ration = 0.5;
		$scope.$digest();
		// update variables
		$scope.raisedPlusDonation = $scope.project.raised + $scope.project.donation;
		$scope.tar = $scope.project.target;
		$scope.percent = element.isolateScope().percentage;
		// expect
		expect( $scope.percent / 100 ).toEqual( $scope.raisedPlusDonation / $scope.tar)
		console.log( $scope.percent / 100 + " = " + $scope.raisedPlusDonation / $scope.tar + " ?");


		// Change target - Not Working
		$scope.project.target = 1000;
		$scope.$digest();
		// update variables
		$scope.raisedPlusDonation = $scope.project.raised + $scope.project.donation;
		$scope.tar = $scope.project.target;
		$scope.percent = element.isolateScope().percentage;
		// //$scope.project.donation = parseInt($scope.amount) * $scope.project.ration;

		console.log( "$scope.project.donation : " + $scope.project.donation);
		console.log( "$scope.percent : " + $scope.percent); 
		console.log( "element.isolateScope().percentage : " + element.isolateScope().percentage);
		// expect
		expect( $scope.percent / 100 ).toEqual( $scope.raisedPlusDonation / $scope.tar)
		console.log( $scope.percent / 100 + " = " + $scope.raisedPlusDonation / $scope.tar + " ?");
	}); 
	


});