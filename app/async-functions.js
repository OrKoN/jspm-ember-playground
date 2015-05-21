import Ember from 'ember';

async function chainAnimationsAsync(elem, animations) {
  var ret = null;
  try {
    for (var anim of animations) {
      ret = await anim(elem);
    }
    ret = 'nothing found';
  } catch (e) {
    /* ignore and keep going */
    console.log(e);
  }

  return ret;
}

var p = chainAnimationsAsync(document.getElementsByTagName('body')[0], []);
p.then((result) => {
  console.log(result);
});