(function() {
  'use strict';

  angular
    .module('demoNg')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
