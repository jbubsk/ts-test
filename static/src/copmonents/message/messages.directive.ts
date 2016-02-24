export default function ():ng.IDirective {
    return {
        transclude: true,
        template: `<div><ng-transclude></ng-transclude></div>`,
        link: function (scope, element, attrs) {

        }
    }
}