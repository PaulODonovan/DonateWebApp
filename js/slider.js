var rangeVal = 0;
var elem = document.querySelector('.js-range');

angular.module('app', [])

.controller('DonationCtrl', function ( $scope ) {

	$scope.projects = [
		{
			name: 'Rainwater Harvesting Tanks',
			target: 10000,
			raised: 1000,
			ration: 0.4
		},
		{
			name: 'Girls Secondary School',
			target: 17000,
			raised: 5000,
			ration: 0.3
		},
		{
			name: 'Agriculture and Environmental Conservation',
			target: 50000,
			raised: 2000,
			ration: 0.2
		},
		{
			name: 'Underprivileged Children Program',
			target: 23000,
			raised: 5000,
			ration: 0.075
		},
		{
			name: 'Food & Seed Store',
			target: 27000,
			raised: 5500,
			ration: 0.025
		}
	];

// For Loop to add total raised
	$scope.totalRaised = function ($scope) {
		var project = $scope.projects;
		var totalRaisedAmount = 0;
		for (i=0; i<project.length; i++) {
			totalRaisedAmount += project[i].raised;
			console.log(project[i].name + " has raised : " + project[i].raised);
			console.log("totalRaisedAmount: " + totalRaisedAmount);
		}
		return totalRaisedAmount;

	};

	$scope.totalRaisedAmount = $scope.totalRaised ($scope);

})

.directive('slider', function () {
	return {
		restrict: 'E',
		template: '<input type="text" class="js-range"/>',
		replace: true,
		// scope: {
		// 	project: '='
		// },
		link: function ( scope, elem, attr ) {
			elem = elem[0]
			new Powerange(elem, {
				min: 0,
				max: 10000,
				start: scope.totalRaisedAmount || 0,
				callback: function () {
					//console.log(arguments);
					rangeVal = elem.value;
					console.log("rangeVal: " + rangeVal);
					adjustProgressBar (elem);
				}
			});
		}

	};
})



.directive('progressBar', function () {
	return {
		restrict: 'E',
		template: '<div class="bar"><div class="barFill" style="width:{{ percentage }}%;"></div></div>',
		replace: true,
		scope: {
			project: '='
		},
		link: function ( scope, element, attr ) {
			scope.$watch('project.raised', function () {
				// scope.percentage = scope.project.raised / scope.project.target * 100;
				var ration = rangeVal * scope.project.ration
				console.log("Ration for " + scope.project.name + " : " + ration);
				scope.percentage = (ration + scope.project.raised) / scope.project.target * 100
			});
		}
	};
});


