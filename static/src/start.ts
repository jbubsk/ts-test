import * as angular from 'angular';
import Greeting from './copmonents/greetings';

const bootstrapElement = document.getElementById('application');
const application = angular.module('mainModule', [Greeting.name])
    .controller('MainController', function() {
        this.hey = 'hey dude! come on!';
    });

angular.bootstrap(bootstrapElement, [application.name]);