(function(window, undefined) {
  var dictionary = {
    "7ff1ec08-783b-462c-b05d-3027b8b92242": "autocompletar",
    "7f9941bf-1550-40ec-bd47-5c9a5b382925": "añadir recurso mini",
    "8b360097-b1f3-417b-9792-1dff556b253e": "acceder a un recurso mini",
    "990f5dbc-0c8b-46cd-a7ce-27aeae4a70ff": "crear alerta mini",
    "64ceef17-3bc9-419a-b976-4f314434498a": "recursos_mini",
    "c01fea92-a9f8-431e-a1ff-9c500c25cba9": "establecimiento mini",
    "1477b27a-0968-408f-acfe-78f820e423b0": "aforo mini",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);