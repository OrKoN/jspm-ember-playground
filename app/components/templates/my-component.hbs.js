import Ember from "ember";
export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@1.13.0-beta.1.6b66cf46",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 8
        }
      }
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createTextNode("This is component's content\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["inline","input",[],["value",["subexpr","@mut",[["get","key"]],[]]]],
      ["content","test"]
    ],
    locals: [],
    templates: []
  };
}()));