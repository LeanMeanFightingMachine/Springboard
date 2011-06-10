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
	
	this._controller.listen(this, namespace.project.Notification.TIME_UPDATED, this.updateTime);
}

/**
 * The message to prefix the current time with
 * @const
 * @type {string}
 */
namespace.project.View.TIME_PREFIX = "The Time Is: ";

/**
 * Updates the current time displayed in the view
 * @param {Date} time The time to display
 */
namespace.project.View.prototype.updateTime = function( ) {
	this._dom.output.html( namespace.project.View.TIME_PREFIX + this._model.getTime().toString() );
}