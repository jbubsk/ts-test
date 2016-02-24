import * as angular from 'angular';
const template = require('./app.template.html');

interface IAppController {
    greeting:string;
    getGreet: () => string
}
class AppController implements IAppController {
    greeting:string = 'Hey application';

    getGreet = () => {
        return this.greeting + ': from function!';
    }
}

export default angular.module('App', [])
    .component('app', {
        controller: AppController,
        controllerAs: 'appCtrl',
        template: template
    });