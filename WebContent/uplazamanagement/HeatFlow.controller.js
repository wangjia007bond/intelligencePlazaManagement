sap.ui.controller("uplazamanagement.HeatFlow", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf uplazamanagement.HeatFlow
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf uplazamanagement.HeatFlow
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf uplazamanagement.HeatFlow
*/
	onAfterRendering: function() {
		setTimeout('$(".heatMap1").animate({opacity: 0.0},4000);',4000);
		setTimeout('$(".heatMap2").animate({opacity: 1.0},4000);',3000);
		setTimeout('$(".heatMap2").animate({opacity: 0.0},4000);',8000);
		setTimeout('$(".heatMap3").animate({opacity: 1.0},4000);',7000);
		setTimeout('$(".heatMap3").animate({opacity: 0.0},4000);',12000);
		setTimeout('$(".heatMap4").animate({opacity: 1.0},4000);',11000);
		setTimeout('$(".heatMap4").animate({opacity: 0.0},4000);',16000);
		setTimeout('$(".heatMap5").animate({opacity: 1.0},4000);',15000);
		setTimeout('$(".heatMap5").animate({opacity: 0.0},4000);',20000);
		setTimeout('$(".heatMap6").animate({opacity: 1.0},4000);',19000);
		
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf uplazamanagement.HeatFlow
*/
//	onExit: function() {
//
//	}

});