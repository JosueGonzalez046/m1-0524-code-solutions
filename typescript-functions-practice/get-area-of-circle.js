'use strict';
/* exported getAreaOfCircle */
function getAreaOfCircle(radius) {
  const radiusSquared = radius * radius;
  const area = Math.PI * radiusSquared;
  return area;
}
