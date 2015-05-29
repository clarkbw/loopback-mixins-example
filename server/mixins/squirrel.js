// the directory this mixin exists in is the default directory for a mixin
// however this mixin won't be loaded because the model-config.json file
// has specified other directories to load
module.exports = function(Model, options) {
  'use strict';

  // remove mixins attribute from model-config.json and this will be loaded
  Model.observe('before save', function event(ctx, next) {
    if (ctx.instance) {
      ctx.instance.squirrel = true;
    } else {
      ctx.data.squirrel = true;
    }
    next();
  });

};
