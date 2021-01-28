(function(window, undefined) {
  var dictionary = {
    "18b168ee-1027-475b-978b-33b22ae244bb": "Establecimiento",
    "87005a02-c5b5-4b35-bb3b-89deb68730e1": "Buscar recursos",
    "70724443-ee33-441d-8e57-8a3612ab3ae2": "Recursos",
    "a4d01116-d41e-4e4d-9785-553f93aa2979": "Establecimiento empleado",
    "5c8ef2af-86e0-4299-816b-d8bdc474e9c7": "Aforo",
    "270208e3-9607-45e3-bda4-c2bc2690ac50": "Alertas",
    "8184a626-2988-47e8-b733-ecd2a1b66ce0": "busqueda Aforo",
    "5620e0ad-ac4a-44fa-9533-84a0b62a2cd4": "Acceder a recurso",
    "06a2be05-5ae2-4de9-9730-6967e4053fc7": "Modificar recurso",
    "7e5c5424-b646-4a30-bf76-5b8a61b211c8": "Aforo empleado",
    "84de12b1-4b88-43b8-b3c7-033e9970623e": "Crear alerta",
    "0c051e48-b402-44cd-8c45-6b51c2ddbe25": "busqueda Aforo empleado",
    "4e8c0b65-b323-4098-94b8-8af0cc9c44de": "Borrar recurso",
    "8d2dd3e4-0f17-4222-a493-926fb4002091": "Alertas empleado",
    "84e2b6ef-b607-46f5-8e15-4f3485fac7ed": "Añadir recursos",
    "ad27cc26-e7fe-44f5-ba41-05f68ebd8422": "Iniciar sesion aforo",
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