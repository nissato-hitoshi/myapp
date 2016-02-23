'use strict';

/* コールバック用関数定義 */
var controllers = {
    LayoutController: function($state, Navbar) {
        var vm = this;
        vm.navbar = Navbar.get();
        $state.go('root.home');
    },
    HomeController: function() {
        var vm = this;
        vm.msg = "サンプル AngularJS Home ！！";
    },
    Menu1Controller: function() {
        var vm = this;
        vm.msg = "Menu1 ページ ！！";
    },
    Menu2Controller: function() {
        var vm = this;
        vm.msg = "Menu2 ページ ！！";
    },
    Menu3Controller: function() {
        var vm = this;
        vm.msg = "Menu3 ページ ！！";
    }
}

/* Controllers */
angular.module('myControllers', [])
  .controller('LayoutController', ['$state', 'Navbar', controllers.LayoutController])
  .controller('HomeController', controllers.HomeController)
  .controller('Menu1Controller', controllers.Menu1Controller)
  .controller('Menu2Controller', controllers.Menu2Controller)
  .controller('Menu3Controller', controllers.Menu3Controller);
