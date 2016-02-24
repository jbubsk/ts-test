import * as angular from 'angular';
import messagesSidebar from './messages.directive';
const template = require('./message.template.html');

interface IMessageController {
    message:string
    getMsg: () => string;
}

class MessageController implements IMessageController {
    message:string = 'I`m message';
    private count;

    getMsg() {
        return this.message + ' ' + this.count;
    }
}

export default angular.module('Message', [])
    .component('message', {
        controller: MessageController,
        controllerAs: 'msgCtrl',
        template: template,
        bindings: {
            count: '='
        }
    })
    .directive('messagesSidebar', messagesSidebar);