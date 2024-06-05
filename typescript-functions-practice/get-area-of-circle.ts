/* exported getAreaOfCircle */
function getAreaOfCircle(radius: number): number {
  const radiusSquared: number = radius * radius;
  const area: number = Math.PI * radiusSquared;
  return area;
}
