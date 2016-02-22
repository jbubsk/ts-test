import * as angular from 'angular';

function greetingsController() {
    this.getGreet = () => {
        return this.greeting + ' 11112';
    }
}

export default angular.module('Greetings', [])
    .component('greetings', {
        controller: greetingsController,
        controllerAs: 'greetingsCtrl',
        template: `<div ng-bind="greetingsCtrl.getGreet()"></div>`,
        bindings: {
            greeting: '='
        }
    });