angular.module('app', [])

.controller('DonationCtrl', function ( $scope ) {

	$scope.projects = [
		{
			name: 'Rainwater Harvesting Tanks',
			target: 1000,
			amount: 0,
			ration: 0.2
		},
		{
			name: 'Girls Secondary School',
			target: 2000,
			amount: 500,
			ration: 0.5
		}
	];

})

.directive('slider', function () {
	return {
		restrict: 'E',
		template: '<input type="text">',
		replace: true,
		scope: {
			project: '='
		},
		link: function ( scope, element, attr ) {
			new Powerange(element[0], {
				min: 0,
				max: scope.project.target,
				start: scope.project.amount || 0,
				callback: function () {
					console.log(arguments);
				}
			});
		}

	};
})


.directive('progressBar', function () {
	return {
		restrict: 'E',
		template: '<div class="Bar"><div class="BarFill" style="width:{{ percentage }}%;"></div></div>',
		replace: true,
		scope: {
			project: '='
		},
		link: function ( scope, element, attr ) {
			scope.$watch('project.amount', function () {
				scope.percentage = scope.project.amount / scope.project.target * 100;
			});
		}
	};
});
