import * as angular from 'angular';
import App from './copmonents/app/app';
import Message from './copmonents/message/message';

const bootstrapElement = document.getElementById('application');
const application = angular.module('mainModule', [
        App.name,
        Message.name
    ]);

angular.bootstrap(bootstrapElement, [application.name]);