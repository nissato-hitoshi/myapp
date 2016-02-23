'use strict';

/* コールバック用関数定義 */
var services = {
    getNavbar: function($resource) {
        return $resource('/api/navbar', {}, {
          'get': { method: 'GET', params:{}, isArray:false }
        });
    }
}

/* Services */
angular.module('myServices', ['ngResource'])
  .factory('Navbar', ['$resource', services.getNavbar]);
