'use strict';

/* コールバック用関数定義 */
var conf = {
    init: function($stateProvider, $urlRouterProvider) {
      // 以下のステートに該当しない場合
      $urlRouterProvider.otherwise('/');

      // ステートによるルーティング指定
      $stateProvider
        .state('root',
            { url: '/', templateUrl: './views/_layout.html', controller: 'LayoutController', controllerAs: 'me' }
        )
        .state('root.home',
            { url: '/home', templateUrl: './views/home.html', controller: 'HomeController', controllerAs: 'me' }
        )
        .state('root.menu1',
            { url: '/menu1', templateUrl: './views/menu1.html', controller: 'Menu1Controller', controllerAs: 'me' }
        )
        .state('root.menu2',
            { url: '/menu2', templateUrl: './views/menu2.html', controller: 'Menu2Controller', controllerAs: 'me' }
        )
        .state('root.menu3',
            { url: '/menu3', templateUrl: './views/menu3.html', controller: 'Menu3Controller', controllerAs: 'me' }
        );
    }
}

/* App Module */
angular.module('myApp', ['ui.router', 'myControllers', 'myServices', 'myDirectives', 'myFilters'])
  .config(['$stateProvider', '$urlRouterProvider', conf.init]);
