describe('Slider', function () {
	var $rootScope, $compile, $scope, element;

	beforeEach(module('directive.slider'));
	beforeEach(inject( function ( _$rootScope_, _$compile_ ) {
		$rootScope = _$rootScope_;
		$compile = _$compile_;

		// Set up the scope.
		$scope = $rootScope.$new();
		$scope.number = 5;

		// Render the element.
		element = angular.element('<slider amount="number"></slider>');
		$compile(element)($scope);
		$scope.$digest();
	}));


	it('should bi-directional binding between "amount" and the given variable ("number")', function () {
		expect( element.isolateScope().amount ).toEqual( element.scope().number );

		//  number -> amount
		$scope.number = 10;
		$scope.$digest();
		expect( element.isolateScope().amount ).toEqual( element.scope().number );

		// amount -> number
		element.isolateScope().amount = 4;
		$scope.$digest();
		expect( element.isolateScope().amount ).toEqual( element.scope().number );
	});
});
