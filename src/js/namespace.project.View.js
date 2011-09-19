goog.provide('namespace.project.View');

goog.require('namespace.project.Model');
goog.require('namespace.project.Controller');

goog.require('Logger');

/**
 * View component of the Model View Controller implementation
 * @param {*} model The model for this view
 * @param {*} controller The controller for this view
 * @param {Object} dom References to DOM objects used in this view
 * @constructor
 */
namespace.project.View = function( model, controller, dom ) {
	
	this._controller = controller;
	this._model = model;
	this._dom = dom;
	
	var self = this;
	
	this._controller.listen(this, namespace.project.Notification.START, this.start);
}


/**
 * Start the view
 */
namespace.project.View.prototype.start = function( ) {
	
}