'use strict';

/**
 * @ngdoc service
 * @name stoogeBloggerzApp.authors
 * @description
 * # authors
 * Service in the stoogeBloggerzApp.
 */
angular.module('stoogeBloggerzApp')
  .service('authors', function authors() {
   return {
  		getAuthors: function(){
  			return [
 				'Larry', 'Curly', 'Moe'
				];
  		}
  	
  }});
