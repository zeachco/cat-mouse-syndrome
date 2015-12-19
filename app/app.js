(function() {

var AppComponent = ng
  .Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
  })
  .Class({
    constructor: function () { }
  });

document.addEventListener('DOMContentLoaded', function() {
  ng.bootstrap(AppComponent);
});

})();

/* Non DSL Approach */
(function() {

function  AppComponent () {}

AppComponent.annotations = [
  new ng.Component({
    selector: 'my-app',
    template: '<h1 id="output">My First Angular 2 App</h1>'
  })
];
})();
