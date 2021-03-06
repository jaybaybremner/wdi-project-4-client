angular
 .module('wdi-project-4')
 .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function LoginCtrl(User, CurrentUserService, $state) {
 const vm = this;

 vm.login = () => {
   User
     .login(vm.user).$promise
     .then(() => {
       CurrentUserService.getUser();
       $state.go('usersIndex');
     }, err => {
       console.log(err);
     });
 };
}
