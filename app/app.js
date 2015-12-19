var angular = require('angular2/bundles/angular2');

// Create Main App Component
function AppComponent() {
  this.version = "1.0.0";
  this.items = ["Header", "Content", "Footer"];
};

AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'my-app'
  }),
  new angular.ViewAnnotation({
    template: '\
                <div>App Version:{{version}}</div>\
                <div *for="#item of items">{{item}}</div>\
                <sub></sub>',
    directives: [SubComponent, angular.For]
  })
];

// Create Sub Component
function SubComponent() {
  this.name = "Sub Component";
};
SubComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'sub'
  }),
  new angular.ViewAnnotation({
    template: '<div>{{name}}</div>'
  })
];


// Bootstrap Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('yay');
  angular.bootstrap(AppComponent);
});
