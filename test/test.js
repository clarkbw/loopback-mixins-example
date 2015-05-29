

describe('mixin example', function() {
  'use strict';

  it('should load the module mixin', function() {
    console.log(app.models.Dog.definition.properties);
    assert.ok(app.models.Dog.definition.properties.createdAt,
      'missing createdAt');
    assert.ok(app.models.Dog.definition.properties.updatedAt,
      'missing updatedAt');
  });

  it('should load the local mixin', function() {
    assert.ok(app.models.Dog.definition.properties.tag, 'missing tag');
  });
});
