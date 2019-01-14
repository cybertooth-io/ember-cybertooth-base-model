/* eslint-env node */
module.exports = {
  description: 'Implementation of a Base model that leverages Rails Active Record timestamp fields. Additional helper functions are provided to query model status/persistence.',

  name: 'ember-cybertooth-base-model',

  normalizeEntityName: function () {
  },

  afterInstall: function (/*options*/) {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-data' }
      ]
    });
  }
};
