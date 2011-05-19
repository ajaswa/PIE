var p = window['PIE'],
    el = element;
// need to define the queue 
  p.queue = p.queue || [];
function init(el) {
    if( p && doc.media !== 'print' ) { // IE strangely attaches a second copy of the behavior to elements when printing
        p['attach']( el );
    }
}

function cleanup() {
    if (p) {
        p['detach']( el );
        p = el = 0;
    }
}
// push the current el and init to the queue
p.queue.push({el: element, fn: init});
p['dequeue'] = function() {
  // recursive function to call each one of the queue item's init functions 
  if (p.queue.length > 0) {
    var item = p.queue.shift();
    item.fn(item.el);
    p['dequeue']();
  }
};



