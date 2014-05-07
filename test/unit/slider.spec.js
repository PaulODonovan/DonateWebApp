describe('Slider', function () {
	var $rootScope, $compile, $scope, element;

	// var spinner = angular.element('<spinner amount="200"></spinner>');

	beforeEach(module('directive.slider'));
	// beforeEach(module('directive.spinner'));
	beforeEach(inject( function ( _$rootScope_, _$compile_ ) {
		$rootScope = _$rootScope_;
		$compile = _$compile_;

		// Set up the scope.
		$scope = $rootScope.$new();
		$scope.number = "5";
		$scope.spinner = angular.element('<spinner amount="amount"></spinner>');

		// Render the element.
		element = angular.element('<slider amount="number"></slider>');
		$compile(element)($scope);
		$scope.$digest();
	}));


	xit('should bi-directional binding between "amount" and the given variable ("number")', function () {
		expect( parseInt(element.isolateScope().amount) ).toEqual( element.$scope().number );

		//  number -> amount
		$scope.number = "10";
		$scope.$digest();
		expect(  parseInt(element.isolateScope().amount) ).toEqual( element.$scope().number );

		// amount -> number
		element.isolateScope().amount = "4";
		$scope.$digest();
		expect(  parseInt(element.isolateScope().amount) ).toEqual( element.$scope().number );
	});
	// it('should do y when x', function () {

	// 	expect(true).toEqual(true);
	// 	console.log("Hello Paul!");
	// });


});
