'use strict';
function handleClick(event) {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}
const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('$button does not exist');
$clickButton.addEventListener('click', handleClick);
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}
const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('$hoverButton does not exist');
$hoverButton.addEventListener('mouseover', handleMouseover);
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}
const $doubleClick = document.querySelector('.double-click-button');
if (!$doubleClick) throw new Error('$doubleClick does not exist');
$doubleClick.addEventListener('dblclick', handleDoubleClick);
