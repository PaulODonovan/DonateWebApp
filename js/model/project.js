(function ( win ) {
	"use strict";

	function Project ( name, target, amount, ratio) {
		this.name = name;
		this.target = target;
		this.amount = amount || 0;
		this.ration = ratio || 1;
	}


	Project.prototype = {

		getComplete: function () {
			return this.target - this.amount;
		}

	};

	// export
	win.Project = Project;
})( window );
