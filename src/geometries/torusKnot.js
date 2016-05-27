var registerGeometry = require('../core/geometry').registerGeometry;
var THREE = require('../lib/three');

registerGeometry('torusKnot', {
  schema: {
    p: {default: 2, min: 1, type: 'int'},
    q: {default: 3, min: 1, type: 'int'},
    radius: {default: 1, min: 0},
    radiusTubular: {default: 0.2, min: 0},
    segmentsRadial: {efault: 36, min: 3, type: 'int'},
    segmentsTubular: {default: 100, min: 3, type: 'int'}
  },

  init: function (data) {
    this.geometry = new THREE.TorusKnotGeometry(
      data.radius, data.radiusTubular * 2, data.segmentsTubular, data.segmentsRadial,
      data.p, data.q);
  }
});
