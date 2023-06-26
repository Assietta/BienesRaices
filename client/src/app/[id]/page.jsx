

'use client'
import { StarIcon } from "@heroicons/react/20/solid";
import { getPropById } from '../../redux/actions'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const hardcoding = [
  {
    "id": "ef75008d-2166-4a1b-b6f0-a7ddfdeee92f",
    "address": "Av. Libertador al 3700 - Departamento triplex - 5 ambientes con la mejor vista de La Lucila  ",
    "bathroom_amount": 2,
    "age": 20,
    "description": "Excelente Triplex en la Lucila con una vista inigualable y abierta a Capital y Zona Norte !\n\nPrimer Piso:\nSe ingresa a través del palier que da paso al hall de entrada, aquí nos encontramos con la recepción (living/comedor) que tiene salida a un balcón con vista a Av. Libertador el cual es bastante espacioso.\nLuego pasamos al comedor diario que se encuentra separado de la cocina con una increíble vista al río y la Capital Federal.\nLa cocina es muy luminosa con lavadero integrado.\nToillete de invitados\n\nSegundo Piso:\n- Dormitorio principal en suite con vestidor\n- Baño completo\n- 2 dormitorios\n- Escritorio (adaptable a dormitorio)\nTodos con vista al río\n\nTercer Piso: \nNos encontramos con un último cuarto (actualmente utilizado como sala de música) , el cual tiene salida a una terraza descubierta propia con una hermosa vista.\n\nPosee:\n\n-Calefacción/Refrigeración por sistema VRV\n-Aberturas A30\n-Expensas $30.000\n\n¿Te interesa? Consultanos !\n\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a titulo estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del titulo de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nCOTI en trámite\n\nMatriculado Responsable Martin Raitarski \n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\r\n        ",
    "disposition": "Frente",
    "expenses": 36000,
    "floors_amount": 3,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 499000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Noreste",
    "parking_lot_amount": 1,
    "photos": [
      "https://static.tokkobroker.com/pictures/22334861510224545173193731131556735583670708199186548830424518703576957529946.jpg",
      "https://static.tokkobroker.com/pictures/115606219735444248104964290058695829842247960845719879017307016310819134082228.jpg",
      "https://static.tokkobroker.com/pictures/3944811519236604369120880781062648793000677234971251618892686718640039499301.jpg",
      "https://static.tokkobroker.com/pictures/3178878856307478591790657157334678344767194302011850595048108250113783709377.jpg",
      "https://static.tokkobroker.com/pictures/64515335906981345318381016264476106238393257792686495961662716601725920777883.jpg",
      "https://static.tokkobroker.com/pictures/93714884992920615620730141731389885444186096762971943954608388344817380010310.jpg",
      "https://static.tokkobroker.com/pictures/26344276680235419777992645840526523465958186778999951926948090106659884378942.jpg",
      "https://static.tokkobroker.com/pictures/53640250896802254513691018085803973245632468165481657891090898936323045817686.jpg",
      "https://static.tokkobroker.com/pictures/59192744085141561679356868470217773796731748999744391897026323742819012116380.jpg",
      "https://static.tokkobroker.com/pictures/42249994702093657379651436025105463773244882325992802488418087791238323941045.jpg",
      "https://static.tokkobroker.com/pictures/17016735906834465207740409282213622354001923521739737659042083215811902723211.jpg",
      "https://static.tokkobroker.com/pictures/56537953521833221294874771173840841708378049720329090607316960912234098267421.jpg",
      "https://static.tokkobroker.com/pictures/35064098487339338746165454914991364007538624791395957737455674762634085690369.jpg",
      "https://static.tokkobroker.com/pictures/97372737538307620298470590524260051524640381811195816274379702121046811560909.jpg",
      "https://static.tokkobroker.com/pictures/34717971908634940911423481013581795783168759103598513610158633286830417097098.jpg",
      "https://static.tokkobroker.com/pictures/24980209457688376061303277679959388985256680573042644180335228310898394188139.jpg",
      "https://static.tokkobroker.com/pictures/115465144640190325891999597841181149537120727595133767943747788165483430888134.jpg",
      "https://static.tokkobroker.com/pictures/83658238086351784512365581898026288441211775264811504873878389066699957160119.jpg",
      "https://static.tokkobroker.com/pictures/65727243146746059104597436762311849379705542144200406585118629366216303447213.jpg",
      "https://static.tokkobroker.com/pictures/114731921543314121342972872172770618250114498598805432727663922283402624137378.jpg",
      "https://static.tokkobroker.com/pictures/109474183514257882104943574018183992114072689857206897600680307617614823236917.jpg",
      "https://static.tokkobroker.com/pictures/76389072705978398548045681696537366091534183065142714343829480872710250149442.jpg",
      "https://static.tokkobroker.com/pictures/5721585229837216650888433487299984673161260043132601205565793892503621575317.jpg",
      "https://static.tokkobroker.com/pictures/56056628149133115960921761700194975022187517001434365218326376412307735139821.jpg",
      "https://static.tokkobroker.com/pictures/95177053632427210390949867163955123827033030956955262267582960115168542623288.jpg",
      "https://static.tokkobroker.com/pictures/39090698782215375673566930228630834068812892385241421095669970927688498377448.jpg",
      "https://static.tokkobroker.com/pictures/106338438656275248934217222275272754690416177648852234312595104007521061658047.jpg",
      "https://static.tokkobroker.com/pictures/34829992818323914905843800632664670508746380725903584310574011848449248523899.jpg",
      "https://static.tokkobroker.com/pictures/40702009036071623683249559581400950493606246097921437025003089017832067240067.jpg",
      "https://static.tokkobroker.com/pictures/15146143728714303600918118391163697248228017875296498441641960885689755698317.jpg",
      "https://static.tokkobroker.com/pictures/106622932796426593076462247171041900885679289032272237596055297202438163003162.jpg",
      "https://static.tokkobroker.com/pictures/52026713077766842852229420737609329274415719579079769465291521249236012233696.jpg"
    ],
    "real_address": "Av. Libertador 3731 8ºA",
    "property_condition": "Excelente",
    "roofed_surface": "164.00",
    "room_amount": 5,
    "semiroofed_surface": "11.50",
    "situation": "Habitada",
    "suite_amount": 3,
    "surface": "214.20",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 9,
        "name": "Altillo",
        "type": 2
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 11,
        "name": "Baulera",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 15,
        "name": "Dependencia",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 18,
        "name": "Hall",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 28,
        "name": "Aire Acondicionado individual",
        "type": 3
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 34,
        "name": "Hidromasaje",
        "type": 3
      },
      {
        "id": 38,
        "name": "Sala de juegos",
        "type": 3
      },
      {
        "id": 39,
        "name": "Sauna",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 42,
        "name": "Seguridad",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 168,
        "name": "Biblioteca",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1513,
        "name": "Calefacción por aire",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      },
      {
        "id": 1526,
        "name": "Seguridad Porteria",
        "type": 3
      },
      {
        "id": 1528,
        "name": "Apto crédito",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "214.20",
    "type": "Departamento",
    "unroofed_surface": "38.70",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.885Z",
    "updatedAt": "2023-06-26T17:39:05.885Z"
  },
  {
    "id": "b46b02ee-5fc2-4927-a592-194a2a83d433",
    "address": "Dorrego al 1500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Departamento de un ambiente con balcón - Live In Dorrego \n\n\n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021 \n\n- Descuentos por pago de contado \n\n\nLive In Dorrego: \n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con ca?maras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n\n\nAmenities: \n \n- SUM\n-Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \n\nExcelente ubicación: \n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías. \n\n\nUnidades disponibles: 17.\n\nDesde: U$S 92.700.\n\nCada unidad cuenta con: \n\n- Superficie cubierta: 34m2.\n- Espacioso balcón de 5m2.\n- Cocina completa con horno, anafe y barra desayunadora de granito o similar. \n- Baño completo con espejo, mesada de mármol y accesorios.\n- Placard con interiores. \n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar. \n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n¿Es lo que buscas? Consultanos \n\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a titulo estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del titulo de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nCOTI en trámite\n\nMatriculado Responsable Martin Raitarski CSI 6705",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 92700,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/70876726682423185590698696094898108629861446326290111271054014960984454751295.jpg",
      "https://static.tokkobroker.com/pictures/35793276478203985502646155025792195709228284925113525520697001122253974592278.jpg",
      "https://static.tokkobroker.com/pictures/95639714970988423857746880961938574393986055515330415667668330688186133232085.jpg",
      "https://static.tokkobroker.com/pictures/105104124069955007603320247139278153799475825405048356103157357978600493709556.jpg",
      "https://static.tokkobroker.com/pictures/34962666956300216730914020367368195094073753339924741439100895843149125929115.jpg",
      "https://static.tokkobroker.com/pictures/97890664884674639446754000569389997066321501117578930799093510733639679999389.jpg",
      "https://static.tokkobroker.com/pictures/79299583961150977503816025204783599382929608559161692026804000943099351903271.jpg",
      "https://static.tokkobroker.com/pictures/58711752010948597552147550173154916288008513933541239696689337056255609659669.jpg",
      "https://static.tokkobroker.com/pictures/48759535566982136549974309693246332713303672018544944827784849452352554775446.jpg",
      "https://static.tokkobroker.com/pictures/105998086977284355859029061023459075989833982033182098492008689476295273413653.jpg",
      "https://static.tokkobroker.com/pictures/38773555439479635318555486403597197423169983250568577505923994386182733400381.jpg"
    ],
    "real_address": "Av. Dorrego 1516",
    "property_condition": "Excelente",
    "roofed_surface": "34.00",
    "room_amount": 1,
    "semiroofed_surface": "5.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "39.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.902Z",
    "updatedAt": "2023-06-26T17:39:05.902Z"
  },
  {
    "id": "0b694285-2849-4eb5-a938-1adbd93b0da9",
    "address": "Dorrego al 1500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n\n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n\n- Descuentos por pago de contado\n\nLive In Dorrego:\n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con ca?maras de seguridad y locales comerciales en planta baja.\n\nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n\nAmenities:\n\n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n\nExcelente ubicación:\n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n\nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n\nUnidades disponibles de 34m2 hasta 148m2\n\nCada unidad cuenta con:\n\n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 80071,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/76043962967484532216364465145787041636733575698283045023106872151369789654838.jpg",
      "https://static.tokkobroker.com/pictures/115168805026316189910948803466553265586116932364813595338038685412639690348271.jpg",
      "https://static.tokkobroker.com/pictures/23796913657511685518953305239869769078011368369860263609465810936899846506786.jpg",
      "https://static.tokkobroker.com/pictures/14563845481257789970308909387481460186771004744236723147854659879104427266105.jpg",
      "https://static.tokkobroker.com/pictures/41408772027474474411983306388251192092508955385457688391523407398975642332443.jpg",
      "https://static.tokkobroker.com/pictures/7110792121128528031819820390618347195528240931531321901223372728526365971991.jpg",
      "https://static.tokkobroker.com/pictures/56491363952379800222196181334123361091339113215906132451926475179726879127996.jpg",
      "https://static.tokkobroker.com/pictures/46360880560950243433270042555801891822645718111873307538285522811904841049027.jpg",
      "https://static.tokkobroker.com/pictures/9190923764327608470203617686976805405154165181203081052499671361498752381663.jpg",
      "https://static.tokkobroker.com/pictures/29328243660663261275610089316424471996644046591551844999777765199824041472044.jpg",
      "https://static.tokkobroker.com/pictures/52248946805209478572453780543738962947793958736605837930796306017475706971831.jpg"
    ],
    "real_address": "Av. Dorrego 1516",
    "property_condition": "Excelente",
    "roofed_surface": "35.00",
    "room_amount": 1,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "35.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.910Z",
    "updatedAt": "2023-06-26T17:39:05.910Z"
  },
  {
    "id": "f9658a40-9af5-4380-ac40-48c74ac4ed2f",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Departamento divisible de un ambiente - Live In Dorrego \n\n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021 \n\nDescuentos por pago de contado \n\n\nLive In Dorrego: \n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con ca?maras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\nAmenities: \n \nSUM\nGimnasio totalmente equipado\nTerraza\nSector parrilla\nPiscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación: \n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías. \n\nUnidades disponibles: 7.\n\nCada unidad cuenta con: \n\n- Superficie cubierta: 44m2.\n- Posibilidad de dividir el ambiente. \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar. \n- Baño completo con espejo, mesada de mármol y accesorios.\n- Placard con interiores. \n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar. \n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n \n\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a titulo estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del titulo de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nCOTI en trámite\n\nMatriculado Responsable Martin Raitarski CSI 6705",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 104420,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/108103992542169765891398760006668862150495920049591393072583770981906312114124.jpg",
      "https://static.tokkobroker.com/pictures/30182331892810539311737182916622510007417830173960963380712929733951670923933.jpg",
      "https://static.tokkobroker.com/pictures/53016751144834554980895193493243259088508054383071890257973399664897482007793.jpg",
      "https://static.tokkobroker.com/pictures/72008771488416947883515436599207828419256446611183926098021164572038549705524.jpg",
      "https://static.tokkobroker.com/pictures/93104986275391792621660653056279874513396510754299729466509660263233434163127.jpg",
      "https://static.tokkobroker.com/pictures/13860878446472314436897914706516662072226977878644977816861847104305682435717.jpg",
      "https://static.tokkobroker.com/pictures/3586311988682580001357361616272904914697937218222831570813052987337754763338.jpg",
      "https://static.tokkobroker.com/pictures/114346942971435626825048521481367112729211286701205415596205299572864418993787.jpg",
      "https://static.tokkobroker.com/pictures/100684493135440729928442528427425743378716308941349141393031376461417299284763.jpg",
      "https://static.tokkobroker.com/pictures/98818850006693746869590835577445055882454478071885872203591336965379322019533.jpg",
      "https://static.tokkobroker.com/pictures/24250230328404881447567957304560176652102275637143705602182129829364727490589.jpg"
    ],
    "real_address": "Av. Dorrego 1516",
    "property_condition": "Excelente",
    "roofed_surface": "44.00",
    "room_amount": 1,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "44.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.914Z",
    "updatedAt": "2023-06-26T17:39:05.914Z"
  },
  {
    "id": "30ca3dc4-d215-4f9e-a1f5-aa830a5d1589",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Departamento de dos ambientes con balcón corrido aterrazado - Live In Dorrego \n\n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021 \n\nDescuentos por pago de contado \n\n\nLive In Dorrego: \n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con ca?maras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\nAmenities: \n \nSUM\nGimnasio totalmente equipado\nTerraza\nSector parrilla\nPiscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación: \n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías. \n\nUnidades disponibles: 5. \n\nCada unidad cuenta con: \n\n- Superficie cubierta: 47m2.\n- Amplio balcón corrido aterrazado de 9m2. \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar. \n- Toilette de recepción.\n- Dormitorio con baño completo en suite con espejo, mesada de mármol y accesorios.\n- Vestidor con interiores. \n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar. \n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n \n\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a titulo estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del titulo de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nCOTI en trámite\n\nMatriculado Responsable Martin Raitarski CSI 6705",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 135558,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/4159094574226142540021470277091690811235148486716384494989959085300101033840.jpg",
      "https://static.tokkobroker.com/pictures/109829995970803070244141171116437962608103122616881576477668337632774245802987.jpg",
      "https://static.tokkobroker.com/pictures/90258501557136487621470483753943442841308799741671646480147686704351294122073.jpg",
      "https://static.tokkobroker.com/pictures/14135948707651516094844377103249776569634915375683760554111453058797025473790.jpg",
      "https://static.tokkobroker.com/pictures/59544671307125428887918273661294295455394562533373357972511274621921319998948.jpg",
      "https://static.tokkobroker.com/pictures/68254967074906852435656480054445758087832132466419885170493899310827497569669.jpg",
      "https://static.tokkobroker.com/pictures/13687507886112564562371276684657346932572376075448456651389500195036187231156.jpg",
      "https://static.tokkobroker.com/pictures/63949946301309986081055108118544303100654622353985892723304529571770160217767.jpg",
      "https://static.tokkobroker.com/pictures/24765041975084386223514488403194943269804239359135913908648581694061992826212.jpg",
      "https://static.tokkobroker.com/pictures/79421679851428852056197708900227613094287479217144360206816806687367233702243.jpg",
      "https://static.tokkobroker.com/pictures/97227791526071169653668624221155788339193035076367982276524477406848719562684.jpg"
    ],
    "real_address": "Av. Dorrego 1516",
    "property_condition": "Excelente",
    "roofed_surface": "47.00",
    "room_amount": 2,
    "semiroofed_surface": "9.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 26,
        "name": "Toilette",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "56.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.923Z",
    "updatedAt": "2023-06-26T17:39:05.923Z"
  },
  {
    "id": "9ae4509c-ebb9-4b00-bfa5-fe07ddef97a4",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Departamento de dos ambientes con balcón corrido aterrazado - Live In Dorrego \n\n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021 \n\nDescuentos por pago de contado \n\n\nLive In Dorrego: \n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con ca?maras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\nAmenities: \n \nSUM\nGimnasio totalmente equipado\nTerraza\nSector parrilla\nPiscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación: \n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías. \n\nUnidades disponibles: 1. \n\nCada unidad cuenta con: \n\n- Superficie cubierta: 55m2.\n- Increíble balcón corrido aterrazado de 13m2. \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar. \n- Toilette de recepción.\n- Dormitorio con baño completo en suite con espejo, mesada de mármol y accesorios.\n- Vestidor con interiores. \n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar. \n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n \n\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a titulo estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del titulo de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nCOTI en trámite\n\nMatriculado Responsable Martin Raitarski CSI 6705",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 157526,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/49281944496517395278350505988918799130675057912261397139502408479047493862194.jpg",
      "https://static.tokkobroker.com/pictures/51647142063742671941318908550600881117940972125679120802660772368478689245730.jpg",
      "https://static.tokkobroker.com/pictures/67466170041141792759514369589219725495308470562283385580629548383549073620701.jpg",
      "https://static.tokkobroker.com/pictures/33791201818956134955882565326783985652330135500075654131056075815999227197791.jpg",
      "https://static.tokkobroker.com/pictures/47211826864034117870068831089232928137913917644401262787155479348906951998138.jpg",
      "https://static.tokkobroker.com/pictures/68073763041828510840794339661570353633059302696857718021029592495941218332431.jpg",
      "https://static.tokkobroker.com/pictures/107580336211207952560360894992652266810522934916279226301163642878965157251956.jpg",
      "https://static.tokkobroker.com/pictures/55657221735765642153895143928210580805296885570738658393698357612003085792134.jpg",
      "https://static.tokkobroker.com/pictures/34793182916467893541968133214920715245793200744259802004491821815454656358324.jpg",
      "https://static.tokkobroker.com/pictures/26767734546015828544082494076126805232463761457237753116102039421029579026322.jpg",
      "https://static.tokkobroker.com/pictures/41838184818038492070306373578236778119846143012983637797612542208326273369577.jpg"
    ],
    "real_address": "Av. Dorrego 1516",
    "property_condition": "Excelente",
    "roofed_surface": "55.00",
    "room_amount": 2,
    "semiroofed_surface": "13.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 26,
        "name": "Toilette",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "68.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.925Z",
    "updatedAt": "2023-06-26T17:39:05.925Z"
  },
  {
    "id": "ed8d84da-fa35-4667-9b55-d6dde9caaf97",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 3,
    "age": -1,
    "description": "Departamento de cuatro ambientes con 2 balcones aterrazados - Live In Dorrego \n\n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021 \n\nDescuentos por pago de contado \n\n\nLive In Dorrego: \n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con ca?maras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\nAmenities: \n \nSUM\nGimnasio totalmente equipado\nTerraza\nSector parrilla\nPiscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación: \n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías. \n\nUnidades disponibles: 4. \n\nCada unidad cuenta con: \n\n- Superficie cubierta: 124m2.\n- Amplios balcones aterrazados: 24m2. \n- Living.\n- Comedor.\n- Cocina completa con horno, anafe y barra desayunadora de granito o similar. \n- Toilette de recepción.\n- Tres baños completos en suite con espejo, mesada de mármol y accesorios. \n- Dormitorio principal con baño completo, vestidor con interiores y salida al balcón. \n- Segundo y tercer dormitorio con baño completo, placard con interiores y salida al balcón.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar. \n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n \n\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a titulo estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del titulo de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nCOTI en trámite\n\nMatriculado Responsable Martin Raitarski CSI 6705",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 355870,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/83137894503286381619209651550429180201442685678567004783062155795887025273338.jpg",
      "https://static.tokkobroker.com/pictures/19416025153908517933461390670509976941864139248582281367158231336794096355471.jpg",
      "https://static.tokkobroker.com/pictures/50633011006424123568661000829243281133399687758104497109370738204096365114348.jpg",
      "https://static.tokkobroker.com/pictures/31381215335541071802752448398006063815018677525581308633998989524345613510456.jpg",
      "https://static.tokkobroker.com/pictures/505484261857575123210290460983672085852433451622677060697224501739293472835.jpg",
      "https://static.tokkobroker.com/pictures/42354513649646088622398634966550026130996960365768916251865554110103721159387.jpg",
      "https://static.tokkobroker.com/pictures/39033454152690901521912896207722181820591650906689706546541660892833058936915.jpg",
      "https://static.tokkobroker.com/pictures/23730096012162358314761962379623078342156679479161812368316697554998887670693.jpg",
      "https://static.tokkobroker.com/pictures/34584895412868593989830851814302441386761137969837068379310099257397617702500.jpg",
      "https://static.tokkobroker.com/pictures/93438919927547085943588931338828835766129241014339549731639207317105461599453.jpg",
      "https://static.tokkobroker.com/pictures/29884524604963132524051220630236354035233147366467676165857856881356821427304.jpg"
    ],
    "real_address": "Av. Dorrego 1516",
    "property_condition": "Excelente",
    "roofed_surface": "124.00",
    "room_amount": 4,
    "semiroofed_surface": "24.00",
    "situation": "Vacía ",
    "suite_amount": 3,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 26,
        "name": "Toilette",
        "type": 2
      },
      {
        "id": 27,
        "name": "Vestidor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "148.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.944Z",
    "updatedAt": "2023-06-26T17:39:05.944Z"
  },
  {
    "id": "2acf5963-1155-4573-bff6-69cb75eedda3",
    "address": "Departamento de 1 ambiente - 30 adelanto y 36 cuotas en pesos - Av. Dorrego al 1500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n \n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n \n- Descuentos por pago de contado\n \n \nLive In Dorrego:\n \nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n \nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n \nAmenities:\n \n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación:\n \nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n \nUnidades disponibles de 34m2 hasta 148m2\n \nCada unidad cuenta con:\n \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n \nExcelente calidad constructiva y terminaciones:\n \n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 33690089,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/1602889759059125270142940799131274364126802085360204526912896532509710503986.jpg",
      "https://static.tokkobroker.com/pictures/61394996485130575982118742845664851585421089195525129285623478076519708439655.jpg",
      "https://static.tokkobroker.com/pictures/43562632253967847499433360563735925470936661224112218507242214373475933201447.jpg",
      "https://static.tokkobroker.com/pictures/8504346385547470921471802105796634299164146844035013312685483915806210465200.jpg",
      "https://static.tokkobroker.com/pictures/10710459344906049415646498285373843401969525078436710848459565390759319323380.jpg",
      "https://static.tokkobroker.com/pictures/80750216278513490124904770217642190448335827778761573953845150398645180379744.jpg",
      "https://static.tokkobroker.com/pictures/83276794873064501476859727577941751249531354713720000849382167969629033271038.jpg",
      "https://static.tokkobroker.com/pictures/70032683239106908462740419022917671606566591385003614225023148198436656554529.jpg",
      "https://static.tokkobroker.com/pictures/48287404039693014073456324611224927343765218290893626135629404552978467387944.jpg",
      "https://static.tokkobroker.com/pictures/49700585876667900561382439384582164425496653051451198974061742808116186596287.jpg",
      "https://static.tokkobroker.com/pictures/50560823524499579315582224981978452665144951053273075192472311384060248164169.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 7 Dto 1",
    "property_condition": "Excelente",
    "roofed_surface": "34.40",
    "room_amount": 1,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "34.40",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.948Z",
    "updatedAt": "2023-06-26T17:39:05.948Z"
  },
  {
    "id": "ba41d575-7a12-4ba2-a6e1-bce64b519096",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Departamento de dos ambientes con balcón corrido aterrazado - Live In Dorrego \n\n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021 \n\nDescuentos por pago de contado \n\n\nLive In Dorrego: \n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con ca?maras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\nAmenities: \n \nSUM\nGimnasio totalmente equipado\nTerraza\nSector parrilla\nPiscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación: \n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías. \n\nUnidades disponibles: 4. \n\nCada unidad cuenta con: \n\n- Superficie cubierta: 62m2.\n- Amplio balcón corrido aterrazado de 9m2. \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar. \n- Toilette de recepción.\n- Dormitorio con baño completo en suite con espejo, mesada de mármol y accesorios.\n- Vestidor con interiores. \n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar. \n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n \n\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a titulo estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del titulo de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nCOTI en trámite\n\nMatriculado Responsable Martin Raitarski CSI 6705",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 168336,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/66121858025888947831515742839353513419911013390783405284204876893155181613647.jpg",
      "https://static.tokkobroker.com/pictures/112062916175905461598646563642206630629560630587255287717647725132972891352050.jpg",
      "https://static.tokkobroker.com/pictures/75550741932622696697779802804121305454158420943158701229935305692824336717052.jpg",
      "https://static.tokkobroker.com/pictures/79278170770014639968347301652015242931011665381676255704905292505124424458854.jpg",
      "https://static.tokkobroker.com/pictures/9154560517134532163057355613833980033065910045787975637836742940685552329272.jpg",
      "https://static.tokkobroker.com/pictures/103974241720972924971469532345243240754736295233954634151489936909527483850913.jpg",
      "https://static.tokkobroker.com/pictures/73056207678530962732247109290604962792534758046630806642736372246089960256795.jpg",
      "https://static.tokkobroker.com/pictures/66071378079956844629805493908895797276889786841921523373229588544969141264184.jpg",
      "https://static.tokkobroker.com/pictures/67927302356185054961928832481833674693995442457747464403376191030777506363484.jpg",
      "https://static.tokkobroker.com/pictures/26495754341664413500127279643825005669508385568647456622161287692938728617564.jpg",
      "https://static.tokkobroker.com/pictures/66886521985093914317273834141202212525865680337511240373559488047920849022689.jpg"
    ],
    "real_address": "Av. Dorrego 1516",
    "property_condition": "Excelente",
    "roofed_surface": "62.00",
    "room_amount": 2,
    "semiroofed_surface": "9.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 26,
        "name": "Toilette",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "71.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.939Z",
    "updatedAt": "2023-06-26T17:39:05.939Z"
  },
  {
    "id": "e6adf8cb-8e02-4425-b502-c63f2a27943d",
    "address": "Departamento de 1 ambiente - 30 adelanto y 36 cuotas en pesos - Av. Dorrego al 1500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n \n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n \n- Descuentos por pago de contado\n \n \nLive In Dorrego:\n \nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n \nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n \nAmenities:\n \n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación:\n \nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n \nUnidades disponibles de 34m2 hasta 148m2\n \nCada unidad cuenta con:\n \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n \nExcelente calidad constructiva y terminaciones:\n \n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 32931562,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/109767191472462792149064271818226384212442287376245204358538211009683545346397.jpg",
      "https://static.tokkobroker.com/pictures/57964574669110647405646096654340756569908587395387269003920341616130392339390.jpg",
      "https://static.tokkobroker.com/pictures/71367170109081361145166398265706917567442625787497123323098787700891726294551.jpg",
      "https://static.tokkobroker.com/pictures/102081103730362301872177016336451215041402629231879282508906432709507121625377.jpg",
      "https://static.tokkobroker.com/pictures/100863396132327619182481130401817997591354579294238902987051556510163666136266.jpg",
      "https://static.tokkobroker.com/pictures/86980352643178357364866070940216250112825260876834838825923906427838166971333.jpg",
      "https://static.tokkobroker.com/pictures/67263451614261741437098177524948470569719588425239230304091748226963001491822.jpg",
      "https://static.tokkobroker.com/pictures/66427097992914869858256720590903845935164386689907636728196800376191606354869.jpg",
      "https://static.tokkobroker.com/pictures/27386525667789654706533304120194553870060509559619180711358403469483521398954.jpg",
      "https://static.tokkobroker.com/pictures/33004445650945090177185201765651621353439494799009746563667369848446463525951.jpg",
      "https://static.tokkobroker.com/pictures/77673307329786510361746986689490721191177104613374017616627170196221137950634.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 6 Dto 1",
    "property_condition": "Excelente",
    "roofed_surface": "44.10",
    "room_amount": 1,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "44.10",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.956Z",
    "updatedAt": "2023-06-26T17:39:05.956Z"
  },
  {
    "id": "f60d1dc7-c572-402e-b430-7c7d1d695c66",
    "address": "Departamento de 1 ambiente con balcón - 30 adelanto y 36 cuotas en pesos - Av. Dorrego al 1500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n \n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n \n- Descuentos por pago de contado\n \n \nLive In Dorrego:\n \nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n \nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n \nAmenities:\n \n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación:\n \nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n \nUnidades disponibles de 34m2 hasta 148m2\n \nCada unidad cuenta con:\n \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n \nExcelente calidad constructiva y terminaciones:\n \n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 42185587,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/113171699313816585016657100508716920696765002641413604805464016091012795955101.jpg",
      "https://static.tokkobroker.com/pictures/87776868414682264638390384137353358839986860676052625116573075995490927657880.jpg",
      "https://static.tokkobroker.com/pictures/55758515040831308114003773780499332132450436217529727601405058971245237516164.jpg",
      "https://static.tokkobroker.com/pictures/80060832035244276985766482571163817832208426018138043258160545601878472583817.jpg",
      "https://static.tokkobroker.com/pictures/109075662990543447066352912668669184393489805342025296262485330319889792500749.jpg",
      "https://static.tokkobroker.com/pictures/6910043909928381797444097974813187904066026749258107476366211066163682597254.jpg",
      "https://static.tokkobroker.com/pictures/73440169460558751528096587694616104811749275037411489846944210946480803624878.jpg",
      "https://static.tokkobroker.com/pictures/57884650335845666859565341946646614887308836962278993224621874178537935211786.jpg",
      "https://static.tokkobroker.com/pictures/28301552820203119824442109461475062091629650798370352434805853469882491478748.jpg",
      "https://static.tokkobroker.com/pictures/57413200560820201669268696965887068868995391434183002688413358934295699284274.jpg",
      "https://static.tokkobroker.com/pictures/85466401857707537430251785081172222086844840804029028620828265322518263654752.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 5 Dto 8",
    "property_condition": "Excelente",
    "roofed_surface": "44.10",
    "room_amount": 1,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "44.10",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.991Z",
    "updatedAt": "2023-06-26T17:39:05.991Z"
  },
  {
    "id": "3b05db84-6993-4237-903e-74162ab2a4ae",
    "address": "Departamento de 1 ambiente con balcón - 30 adelanto y 36 cuotas en pesos - Av. Dorrego al 1500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n \n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n \n- Descuentos por pago de contado\n \n \nLive In Dorrego:\n \nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n \nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n \nAmenities:\n \n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación:\n \nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n \nUnidades disponibles de 34m2 hasta 148m2\n \nCada unidad cuenta con:\n \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n \nExcelente calidad constructiva y terminaciones:\n \n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 41425356,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/19048015545359998757887544457566328405252041100165923620663047785934373965650.jpg",
      "https://static.tokkobroker.com/pictures/46990986609623536653255916118483339148839001762685330994195353619169899378656.jpg",
      "https://static.tokkobroker.com/pictures/56758917248759839073610404338134936214333465138645653416182324560715605017285.jpg",
      "https://static.tokkobroker.com/pictures/115491470034317878019002987392142987433759396401399127179684662218931511830675.jpg",
      "https://static.tokkobroker.com/pictures/34992493268692253028689129506524409076623701571865954602534298416745843059600.jpg",
      "https://static.tokkobroker.com/pictures/73629645040845844709294148941409160877403907046153828917770139636219927094306.jpg",
      "https://static.tokkobroker.com/pictures/51050278977768027617879648524551903540311353483951761626849569505059402019323.jpg",
      "https://static.tokkobroker.com/pictures/84954943156527007466911449936597058487855802536285029312595646879105292279570.jpg",
      "https://static.tokkobroker.com/pictures/96927252788185382489308989267214819180966854913232312559405378186591578401209.jpg",
      "https://static.tokkobroker.com/pictures/100277417886363307148253829672458125437294806221767179697049028710731708056770.jpg",
      "https://static.tokkobroker.com/pictures/51810104454161231880383501716455832320139592646493690473910318375006426331700.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 4 Dto 8",
    "property_condition": "Excelente",
    "roofed_surface": "44.10",
    "room_amount": 1,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "44.10",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.004Z",
    "updatedAt": "2023-06-26T17:39:06.004Z"
  },
  {
    "id": "9dffdaa2-9047-4924-8130-7bb9dfe1a0d9",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 3,
    "age": -1,
    "description": "Live In Dorrego\n\n¡30% de adelanto y 36 cuotas en pesos! Final de Obra principios del 2024\n\n- Descuentos por pago de contado\n\n¡Increíble 4 ambientes a estrenar, de amplias dimensiones con vista abierta y doble balcón aterrazado!\n\n- Toilette de recepción\n- Placard de recepción\n- Suite con salida al balcón corrido aterrazado, baño completo y placard con interiores\n- Cocina completa integrada con horno, anafe y barra desayunadora de granito o similar.\n- Lavadero apartado\n- Comedor diario con salida al balcón corrido aterrazado\n- Gran living con salida al balcón corrido aterrazado \n- Suite con salida a balcón aterrazado con baño completo y placard con interiores\n- Master suite con salida al balcón aterrazado con baño completo y vestidor con interiores\n- Baños y toilette completos con espejo, mesada de mármol y accesorios.\n\n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n\nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n\nAmenities:\n\n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n\n\nExcelente ubicación:\n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n\nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n\n\n¿Es lo que buscás? ¡Consultanos!\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 147657014,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/30034083622383113258952442270812578105498015187383306312644157868531924004666.jpg",
      "https://static.tokkobroker.com/pictures/10940476463907628297070580905854225835188814193209570772940425890499433802601.jpg",
      "https://static.tokkobroker.com/pictures/96996620442994016323258990034274806152222153149433540821753045410089761075112.jpg",
      "https://static.tokkobroker.com/pictures/65125849170719996251127908840432547526942164342401238808392190543991043417660.jpg",
      "https://static.tokkobroker.com/pictures/8787107716316157747976335962325444124494580995011424408887775002348632389918.jpg",
      "https://static.tokkobroker.com/pictures/106587959597257603429750897237548003750959624926520205968858601756064961910228.jpg",
      "https://static.tokkobroker.com/pictures/56580594320260155545717225064007340511484247145234744894392198521749368850173.jpg",
      "https://static.tokkobroker.com/pictures/22554341380344823526678774845284834337329211929368817392941655801317140411495.jpg",
      "https://static.tokkobroker.com/pictures/77353100503367410877135782252385565954760272654745195831782695603791670215384.jpg",
      "https://static.tokkobroker.com/pictures/18813938747815285089029829165859830963410889450308520444961364725979133819226.jpg",
      "https://static.tokkobroker.com/pictures/53102214034975449775159021016989602399593275905204179541101837099634315877175.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 6 Dto 4",
    "property_condition": "Excelente",
    "roofed_surface": "118.00",
    "room_amount": 4,
    "semiroofed_surface": "29.50",
    "situation": "Vacía ",
    "suite_amount": 3,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "147.50",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.014Z",
    "updatedAt": "2023-06-26T17:39:06.014Z"
  },
  {
    "id": "8b91c104-7bc3-49be-9c33-2b51aecd77f4",
    "address": "Departamento 4 ambientes con balcón terraza - Boulevard San Isidro - Vilela al 2500",
    "bathroom_amount": 2,
    "age": -1,
    "description": "                                                            Boulevard San Isidro\n\n¡30% de adelanto y 8 cuotas en pesos! Final de Obra Agosto 2023\n\n- Descuentos por pago de contado\n\n¡Increíble 4 ambientes a estrenar, de amplias dimensiones con vista abierta y gran balcon aterrazado!\n\n- Toilette de recepción\n- Cocina integrada completa de grandes dimensiones con horno, anafe y barra desayunadora de granito o similar\n- Lavadero apartado\n- Gran living comedor de amplias dimensiones con salida al balcón corrido aterrazado\n- Baño completo\n- Primer dormitorio con salida al balcón corrido aterrazado con y placard con interiores\n- Segundo dormitorio con salida al balcón corrido aterrazado con placard con interiores\n- Gran master suite principal con salida al balcón corrido aterrazado con baño completo y vestidor de grandes dimensiones \n- Baños y toilettes con espejo, accesorios y mesada de granito negro brasil o similar\n\nEl Edificio, de estilo contemporáneo y máxima categoría, cuenta con un importante Hall de acceso en doble altura previsto con cámaras de seguridad y locales comerciales en la esquina.\n\nLas cocheras se distribuyen en subsuelo, con cómodo acceso sobre calle Vilela\nmediante rampa.\n\nLas plantas contienen unidades de 1, 2, 3 y 4 ambientes y los palieres poseen doble\nascensor de última generación.\n\nAmenities:\n\n- Salón de usos múltiples equipado,\n- Pérgola con sector de parrilla y amplia terraza.\n- Gimnasio.\n- Piscina y solárium con azotea verde.\n- Social Room en planta baja.\n\nExcelente ubicación:\n\nEn la esquina del boulevard San Isidro Labrador y calle Vilela. A media cuadra de Av. Cabildo, metro bus, espacios verdes y todos los servicios urbanos que le permitirán disfrutar de la tranquilidad del barrio de Núñez.\n\nA metros de todos los accesos a Capital Federal y principales avenidas.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos entablonados de madera de eucalipto o similar (Opción de porcelanato).\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n¿Es lo que buscás? ¡Consultanos!\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\n        \n        \n        \n        \r\n        ",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 590000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Noroeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/35449729834296028155035524383140878674732275696314977388756506442551920728205.jpg",
      "https://static.tokkobroker.com/pictures/94295798077211336706245166234243971794134277023152876423469757409582405159125.jpg",
      "https://static.tokkobroker.com/pictures/58158019541907155990691227428086358520557886512085368794608038671577579813327.jpg",
      "https://static.tokkobroker.com/pictures/36177558007109038348752154370080068472733375925586786080264759528531386001258.jpg",
      "https://static.tokkobroker.com/pictures/96904252497682610910302105431429415912329083916920634455671689710750881486597.jpg",
      "https://static.tokkobroker.com/pictures/39997932517627850828371779670302868746346687936284503670434999588610021300342.jpg",
      "https://static.tokkobroker.com/pictures/43351095584066385214725695476558673762071354670370768999269160384027855603356.jpg",
      "https://static.tokkobroker.com/pictures/29541840391568321826330716367452142805762540710011396157581678876475985599121.jpg",
      "https://static.tokkobroker.com/pictures/52100947827042745625450776109128052052605410967433648251805622770465456940994.jpg",
      "https://static.tokkobroker.com/pictures/114470685599720010392655182087241007915945281782059661741786022020269411284287.jpg",
      "https://static.tokkobroker.com/pictures/93011417011215062215352685025156785308301709096666147306645480579716162815758.jpg",
      "https://static.tokkobroker.com/pictures/19856060975536023690246616658995069142026767350787934606442707691115093642615.jpg",
      "https://static.tokkobroker.com/pictures/89917020370407774778023350983231508584790409272304063147417681948397114767966.jpg",
      "https://static.tokkobroker.com/pictures/99664632180192692565961987416292861708587741334848643343030059056200630112984.jpg",
      "https://static.tokkobroker.com/pictures/73761016906434283398044914580711830347799017221278260550719151424810456510354.jpg",
      "https://static.tokkobroker.com/pictures/79222919668148296057461648903310277055921004072492398396107854454688007994998.jpg",
      "https://static.tokkobroker.com/pictures/57094913209177445577433424384216402542968485451545964650339459010887068348402.jpg",
      "https://static.tokkobroker.com/pictures/47156256202619169891887699801932456220738037189109706312186686443575297653971.jpg",
      "https://static.tokkobroker.com/pictures/102574605572205704303567092435817986709247179014452890124746093646988459974586.jpg",
      "https://static.tokkobroker.com/pictures/41759007157430177715607020767690907700275590601856585370885048935110586131323.jpg",
      "https://static.tokkobroker.com/pictures/69795012050394509449669046543492858934996335141946990206600500897405268761129.jpg",
      "https://static.tokkobroker.com/pictures/51285833250817441378969801682745979160722117357914309206574129789840393186955.jpg",
      "https://static.tokkobroker.com/pictures/6874019418917325563537042171543043793242174016533114274308234820052980081213.jpg",
      "https://static.tokkobroker.com/pictures/68120644013042547018736918604583418627606423655651130275414714446365529489973.jpg",
      "https://static.tokkobroker.com/pictures/77511525028553370847345553951699998443079489989839248624039067469976003000356.jpg",
      "https://static.tokkobroker.com/pictures/28266368309043415651866545035558785780801364802941262597859498392810408600920.jpg",
      "https://static.tokkobroker.com/pictures/88407431979603407737136477221865040330347778634191799735083587275024071030609.jpg",
      "https://static.tokkobroker.com/pictures/2402374262243655845068636739508786531165876956144924026637564168913135057209.jpg",
      "https://static.tokkobroker.com/pictures/101142078370098403009099974659587259048470674823650182804033888800185570021966.jpg"
    ],
    "real_address": "Vilela 2525 - Piso 2 Dto 2",
    "property_condition": "Excelente",
    "roofed_surface": "125.00",
    "room_amount": 4,
    "semiroofed_surface": "24.00",
    "situation": "Vacía ",
    "suite_amount": 3,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1528,
        "name": "Apto crédito",
        "type": 3
      }
    ],
    "toilet_amount": 2,
    "total_surface": "149.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=n6_3FxMuCTk"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.043Z",
    "updatedAt": "2023-06-26T17:39:06.043Z"
  },
  {
    "id": "851d8ec7-c198-4af9-8ff7-ae7e0cfcaf1c",
    "address": "Departamento de 1 ambiente - 30 adelanto y 36 cuotas en pesos - Av. Dorrego al 1500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n \n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n \n- Descuentos por pago de contado\n \n- Apto blanqueo para la construcción\n \nLive In Dorrego:\n \nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n \nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n \nAmenities:\n \n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación:\n \nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n \nUnidades disponibles de 34m2 hasta 148m2\n \nCada unidad cuenta con:\n \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n \nExcelente calidad constructiva y terminaciones:\n \n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 34683844,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/60682618242386033499211875935177905451189745345901369894426032796730245137760.jpg",
      "https://static.tokkobroker.com/pictures/24914351421737955209563608389900151193314793541429927911631374208563340470542.jpg",
      "https://static.tokkobroker.com/pictures/72519765741478088391042911953639455856795088476266181093406204605327083175158.jpg",
      "https://static.tokkobroker.com/pictures/8187523236804554515815073190275337989803103836417716600634873688990580187895.jpg",
      "https://static.tokkobroker.com/pictures/31317706264045739238411987952894539740394971834554633099395087773482839423480.jpg",
      "https://static.tokkobroker.com/pictures/10267364930357981703735227146675616910362931788437066594250482921634663753852.jpg",
      "https://static.tokkobroker.com/pictures/53228705211690787520905558331123564022465521813111225137762291492349401293656.jpg",
      "https://static.tokkobroker.com/pictures/34325924767834392940440321921589865083027213921555500765379915125112889775119.jpg",
      "https://static.tokkobroker.com/pictures/9732400193821520457176485424556941086598681619691304373250318991857339327743.jpg",
      "https://static.tokkobroker.com/pictures/28198525312471062891152144861287962354246008768324563735052232711053884723478.jpg",
      "https://static.tokkobroker.com/pictures/86385311375441135998709555772008168083383703653798096352265079502527690719016.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 8 Dto 1",
    "property_condition": "Excelente",
    "roofed_surface": "44.10",
    "room_amount": 1,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "44.10",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.949Z",
    "updatedAt": "2023-06-26T17:39:05.949Z"
  },
  {
    "id": "849adc2a-0a65-457d-8f83-d81d230bde59",
    "address": "Departamento de 1 ambiente con balcón - 30 adelanto y 36 cuotas en pesos - Av. Dorrego al 1500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n \n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n \n- Descuentos por pago de contado\n \n \nLive In Dorrego:\n \nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n \nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n \nAmenities:\n \n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación:\n \nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n \nUnidades disponibles de 34m2 hasta 148m2\n \nCada unidad cuenta con:\n \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n \nExcelente calidad constructiva y terminaciones:\n \n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 39425914,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/15304049456424037690830603652452860086295327259067815196657975739226647190273.jpg",
      "https://static.tokkobroker.com/pictures/16873494255926604369683438926256434260278204951114172182752030048891242070657.jpg",
      "https://static.tokkobroker.com/pictures/107936976014574335250892588222872568878457371610615386027102935612811902261247.jpg",
      "https://static.tokkobroker.com/pictures/109267877177249881109347573862581097832110214939828219325017285235275798251568.jpg",
      "https://static.tokkobroker.com/pictures/86373201480243706522539872159040664138713409059193676575754973993060162749000.jpg",
      "https://static.tokkobroker.com/pictures/109194739296062101752552341244397769303443897564143703794887299032839922080553.jpg",
      "https://static.tokkobroker.com/pictures/82658883165371178522574238048753818737063260102890904155203990651914597965891.jpg",
      "https://static.tokkobroker.com/pictures/89591712893680714534765067996390783711462047939438937225948039549670317014279.jpg",
      "https://static.tokkobroker.com/pictures/19521364552024381870230982945942667079860911420370102434310912439369483620859.jpg",
      "https://static.tokkobroker.com/pictures/4316250266717292173888275320431435787547401014228875952716516391402690679632.jpg",
      "https://static.tokkobroker.com/pictures/89136984055654095397194708564975072115567341168585419888471879103124423180177.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 7 Dto 6",
    "property_condition": "Excelente",
    "roofed_surface": "34.00",
    "room_amount": 1,
    "semiroofed_surface": "4.80",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "38.80",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.957Z",
    "updatedAt": "2023-06-26T17:39:05.957Z"
  },
  {
    "id": "1146b02a-b3e0-4bab-91f6-7cdc1d9da77a",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n \n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n \n- Descuentos por pago de contado\n \n \nLive In Dorrego:\n \nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n \nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n \nAmenities:\n \n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación:\n \nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n \nUnidades disponibles de 34m2 hasta 148m2\n \nCada unidad cuenta con:\n \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n \nExcelente calidad constructiva y terminaciones:\n \n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 38239118,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/12914422517303022335816568230759310305473945302211791940496288972465168741496.jpg",
      "https://static.tokkobroker.com/pictures/62606903983244716676550634837400059046718128279592433524725427012245458927663.jpg",
      "https://static.tokkobroker.com/pictures/55874834524044591863457297978324406324294034932479185174388843300440343859871.jpg",
      "https://static.tokkobroker.com/pictures/67203853288432979722262834417707660656317439953202254847129588141496112478914.jpg",
      "https://static.tokkobroker.com/pictures/97958164298316169537408970870903531157226939071704448252023374441455405787421.jpg",
      "https://static.tokkobroker.com/pictures/17410813513135973043208079021865103682527720970751018578335518872551643140997.jpg",
      "https://static.tokkobroker.com/pictures/109226520899208565958614512064031507869652218472156444107005156259320537891104.jpg",
      "https://static.tokkobroker.com/pictures/61817418029011708834808168241466129401009967562577948219609599143011022422473.jpg",
      "https://static.tokkobroker.com/pictures/73860905134964867328432337049102641801387350911903804818324108964185826456749.jpg",
      "https://static.tokkobroker.com/pictures/79619944724089559185709246753167730896221001706673116283690801759170410507596.jpg",
      "https://static.tokkobroker.com/pictures/69800212876224319228692041136691586505537347357921749025140503247040273134365.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 5 Dto 5",
    "property_condition": "Excelente",
    "roofed_surface": "34.00",
    "room_amount": 1,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "34.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.993Z",
    "updatedAt": "2023-06-26T17:39:05.993Z"
  },
  {
    "id": "9650e57b-a1e3-4b9e-98dc-2006dceb45cf",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n\n¡30% de adelanto y 36 cuotas en pesos! Final de Obra principios del 2024\n\n- Descuentos por pago de contado\n\n¡Increíble 2 ambientes a estrenar, de amplias dimensiones con vista abierta y gran balcon aterrazado!\n\n- Toilette de recepción\n- Cocina completa integrada con horno, anafe y barra desayunadora de granito o similar.\n- Living comedor con salida al balcón corrido aterrazado\n- Master suite con salida al balcón corrido aterrazado, baño completo y vestidor de grandes dimensiones con interiores \n- Baño y toilette completos con espejo, mesada de mármol y accesorios.\n\n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n\nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n\nAmenities:\n\n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n\n\nExcelente ubicación:\n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n\nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n\n\n¿Es lo que buscás? ¡Consultanos!\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\n",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 68390126,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/40158337856141263490788194267702000125626124262998641007606654538023014227164.jpg",
      "https://static.tokkobroker.com/pictures/56588603097518432836928310475226569894419909634692079032811694050154819703198.jpg",
      "https://static.tokkobroker.com/pictures/85785430428926588411476556990860306740796681576272998147885584297941137918124.jpg",
      "https://static.tokkobroker.com/pictures/30935068089202407263730785939288198373525894436354657727347734805762007384838.jpg",
      "https://static.tokkobroker.com/pictures/21796375788839992471364352766829910272776863806375663563297189618304797978510.jpg",
      "https://static.tokkobroker.com/pictures/37037458009238142709181066261010661095179681266787551795833313190888286479103.jpg",
      "https://static.tokkobroker.com/pictures/70969923061499992277279765733418061243666244434849489403735171330832571277534.jpg",
      "https://static.tokkobroker.com/pictures/13643920988433218405363529254853991038227790708732458664632914687471952600938.jpg",
      "https://static.tokkobroker.com/pictures/37165637405246628999127487573212447244613241811579009713876382356685341164567.jpg",
      "https://static.tokkobroker.com/pictures/112893489005657806075348708024785001212287976394790101540226082508031646200476.jpg",
      "https://static.tokkobroker.com/pictures/66488251501568527441598683791366349857110127663999669649820900599712419931588.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 4 Dto 7",
    "property_condition": "Excelente",
    "roofed_surface": "62.30",
    "room_amount": 2,
    "semiroofed_surface": "8.50",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 1,
    "total_surface": "71.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.008Z",
    "updatedAt": "2023-06-26T17:39:06.008Z"
  },
  {
    "id": "e135b92f-64d0-431d-b784-647af6997df2",
    "address": "Departamento 2 ambientes con balcón terraza - Boulevard San Isidro - Vilela al 2500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "                                                            Boulevard San Isidro\n\n¡30% de adelanto y 8 cuotas en pesos! Final de Obra Agosto 2023\n\n- Descuentos por pago de contado\n\nIncreíble 2 ambientes a estrenar, de amplias dimensiones con vista abierta y balcón aterrazado!\n\n- Toilette de recepción\n- Cocina integrada completa con horno, anafe y barra desayunadora de granito o similar\n- Gran living comedor con salida al balcón corrido aterrazado\n- Gran master suite con salida al balcón corrido aterrazado con baño y vestidor con interiores\n- Baño y toilette con espejo, accesorios y mesada de granito negro brasil o similar\n\nEl Edificio, de estilo contemporáneo y máxima categoría, cuenta con un importante Hall de acceso en doble altura previsto con cámaras de seguridad y locales comerciales en la esquina.\n\nLas cocheras se distribuyen en subsuelo, con cómodo acceso sobre calle Vilela\nmediante rampa.\n\nLas plantas contienen unidades de 1, 2, 3 y 4 ambientes y los palieres poseen doble\nascensor de última generación.\n\nAmenities:\n\n- Salón de usos múltiples equipado,\n- Pérgola con sector de parrilla y amplia terraza.\n- Gimnasio.\n- Piscina y solárium con azotea verde.\n- Social Room en planta baja.\n\nExcelente ubicación:\n\nEn la esquina del boulevard San Isidro Labrador y calle Vilela. A media cuadra de Av. Cabildo, metro bus, espacios verdes y todos los servicios urbanos que le permitirán disfrutar de la tranquilidad del barrio de Núñez.\n\nA metros de todos los accesos a Capital Federal y principales avenidas.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos entablonados de madera de eucalipto o similar (Opción de porcelanato).\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n¿Es lo que buscás? ¡Consultanos!\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\n\n        \n        \n        \n        \r\n        ",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 191319,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Noroeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/71183088520884834393643562463940190847945281625127706947158713413262982726103.jpg",
      "https://static.tokkobroker.com/pictures/81322814418829159912161346643637835949488723098050807372177452668012022814392.jpg",
      "https://static.tokkobroker.com/pictures/14386981533701045271861316596539749946269807128357719710091135707388190417035.jpg",
      "https://static.tokkobroker.com/pictures/5063916382614085834126288223076184364528187721946377984563743810566559082176.jpg",
      "https://static.tokkobroker.com/pictures/15180156975430224127728381399357089847413768455830416604235839514737476534973.jpg",
      "https://static.tokkobroker.com/pictures/62876286373098909601922071802478906193197145342728654006438337034054518466890.jpg",
      "https://static.tokkobroker.com/pictures/71303948806406944508536987266924962070759744486158766126723205100754588067966.jpg",
      "https://static.tokkobroker.com/pictures/84268962506696624478562085661061875238051319793177810293450158128919278927813.jpg",
      "https://static.tokkobroker.com/pictures/93735575671762149973423161293926902859126270003622172289868320124280592960782.jpg",
      "https://static.tokkobroker.com/pictures/20914504617468145864861168713348484990382979437170259084902579723339413600291.jpg",
      "https://static.tokkobroker.com/pictures/95910494336135982562351495262036620534082474160685195916789437125764049310068.jpg",
      "https://static.tokkobroker.com/pictures/103170992107204893026419299784750810031025351020696308366087463706604069270635.jpg",
      "https://static.tokkobroker.com/pictures/43725448012783695852778632227510732939132718429979912497075362703540582528035.jpg",
      "https://static.tokkobroker.com/pictures/10768614265187601295076054041810866239272457126372337815637549638930614034996.jpg",
      "https://static.tokkobroker.com/pictures/77872514377835247545578747276855129386701017524767986600009586404543069213752.jpg",
      "https://static.tokkobroker.com/pictures/31318764428511604712308547966591800982467842258143120837772964729946435377014.jpg",
      "https://static.tokkobroker.com/pictures/59350105439766506824399809392154150740625647201568934500934775451008070904045.jpg",
      "https://static.tokkobroker.com/pictures/61075613286744642212299320003330174858621848364126869343269712390134604910559.jpg",
      "https://static.tokkobroker.com/pictures/93382298194210349941126567167032663144298301561978730716836710600622917522857.jpg",
      "https://static.tokkobroker.com/pictures/10215626198921526036349422779119414958028859439366313275328567917399039229450.jpg",
      "https://static.tokkobroker.com/pictures/44726479541285604119553092654820677348797312779290074422930596482463424173395.jpg",
      "https://static.tokkobroker.com/pictures/10690832963659680699423663749215995050022353955132963372598656322351961029195.jpg",
      "https://static.tokkobroker.com/pictures/107449444404685249519651724472695863440278113959141402458028552246476100568369.jpg",
      "https://static.tokkobroker.com/pictures/82971590839404329347055851591224623191357832202386057766653819908548447561411.jpg",
      "https://static.tokkobroker.com/pictures/98521236421929436580029843471036194115526284614621347784201563302033463570559.jpg",
      "https://static.tokkobroker.com/pictures/84365939135649516248503295915653624351988591189181925995455247863681983810959.jpg",
      "https://static.tokkobroker.com/pictures/67282077309704876624090567031422302888109708380442673657230873081418055958448.jpg",
      "https://static.tokkobroker.com/pictures/35289429026139953003059920670872516752946452239076379201310107654783129687509.jpg",
      "https://static.tokkobroker.com/pictures/25014394883881283805588910751829091404377747384660944813849852510623101762065.jpg"
    ],
    "real_address": "Vilela 2525 - Piso 1 Dto 6",
    "property_condition": "Excelente",
    "roofed_surface": "64.15",
    "room_amount": 2,
    "semiroofed_surface": "6.85",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1528,
        "name": "Apto crédito",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "71.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=n6_3FxMuCTk"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.040Z",
    "updatedAt": "2023-06-26T17:39:06.040Z"
  },
  {
    "id": "b2423110-2d8f-4350-91c6-6b1f510eb5f2",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 2,
    "age": -1,
    "description": "Live In Dorrego\n\n¡30% de adelanto y 36 cuotas en pesos! Final de Obra principios del 2024\n\n- Descuentos por pago de contado\n\n¡Increíble 4 ambientes a estrenar, de amplias dimensiones con vista abierta y gran balcon aterrazado de inmensas dimensiones!\n\n- Toilette de recepción\n- Dormitorio con salida al gran balcón corrido aterrazado con placard con interiores\n- Suite con salida al gran balcon corrido aterrazado, con baño cpmpleto y placard con interiores\n- Master suite con salida al balcón corrido aterrazado con baño completo y vestidor con interiores\n- Gran living con salida al balcón corrido aterrazado\n- Cocina completa integrada con horno, anafe y barra desayunadora de granito o similar.\n- Comedor diario con salida al balcón corrido aterrazado\n- Baños y toilette completos con espejo, mesada de mármol y accesorios.\n\n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n\nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n\nAmenities:\n\n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n\n\nExcelente ubicación:\n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n\nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n\n\n¿Es lo que buscás? ¡Consultanos!\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\n",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 117676035,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/92598789150447658324676642868644863372174778969282221466712068351084240754950.jpg",
      "https://static.tokkobroker.com/pictures/25798911258003961118489538231476237381447268778481140993770640585873768318196.jpg",
      "https://static.tokkobroker.com/pictures/25839235983359735744381703003148042159961724823165185658759663554304468809761.jpg",
      "https://static.tokkobroker.com/pictures/22105544973824351195834041204887396916927357093272349554839299945126013070191.jpg",
      "https://static.tokkobroker.com/pictures/87670036830135918728173140988095958264376012164710567351228749757903787563689.jpg",
      "https://static.tokkobroker.com/pictures/67236716960782216353585515888246047524607789348686103026372102245881135532706.jpg",
      "https://static.tokkobroker.com/pictures/56213834652686783828458830314718941459992561948262247556304777622535801633970.jpg",
      "https://static.tokkobroker.com/pictures/22347159923921012131844807448968390321999700669856089481393253548180863178137.jpg",
      "https://static.tokkobroker.com/pictures/90431569003750865694658039950077622218029934516648818890691898719054827866945.jpg",
      "https://static.tokkobroker.com/pictures/96753388233390244095910264646425838929928634327388703491322321791864405826148.jpg",
      "https://static.tokkobroker.com/pictures/40130651148014568752696269571476451381218990990261270128302138684060842410126.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 8 Dto 3",
    "property_condition": "Excelente",
    "roofed_surface": "92.50",
    "room_amount": 4,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 3,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 1,
    "total_surface": "117.50",
    "type": "Departamento",
    "unroofed_surface": "25.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.064Z",
    "updatedAt": "2023-06-26T17:39:06.064Z"
  },
  {
    "id": "5ab221d6-7c2d-4a7d-83df-f24751a3167e",
    "address": "Departamento de 1 ambiente - 30 adelanto y 36 cuotas en pesos - Av. Dorrego al 1500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n \n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n \n- Descuentos por pago de contado\n \n \nLive In Dorrego:\n \nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n \nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n \nAmenities:\n \n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación:\n \nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n \nUnidades disponibles de 34m2 hasta 148m2\n \nCada unidad cuenta con:\n \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n \nExcelente calidad constructiva y terminaciones:\n \n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 42945392,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/52198337760381719998675085630394224604861461269451684913608563939326091815973.jpg",
      "https://static.tokkobroker.com/pictures/109206788858780150113784719193952575941533153259442009668907319100436744996906.jpg",
      "https://static.tokkobroker.com/pictures/42496011227703641445477230723594685522551436044678994501255814553207905803168.jpg",
      "https://static.tokkobroker.com/pictures/66879351215056989057798953954658638569243353617365207840474242265157864944854.jpg",
      "https://static.tokkobroker.com/pictures/83527853699396698591095513867284703083207018810670728315695212479254542599470.jpg",
      "https://static.tokkobroker.com/pictures/26993992283890180234648402496679950394254594229366789301618229606081522586265.jpg",
      "https://static.tokkobroker.com/pictures/77420615104975924746032994976022915586966566333010601098555711078464609927868.jpg",
      "https://static.tokkobroker.com/pictures/45739181795519292252923472512207075398301376794249147448365214836698680661358.jpg",
      "https://static.tokkobroker.com/pictures/47703345646066467758761074410838416722767687962583956860908282182712364081646.jpg",
      "https://static.tokkobroker.com/pictures/22450390374929575110972181348586402624498102468869051283790985683687872274032.jpg",
      "https://static.tokkobroker.com/pictures/113893472722526786888154891603847732595055054818392657049074258403492192268869.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 6 Dto 8",
    "property_condition": "Excelente",
    "roofed_surface": "34.00",
    "room_amount": 1,
    "semiroofed_surface": "4.80",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "38.80",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.958Z",
    "updatedAt": "2023-06-26T17:39:05.958Z"
  },
  {
    "id": "0b5b7812-3506-49ac-8d53-81eabd8b73b1",
    "address": "Departamento de 1 ambiente con balcón - 30 adelanto y 36 cuotas en pesos - Av. Dorrego al 1500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n \n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n \n- Descuentos por pago de contado\n \n \nLive In Dorrego:\n \nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n \nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n \nAmenities:\n \n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación:\n \nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n \nUnidades disponibles de 34m2 hasta 148m2\n \nCada unidad cuenta con:\n \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n \nExcelente calidad constructiva y terminaciones:\n \n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 39523926,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/62219808513192752217821030623638079381507642390018647076001131935247188001587.jpg",
      "https://static.tokkobroker.com/pictures/83612493213043479254446489521741550376974499446105094537683462944782474567533.jpg",
      "https://static.tokkobroker.com/pictures/95869288807521346111157825807171474072811705427101399093383971267390852657816.jpg",
      "https://static.tokkobroker.com/pictures/4106194518867302642236606648100392222785204559059744079235404442107149169528.jpg",
      "https://static.tokkobroker.com/pictures/7690006921851368137939456493952207511496365028031345773441098291435672565450.jpg",
      "https://static.tokkobroker.com/pictures/110549913278010520532048063351746862836648109870228305103711543030972541607238.jpg",
      "https://static.tokkobroker.com/pictures/33144652991902392985995438569964922315024669883305480987760514664190560456617.jpg",
      "https://static.tokkobroker.com/pictures/37136736166638231069650884568314061383493986732506112495390795370766262776760.jpg",
      "https://static.tokkobroker.com/pictures/58551583856803535644496708182040889239037895076663682338274728268690079305602.jpg",
      "https://static.tokkobroker.com/pictures/73597408683118041639789932941528582225589517453987136544111517055078682139225.jpg",
      "https://static.tokkobroker.com/pictures/893871617591901382692899473897879786355048888318673065251140598688992704293.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 7 Dto 5",
    "property_condition": "Excelente",
    "roofed_surface": "34.00",
    "room_amount": 1,
    "semiroofed_surface": "4.80",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "38.80",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.992Z",
    "updatedAt": "2023-06-26T17:39:05.992Z"
  },
  {
    "id": "e703d9b7-131b-44bc-b9e2-ae9d1b22f85e",
    "address": "Departamento de 1 ambiente  - 30 adelanto y 36 cuotas en pesos - Av. Dorrego al 1500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "            Live In Dorrego\n \n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n \n- Descuentos por pago de contado\n\nLive In Dorrego:\n \nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n \nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n \nAmenities:\n \n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación:\n \nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n \nUnidades disponibles de 34m2 hasta 148m2\n \nCada unidad cuenta con:\n \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n \nExcelente calidad constructiva y terminaciones:\n \n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\r\n        ",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 31937806,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Norte",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/55289805678228091471538662538330725299276588835763184187975908048220369981858.jpg",
      "https://static.tokkobroker.com/pictures/94292957906657062335666128930132549041886154925036246459892490843601522556394.jpg",
      "https://static.tokkobroker.com/pictures/100078291991955903584129135892416231007740412738996555228383090966131254261143.jpg",
      "https://static.tokkobroker.com/pictures/89866454569194879440540794170076772534927818280918418791305540449704809075343.jpg",
      "https://static.tokkobroker.com/pictures/60498052333743709624666517826583667953593521696853515382532767172822354732152.jpg",
      "https://static.tokkobroker.com/pictures/91894967060296510505052403624607510803527647354659121667726470430901208878075.jpg",
      "https://static.tokkobroker.com/pictures/57952845089716162510939401885788077353415689608656948092800186668644010949550.jpg",
      "https://static.tokkobroker.com/pictures/56065847081348911384248003312492060692284932237565143620572386714593678206908.jpg",
      "https://static.tokkobroker.com/pictures/85377684362630073178906650273242471884246697758010323420115206885166044560792.jpg",
      "https://static.tokkobroker.com/pictures/47969972916376960932498234273941724201561180499567511655165058967736666494634.jpg",
      "https://static.tokkobroker.com/pictures/49793998745840507183375277166730314023664196226100904606082557984594344784618.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 4 Dto 1",
    "property_condition": "Excelente",
    "roofed_surface": "34.00",
    "room_amount": 1,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "34.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.007Z",
    "updatedAt": "2023-06-26T17:39:06.007Z"
  },
  {
    "id": "406d9c75-a4fb-4109-a546-95d92cfd1563",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 3,
    "age": -1,
    "description": "Live In Dorrego\n\n¡30% de adelanto y 36 cuotas en pesos! Final de Obra principios del 2024\n\n- Descuentos por pago de contado\n\n¡Increíble 4 ambientes a estrenar, de amplias dimensiones con vista abierta y doble balcón aterrazado!\n\n- Toilette de recepción\n- Placard de recepción\n- Suite con salida al balcón corrido aterrazado, baño completo y placard con interiores\n- Cocina completa integrada con horno, anafe y barra desayunadora de granito o similar.\n- Lavadero apartado\n- Comedor diario con salida al balcón corrido aterrazado\n- Gran living con salida al balcón corrido aterrazado \n- Suite con salida a balcón aterrazado con baño completo y placard con interiores\n- Master suite con salida al balcón aterrazado con baño completo y vestidor con interiores\n- Baños y toilette completos con espejo, mesada de mármol y accesorios.\n\n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n\nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n\nAmenities:\n\n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n\n\nExcelente ubicación:\n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n\nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n\n\n¿Es lo que buscás? ¡Consultanos!\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 150241544,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/89070739999505465682807111331971593179590841719785405160087996232088401914545.jpg",
      "https://static.tokkobroker.com/pictures/110115769081202651019451117353027818081937906387392369115472204577814921394520.jpg",
      "https://static.tokkobroker.com/pictures/52561058468153842631250746272405382476401004261497539838443704509802152987488.jpg",
      "https://static.tokkobroker.com/pictures/17137395406699557978249361231025604433955129825235983826676605078697976595945.jpg",
      "https://static.tokkobroker.com/pictures/39213245835013077417846457701160282061409772599560043646002522004030732141706.jpg",
      "https://static.tokkobroker.com/pictures/10822154085908267406819050660819108241695655664528363092737881674586829313554.jpg",
      "https://static.tokkobroker.com/pictures/12894737374012342846048941493489586941583093420078657883305971920079139167163.jpg",
      "https://static.tokkobroker.com/pictures/77204717945025910239717127758601787530677474356025448304282844401973045490603.jpg",
      "https://static.tokkobroker.com/pictures/80037548294102436355655020906566030589980553556655244752298015524153837469280.jpg",
      "https://static.tokkobroker.com/pictures/109430767910074124634989481933407659672441566669037515820366705498566170598951.jpg",
      "https://static.tokkobroker.com/pictures/11736346037495549332272221526872714166894295933059048920459045249875138930152.jpg",
      "https://static.tokkobroker.com/pictures/33058430043031007168097643420628701021881292289721814275221490757461972039484.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 7 Dto 4",
    "property_condition": "Excelente",
    "roofed_surface": "123.40",
    "room_amount": 4,
    "semiroofed_surface": "24.50",
    "situation": "Vacía ",
    "suite_amount": 3,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "147.40",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.015Z",
    "updatedAt": "2023-06-26T17:39:06.015Z"
  },
  {
    "id": "3d065556-c081-452d-8e8b-a0c97c89b1d7",
    "address": "Departamento 2 ambientes con balcón terraza - Boulevard San Isidro - Vilela al 2500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "                                                            Boulevard San Isidro\n\n¡30% de adelanto y 8 cuotas en pesos! Final de Obra Agosto 2023\n\n- Descuentos por pago de contado\n\nIncreíble 2 ambientes a estrenar, de amplias dimensiones con vista abierta y balcón aterrazado!\n\n- Toilette de recepción\n- Cocina integrada completa con horno, anafe y barra desayunadora de granito o similar\n- Gran living comedor con salida al balcón corrido aterrazado\n- Gran master suite con salida al balcón corrido aterrazado con baño y vestidor con interiores\n- Baño y toilette con espejo, accesorios y mesada de granito negro brasil o similar\n\nEl Edificio, de estilo contemporáneo y máxima categoría, cuenta con un importante Hall de acceso en doble altura previsto con cámaras de seguridad y locales comerciales en la esquina.\n\nLas cocheras se distribuyen en subsuelo, con cómodo acceso sobre calle Vilela\nmediante rampa.\n\nLas plantas contienen unidades de 1, 2, 3 y 4 ambientes y los palieres poseen doble\nascensor de última generación.\n\nAmenities:\n\n- Salón de usos múltiples equipado,\n- Pérgola con sector de parrilla y amplia terraza.\n- Gimnasio.\n- Piscina y solárium con azotea verde.\n- Social Room en planta baja.\n\nExcelente ubicación:\n\nEn la esquina del boulevard San Isidro Labrador y calle Vilela. A media cuadra de Av. Cabildo, metro bus, espacios verdes y todos los servicios urbanos que le permitirán disfrutar de la tranquilidad del barrio de Núñez.\n\nA metros de todos los accesos a Capital Federal y principales avenidas.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos entablonados de madera de eucalipto o similar (Opción de porcelanato).\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n¿Es lo que buscás? ¡Consultanos!\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\n\n        \n        \n        \n        \r\n        ",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 193251,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Noroeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/19266681858049923294026959525331518617334314414747663032438300183956942550370.jpg",
      "https://static.tokkobroker.com/pictures/57260436770300227998775462471228427688489411108401043868767267592893458138240.jpg",
      "https://static.tokkobroker.com/pictures/12234158322702826515185313366259719613162667045617725996652641042682859983780.jpg",
      "https://static.tokkobroker.com/pictures/64695382857963587897922007783090934049817817680078836461117229040230230147749.jpg",
      "https://static.tokkobroker.com/pictures/50345565099788451596099007488357331635023781368891520058319068464791569613026.jpg",
      "https://static.tokkobroker.com/pictures/107795172149351704296872894125388282331857195704473001105829166320761085755125.jpg",
      "https://static.tokkobroker.com/pictures/44992588411056975781266794517664948632586989377028706655898495235495800859089.jpg",
      "https://static.tokkobroker.com/pictures/71744120345240031431557192599563974229931967039114199574608348073879017211744.jpg",
      "https://static.tokkobroker.com/pictures/103320620499719549961299302071368331301515566550318725102172531832460591272287.jpg",
      "https://static.tokkobroker.com/pictures/109051702647599279223478463229571786542016154124780350262905846532742047905960.jpg",
      "https://static.tokkobroker.com/pictures/36568015959189206679515756745239764261546355524227608205059700664249584611355.jpg",
      "https://static.tokkobroker.com/pictures/47248181813052842556886183440218140837241213011138733810451443117804332861015.jpg",
      "https://static.tokkobroker.com/pictures/102901293224269115170376510339319044913402224639576794737123453252239520551420.jpg",
      "https://static.tokkobroker.com/pictures/52365192771765475812683945002751802702899441688750296324194906156266542378885.jpg",
      "https://static.tokkobroker.com/pictures/85042506973529131869137780983614146074170104493970720623771472214866054174269.jpg",
      "https://static.tokkobroker.com/pictures/54654358202951285389706078240572715490045702181016776237220135663493856641027.jpg",
      "https://static.tokkobroker.com/pictures/89375805203117918482244325543712562723454165965516879050314984240216042945839.jpg",
      "https://static.tokkobroker.com/pictures/10714616571544274841566679112873951022396520887314067732026834397333546366279.jpg",
      "https://static.tokkobroker.com/pictures/23930262766574974652614623275049897624212184203867782259141147510230387393354.jpg",
      "https://static.tokkobroker.com/pictures/37322151415820731215760331411684793075504093028254406263876783292851523099969.jpg",
      "https://static.tokkobroker.com/pictures/20046654691635957589917088104413454467441247580632174644311610322358085460271.jpg",
      "https://static.tokkobroker.com/pictures/38589635030648979039507454701919005479055354111570088774312025748403982261196.jpg",
      "https://static.tokkobroker.com/pictures/40279366530335670706306499347904009788689868282669664202073133365637078481573.jpg",
      "https://static.tokkobroker.com/pictures/11687421406715634839944106586586916072472661601705725131124042694889065734940.jpg",
      "https://static.tokkobroker.com/pictures/29246571644495562720653847222724183718844698108044902206279915854069121664732.jpg",
      "https://static.tokkobroker.com/pictures/93731616403772271514146894092729298428446728846113717150368726479799166619230.jpg",
      "https://static.tokkobroker.com/pictures/53529800799024476780373652878835627188941805193816531813290392943606166625668.jpg",
      "https://static.tokkobroker.com/pictures/113262431532195971773928829501611159507029794094421056480223944786873456903585.jpg",
      "https://static.tokkobroker.com/pictures/20262415979524947459758655621084772249598382827301302988508128479263796038833.jpg"
    ],
    "real_address": "Vilela 2525 - Piso 2 Dto 10",
    "property_condition": "Excelente",
    "roofed_surface": "64.00",
    "room_amount": 2,
    "semiroofed_surface": "7.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1528,
        "name": "Apto crédito",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "71.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=n6_3FxMuCTk"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.041Z",
    "updatedAt": "2023-06-26T17:39:06.041Z"
  },
  {
    "id": "47fe5c58-6ef8-4c3b-9f11-f90a042d4c24",
    "address": "Departamento de 1 ambiente - 30 adelanto y 36 cuotas en pesos - Av. Dorrego al 1500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n \n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n \n- Descuentos por pago de contado\n \n- Apto blanqueo para la construcción\n \nLive In Dorrego:\n \nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n \nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n \nAmenities:\n \n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación:\n \nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n \nUnidades disponibles de 34m2 hasta 148m2\n \nCada unidad cuenta con:\n \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n \nExcelente calidad constructiva y terminaciones:\n \n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/95637007193707971727317528050023470243921422187387903583550258069737655119057.jpg",
      "https://static.tokkobroker.com/pictures/80790742849749215950531541550940150683213892417588250839022378139735101669073.jpg",
      "https://static.tokkobroker.com/pictures/76975086857373614287992515148516006483885043077027047838570920834584463568095.jpg",
      "https://static.tokkobroker.com/pictures/111166289578670351083688928695345223545502324920049142217723453984595151145562.jpg",
      "https://static.tokkobroker.com/pictures/115454315227737343918229674054679060979122560612591947716164079295439941501356.jpg",
      "https://static.tokkobroker.com/pictures/39098588119542990539796839874044527116993033086970254948233699197952542783778.jpg",
      "https://static.tokkobroker.com/pictures/96806605902412875665037032750155470131374537687369772595483839943527043911065.jpg",
      "https://static.tokkobroker.com/pictures/104777204753351112447792268521412064523710494846912514063473206816145492817568.jpg",
      "https://static.tokkobroker.com/pictures/112306480473055501253886192553321550032696868794000054487369983680245630062320.jpg",
      "https://static.tokkobroker.com/pictures/27248536875220023538134111805095517218915742810246496613676636075647209218378.jpg",
      "https://static.tokkobroker.com/pictures/22815349129254965018435461245018445671521039352752260094262039703938063129542.jpg"
    ],
    "real_address": "Av. Dorrego 1516",
    "property_condition": "Excelente",
    "roofed_surface": "35.00",
    "room_amount": 1,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "35.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.067Z",
    "updatedAt": "2023-06-26T17:39:06.067Z"
  },
  {
    "id": "ff3b04c1-0eb0-4f64-9a87-4f5d88fb5e35",
    "address": "Departamento de 1 ambiente - 30 adelanto y 36 cuotas en pesos - Av. Dorrego al 1500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n \n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n \n- Descuentos por pago de contado\n \n \nLive In Dorrego:\n \nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n \nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n \nAmenities:\n \n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación:\n \nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n \nUnidades disponibles de 34m2 hasta 148m2\n \nCada unidad cuenta con:\n \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n \nExcelente calidad constructiva y terminaciones:\n \n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 43705624,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/106570104137521130688893069405697750382378946657209503447264938569196991659560.jpg",
      "https://static.tokkobroker.com/pictures/86965485319452819618212183799729158368405170095124691410153617690897648727268.jpg",
      "https://static.tokkobroker.com/pictures/31660344150951028799048803764337573692792223775112494803200481018762249541041.jpg",
      "https://static.tokkobroker.com/pictures/82495133519076996445445626926983731917733158616509342053773971627325524216095.jpg",
      "https://static.tokkobroker.com/pictures/6527738753277265349197631524225436457927731421455045659346343444665108370174.jpg",
      "https://static.tokkobroker.com/pictures/57666826065514576292817391746929215225531905761812275973233851699277931234163.jpg",
      "https://static.tokkobroker.com/pictures/35252267947434487389182926058959672191841115790259530760472047950410828663291.jpg",
      "https://static.tokkobroker.com/pictures/39261141385312383820661191768842294793893012504862601346663653509037570143423.jpg",
      "https://static.tokkobroker.com/pictures/54199098436986141372309079222472471208273496556037745899874619103693073393040.jpg",
      "https://static.tokkobroker.com/pictures/33175244282980752118699713317969666488457870441272240046543333545388055805898.jpg",
      "https://static.tokkobroker.com/pictures/97647428854352667724343742038367114806447575321368630931589117320531612614784.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 7 Dto 8",
    "property_condition": "Excelente",
    "roofed_surface": "34.00",
    "room_amount": 1,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "34.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.962Z",
    "updatedAt": "2023-06-26T17:39:05.962Z"
  },
  {
    "id": "ba1280cf-5bbf-4c06-adf1-1fc9da3160b9",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n \n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n \n- Descuentos por pago de contado\n \n- Apto blanqueo para la construcción\n \nLive In Dorrego:\n \nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n \nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n \nAmenities:\n \n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación:\n \nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n \nUnidades disponibles de 34m2 hasta 148m2\n \nCada unidad cuenta con:\n \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n \nExcelente calidad constructiva y terminaciones:\n \n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 32525064,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/41853003640982515165014504077954351697040387443443629146786551628491627025168.jpg",
      "https://static.tokkobroker.com/pictures/12025824603773479871796177918178805364552168426358149221102691316862347732705.jpg",
      "https://static.tokkobroker.com/pictures/106946949098913317437768443847189482874120810873230280708329220516974733435006.jpg",
      "https://static.tokkobroker.com/pictures/59812237375988765766754211216446534887203538485430771432218552034998376298268.jpg",
      "https://static.tokkobroker.com/pictures/62671006274133158395925319903585249753661188230685381109190499360385000945280.jpg",
      "https://static.tokkobroker.com/pictures/269282336963236702518048562361405402798538995535111576592500857086358309202.jpg",
      "https://static.tokkobroker.com/pictures/104491107846628349619753478698597290339386381142031179060369600699782403549842.jpg",
      "https://static.tokkobroker.com/pictures/30719960367844103100604597046838830557293642027127757048524093478834998950899.jpg",
      "https://static.tokkobroker.com/pictures/40242092139524119845920342365230557554735280894725861193965719821678738542004.jpg",
      "https://static.tokkobroker.com/pictures/38268304297838040291415547280403320297175302623158948155820723688401959274233.jpg",
      "https://static.tokkobroker.com/pictures/75238901233349563205784474643044722788777934920870642557877071800946245255068.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 5 Dto 1",
    "property_condition": "Excelente",
    "roofed_surface": "34.00",
    "room_amount": 1,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "34.00",
    "type": "Departamento",
    "unroofed_surface": "4.80",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:05.995Z",
    "updatedAt": "2023-06-26T17:39:05.995Z"
  },
  {
    "id": "c1850bfa-a8b9-47e6-9411-fceda0bac8a0",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n\n¡30% de adelanto y 36 cuotas en pesos! Final de Obra principios del 2024\n\n- Descuentos por pago de contado\n\n¡Increíble 2 ambientes a estrenar, de amplias dimensiones con vista abierta y gran balcon aterrazado!\n\n- Toilette de recepción\n- Cocina completa integrada con horno, anafe y barra desayunadora de granito o similar.\n- Living comedor con salida al balcón corrido aterrazado\n- Master suite con salida al balcón corrido aterrazado, baño completo y vestidor de grandes dimensiones con interiores \n- Baño y toilette completos con espejo, mesada de mármol y accesorios.\n\n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n\nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n\nAmenities:\n\n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n\n\nExcelente ubicación:\n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n\nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n\n\n¿Es lo que buscás? ¡Consultanos!\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\n",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 50818302,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/12355084106153475100207407081017961685757088058203800476341308563690520810583.jpg",
      "https://static.tokkobroker.com/pictures/90133331816049514250579677486478591434922600287347082086683344365595732701869.jpg",
      "https://static.tokkobroker.com/pictures/52291416855338107908859344435836389996488127304185063282938764996769166096516.jpg",
      "https://static.tokkobroker.com/pictures/85103218465451533880206950656182689173222966672934917286273422312689314222235.jpg",
      "https://static.tokkobroker.com/pictures/58900032879424454969791390422966086431791719823593125434337313884701937148238.jpg",
      "https://static.tokkobroker.com/pictures/59739474023145138280326301691898726584651445528703563087196218158147733290516.jpg",
      "https://static.tokkobroker.com/pictures/60014730704394500811009870992944108264197037657414756119403242929679387637501.jpg",
      "https://static.tokkobroker.com/pictures/35453633395091012015284746703210315416533024502769861177534715630790513094897.jpg",
      "https://static.tokkobroker.com/pictures/528248049806935047984903466344869703015183111766304998023059307959605681915.jpg",
      "https://static.tokkobroker.com/pictures/82659166700588778357970266485545409305935894230011630304325388761955498833306.jpg",
      "https://static.tokkobroker.com/pictures/75927199570081277617810654635834758608941298717186245608138537052400544105431.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 1 Dto 2",
    "property_condition": "Excelente",
    "roofed_surface": "47.20",
    "room_amount": 2,
    "semiroofed_surface": "8.70",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 1,
    "total_surface": "55.90",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.009Z",
    "updatedAt": "2023-06-26T17:39:06.009Z"
  },
  {
    "id": "27c4d3bd-d552-4deb-a1ed-54377034475d",
    "address": "Departamento 2 ambientes con balcón terraza - Boulevard San Isidro - Vilela al 2500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "                                                            Boulevard San Isidro\n\n¡30% de adelanto y 8 cuotas en pesos! Final de Obra Agosto 2023\n\n- Descuentos por pago de contado\n\nIncreíble 2 ambientes a estrenar, de amplias dimensiones con vista abierta y balcón aterrazado!\n\n- Toilette de recepción\n- Cocina integrada completa con horno, anafe y barra desayunadora de granito o similar\n- Gran living comedor con salida al balcón  aterrazado\n- Gran master suite con salida al balcón  aterrazado con baño y vestidor de gran dimensión con interiores\n- Baño y toilette con espejo, accesorios y mesada de granito negro brasil o similar\n\nEl Edificio, de estilo contemporáneo y máxima categoría, cuenta con un importante Hall de acceso en doble altura previsto con cámaras de seguridad y locales comerciales en la esquina.\n\nLas cocheras se distribuyen en subsuelo, con cómodo acceso sobre calle Vilela\nmediante rampa.\n\nLas plantas contienen unidades de 1, 2, 3 y 4 ambientes y los palieres poseen doble\nascensor de última generación.\n\nAmenities:\n\n- Salón de usos múltiples equipado,\n- Pérgola con sector de parrilla y amplia terraza.\n- Gimnasio.\n- Piscina y solárium con azotea verde.\n- Social Room en planta baja.\n\nExcelente ubicación:\n\nEn la esquina del boulevard San Isidro Labrador y calle Vilela. A media cuadra de Av. Cabildo, metro bus, espacios verdes y todos los servicios urbanos que le permitirán disfrutar de la tranquilidad del barrio de Núñez.\n\nA metros de todos los accesos a Capital Federal y principales avenidas.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos entablonados de madera de eucalipto o similar (Opción de porcelanato).\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n¿Es lo que buscás? ¡Consultanos!\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\n\n        \n        \n        \n        \r\n        ",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 196000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Noroeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/58110741052696026157091858787707471764984483063146392407149835798274715599419.jpg",
      "https://static.tokkobroker.com/pictures/29463867478190013174877060680914434470370034792343993856178255554143571191219.jpg",
      "https://static.tokkobroker.com/pictures/81115820482074235947088150075343604709605709511533343721444468777992466383122.jpg",
      "https://static.tokkobroker.com/pictures/37254908205282223562588480503608976709104264510753794692142726544327935959732.jpg",
      "https://static.tokkobroker.com/pictures/79880008181349621095295171020989089178467208890344961731817632065086039883732.jpg",
      "https://static.tokkobroker.com/pictures/8760199751992909144722749351704998407792397634456148682696569351129376135628.jpg",
      "https://static.tokkobroker.com/pictures/93212542790872045574876918477245876794379705880370410068756681176075211297284.jpg",
      "https://static.tokkobroker.com/pictures/106015602686507793812818740813492785225314447762116484066599347060908423293506.jpg",
      "https://static.tokkobroker.com/pictures/61881506742640772601577840230944513033379708541656280217784458483286101000898.jpg",
      "https://static.tokkobroker.com/pictures/43066770280742049022088520691381425117105719898396757823474572311666744666676.jpg",
      "https://static.tokkobroker.com/pictures/100238165817794093226272980206539583121137472550211871880880255934472548462242.jpg",
      "https://static.tokkobroker.com/pictures/50073487208935346984707560575408482933043968253239248800041314137268510549946.jpg",
      "https://static.tokkobroker.com/pictures/56577368986694966928150934275192739059606526404579331638688323731468947417434.jpg",
      "https://static.tokkobroker.com/pictures/24395200688046637583075852885973180439102370047248895633970208102612821004993.jpg",
      "https://static.tokkobroker.com/pictures/15299080764244870705459798035229004401327371912530732972776802672206032890596.jpg",
      "https://static.tokkobroker.com/pictures/99186410498471205704803472981645483105424904633890111672365610753312830917396.jpg",
      "https://static.tokkobroker.com/pictures/39125064700279466797364216799920918182599420204324966078101698295548850233898.jpg",
      "https://static.tokkobroker.com/pictures/968261456813179354405401675624173399635052356327200541008547206671394079770.jpg",
      "https://static.tokkobroker.com/pictures/95251854369574412797112153253896509429168327661697844964022022182219033684219.jpg",
      "https://static.tokkobroker.com/pictures/25136690403079100963589879836394619096632593319343928640183538805396838868110.jpg",
      "https://static.tokkobroker.com/pictures/115503939707197551096743075001551522941105858804261174961241477295515166795493.jpg",
      "https://static.tokkobroker.com/pictures/31265706427602406811899459193884672505743742985421938799182351924199655134107.jpg",
      "https://static.tokkobroker.com/pictures/12669042313253108560401025654191182023273927717976337795471201145353487617487.jpg",
      "https://static.tokkobroker.com/pictures/104647784267875845148687966674468487115502367598454232275434567345583637051977.jpg",
      "https://static.tokkobroker.com/pictures/34172170075913558103734337123520676213528126074044378925118385357450688012558.jpg",
      "https://static.tokkobroker.com/pictures/99563228371549322973051826690569954237992832826309767429383587665033139957825.jpg",
      "https://static.tokkobroker.com/pictures/62836749009894332150067922735830558696511096328796964801159035770287130483366.jpg",
      "https://static.tokkobroker.com/pictures/57590099028299235417008280559881528681063058184853166161518976840519584962263.jpg",
      "https://static.tokkobroker.com/pictures/72726290456407784353833738929614339545426496369643023854440667146818520893471.jpg"
    ],
    "real_address": "Vilela 2525 - Piso 1 Dto 2",
    "property_condition": "Excelente",
    "roofed_surface": "62.30",
    "room_amount": 2,
    "semiroofed_surface": "8.50",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1528,
        "name": "Apto crédito",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "70.80",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=n6_3FxMuCTk"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.024Z",
    "updatedAt": "2023-06-26T17:39:06.024Z"
  },
  {
    "id": "0e3807b8-a0b1-461d-8305-f5c4d1b5653c",
    "address": "Departamento 3 ambientes con balcón terraza - Boulevard San Isidro - Vilela al 2500",
    "bathroom_amount": 2,
    "age": -1,
    "description": "                                                            Boulevard San Isidro\n\n¡30% de adelanto y 8 cuotas en pesos! Final de Obra Agosto 2023\n\n- Descuentos por pago de contado\n\nIncreíble 3 ambientes a estrenar, de amplias dimensiones con vista abierta y balcón corrido aterrazado!\n\n- Toilette de recepción\n- Cocina integrada completa con horno, anafe y barra desayunadora de granito o similar\n- Gran living comedor con salida al balcón corrido aterrazado\n- Gran suite con salida al balcón corrido aterrazado con baño completo y placard con interiores\n- Gran master suite principal con baño completo y vestidor de grandes dimensiones \n- Baños y toilette con espejo, accesorios y mesada de granito negro brasil o similar\n\nEl Edificio, de estilo contemporáneo y máxima categoría, cuenta con un importante Hall de acceso en doble altura previsto con cámaras de seguridad y locales comerciales en la esquina.\n\nLas cocheras se distribuyen en subsuelo, con cómodo acceso sobre calle Vilela\nmediante rampa.\n\nLas plantas contienen unidades de 1, 2, 3 y 4 ambientes y los palieres poseen doble\nascensor de última generación.\n\nAmenities:\n\n- Salón de usos múltiples equipado,\n- Pérgola con sector de parrilla y amplia terraza.\n- Gimnasio.\n- Piscina y solárium con azotea verde.\n- Social Room en planta baja.\n\nExcelente ubicación:\n\nEn la esquina del boulevard San Isidro Labrador y calle Vilela. A media cuadra de Av. Cabildo, metro bus, espacios verdes y todos los servicios urbanos que le permitirán disfrutar de la tranquilidad del barrio de Núñez.\n\nA metros de todos los accesos a Capital Federal y principales avenidas.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos entablonados de madera de eucalipto o similar (Opción de porcelanato).\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n¿Es lo que buscás? ¡Consultanos!\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\n\n\n        \n        \n        \n        \r\n        ",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 235998,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Noroeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/68064695293381272345850755576996755912641440921486508316639541517565094401251.jpg",
      "https://static.tokkobroker.com/pictures/28986022391359994031631558031618545457542255180428377673158689625197527017034.jpg",
      "https://static.tokkobroker.com/pictures/85284507245109572878260262994204563673865851952534715191712714810519774280414.jpg",
      "https://static.tokkobroker.com/pictures/16369371747649716006078971782088250361271578617611638432852140278655704079500.jpg",
      "https://static.tokkobroker.com/pictures/76289073261621690739240500592939038964199310403097937280437862435828170415891.jpg",
      "https://static.tokkobroker.com/pictures/76264831081859097917028207643567736951305428928458326598507001712063202457978.jpg",
      "https://static.tokkobroker.com/pictures/36950314148919957047116980995688448571087485033698875968988760525149186730220.jpg",
      "https://static.tokkobroker.com/pictures/12549463273808418987173093194804466007511549798302222911686091118127298996037.jpg",
      "https://static.tokkobroker.com/pictures/85871087900436659178026765606785946705190850185929998433631056203795726386328.jpg",
      "https://static.tokkobroker.com/pictures/61131980490420016281543203166321607807589788971921254606873603787460565511658.jpg",
      "https://static.tokkobroker.com/pictures/51240590885507976012852270503573347415184288289350625067534830792469848798263.jpg",
      "https://static.tokkobroker.com/pictures/83363016974651296290049690127179129268881834498696632789714221132317855324934.jpg",
      "https://static.tokkobroker.com/pictures/64166513634014205524033039543593662853459291367685391445422258466254237800604.jpg",
      "https://static.tokkobroker.com/pictures/29403951830748739975049033324061175680256278253626142927082421879832947430844.jpg",
      "https://static.tokkobroker.com/pictures/5242932708515191300965633531584065261531614075145056973740576069481867487748.jpg",
      "https://static.tokkobroker.com/pictures/13392878036608187833713087842108035391477162424545311007874825350419373951397.jpg",
      "https://static.tokkobroker.com/pictures/53113903805009104626540831433461706043236610832258035459623084741878441385777.jpg"
    ],
    "real_address": "Vilela 2525 - Piso 2 Dto 3",
    "property_condition": "Excelente",
    "roofed_surface": "78.00",
    "room_amount": 3,
    "semiroofed_surface": "7.00",
    "situation": "Vacía ",
    "suite_amount": 2,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1528,
        "name": "Apto crédito",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "85.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=n6_3FxMuCTk"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.042Z",
    "updatedAt": "2023-06-26T17:39:06.042Z"
  },
  {
    "id": "2ac0a986-f60b-4012-92ba-d871fc211a47",
    "address": "Departamento 4 ambientes con balcón terraza - Boulevard San Isidro - Vilela al 2500",
    "bathroom_amount": 2,
    "age": -1,
    "description": "                                    Boulevard San Isidro\n\n\n¡Increíble 4 ambientes a estrenar, de amplias dimensiones con vista abierta y doble balcón aterrazado!\n\n- Toilette de recepción\n- Gran master suite principal con salida al balcón corrido aterrazado con baño completo y vestidor de grandes dimensiones \n- Cocina integrada completa con horno, anafe y barra desayunadora de granito o similar\n- Lavadero apartado\n- Comedor diario con salida al balcón corrido aterrazado\n- Living de grandes dimensiones \n- Gran suite con salida al balcón corrido aterrazado con baño completo y placard con interiores\n- Dormitorio con salida al balcón corrido aterrazado con placard con interiores\n- Baños y toilettes con espejo, accesorios y mesada de granito negro brasil o similar\n\nEl Edificio, de estilo contemporáneo y máxima categoría, cuenta con un importante Hall de acceso en doble altura previsto con cámaras de seguridad y locales comerciales en la esquina.\n\nLas cocheras se distribuyen en subsuelo, con cómodo acceso sobre calle Vilela\nmediante rampa.\n\nLas plantas contienen unidades de 1, 2, 3 y 4 ambientes y los palieres poseen doble\nascensor de última generación.\n\nAmenities:\n\n- Salón de usos múltiples equipado,\n- Pérgola con sector de parrilla y amplia terraza.\n- Gimnasio.\n- Piscina y solárium con azotea verde.\n- Social Room en planta baja.\n\nExcelente ubicación:\n\nEn la esquina del boulevard San Isidro Labrador y calle Vilela. A media cuadra de Av. Cabildo, metro bus, espacios verdes y todos los servicios urbanos que le permitirán disfrutar de la tranquilidad del barrio de Núñez.\n\nA metros de todos los accesos a Capital Federal y principales avenidas.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos entablonados de madera de eucalipto o similar (Opción de porcelanato).\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n¿Es lo que buscás? ¡Consultanos!\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\n\n\n        \n        \r\n        ",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 620000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Este",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/104681593510886477558136563483958729414605616473169687712169576906519866997394.jpg",
      "https://static.tokkobroker.com/pictures/26589539416288862765392611307605530033248224143097896904161153980704846243993.jpg",
      "https://static.tokkobroker.com/pictures/103289263764558566734193948497515201089383157975006225850266170316263151036724.jpg",
      "https://static.tokkobroker.com/pictures/53888068104907007405275498674884155764572146111208619307520817084691184251456.jpg",
      "https://static.tokkobroker.com/pictures/46732147074811764890996358170710671491364026933069781464479350909053820372756.jpg",
      "https://static.tokkobroker.com/pictures/69526622847966577008617095576354901273296208154528399344612902076214010629255.jpg",
      "https://static.tokkobroker.com/pictures/109020654793614262362860261617048252625504572449705720135666628414755313109053.jpg",
      "https://static.tokkobroker.com/pictures/111561629190587373357054830645476375180136180506557455304763746013667618405439.jpg",
      "https://static.tokkobroker.com/pictures/57623871267161587582144211265892964882329639754205258457985458299713667898039.jpg",
      "https://static.tokkobroker.com/pictures/43543580556882625362861829103280320763840188586053915125880971662737818803431.jpg",
      "https://static.tokkobroker.com/pictures/89455290727765487849350932056648869130303855340159738665899555714208601826055.jpg",
      "https://static.tokkobroker.com/pictures/90817494260345672468531500991222687312043047808858104250735745022635062890593.jpg",
      "https://static.tokkobroker.com/pictures/16148488895926899432916744449953811408622279448264919291388914880503680231404.jpg",
      "https://static.tokkobroker.com/pictures/81989834549217326725405055907531048192911010329407442741852415835475976891801.jpg",
      "https://static.tokkobroker.com/pictures/47207462402933512482105756828636588269591218888484388077633191093454317677003.jpg"
    ],
    "real_address": "Vilela 2525 - Piso 2 Dto 1",
    "property_condition": "Excelente",
    "roofed_surface": "132.00",
    "room_amount": 4,
    "semiroofed_surface": "23.00",
    "situation": "Vacía ",
    "suite_amount": 3,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1528,
        "name": "Apto crédito",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "155.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=n6_3FxMuCTk"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.042Z",
    "updatedAt": "2023-06-26T17:39:06.042Z"
  },
  {
    "id": "c25bb2e3-15fe-4b2f-850e-87f1f4751fb6",
    "address": "Departamento de 1 ambiente - 30 adelanto y 36 cuotas en pesos - Av. Dorrego al 1500",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n \n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n \n- Descuentos por pago de contado\n \n- Apto blanqueo para la construcción\n \nLive In Dorrego:\n \nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n \nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n \nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n \nAmenities:\n \n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n \nExcelente ubicación:\n \nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n \nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n \nUnidades disponibles de 34m2 hasta 148m2\n \nCada unidad cuenta con:\n \n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n \nExcelente calidad constructiva y terminaciones:\n \n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 35406636,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/7316640905952235279644473495029999682371743755579879216583438062359531298818.jpg",
      "https://static.tokkobroker.com/pictures/98218627674195833808042540800585795651886849308031156614016408659055480126957.jpg",
      "https://static.tokkobroker.com/pictures/59832628548393270437022442454325661329176023351462177817391770494594894099913.jpg",
      "https://static.tokkobroker.com/pictures/25701374228177360008427124316088928461901106281736552933036593080574162542596.jpg",
      "https://static.tokkobroker.com/pictures/29011605050095809585914772011904558842517187784206404271490843314006449329525.jpg",
      "https://static.tokkobroker.com/pictures/65440795020265951065062925492086190107841259486637280277556273837380184902142.jpg",
      "https://static.tokkobroker.com/pictures/77115167258586131762321179616924841909515160493083139933621909635568938613783.jpg",
      "https://static.tokkobroker.com/pictures/113757501269777075521593408284127141458965882162275139853430704246667499207203.jpg",
      "https://static.tokkobroker.com/pictures/108782418515130336824113740799689314246815939783388094433763382307561893162254.jpg",
      "https://static.tokkobroker.com/pictures/80416190253330480114308926530306729683743970772760949202607090930760839104509.jpg",
      "https://static.tokkobroker.com/pictures/39277757102424127983922416127508877345879224703986800598839913241872259618441.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 2 Dto 5",
    "property_condition": "Excelente",
    "roofed_surface": "34.00",
    "room_amount": 1,
    "semiroofed_surface": "4.80",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "38.80",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.065Z",
    "updatedAt": "2023-06-26T17:39:06.065Z"
  },
  {
    "id": "aa0d7ca5-a200-4772-b303-b4d2c2694c68",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n\n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n\n- Descuentos por pago de contado\n\n- Apto blanqueo para la construcción\n\nLive In Dorrego:\n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n\nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n\nAmenities:\n\n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n\nExcelente ubicación:\n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n\nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n\nUnidades disponibles de 34m2 hasta 148m2\n\nCada unidad cuenta con:\n\n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 39905320,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/60897465804588515183104099010099589835678398077106473550181051997796131342966.jpg",
      "https://static.tokkobroker.com/pictures/39250337357888089567783256140305593662389648323362593202860446061435551577538.jpg",
      "https://static.tokkobroker.com/pictures/34403741993921033537404355637506603188031189640353666308226101612630605429874.jpg",
      "https://static.tokkobroker.com/pictures/43436749043652733997750791527472434006926856147857014649493886764381354346750.jpg",
      "https://static.tokkobroker.com/pictures/104401165038641844652755117878382572264531609093813250560060924515073824252796.jpg",
      "https://static.tokkobroker.com/pictures/24251001062098519285937784476147996296554607385247685602655942946495523554671.jpg",
      "https://static.tokkobroker.com/pictures/83438625152196267387098047969562874080450166737522076298728292034081434686330.jpg",
      "https://static.tokkobroker.com/pictures/60321854873178502733468896966368179808719067974808800513073290128963591408138.jpg",
      "https://static.tokkobroker.com/pictures/38037805103543692715790147836882887186124354672019114371335823193987615336767.jpg",
      "https://static.tokkobroker.com/pictures/103047792400918667580163030731380144754962434022749359302462470726166974527841.jpg",
      "https://static.tokkobroker.com/pictures/105857296145600827941847799542558192901659422762136544887354682928506011210337.jpg"
    ],
    "real_address": "Av. Dorrego 1516  - Piso 3 Dto 8",
    "property_condition": "Excelente",
    "roofed_surface": "44.00",
    "room_amount": 1,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 36,
        "name": "Quincho",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 42,
        "name": "Seguridad",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1517,
        "name": "Deck",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "44.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=MRPropiedades"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.066Z",
    "updatedAt": "2023-06-26T17:39:06.066Z"
  },
  {
    "id": "ef104efc-253a-4573-984c-3dbcf38b4588",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n\n¡30% de adelanto y 36 cuotas en pesos! Final de Obra principios del 2024\n\n- Descuentos por pago de contado\n\n¡Increíble 2 ambientes a estrenar, de amplias dimensiones con vista abierta y gran balcon aterrazado!\n\n- Toilette de recepción\n- Cocina completa integrada con horno, anafe y barra desayunadora de granito o similar.\n- Living comedor con salida al balcón corrido aterrazado\n- Master suite con salida al balcón corrido aterrazado, baño completo y vestidor de grandes dimensiones con interiores \n- Baño y toilette completos con espejo, mesada de mármol y accesorios.\n\n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n\nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n\nAmenities:\n\n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n\n\nExcelente ubicación:\n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n\nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n\n\n¿Es lo que buscás? ¡Consultanos!\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\n",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 72127788,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/110480859718279826173526763930795535574037105223995750145231242879436658359763.jpg",
      "https://static.tokkobroker.com/pictures/79274574673323949388915618466435343283553138471816982578429687582516268199890.jpg",
      "https://static.tokkobroker.com/pictures/62269667332067180561176850199051177469815208438661127933587499928350936750050.jpg",
      "https://static.tokkobroker.com/pictures/88352244792507500857377621722685585371073416948365929895911306944434739150873.jpg",
      "https://static.tokkobroker.com/pictures/44781578583849149948420068290107440737962207557251425699185090007223013637214.jpg",
      "https://static.tokkobroker.com/pictures/24040672777522260241452248908481192073288235262773488613907142320232861258310.jpg",
      "https://static.tokkobroker.com/pictures/114049971239510632723847801470439850964724823153218708850431797544792134916219.jpg",
      "https://static.tokkobroker.com/pictures/21883273757135656497715680730784903588528464361163294221765436526360067906836.jpg",
      "https://static.tokkobroker.com/pictures/55719070866546492152511640306435295726293960006469581551900235207778954715030.jpg",
      "https://static.tokkobroker.com/pictures/18992993340311088116966898901599106192466756122068464778935343910085107893400.jpg",
      "https://static.tokkobroker.com/pictures/77811362815229348408250049246819147942165772190620864573926280205919480330716.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 7 Dto 7",
    "property_condition": "Excelente",
    "roofed_surface": "62.30",
    "room_amount": 2,
    "semiroofed_surface": "8.50",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 1,
    "total_surface": "70.80",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.077Z",
    "updatedAt": "2023-06-26T17:39:06.077Z"
  },
  {
    "id": "1ce3db73-7728-4059-ad8e-49e30bcbfcb6",
    "address": "galvan 3100",
    "bathroom_amount": 1,
    "age": 0,
    "description": "",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 90000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Este",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/26526541520884217773640669119904964975586331214940718547915932499410874731775.jpg",
      "https://static.tokkobroker.com/pictures/23272085086155600637236149103546144852718909806616454484227218116091276726093.jpg",
      "https://static.tokkobroker.com/pictures/58099780801998653604422859034182121246593406808361426044591578146439765907848.jpg",
      "https://static.tokkobroker.com/pictures/95152955030225583771350686952925860045043855238179120044531064484616686870550.jpg",
      "https://static.tokkobroker.com/pictures/58246187390221351585694472306653771036084025959778189835851695839740698674980.jpg",
      "https://static.tokkobroker.com/pictures/106381041073627966619013672680663820552709834806967742973729509710071269607577.jpg",
      "https://static.tokkobroker.com/pictures/90747804844553439986887402779298122259824786184289402904893126541248662103738.jpg",
      "https://static.tokkobroker.com/pictures/87130802924775055544235191544000836655168987032938066297658278182538445564826.jpg"
    ],
    "real_address": "Galvan 3171 - 6 B",
    "property_condition": "Excelente",
    "roofed_surface": "40.00",
    "room_amount": 2,
    "semiroofed_surface": "2.80",
    "situation": "---",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 11,
        "name": "Baulera",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 18,
        "name": "Hall",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1514,
        "name": "Calefacción por radiadores",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "42.80",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.087Z",
    "updatedAt": "2023-06-26T17:39:06.087Z"
  },
  {
    "id": "f32fc213-830e-4025-93f4-50905010308c",
    "address": "Av. Maipu 500",
    "bathroom_amount": 1,
    "age": 0,
    "description": "                                                M550\n\n¡Oportunidad única! !&nbsp; ¡Posibilidad de financiación privada!!!&nbsp; Final de Obra Diciembre 2024\n\nEl Edificio, de estilo contemporáneo y máxima categoría, cuenta con un importante hall de acceso y 7 pisos con dos unidades de 2 ambientes en cada uno. Terraza de uso común y parrilla. Todas las unidades son aptas profesionales y con balcones aterrazados con parrillas propias.\n\nUn edificio moderno y espacioso. Con grandes cualidades de iluminación, ventilación y adaptabilidad.\n\nExcelente ubicación:\n\nEmplazado sobre la Av. Maipú, M550 ofrece una localización estratégica, encontrándose a 5 cuadras de Au. Gral. Paz, 7 de Av. Libertador y a 9 del río.\n\nUnidades disponibles de 41 m2 al contrafrente y 51 m2 al frente.\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción y agua caliente por caldera dual a gas.\n- Aberturas de Aluminio negro con DVH (Doble vidrio hermético)\n- Pisos flotantes y de porcelanato de alta calidad.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Cerraduras de puerta de acceso electrónicas.\n- Preinstalación para aire acondicionado.\n- Mesadas de cocina de silestone.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n        \n        \n        \n\r\n        ",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 104000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Oeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/77075130503433503287525284189362993758943969851777825281467566293248952087240.jpg",
      "https://static.tokkobroker.com/pictures/3490319589265752253368313151387988174986828659593862256983283502251103987866.jpg",
      "https://static.tokkobroker.com/pictures/100811784920155191251071012368433407411418359002091818404331556155212521475724.jpg",
      "https://static.tokkobroker.com/pictures/36091778830272194844395712983747472846085910719028607069298326594306977835035.jpg",
      "https://static.tokkobroker.com/pictures/94179740104118342142742174566439224361498281574957547206355587745644964150241.jpg",
      "https://static.tokkobroker.com/pictures/14293767103787433326304928878339767856076197263027652609395139290683260986550.jpg",
      "https://static.tokkobroker.com/pictures/48453165627790131132893683078142008947590163954817539917688969607042144176511.jpg"
    ],
    "real_address": "Av. Maipu 550 - 4 B",
    "property_condition": "Excelente",
    "roofed_surface": "41.09",
    "room_amount": 2,
    "semiroofed_surface": "6.33",
    "situation": "---",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 16,
        "name": "Suite",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 26,
        "name": "Toilette",
        "type": 2
      },
      {
        "id": 27,
        "name": "Vestidor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1505,
        "name": "Lavadero",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1514,
        "name": "Calefacción por radiadores",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "47.42",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.096Z",
    "updatedAt": "2023-06-26T17:39:06.096Z"
  },
  {
    "id": "5ca5bc9c-559b-474e-8bb4-2a9e9ce364c0",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 1,
    "age": -1,
    "description": "Live In Dorrego\n\n¡30% de adelanto y 36 cuotas en pesos! Inicio de Obra Octubre 2021\n\n- Descuentos por pago de contado\n\n- Apto blanqueo para la construcción\n\nLive In Dorrego:\n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n\nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n\nAmenities:\n\n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n\nExcelente ubicación:\n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n\nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n\nUnidades disponibles de 34m2 hasta 148m2\n\nCada unidad cuenta con:\n\n- Cocina completa con horno, anafe y barra desayunadora de granito o similar.\n- Baño/s completos con espejo, mesada de mármol y accesorios.\n- Placard con interiores.\n- Vestidor con interiores\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 39850347,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/62834403073222609490074481386576688486374608095076634275224948587153798925568.jpg",
      "https://static.tokkobroker.com/pictures/41276253864256412655071695012678458398294744199351424399234312178943137979686.jpg",
      "https://static.tokkobroker.com/pictures/39586450413115370916866696786568736680906067192761046607361693189907888718861.jpg",
      "https://static.tokkobroker.com/pictures/54314906546732824154381610960060117911859583783424892342796853475903633117799.jpg",
      "https://static.tokkobroker.com/pictures/88258209156402399695789772190654586334987707900547506378800027520888834403463.jpg",
      "https://static.tokkobroker.com/pictures/115771453937153648757969493980400754156789028836211903899964792249264617882771.jpg",
      "https://static.tokkobroker.com/pictures/71398973707888185964697896399937347093440273529866470665284863885731314809919.jpg",
      "https://static.tokkobroker.com/pictures/36780772836259862478106270700460687463933136983234703762439849678330090673614.jpg",
      "https://static.tokkobroker.com/pictures/40978373809621240372437053494224026243694510432662764225431974722364269646820.jpg",
      "https://static.tokkobroker.com/pictures/1308399340613798711045377666100659445165176652522319279895850699677094874013.jpg",
      "https://static.tokkobroker.com/pictures/29956163040771290496999420574922904719447398225388730843245673500027866630025.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 2 Dto 8",
    "property_condition": "Excelente",
    "roofed_surface": "44.00",
    "room_amount": 1,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 36,
        "name": "Quincho",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 42,
        "name": "Seguridad",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1517,
        "name": "Deck",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "44.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=MRPropiedades"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.067Z",
    "updatedAt": "2023-06-26T17:39:06.067Z"
  },
  {
    "id": "4493b075-7a25-4e2e-95df-452188d1bf6d",
    "address": "Galvan 3100",
    "bathroom_amount": 1,
    "age": 0,
    "description": "",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 82000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Oeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/7340682792596589639452333508531885228192135443512595894647415119570182631450.jpg",
      "https://static.tokkobroker.com/pictures/75242162025247314989270468397143519899505695558115730946868680114601270430859.jpg",
      "https://static.tokkobroker.com/pictures/35039006050405614993729035931609909018251942213225928840411000363883141224304.jpg",
      "https://static.tokkobroker.com/pictures/61463858629679231431805594343305802334260183069248977987720839133769317969972.jpg",
      "https://static.tokkobroker.com/pictures/36451774998009414824689683717517376580342965866260359040846627761579926745547.jpg",
      "https://static.tokkobroker.com/pictures/98953589886824763648399552557076584774053294266293553314701017425943002142352.jpg",
      "https://static.tokkobroker.com/pictures/7791669474186600150491509421497835534273380713181291155609073834426621676052.jpg",
      "https://static.tokkobroker.com/pictures/34241302758494737572299749914755712679087230636367888252263844812622911037752.jpg"
    ],
    "real_address": "Galvan 3171 - 3 A",
    "property_condition": "Excelente",
    "roofed_surface": "40.00",
    "room_amount": 2,
    "semiroofed_surface": "11.50",
    "situation": "---",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 11,
        "name": "Baulera",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 18,
        "name": "Hall",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1514,
        "name": "Calefacción por radiadores",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "51.50",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.079Z",
    "updatedAt": "2023-06-26T17:39:06.079Z"
  },
  {
    "id": "3365f0f4-8f35-419b-bd1d-0d34c2bb7422",
    "address": "Galvan 3100",
    "bathroom_amount": 1,
    "age": 0,
    "description": "",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 92000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Este",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/64958826558292223310344839625435713611848693629564676688502955907906275520797.jpg",
      "https://static.tokkobroker.com/pictures/62502251465552786230315157009662414006990423884114464392620721947617782593947.jpg",
      "https://static.tokkobroker.com/pictures/16826116025919113773458392480441750248784327908231366208757875577404858334818.jpg",
      "https://static.tokkobroker.com/pictures/4883720251183988195422579365453913977004889019764937142929478479897962890367.jpg",
      "https://static.tokkobroker.com/pictures/47570172712169571997067513674022052169565293242780769176407706464757868667683.jpg",
      "https://static.tokkobroker.com/pictures/95979072852363131263470483572801023080052291654395732921010924917348337543877.jpg",
      "https://static.tokkobroker.com/pictures/109897240265444989389300953681368105616057841216991155957989210198351406858936.jpg",
      "https://static.tokkobroker.com/pictures/20275033820456280881751891300726109401688030207118487587427966462605436216070.jpg"
    ],
    "real_address": "Galvan 3171 - 7 B",
    "property_condition": "Excelente",
    "roofed_surface": "40.00",
    "room_amount": 2,
    "semiroofed_surface": "3.00",
    "situation": "---",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 11,
        "name": "Baulera",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 18,
        "name": "Hall",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1514,
        "name": "Calefacción por radiadores",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "43.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.086Z",
    "updatedAt": "2023-06-26T17:39:06.086Z"
  },
  {
    "id": "1db9a2b6-e47b-4082-81dc-b81d215b192c",
    "address": "Av. Maipu 500",
    "bathroom_amount": 1,
    "age": 0,
    "description": "                                    M550\n\n¡Oportunidad única! ¡Posibilidad de financiación privada!!! Final de Obra Diciembre 2024\n\nEl Edificio, de estilo contemporáneo y máxima categoría, cuenta con un importante hall de acceso y 7 pisos con dos unidades de 2 ambientes en cada uno. Terraza de uso común y parrilla. Todas las unidades son aptas profesionales y con balcones aterrazados con parrillas propias.\n\nUn edificio moderno y espacioso. Con grandes cualidades de iluminación, ventilación y adaptabilidad.\n\nExcelente ubicación:\n\nEmplazado sobre la Av. Maipú, M550 ofrece una localización estratégica, encontrándose a 5 cuadras de Au. Gral. Paz, 7 de Av. Libertador y a 9 del río.\n\nUnidades disponibles de 41 m2 al contrafrente y 51 m2 al frente.\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción y agua caliente por caldera dual a gas.\n- Aberturas de Aluminio negro con DVH (Doble vidrio hermético)\n- Pisos flotantes y de porcelanato de alta calidad.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Cerraduras de puerta de acceso electrónicas.\n- Preinstalación para aire acondicionado.\n- Mesadas de cocina de silestone.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n        \n        \r\n        ",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 104000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Este",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/75498649705470055957257684610694591325936773122331797925326822847203524638005.jpg",
      "https://static.tokkobroker.com/pictures/47719119155828396408534802548209315137810993699336639227865766989413794407762.jpg",
      "https://static.tokkobroker.com/pictures/88274159464989644579375242902670812126990423215015461208918389133290076349992.jpg",
      "https://static.tokkobroker.com/pictures/3366681461943296854641103773517412360253043539490769425449826040776797897700.jpg",
      "https://static.tokkobroker.com/pictures/88754354002157987338352150540907444088557390850091556969196550772907544313877.jpg",
      "https://static.tokkobroker.com/pictures/107389105663290056279342673364180791369654146481844249969555131327584000257517.jpg",
      "https://static.tokkobroker.com/pictures/98158323736333854947244533227633736470959118073444834770989482140558242895192.jpg"
    ],
    "real_address": "Av. Maipu 550 - 1 A",
    "property_condition": "Excelente",
    "roofed_surface": "45.41",
    "room_amount": 2,
    "semiroofed_surface": "6.33",
    "situation": "---",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 16,
        "name": "Suite",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 26,
        "name": "Toilette",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1505,
        "name": "Lavadero",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1514,
        "name": "Calefacción por radiadores",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "51.74",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.095Z",
    "updatedAt": "2023-06-26T17:39:06.095Z"
  },
  {
    "id": "dc21228a-ba9d-46d1-a94c-25744dcaa7ae",
    "address": "Departamentos de 1, 2, 3 y 4 ambientes 30 adelanto y 36 cuotas en pesos - Live In Dorrego ",
    "bathroom_amount": 3,
    "age": -1,
    "description": "Live In Dorrego\n\n¡30% de adelanto y 36 cuotas en pesos! Final de Obra principios del 2024\n\n- Descuentos por pago de contado\n\n¡Increíble 4 ambientes a estrenar, de amplias dimensiones con vista abierta y doble balcón aterrazado!\n\n- Toilette de recepción\n- Placard de recepción\n- Suite con salida al balcón corrido aterrazado, baño completo y placard con interiores\n- Cocina completa integrada con horno, anafe y barra desayunadora de granito o similar.\n- Lavadero apartado\n- Comedor diario con salida al balcón corrido aterrazado\n- Gran living con salida al balcón corrido aterrazado \n- Suite con salida a balcón aterrazado con baño completo y placard con interiores\n- Master suite con salida al balcón aterrazado con baño completo y vestidor con interiores\n- Baños y toilette completos con espejo, mesada de mármol y accesorios.\n\n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n\nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n\nAmenities:\n\n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n\n\nExcelente ubicación:\n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n\nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n\n\n¿Es lo que buscás? ¡Consultanos!\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 145417229,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/46170125841932787198078854392552387701845550501692406504328437760697697017981.jpg",
      "https://static.tokkobroker.com/pictures/29910916184768155240543974175263269548055791599958768847537930904117421816386.jpg",
      "https://static.tokkobroker.com/pictures/85967537858722816182011376257709353578963093133564356888524541521601157066569.jpg",
      "https://static.tokkobroker.com/pictures/36513322763514307077973750152827273068972086880308799725562938579969955645740.jpg",
      "https://static.tokkobroker.com/pictures/69851286874520416898555966751787270048158017626868413531099842461681715010833.jpg",
      "https://static.tokkobroker.com/pictures/48580236871367198849607251583962074916077104398264880961432811838237085269868.jpg",
      "https://static.tokkobroker.com/pictures/68440277911133179379622366372939288711783062580527690971326396039314274297913.jpg",
      "https://static.tokkobroker.com/pictures/12103761617421252954303989359066335951420345036552308411701707988695629030265.jpg",
      "https://static.tokkobroker.com/pictures/36943308288618870756277025234637085075629785709775086732087128757220685732684.jpg",
      "https://static.tokkobroker.com/pictures/42796064575336145180725637098502164038123014799946233943918239737075849198829.jpg",
      "https://static.tokkobroker.com/pictures/50703976585841285052523031275857891029360508882971008141065167504238068210725.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 5 Dto 4",
    "property_condition": "Excelente",
    "roofed_surface": "123.40",
    "room_amount": 4,
    "semiroofed_surface": "24.00",
    "situation": "Vacía ",
    "suite_amount": 3,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 33,
        "name": "Gimnasio",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 0,
    "total_surface": "147.55",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=mNyxHrzm2Iw"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.076Z",
    "updatedAt": "2023-06-26T17:39:06.076Z"
  },
  {
    "id": "043ffdd6-ceb6-49c0-9dd3-7ad8e26bf5de",
    "address": "Galvan 3100",
    "bathroom_amount": 1,
    "age": 0,
    "description": "",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 85000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Oeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/103462524050720811772762175235047582153316791125648694946528757636373921026697.jpg",
      "https://static.tokkobroker.com/pictures/48390928705972369650985810740995201643449932254706250006019768838779387580699.jpg",
      "https://static.tokkobroker.com/pictures/29407918179892717812914122410819256903295685437759965559120502887197722287229.jpg",
      "https://static.tokkobroker.com/pictures/72122520010334480230500568319066769373691598136333740193019061450047286347683.jpg",
      "https://static.tokkobroker.com/pictures/7012901868561244381828460832182646709586040328354420376872831774403487333537.jpg",
      "https://static.tokkobroker.com/pictures/66080486405413001701540170942007581129612110452083810540055435256833613674472.jpg",
      "https://static.tokkobroker.com/pictures/84789802328792904518851694810104862853173287633723657747607456013090366663855.jpg",
      "https://static.tokkobroker.com/pictures/92396348515734064795873379393420410308603854281922434797696130613810739760305.jpg"
    ],
    "real_address": "Galvan 3171 - 7 A",
    "property_condition": "Excelente",
    "roofed_surface": "42.00",
    "room_amount": 1,
    "semiroofed_surface": "7.00",
    "situation": "---",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 11,
        "name": "Baulera",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 18,
        "name": "Hall",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1514,
        "name": "Calefacción por radiadores",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "49.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.085Z",
    "updatedAt": "2023-06-26T17:39:06.085Z"
  },
  {
    "id": "3fb666eb-3c22-44fa-9310-a8d2e42ac4b8",
    "address": " Av. Maipu 500",
    "bathroom_amount": 1,
    "age": 0,
    "description": "                                    M550\n\n¡Oportunidad única!&nbsp; ¡Posibilidad de financiación privada!!! Final de Obra Diciembre 2024\n\nEl Edificio, de estilo contemporáneo y máxima categoría, cuenta con un importante hall de acceso y 7 pisos con dos unidades de 2 ambientes en cada uno. Terraza de uso común y parrilla. Todas las unidades son aptas profesionales y con balcones aterrazados con parrillas propias.\n\nUn edificio moderno y espacioso. Con grandes cualidades de iluminación, ventilación y adaptabilidad.\n\nExcelente ubicación:\n\nEmplazado sobre la Av. Maipú, M550 ofrece una localización estratégica, encontrándose a 5 cuadras de Au. Gral. Paz, 7 de Av. Libertador y a 9 del río.\n\nUnidades disponibles de 41 m2 al contrafrente y 51 m2 al frente.\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción y agua caliente por caldera dual a gas.\n- Aberturas de Aluminio negro con DVH (Doble vidrio hermético)\n- Pisos flotantes y de porcelanato de alta calidad.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Cerraduras de puerta de acceso electrónicas.\n- Preinstalación para aire acondicionado.\n- Mesadas de cocina de silestone.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n        \n        \r\n        ",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 112000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Este",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/45666212601200423019600463262936807118637067561359601418594599537628016087720.jpg",
      "https://static.tokkobroker.com/pictures/103491627214513873893979742932907879119277933172678193883330238753548842859605.jpg",
      "https://static.tokkobroker.com/pictures/71030838690812761041098284772834144216561654742053558844400635699462435427380.jpg",
      "https://static.tokkobroker.com/pictures/109108784730619120280939467975359035398979248232819823309595955585062982372025.jpg",
      "https://static.tokkobroker.com/pictures/35770099253560741121139449672070422618142266460024273263226791345399821300544.jpg",
      "https://static.tokkobroker.com/pictures/98489937521481896905703539737022031522643627897318877344632738588498091473409.jpg",
      "https://static.tokkobroker.com/pictures/91814930330371150767965348265167346127886983574765461210567611961969137296784.jpg"
    ],
    "real_address": "Av. Maipu 550 - 3 A",
    "property_condition": "Excelente",
    "roofed_surface": "45.41",
    "room_amount": 2,
    "semiroofed_surface": "6.33",
    "situation": "---",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 16,
        "name": "Suite",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 26,
        "name": "Toilette",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1505,
        "name": "Lavadero",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1514,
        "name": "Calefacción por radiadores",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "51.74",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.094Z",
    "updatedAt": "2023-06-26T17:39:06.094Z"
  },
  {
    "id": "2a26a806-cbe1-4a56-a703-e57e0b200606",
    "address": "Av. Leandro N. Alem al 400",
    "bathroom_amount": 2,
    "age": 40,
    "description": "Gran oficina en un semipiso en alquiler en el Centro! Excelente ubicación, sobre Av. Leandro N. Alem, a media cuadra de Av. Corrientes, del Centro Cultural Kirchner, y de la Plaza del Correo. Edificio con seguridad hasta las 18 hs.\n\nEl inmueble se encuentra en el tercer piso, y cuenta con 4 despachos privados y una gran sala de reuniones. Los despachos contiguos se pueden unificar para crear un espacio más amplio.\n\nTambién se puede alquilar el piso entero.\n\n\nMedios de transporte:\n- Colectivos: 4, 5, 6, 7, 9, 20, 22, 23, 26, 28, 29, 33, 45, 50, 56, 61, 62, 64, 74, 91, 93, 99, 103, 105, 109, 111, 115, 126, 129, 130, 132, 140, 143, 146, 152, 159, 180, 195.\n- Subtes: Correo Central (Línea E), Florida (Línea B), Alem (Línea B).",
    "disposition": "Frente",
    "expenses": 56860,
    "floors_amount": 1,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 140000,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Alquiler"
      }
    ],
    "orientation": "Oeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/111006397260367324494037932546048699364330723571572719854468333186604604341257.jpg",
      "https://static.tokkobroker.com/pictures/56204609026621004595426244608969069728517166335620988921174087280872157200532.jpg",
      "https://static.tokkobroker.com/pictures/90866301199696397717107398887422551197699199745511035785790328141493157467669.jpg",
      "https://static.tokkobroker.com/pictures/36092518016578832638030015644581936346004363849368948220605131043033643557019.jpg",
      "https://static.tokkobroker.com/pictures/35623367231980826285055475039797863721320886924601194570658934903176784607171.jpg",
      "https://static.tokkobroker.com/pictures/8205710461580889995491269472395985315832184033393162025201682104568251100858.jpg",
      "https://static.tokkobroker.com/pictures/70228102994762044628965431124390540218354112389914068054266175544252361908894.jpg",
      "https://static.tokkobroker.com/pictures/95503209972135290632886483299180436299701323657835059423367075442669345597458.jpg",
      "https://static.tokkobroker.com/pictures/21954703985134432534585871550008683070628512567828903137708037310062208286806.jpg",
      "https://static.tokkobroker.com/pictures/21742909372369275322284020761943163353875481598237852554255548600498235330077.jpg",
      "https://static.tokkobroker.com/pictures/89515140051534592391395886338180482909592090913986114050076333813328246670162.jpg",
      "https://static.tokkobroker.com/pictures/91894530552161738119278451740668028835174866780320354132805503448548538648862.jpg",
      "https://static.tokkobroker.com/pictures/39323935368923580679137976971652035025159977032952500403776097640177176520606.jpg",
      "https://static.tokkobroker.com/pictures/110137585062964233608026794848263043825514583391756285051617330657290561357945.jpg",
      "https://static.tokkobroker.com/pictures/54594525194736030799062397427768664178139175006074586487956066232899818090504.jpg",
      "https://static.tokkobroker.com/pictures/56173200105713577793975765707503216912368521732508344387807083286892516899676.jpg",
      "https://static.tokkobroker.com/pictures/14405650116047058952667705375763623273285918186091831373316425542413732099291.jpg",
      "https://static.tokkobroker.com/pictures/111564933084769295166117591399072187584273895019756891486353748998756113474638.jpg",
      "https://static.tokkobroker.com/pictures/6671607707500718905656984458497644961989569031711138725149490190806422238114.jpg",
      "https://static.tokkobroker.com/pictures/54668567308260330375361582774673743018042756257226865161070501770474134235942.jpg",
      "https://static.tokkobroker.com/pictures/105414769567035190459795401357668150926624449056781830914337800474320220831270.jpg"
    ],
    "real_address": "Av. Leandro N. Alem 449",
    "property_condition": "Muy bueno",
    "roofed_surface": "240.00",
    "room_amount": 5,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 0,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 28,
        "name": "Aire Acondicionado individual",
        "type": 3
      },
      {
        "id": 29,
        "name": "Alarma",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1525,
        "name": "Seguridad Diurna",
        "type": 3
      },
      {
        "id": 1526,
        "name": "Seguridad Porteria",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "235.00",
    "type": "Oficina",
    "unroofed_surface": "5.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.103Z",
    "updatedAt": "2023-06-26T17:39:06.103Z"
  },
  {
    "id": "81c6a31f-8246-4711-9d3e-b1bbdfa5098f",
    "address": "Increíble piso privado de 3 ambientes a estrenar! ",
    "bathroom_amount": 2,
    "age": 0,
    "description": " Increíble piso privado de 3 ambientes en la mejor zona de Acassuso a estrenar! \n\n- Piso privado al frente\n- Toilette de recepción\n- Cocina integrada completamente equipada\n- Gran living comedor con salida al balcón\n- Primer dormitorio en suite \n- Segundo dormitorio en master suite\n\nDestacado:\n\n- Calefacción y agua caliente por caldera dual a gas.\n- Aberturas de Aluminio negro con DVH (Doble vidrio hermético)\n- Pisos flotantes y de porcelanato de alta calidad.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Cerraduras de puerta de acceso electrónicas.\n- Preinstalación para aire acondicionado.\n- Mesadas de cocina de silestone.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\nUbicación: \n\n- A metros de Avenida Santa Fe y múltiples medios de transporte publico\n- A 4 cuadras del Hipódromo de San Isidro y múltiples espacios verdes abiertos\n- A cuadras de la estación Acassuso del tren linea Mitre\n\nEdificio: \n\n- 4 pisos\n- Palier privado\n- 6 cocheras con plato giratorio para facilitar las maniobras\n- Terraza privada\n\n¿Es lo que buscás? ¡Consultanos!\n\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\n",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 165000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Sudeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/27194100612192337101601962935914477297910295647005605535050646818741755881205.jpg",
      "https://static.tokkobroker.com/pictures/7266036337124512000921559547288928266165240111316579960405065906286907020883.jpg",
      "https://static.tokkobroker.com/pictures/81209299477128628976634177136106022673977657889338617137930425575265230405379.jpg",
      "https://static.tokkobroker.com/pictures/70096785635876683828039759797224497659478351638434770295679244673950521175642.jpg",
      "https://static.tokkobroker.com/pictures/6276829942497313732077770231089208882636208281050508543770604455579141484545.jpg",
      "https://static.tokkobroker.com/pictures/99263086157248729860617455041036054636885762105540044208853628877671006146624.jpg",
      "https://static.tokkobroker.com/pictures/87051117218758513593197448313193224810347666570187292009513512364068185011584.jpg"
    ],
    "real_address": "Jujuy 24",
    "property_condition": "Excelente",
    "roofed_surface": "74.00",
    "room_amount": 3,
    "semiroofed_surface": "8.00",
    "situation": "Vacía ",
    "suite_amount": 2,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 16,
        "name": "Suite",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 26,
        "name": "Toilette",
        "type": 2
      },
      {
        "id": 27,
        "name": "Vestidor",
        "type": 2
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1514,
        "name": "Calefacción por radiadores",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "82.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=s2HzEI-d-V4"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.112Z",
    "updatedAt": "2023-06-26T17:39:06.112Z"
  },
  {
    "id": "7a498691-cd67-4a34-a48b-4dda7dd4fdb6",
    "address": "Galvan 3100",
    "bathroom_amount": 1,
    "age": 0,
    "description": "MILE \n\n¡30% de adelanto y 24 cuotas en pesos! Final de Obra Noviembre de 2023\n\n- Descuentos por pago de contado\n\nEl Edificio, de estilo contemporáneo y máxima categoría, cuenta con un hall de acceso y un local comercial en planta baja orientado a lo gastronómico \n\n7 pisos y 22 unidades apto profesional con bauleras propias.  Terraza de uso común y parrilla. \n\nLas plantas contienen unidades de 1 y 2 ambientes, con parrilla propia y balcones aterrazados. \n\nUn edificio moderno, funcional y amigable. Con grandes cualidades de iluminación, ventilación y adaptabilidad. \n\nExcelente ubicación:\n\nEn el eje de una importante arteria que conecta Villa Urquiza con Saavedra, para luego desembocar en la av. Gral. Paz se emplaza MILE. Una ubicación estratégica que vincula mediante vías y bicisendas, las áreas comerciales con el transporte público.\n\nUnidades disponibles de 33m2 hasta 103m2\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción y agua caliente por caldera dual a gas. \n- Aberturas de Aluminio negro con DVH (Doble vidrio hermético) \n- Pisos flotantes y de porcelanato de alta calidad. \n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Cerraduras de puerta de acceso electrónicas. \n- Preinstalación para aire acondicionado.\n- Mesadas de cocina de granito. \n- Categoría premium en calidad de construcción, materiales y terminaciones.",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 107000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Este",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/11754686828741342302526610164337829544363182110425995219910919320318850494976.jpg",
      "https://static.tokkobroker.com/pictures/115240428005315302643744891128626205636792764403085536423602134560944110808297.jpg",
      "https://static.tokkobroker.com/pictures/58494143726034377977122911507202885469105731845633404521043128231706813346473.jpg",
      "https://static.tokkobroker.com/pictures/17816105831231554391305489329518231460630026550282546582552531899753092652974.jpg",
      "https://static.tokkobroker.com/pictures/39527788489717479789492721758851627570791662422720151171949758831619393614965.jpg",
      "https://static.tokkobroker.com/pictures/18402430607517818493901347736180321566956684352112259473560238789337446204292.jpg",
      "https://static.tokkobroker.com/pictures/15318108719993319705782540247704521073539644186532767286597334486707622173998.jpg",
      "https://static.tokkobroker.com/pictures/16969674132835904365025360754203362556710244376764667478363921202986529022813.jpg"
    ],
    "real_address": "Galvan 3171 - PB",
    "property_condition": "Excelente",
    "roofed_surface": "60.00",
    "room_amount": 2,
    "semiroofed_surface": "9.00",
    "situation": "---",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 11,
        "name": "Baulera",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 16,
        "name": "Suite",
        "type": 2
      },
      {
        "id": 18,
        "name": "Hall",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 23,
        "name": "Patio",
        "type": 2
      },
      {
        "id": 25,
        "name": "Terraza",
        "type": 2
      },
      {
        "id": 26,
        "name": "Toilette",
        "type": 2
      },
      {
        "id": 27,
        "name": "Vestidor",
        "type": 2
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1514,
        "name": "Calefacción por radiadores",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "102.00",
    "type": "Departamento",
    "unroofed_surface": "33.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.078Z",
    "updatedAt": "2023-06-26T17:39:06.078Z"
  },
  {
    "id": "5e2b4cdb-12f8-4a7b-baad-20544a49d5ea",
    "address": " Jujuy 100",
    "bathroom_amount": 2,
    "age": 0,
    "description": "            JOTA\n\n¡Oportunidad única, pagá tu departamento en 40 cuotas&nbsp; en pesos o dólares! Final de Obra Diciembre 2023\n\n- Descuentos por pago de contado\n\nEl Edificio, de estilo contemporáneo y máxima categoría, cuenta con un hall de acceso y cocheras.\n\nSu arquitectura moderna de líneas rectas produce amplios espacios y grandes ventanales de piso a techo que favorecen la luminosidad y las vistas.\nLas unidades se encuentran en la intimidad de 4 departamentos en 4 pisos, con dormitorios todos en suite y pallier privado.\n\nTerrazas, 6 cocheras con plato giratorio para facilitar las maniobras.\n\nCada unidad cuenta con:\n\n- Palier privado\n- 2 dormitorios en suite\n- Dormitorio principal con vestidor\n- Toilete\n- Living cocina integrada al comedor.\n\nExcelente ubicación:\n\nAv. Maipú, Av. Santa Fe, Av. Centenario, Av. del Libertador conectan con todos los puntos en todas las direcciones. Los transportes públicos también juegan un rol fundamental en el proyecto, a pocas cuadras de la estación de tren Acassuso y muchos otros otros medios públicos hacen aún más llamativo al proyecto.\n\n4 unidades exclusivas disponibles de 82m2.\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción y agua caliente por caldera dual a gas.\n- Aberturas de Aluminio negro con DVH (Doble vidrio hermético)\n- Pisos flotantes y de porcelanato de alta calidad.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Cerraduras de puerta de acceso electrónicas.\n- Preinstalación para aire acondicionado.\n- Mesadas de cocina de silestone.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\r\n        ",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 165000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Sudeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/93700456201276722327668897523144598128363716779483258750942239030714419436259.jpg",
      "https://static.tokkobroker.com/pictures/35130642274845026822568072886796122412722637642038807108723181499490599714523.jpg",
      "https://static.tokkobroker.com/pictures/34111797864884474539781354583285654668185557055802204983193028303432326017276.jpg",
      "https://static.tokkobroker.com/pictures/109146335538344972132081801912719878819886187185550957391828716779820152725166.jpg",
      "https://static.tokkobroker.com/pictures/62885039155750164778268650933351575746504519220385730884589924238312344170849.jpg",
      "https://static.tokkobroker.com/pictures/90929742547009112300308903972072042447844979415762869180005364680907779913411.jpg",
      "https://static.tokkobroker.com/pictures/39352639013978746376589666949773907942055022726786471794821621229493319890343.jpg"
    ],
    "real_address": "Jujuy 24 - Cuarto Piso",
    "property_condition": "Excelente",
    "roofed_surface": "74.00",
    "room_amount": 3,
    "semiroofed_surface": "8.00",
    "situation": "Vacía ",
    "suite_amount": 2,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 16,
        "name": "Suite",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 26,
        "name": "Toilette",
        "type": 2
      },
      {
        "id": 27,
        "name": "Vestidor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "82.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [
      "https://www.youtube.com/watch?v=s2HzEI-d-V4"
    ],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.087Z",
    "updatedAt": "2023-06-26T17:39:06.087Z"
  },
  {
    "id": "24396d97-bead-4693-9444-df1a8edae785",
    "address": "Av. Maipu 500",
    "bathroom_amount": 1,
    "age": 0,
    "description": "                                                M550\n\n¡Oportunidad única! !&nbsp; ¡Posibilidad de financiación privada!!!&nbsp; Final de Obra Diciembre 2024\n\nEl Edificio, de estilo contemporáneo y máxima categoría, cuenta con un importante hall de acceso y 7 pisos con dos unidades de 2 ambientes en cada uno. Terraza de uso común y parrilla. Todas las unidades son aptas profesionales y con balcones aterrazados con parrillas propias.\n\nUn edificio moderno y espacioso. Con grandes cualidades de iluminación, ventilación y adaptabilidad.\n\nExcelente ubicación:\n\nEmplazado sobre la Av. Maipú, M550 ofrece una localización estratégica, encontrándose a 5 cuadras de Au. Gral. Paz, 7 de Av. Libertador y a 9 del río.\n\nUnidades disponibles de 41 m2 al contrafrente y 51 m2 al frente.\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción y agua caliente por caldera dual a gas.\n- Aberturas de Aluminio negro con DVH (Doble vidrio hermético)\n- Pisos flotantes y de porcelanato de alta calidad.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Cerraduras de puerta de acceso electrónicas.\n- Preinstalación para aire acondicionado.\n- Mesadas de cocina de silestone.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n        \n        \n        \r\n        ",
    "disposition": "Contrafrente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 109000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Oeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/90457015768419302537010286277234047238164590855161875579950876546025504826159.jpg",
      "https://static.tokkobroker.com/pictures/12664514476260973613284407298848779749881832861789395564661716024920836268049.jpg",
      "https://static.tokkobroker.com/pictures/16971904950388126839693513499252184261139120200539739890257562889956300692312.jpg",
      "https://static.tokkobroker.com/pictures/86970641624313850301586890730730971944571083929904025326212987870267849003357.jpg",
      "https://static.tokkobroker.com/pictures/62864462587206084666623574652927660021900066565838101209776823398747288029583.jpg",
      "https://static.tokkobroker.com/pictures/60090777881702529752361510691216835453799885151324540765789134474658013556530.jpg",
      "https://static.tokkobroker.com/pictures/101149076663268804523475719420698041877983021351213936624149552153928746139541.jpg"
    ],
    "real_address": "Av. Maipu 550 - 7 B",
    "property_condition": "Excelente",
    "roofed_surface": "41.09",
    "room_amount": 2,
    "semiroofed_surface": "6.33",
    "situation": "---",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 16,
        "name": "Suite",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 26,
        "name": "Toilette",
        "type": 2
      },
      {
        "id": 27,
        "name": "Vestidor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1505,
        "name": "Lavadero",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1514,
        "name": "Calefacción por radiadores",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "47.42",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.097Z",
    "updatedAt": "2023-06-26T17:39:06.097Z"
  },
  {
    "id": "5fe0416b-60ea-4de9-8b60-45498479da50",
    "address": "Av. Leandro N. Alem al 400",
    "bathroom_amount": 4,
    "age": 40,
    "description": "Gran oficina en un piso entero con palier privado en alquiler frente a Puerto Madero! Excelente ubicación, sobre Av. Leandro N. Alem, a media cuadra de Av. Corrientes, del Centro Cultural Kirchner, y de la Plaza del Correo. Edificio con seguridad hasta las 18 hs.\n\nEl inmueble se encuentra en el tercer piso, y posee disponible la totalidad de la planta. Cuenta con 9 despachos privados y una gran sala de reuniones. Los despachos contiguos se pueden unificar para crear un espacio más amplio.\n\nSe puede dividir y alquilar medio piso, ya que posee dos ingresos enfrentados, lo que permite tener dos oficinas (240 m2 y 220 m2 respectivamente).\n\n\nMedios de transporte:\n- Colectivos: 4, 5, 6, 7, 9, 20, 22, 23, 26, 28, 29, 33, 45, 50, 56, 61, 62, 64, 74, 91, 93, 99, 103, 105, 109, 111, 115, 126, 129, 130, 132, 140, 143, 146, 152, 159, 180, 195.\n- Subtes: Correo Central (Línea E), Florida (Línea B), Alem (Línea B).",
    "disposition": "Frente",
    "expenses": 103300,
    "floors_amount": 1,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 246000,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Alquiler"
      }
    ],
    "orientation": "Oeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/59483370148282668756472606268893746725926264501555773986556118325939068242537.jpg",
      "https://static.tokkobroker.com/pictures/68542826202229214107545374449487724170207028248927182807733768915411482074635.jpg",
      "https://static.tokkobroker.com/pictures/36874592975766031376449719373036376169568347867137649734996991768620247298647.jpg",
      "https://static.tokkobroker.com/pictures/102878078464330460363765337281183017551286085826933773299819900262464370263936.jpg",
      "https://static.tokkobroker.com/pictures/41512833452217395138832066430769146059335795153681578140707339361757105374452.jpg",
      "https://static.tokkobroker.com/pictures/19675637680276477679659649903804864471389527222060065429367149327686880206036.jpg",
      "https://static.tokkobroker.com/pictures/27759191945253942157554905476012858146557953030259305063440458510524700104845.jpg",
      "https://static.tokkobroker.com/pictures/30552552177391464708264479050956147667261537036485043003914559000400759274598.jpg",
      "https://static.tokkobroker.com/pictures/11318989149425743798754121910825042706263370182686286916150143203791685536656.jpg",
      "https://static.tokkobroker.com/pictures/93683692589485485809655630877526063938218049019715417170554264903829156858454.jpg",
      "https://static.tokkobroker.com/pictures/104298685092223480661849011825513211768524165567786827649548771277861784423276.jpg",
      "https://static.tokkobroker.com/pictures/70629859084559262300852649089666234962475932665106575675424258661525748656679.jpg",
      "https://static.tokkobroker.com/pictures/28921232885596977249161037638207466479820996328437574797971413423759918431192.jpg",
      "https://static.tokkobroker.com/pictures/97625356624258968773804218018007899599478958620977294921417171008269548653788.jpg",
      "https://static.tokkobroker.com/pictures/80888012784795031208031937172682034506270283298629982128849102967076605749933.jpg",
      "https://static.tokkobroker.com/pictures/59942199279242893154149514667578295472960674570957500417195791112401919168545.jpg",
      "https://static.tokkobroker.com/pictures/31823883291470280211543087257734569790388882882917653519857809468573879610060.jpg",
      "https://static.tokkobroker.com/pictures/97075684969764633544228776238656395615174727317988853839847066959251717738992.jpg",
      "https://static.tokkobroker.com/pictures/77174035813188085957034607310459641378479942798475014368302282900434923250587.jpg",
      "https://static.tokkobroker.com/pictures/95367435537283567907666365215904179224603820346685856252809593634181823281096.jpg",
      "https://static.tokkobroker.com/pictures/85205013040299418692555254864555552336694162207046493475090372188846782528041.jpg"
    ],
    "real_address": "Av. Leandro N. Alem 449",
    "property_condition": "Muy bueno",
    "roofed_surface": "455.00",
    "room_amount": 10,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 0,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 28,
        "name": "Aire Acondicionado individual",
        "type": 3
      },
      {
        "id": 29,
        "name": "Alarma",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1525,
        "name": "Seguridad Diurna",
        "type": 3
      },
      {
        "id": 1526,
        "name": "Seguridad Porteria",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "460.00",
    "type": "Oficina",
    "unroofed_surface": "5.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.105Z",
    "updatedAt": "2023-06-26T17:39:06.105Z"
  },
  {
    "id": "56de15f7-0cbe-4d4a-8091-ec2055b3a435",
    "address": "Galvan 3100",
    "bathroom_amount": 1,
    "age": 0,
    "description": "",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 94000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Oeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/11502642916203156080004505049565057575326315146293608499235409600639327526968.jpg",
      "https://static.tokkobroker.com/pictures/72996658819769731448140513809472925814590606126261821257724496441808840844296.jpg",
      "https://static.tokkobroker.com/pictures/108736720439998613033241119908362936259543685841466092731422677213831716365043.jpg",
      "https://static.tokkobroker.com/pictures/74374194333753752068486958476338936564543547878095258933871385058278179617408.jpg",
      "https://static.tokkobroker.com/pictures/90269433578060228592152684587838603528398557109095711129112470990872631947428.jpg",
      "https://static.tokkobroker.com/pictures/59222133984644576020227797734447212028415055789904600155197775862065661372730.jpg",
      "https://static.tokkobroker.com/pictures/11085374064244018120544305700483237569579829444441913473908237055412951486950.jpg",
      "https://static.tokkobroker.com/pictures/29540527640588850706204837181083956721104274458942496759824185628610616897599.jpg"
    ],
    "real_address": "Galvan 3171 - 6 A",
    "property_condition": "Excelente",
    "roofed_surface": "42.00",
    "room_amount": 2,
    "semiroofed_surface": "7.00",
    "situation": "---",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 11,
        "name": "Baulera",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 18,
        "name": "Hall",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1514,
        "name": "Calefacción por radiadores",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "49.00",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.079Z",
    "updatedAt": "2023-06-26T17:39:06.079Z"
  },
  {
    "id": "b2bda2f0-b2de-468f-8f47-f6ea0a7ea579",
    "address": "Av. Maipu 500",
    "bathroom_amount": 1,
    "age": 0,
    "description": "                                    M550\n\n¡Oportunidad única! !&nbsp; ¡Posibilidad de financiación privada!!! Final de Obra Diciembre 2024\n\nEl Edificio, de estilo contemporáneo y máxima categoría, cuenta con un importante hall de acceso y 7 pisos con dos unidades de 2 ambientes en cada uno. Terraza de uso común y parrilla. Todas las unidades son aptas profesionales y con balcones aterrazados con parrillas propias.\n\nUn edificio moderno y espacioso. Con grandes cualidades de iluminación, ventilación y adaptabilidad.\n\nExcelente ubicación:\n\nEmplazado sobre la Av. Maipú, M550 ofrece una localización estratégica, encontrándose a 5 cuadras de Au. Gral. Paz, 7 de Av. Libertador y a 9 del río.\n\nUnidades disponibles de 41 m2 al contrafrente y 51 m2 al frente.\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción y agua caliente por caldera dual a gas.\n- Aberturas de Aluminio negro con DVH (Doble vidrio hermético)\n- Pisos flotantes y de porcelanato de alta calidad.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Cerraduras de puerta de acceso electrónicas.\n- Preinstalación para aire acondicionado.\n- Mesadas de cocina de silestone.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n        \n        \r\n        ",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 119000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Este",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/70275139297061679669045013364400304243599811161893328040653882910258689179420.jpg",
      "https://static.tokkobroker.com/pictures/78693131269283308171964975714323871494193815875070661487464591490559253553022.jpg",
      "https://static.tokkobroker.com/pictures/87393686006927827022547242981919255023007705725467248590293477965629142279911.jpg",
      "https://static.tokkobroker.com/pictures/69425330455264049199653839261675570830247285575951432776548466260496089189461.jpg",
      "https://static.tokkobroker.com/pictures/75122732373841514079133592919464247654208261250599869973541420945480178329611.jpg",
      "https://static.tokkobroker.com/pictures/76960067024384474080107725157597570380143587750178879873361678498362059991837.jpg",
      "https://static.tokkobroker.com/pictures/44008031157407392395218718007057279499284358250706361501482159233742875286344.jpg"
    ],
    "real_address": "Av. Maipu 550 - 5 A",
    "property_condition": "Excelente",
    "roofed_surface": "45.41",
    "room_amount": 2,
    "semiroofed_surface": "6.33",
    "situation": "---",
    "suite_amount": 1,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 16,
        "name": "Suite",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 26,
        "name": "Toilette",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 203,
        "name": "Preinstalación de A/A",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1505,
        "name": "Lavadero",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1514,
        "name": "Calefacción por radiadores",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "51.74",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.088Z",
    "updatedAt": "2023-06-26T17:39:06.088Z"
  },
  {
    "id": "53046ea1-f6e0-408f-afce-77a9dd33fa2e",
    "address": "Av. Leandro N. Alem al 400",
    "bathroom_amount": 4,
    "age": 40,
    "description": "Gran oficina en un piso entero con palier privado en alquiler en el Centro! Excelente ubicación, sobre Av. Leandro N. Alem, a media cuadra de Av. Corrientes, del Centro Cultural Kirchner, y de la Plaza del Correo. Edificio con seguridad hasta las 18 hs.\n\nEl inmueble se encuentra en el tercer piso, y posee disponible la totalidad de la planta. Cuenta con 9 despachos privados y una gran sala de reuniones. Los despachos contiguos se pueden unificar para crear un espacio más amplio.\n\nSe puede dividir y alquilar medio piso, ya que posee dos ingresos enfrentados, lo que permite tener dos oficinas (240 m2 y 220 m2 respectivamente).\n\n\nMedios de transporte:\n- Colectivos: 4, 5, 6, 7, 9, 20, 22, 23, 26, 28, 29, 33, 45, 50, 56, 61, 62, 64, 74, 91, 93, 99, 103, 105, 109, 111, 115, 126, 129, 130, 132, 140, 143, 146, 152, 159, 180, 195.\n- Subtes: Correo Central (Línea E), Florida (Línea B), Alem (Línea B).",
    "disposition": "Frente",
    "expenses": 103300,
    "floors_amount": 1,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 246000,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Alquiler"
      }
    ],
    "orientation": "Oeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/41753422078917161487493978817801788120835421051499610212555184586181002743423.jpg",
      "https://static.tokkobroker.com/pictures/82365662532007860280355537446173247325399276732605721379639268776052529163657.jpg",
      "https://static.tokkobroker.com/pictures/30470815014004891114192945329860060525017019803872212913915980586679713775441.jpg",
      "https://static.tokkobroker.com/pictures/113959934805282335226183334220151952765285961885118644812916286686784242620507.jpg",
      "https://static.tokkobroker.com/pictures/106684540575709855376331538253808975157093569340108809417648576126668096376354.jpg",
      "https://static.tokkobroker.com/pictures/49771577958428414721373017847808081685449845735417503683494611258832175808317.jpg",
      "https://static.tokkobroker.com/pictures/39607428544183892853361342466638005633858810301140809580182311942947811868123.jpg",
      "https://static.tokkobroker.com/pictures/48390901375795784122985170602434361328523743313810587651867488505728074235402.jpg",
      "https://static.tokkobroker.com/pictures/15825017537594269433318392391250484224154386231251771592378579522466163043997.jpg",
      "https://static.tokkobroker.com/pictures/71673559241821783692870266641946156115761535964823942788168092233381115021824.jpg",
      "https://static.tokkobroker.com/pictures/86367262428959648333645145628322978111016931549454440396621989216864701360245.jpg",
      "https://static.tokkobroker.com/pictures/23882599289534722406488697895664313101582373010450607121514162388518244584185.jpg",
      "https://static.tokkobroker.com/pictures/45907547368144464261235708983915856780200939653766389694359426783209664354842.jpg",
      "https://static.tokkobroker.com/pictures/84280123422967850759756054197367906997730449268685039228057095387621391858831.jpg",
      "https://static.tokkobroker.com/pictures/97909504086448848039595157246344647133961261280349356706806812972798959192645.jpg",
      "https://static.tokkobroker.com/pictures/78626728785693247329642689689608114899337061140416267325829751593060174075137.jpg",
      "https://static.tokkobroker.com/pictures/113215303935746727892083747149567267247642214668736254365855112517013926214941.jpg",
      "https://static.tokkobroker.com/pictures/5389757901401979893904038917031254075959148298252369878767131976146444252413.jpg",
      "https://static.tokkobroker.com/pictures/67363094355573605522658193010456977034460734074382730840529915637662676306125.jpg",
      "https://static.tokkobroker.com/pictures/45142331106509515685835299567137161829479856685228908422246889316442788027373.jpg",
      "https://static.tokkobroker.com/pictures/94804836566092792046766708018384315563029180677860489031478155556777756724002.jpg"
    ],
    "real_address": "Av. Leandro N. Alem 449",
    "property_condition": "Muy bueno",
    "roofed_surface": "455.00",
    "room_amount": 10,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 0,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 28,
        "name": "Aire Acondicionado individual",
        "type": 3
      },
      {
        "id": 29,
        "name": "Alarma",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1525,
        "name": "Seguridad Diurna",
        "type": 3
      },
      {
        "id": 1526,
        "name": "Seguridad Porteria",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "460.00",
    "type": "Oficina",
    "unroofed_surface": "5.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.097Z",
    "updatedAt": "2023-06-26T17:39:06.097Z"
  },
  {
    "id": "8754d732-dfd1-499e-baf8-37c65ed3ba25",
    "address": "Av. Leandro N. Alem al 400",
    "bathroom_amount": 2,
    "age": 40,
    "description": "Gran oficina en un semipiso en alquiler en el Centro! Excelente ubicación, sobre Av. Leandro N. Alem, a media cuadra de Av. Corrientes, del Centro Cultural Kirchner, y de la Plaza del Correo. Edificio con seguridad hasta las 18 hs.\n\nEl inmueble se encuentra en el tercer piso, y cuenta con 5 despachos privados. Los despachos contiguos se pueden unificar para crear un espacio más amplio.\n\nTambién se puede alquilar el piso entero.\n\n\nMedios de transporte:\n- Colectivos: 4, 5, 6, 7, 9, 20, 22, 23, 26, 28, 29, 33, 45, 50, 56, 61, 62, 64, 74, 91, 93, 99, 103, 105, 109, 111, 115, 126, 129, 130, 132, 140, 143, 146, 152, 159, 180, 195.\n- Subtes: Correo Central (Línea E), Florida (Línea B), Alem (Línea B).",
    "disposition": "Contrafrente",
    "expenses": 56860,
    "floors_amount": 1,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 140000,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Alquiler"
      }
    ],
    "orientation": "Oeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/62799167999367253868420482205210100843279894751634354820874889992526888555992.jpg",
      "https://static.tokkobroker.com/pictures/46592716093371856918484819813614327720174805230067319349142758527440012675118.jpg",
      "https://static.tokkobroker.com/pictures/109293514537089194288150550888236030671495144730224070675094908817767592762236.jpg",
      "https://static.tokkobroker.com/pictures/38438362821194339030948508967187696466107598433449379423368337789540484272728.jpg",
      "https://static.tokkobroker.com/pictures/48041162491337100883437347153025609655983669963036886776465506155677356914764.jpg",
      "https://static.tokkobroker.com/pictures/77572475938728137939548312414412860785723771670734974243081720177070539908465.jpg",
      "https://static.tokkobroker.com/pictures/81312246689076547653679013924421847941784679874983373486563768950224570631026.jpg",
      "https://static.tokkobroker.com/pictures/108808139067421829292832324752037381651195376018101488642379503587549983347743.jpg",
      "https://static.tokkobroker.com/pictures/31261258658721318391985620626661394318554653892199863534335969912773226617366.jpg",
      "https://static.tokkobroker.com/pictures/102557055586329517122076498636950360334775454618058824873242435327239064537413.jpg",
      "https://static.tokkobroker.com/pictures/113608897209966088884467092552466922292631798413527657550875251416923426404184.jpg",
      "https://static.tokkobroker.com/pictures/85850995280319186161474161402577070849751882622886440904495939195253693474874.jpg",
      "https://static.tokkobroker.com/pictures/110399521197163090953700792660663382758795102435394762168059802070549408833973.jpg",
      "https://static.tokkobroker.com/pictures/106615434707635447119246770121277525017238687928905139954912427473441353221167.jpg",
      "https://static.tokkobroker.com/pictures/98091982458938868644222228141992810530511227825896158446999584218551095330963.jpg",
      "https://static.tokkobroker.com/pictures/86847002226014078425359896338889391404605427404095301322769883073641807962470.jpg",
      "https://static.tokkobroker.com/pictures/12985080203943810079004760672771414577577239374243917336950069791647818321480.jpg",
      "https://static.tokkobroker.com/pictures/39420150116964353473896204333541382908681896308895954745034260329428333676701.jpg",
      "https://static.tokkobroker.com/pictures/37975231141959651620322250810976158981598322193814814306655851103415444110886.jpg",
      "https://static.tokkobroker.com/pictures/15196477473100836231887034204102804598435940839049758405170905884829651785433.jpg",
      "https://static.tokkobroker.com/pictures/94024256152045310584009145908294903379871487707853019744565696284831237623564.jpg"
    ],
    "real_address": "Av. Leandro N. Alem 449",
    "property_condition": "Muy bueno",
    "roofed_surface": "220.00",
    "room_amount": 5,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 0,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 28,
        "name": "Aire Acondicionado individual",
        "type": 3
      },
      {
        "id": 29,
        "name": "Alarma",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1525,
        "name": "Seguridad Diurna",
        "type": 3
      },
      {
        "id": 1526,
        "name": "Seguridad Porteria",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "220.00",
    "type": "Oficina",
    "unroofed_surface": "0.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.104Z",
    "updatedAt": "2023-06-26T17:39:06.104Z"
  },
  {
    "id": "a1054514-31a4-4abd-a728-a70caa0c6161",
    "address": "Excelente casa refaccionada en las Lomas - Juan Clark al 400",
    "bathroom_amount": 5,
    "age": 50,
    "description": "            Excelente propiedad refaccionada en inmejorable zona de San Isidro.            \n        \n\nUbicada en zona de embajadas, a metros de la comisaría Las Lomas y a 4 cuadras del jockey club.\n\nPlanta Baja:\n- Hall de entrada.- Recepción conformada por un living doble con hogar a gas provistos de pisos de porcelanato italiano.- Comedor.- Toilette.\n- Cocina con comedor diario de completo mobiliario, mesadas de granito color gris nardo con pisos de porcelanato.- Habitación en suite con&nbsp; salida a galería.\n&nbsp;-Lavadero- Dependencia de servicio.- Play room en suite.- 2 dormitorios en suite que cuentan con pisos de madera, placards de pared y un baño completo compartido con doble lavamanos.- Dormitorio principal que cuenta con: dos grandes vestidores; hogar; un baño completo con ducha e hidromasaje; doble lavamanos con salida directa al patio trasero de la casa.\n\nSubsuelo:&nbsp;\n\n- Salon de Juegos&nbsp;- Habitación de maquinas- Toilette\n\nExterior- Garage con espacio para 7 autos-Muy lindo y amplio jardín con parrilla y pileta.\n\n- Todo el perímetro de la casa está rodeado de un paredón de 3 m de altura.\nLa calefacción de la propiedad es por estufas a gas.\n\n\r\n        ",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 780000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "",
    "parking_lot_amount": 7,
    "photos": [
      "https://static.tokkobroker.com/pictures/62794141884355652833629433773740502999359058403637561149488202366675382420482.jpg",
      "https://static.tokkobroker.com/pictures/102914045024291052735477059475211752119349558927190111000535131711583438139140.jpg",
      "https://static.tokkobroker.com/pictures/70318211904808981858077677787663484669004495943960374112856708382344940084543.jpg",
      "https://static.tokkobroker.com/pictures/26403898232768164623925754109134167957714050409701554993261281081389622287094.jpg",
      "https://static.tokkobroker.com/pictures/99802443483103268084247900954080133087535391360785028247293976710108226583897.jpg",
      "https://static.tokkobroker.com/pictures/69714469431874832178899987517431890988093376572267054148671693326049831196194.jpg",
      "https://static.tokkobroker.com/pictures/110097128883674907875627480335164251199702063128431519831064788620596115441207.jpg",
      "https://static.tokkobroker.com/pictures/22410268966848299654825506994404189273131456765838805266278189594909435580703.jpg",
      "https://static.tokkobroker.com/pictures/31522031754525354824849757015492224713012205779651116086397184025907055636409.jpg",
      "https://static.tokkobroker.com/pictures/109390122458227897332838937449315435626909640796638288283278205061343323756521.jpg",
      "https://static.tokkobroker.com/pictures/78170271983473176233902011638790383076882274378951084968331149358416916056359.jpg",
      "https://static.tokkobroker.com/pictures/11002974267447616825358984904115861077164461156285800338866758970247336327765.jpg",
      "https://static.tokkobroker.com/pictures/66062789334667269759450737904538852396701545558746170824027730212175760845984.jpg",
      "https://static.tokkobroker.com/pictures/71115976940694716111242658010335009247643665867281582109242098821898859782071.jpg",
      "https://static.tokkobroker.com/pictures/80493493411430529531571802870689443429669481749110355676886431569238222427993.jpg",
      "https://static.tokkobroker.com/pictures/39958642902529855413919185796680675945470410759870467259529585292240202830265.jpg",
      "https://static.tokkobroker.com/pictures/106726104029108291555470454497108485230062608218140136916921532936200612303380.jpg",
      "https://static.tokkobroker.com/pictures/25693851619767631147276137446616880333865385965310220273243826685889730906174.jpg",
      "https://static.tokkobroker.com/pictures/71438582125968252657325954213812907465992280974906851202300635993094804450198.jpg",
      "https://static.tokkobroker.com/pictures/65504192071739989886227720868986992689642166904936978448497761052306596098955.jpg",
      "https://static.tokkobroker.com/pictures/107413430751573989672727229215269205629604953163143847374247424623489487757271.jpg",
      "https://static.tokkobroker.com/pictures/79020505652729620906688312520884493758452846255532843596325627421635539362231.jpg",
      "https://static.tokkobroker.com/pictures/39601987910606413594367260224531051338500558485172579827718401465423142937001.jpg",
      "https://static.tokkobroker.com/pictures/93351676680873262716049995840982745734039970440799117104305565502176871665677.jpg",
      "https://static.tokkobroker.com/pictures/80263663450391734185394141133176077400405844036909842408851628372294416031662.jpg",
      "https://static.tokkobroker.com/pictures/59701643648501734546625878967441712086487369519396170353271014899939394970044.jpg",
      "https://static.tokkobroker.com/pictures/8922022509465849089866835296704378139889998814771092227590634627146963895219.jpg",
      "https://static.tokkobroker.com/pictures/2139038149299413272860001111381130470478390528604907612934431692482777297854.jpg",
      "https://static.tokkobroker.com/pictures/63521954750311209512390569718288970905650565243285720167302046439115796043675.jpg",
      "https://static.tokkobroker.com/pictures/64923496393960437647880735500144429468440320749044336569713867087664002187554.jpg",
      "https://static.tokkobroker.com/pictures/111198459377257799807703888895826444609498803047871091736308657196292497625104.jpg",
      "https://static.tokkobroker.com/pictures/59111859151935111917052001751007881641903005212475805042112203997429863068040.jpg",
      "https://static.tokkobroker.com/pictures/58803252326723838430495420100061842846355380951940069472903419924417711451907.jpg"
    ],
    "real_address": "Juan Clark 430",
    "property_condition": "Muy bueno",
    "roofed_surface": "500.00",
    "room_amount": 6,
    "semiroofed_surface": "10.00",
    "situation": "---",
    "suite_amount": 3,
    "surface": "1011.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 3,
        "name": "Gas Natural",
        "type": 1
      },
      {
        "id": 4,
        "name": "Internet",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 8,
        "name": "Cable",
        "type": 1
      },
      {
        "id": 11,
        "name": "Baulera",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 15,
        "name": "Dependencia",
        "type": 2
      },
      {
        "id": 16,
        "name": "Suite",
        "type": 2
      },
      {
        "id": 17,
        "name": "Oficina",
        "type": 2
      },
      {
        "id": 18,
        "name": "Hall",
        "type": 2
      },
      {
        "id": 19,
        "name": "Jardín",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 23,
        "name": "Patio",
        "type": 2
      },
      {
        "id": 24,
        "name": "Sótano",
        "type": 2
      },
      {
        "id": 26,
        "name": "Toilette",
        "type": 2
      },
      {
        "id": 27,
        "name": "Vestidor",
        "type": 2
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 163,
        "name": "Escritorio",
        "type": 2
      },
      {
        "id": 168,
        "name": "Biblioteca",
        "type": 2
      },
      {
        "id": 1516,
        "name": "Galería",
        "type": 2
      }
    ],
    "toilet_amount": 1,
    "total_surface": "1511.00",
    "type": "Casa",
    "unroofed_surface": "610.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.114Z",
    "updatedAt": "2023-06-26T17:39:06.114Z"
  },
  {
    "id": "ab5b6cf0-0f3c-4ffd-b242-ebbd9974420f",
    "address": "Av. Leandro N. Alem al 400",
    "bathroom_amount": 4,
    "age": 40,
    "description": "Gran oficina en un semipiso en alquiler frente a Puerto Madero! Excelente ubicación, sobre Av. Leandro N. Alem, a media cuadra de Av. Corrientes, del Centro Cultural Kirchner, y de la Plaza del Correo. Edificio con seguridad hasta las 18 hs.\n\nEl inmueble se encuentra en el tercer piso, y cuenta con 4 despachos privados y una gran sala de reuniones. Los despachos contiguos se pueden unificar para crear un espacio más amplio.\n\nTambién se puede alquilar el piso entero.\n\n\nMedios de transporte:\n- Colectivos: 4, 5, 6, 7, 9, 20, 22, 23, 26, 28, 29, 33, 45, 50, 56, 61, 62, 64, 74, 91, 93, 99, 103, 105, 109, 111, 115, 126, 129, 130, 132, 140, 143, 146, 152, 159, 180, 195.\n- Subtes: Correo Central (Línea E), Florida (Línea B), Alem (Línea B).",
    "disposition": "Frente",
    "expenses": 56860,
    "floors_amount": 1,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 140000,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Alquiler"
      }
    ],
    "orientation": "Oeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/101346632971886556843685911032290666556121823243713480072662908044550769070402.jpg",
      "https://static.tokkobroker.com/pictures/112029739624512687451049913378531331867880560176616209578063699938139014479892.jpg",
      "https://static.tokkobroker.com/pictures/57205258034923145709441991157033911196453568566216189235206592215722559062349.jpg",
      "https://static.tokkobroker.com/pictures/64579944544913698455488009523201297235986270516554820658887722319091606350763.jpg",
      "https://static.tokkobroker.com/pictures/78483292694886426591178934629031319086811396191915578960968955931420802566127.jpg",
      "https://static.tokkobroker.com/pictures/68710371326754458601750589008426215022380703154601536952061098197228109529473.jpg",
      "https://static.tokkobroker.com/pictures/69626531496557801814221702197447847499493653932117205636080976309179596180742.jpg",
      "https://static.tokkobroker.com/pictures/108709408116334462036559781119956718603230773819767098191175189760271915509316.jpg",
      "https://static.tokkobroker.com/pictures/54886874253686902605130147247150788408670857657213910280952426655633619321775.jpg",
      "https://static.tokkobroker.com/pictures/78221329429540828912861747993539915834161965261159419213833922396311743001632.jpg",
      "https://static.tokkobroker.com/pictures/99635338222758755713705324660036386110595614390950825255162452654275207150183.jpg",
      "https://static.tokkobroker.com/pictures/16533052677512433736701597196787537247768585743099042739624769622154101186425.jpg",
      "https://static.tokkobroker.com/pictures/60731646676325703654542673238812467826452232618251497410431705893512107692458.jpg",
      "https://static.tokkobroker.com/pictures/11174422912571633427308811949333360320035042025801283172028815042088701528453.jpg",
      "https://static.tokkobroker.com/pictures/30946520934756369662850847242986843283905155465306551945374793026476025333708.jpg",
      "https://static.tokkobroker.com/pictures/53441129098973580921671341436055365101558534456338554326249375549189576843980.jpg",
      "https://static.tokkobroker.com/pictures/104528233223089697535735024023535396678938033066240247982731747143308239632337.jpg",
      "https://static.tokkobroker.com/pictures/91958934612625342631320199882600854730607978779196839444086701462736184787650.jpg",
      "https://static.tokkobroker.com/pictures/92289586383756974679719252050429284057582019873120176255012786322487738463531.jpg",
      "https://static.tokkobroker.com/pictures/25679851761541793549200107962854458126639053098292218705144911122725037185526.jpg",
      "https://static.tokkobroker.com/pictures/26685208459485560783450158208972290106308853142769049866159045934478141123372.jpg"
    ],
    "real_address": "Av. Leandro N. Alem 449",
    "property_condition": "Muy bueno",
    "roofed_surface": "240.00",
    "room_amount": 10,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 0,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 28,
        "name": "Aire Acondicionado individual",
        "type": 3
      },
      {
        "id": 29,
        "name": "Alarma",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1525,
        "name": "Seguridad Diurna",
        "type": 3
      },
      {
        "id": 1526,
        "name": "Seguridad Porteria",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "235.00",
    "type": "Oficina",
    "unroofed_surface": "5.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.106Z",
    "updatedAt": "2023-06-26T17:39:06.106Z"
  },
  {
    "id": "94056d25-eeff-49fb-8e2f-7439761056cd",
    "address": "Increíble ambiente divisible con balcón aterrazado - Vuelta de Obligado al 3300",
    "bathroom_amount": 1,
    "age": 0,
    "description": "            Increíble&nbsp;monoambiente divisible a estrenar, de amplias dimensiones con vista abierta y balcón aterrazado! \n\n\n- Hall de entrada\n- Gran living comedor con posibilidad de dividir, espacio para dormitorio con salida a balcón aterrazado.\n- Cocina integrada con barra desayunadora.\n- Baño completo con bañadera.\n\nTerminaciones:\n- Interiores de placards y vestidores totalmente equipados.\n- Cocina completa con horno y anafe separados de acero inoxidable eléctricos.\n- Descarga para lavarropas.\n- Mesadas de cuarzo blanco Norte en cocinas y de mármol en baños.\n- Canalización para aire acondicionado, teléfono y video.\n- Espejos y mampara en baño\n- DVH (doble vidrio hermético)\n\nPisos:\n- Porcelanato en baños, cocinas y balcones.\n- Patagonia Flooring Vinilum simil madera de alto impacto en cocina, living y dormitorio.\n\nCalefacción:\n- Piso radiante eléctrico con regulación diferenciada por ambiente.\n\nEquipamiento:\n- Portero Visor.\n- Cerradura electrónica en puertas de acceso a unidades.\n\n\nSe trata de un edificio sobre la calle Vuelta de Obligado 3352, entre las calles Manuela Pedraza y Juana Azurduy, en el valorado y residencial barrio de Nuñez. Situado a siete cuadras de Av. del Libertador, a cinco cuadras de la estación Congreso de Tucumán (subte D) y a tres cuadras de la estación Nuñez (tren Mitre).\n\nEdificio de estilo, con importante hall de acceso.\n11 pisos con unidades de 1, 2, 3 y 4 ambientes con cocheras y bauleras.\nAmplias dimensiones y excelente calidad constructiva.\nMuy alto nivel de calidad de terminaciones.\nEquipado con cámaras de seguridad y control de acceso.\n\nFull Amenities:\n- SUM.\n- Piscina.\n- Parrilla con pérgola.\n- Terraza verde\n\nCocheras cubiertas (en subsuelo) desde U$S 28.000.-\nEntrega Junio 2022\n\n\nÚLTIMAS UNIDADES EN VENTA ! SHOWROOM DISPONIBLE !\n\n\n¿Es lo que buscás? ¡Consultanos!\n\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski \n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\n                \r\n        ",
    "disposition": "Frente",
    "expenses": 19000,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 120000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Este",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/95090675566628503063669521080641765416735417281738488611689161029987684784267.jpg",
      "https://static.tokkobroker.com/pictures/27579125129801678902609195626212771479010357617817247876440408441256043822482.jpg",
      "https://static.tokkobroker.com/pictures/81025959662218668375360105194642063724831223916966298616707519193659946149.jpg",
      "https://static.tokkobroker.com/pictures/36713143723973567175462650407115708578242609323298722435423121761516729587742.jpg",
      "https://static.tokkobroker.com/pictures/67989224068358067024879394937698885797662165399968307863345327350104554301705.jpg",
      "https://static.tokkobroker.com/pictures/83805943470684494698234119780241614374068671562784322185113491013313852814513.jpg",
      "https://static.tokkobroker.com/pictures/108237463250618735636578019176179314980906383526528793840387406402796119222070.jpg",
      "https://static.tokkobroker.com/pictures/38708901773172907698087038642515572339547314333532994180543036815858953515660.jpg",
      "https://static.tokkobroker.com/pictures/65580899061562116707526207564741692296218652349759671676461979217954278549263.jpg",
      "https://static.tokkobroker.com/pictures/72411566045713227231876367196706457080602986428731491598966762177286803859984.jpg",
      "https://static.tokkobroker.com/pictures/26524750377327694930591321425063243869966645069791862956219604001265100532357.jpg",
      "https://static.tokkobroker.com/pictures/95917498513326178389172158397977997893531928602724279022289883587062394203605.jpg",
      "https://static.tokkobroker.com/pictures/49591544964674354354015680445290889916829071653635755813321053001209030156682.jpg",
      "https://static.tokkobroker.com/pictures/36109906769121787292210393519343317672278369144702563719281086437117833052080.jpg",
      "https://static.tokkobroker.com/pictures/37673043372037400993184126701587271479570283612143399443889521517233227923230.jpg",
      "https://static.tokkobroker.com/pictures/13167926749043429323542729163885984861347716658608108468189040702026006786379.jpg"
    ],
    "real_address": "Vuelta de Obligado 3352",
    "property_condition": "Excelente",
    "roofed_surface": "43.05",
    "room_amount": 1,
    "semiroofed_surface": "6.35",
    "situation": "Vacía ",
    "suite_amount": 0,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 18,
        "name": "Hall",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "49.40",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.115Z",
    "updatedAt": "2023-06-26T17:39:06.115Z"
  },
  {
    "id": "8eb5821b-0ea9-4f26-b91e-6835cc661fd8",
    "address": "Av. Leandro N. Alem al 400",
    "bathroom_amount": 2,
    "age": 40,
    "description": "Gran oficina en un semipiso en alquiler frente a Puerto Madero! Excelente ubicación, sobre Av. Leandro N. Alem, a media cuadra de Av. Corrientes, del Centro Cultural Kirchner, y de la Plaza del Correo. Edificio con seguridad hasta las 18 hs.\n\nEl inmueble se encuentra en el tercer piso, y cuenta con 5 despachos privados. Los despachos contiguos se pueden unificar para crear un espacio más amplio.\n\nTambién se puede alquilar el piso entero.\n\n\nMedios de transporte:\n- Colectivos: 4, 5, 6, 7, 9, 20, 22, 23, 26, 28, 29, 33, 45, 50, 56, 61, 62, 64, 74, 91, 93, 99, 103, 105, 109, 111, 115, 126, 129, 130, 132, 140, 143, 146, 152, 159, 180, 195.\n- Subtes: Correo Central (Línea E), Florida (Línea B), Alem (Línea B).",
    "disposition": "Contrafrente",
    "expenses": 56860,
    "floors_amount": 1,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 140000,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Alquiler"
      }
    ],
    "orientation": "Oeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/70553564213711764386282610077201007444546373426740990723141107384246224377140.jpg",
      "https://static.tokkobroker.com/pictures/111041286912166955539344397900368367034480732048525247010047313533030929900838.jpg",
      "https://static.tokkobroker.com/pictures/6407664190778956023218952887438372727171398081873996497264414998361377033079.jpg",
      "https://static.tokkobroker.com/pictures/105696854891320498021085027972275166102254288865383026700686632065791801850949.jpg",
      "https://static.tokkobroker.com/pictures/95655700049916261909795392280244253273113247973465007748956715570154243451185.jpg",
      "https://static.tokkobroker.com/pictures/72746448983942320090264236765304459488920610242574616240056239151767102151568.jpg",
      "https://static.tokkobroker.com/pictures/96927112576046554046983703585150321209003395317362927841813715923399105511790.jpg",
      "https://static.tokkobroker.com/pictures/29436170943218949814630132753650868333484319395707010835426198865821620088337.jpg",
      "https://static.tokkobroker.com/pictures/94921788944386233427747817658718487146889504217502682205540562589712975160669.jpg",
      "https://static.tokkobroker.com/pictures/51758545946312250175455779966288213306664231223081494038973175144735595187635.jpg",
      "https://static.tokkobroker.com/pictures/87646598868593724806421294807923382803548603337204492518659373672876883107671.jpg",
      "https://static.tokkobroker.com/pictures/70333589348076197879536731631311922373414370668034345328579609244676349638600.jpg",
      "https://static.tokkobroker.com/pictures/40333311972897967840634918217495264792384859471313635816113489433646364826899.jpg",
      "https://static.tokkobroker.com/pictures/93367773666496012768171274641507387753899073528102600820430316921619560059270.jpg",
      "https://static.tokkobroker.com/pictures/58636502067732868728824623450893599762789893836329000182902015883858230952135.jpg",
      "https://static.tokkobroker.com/pictures/13890165507808714386697018429897287963838310742046377449355751239580935240689.jpg",
      "https://static.tokkobroker.com/pictures/96129713235433054038565396033324144573811778138034647202756775411445840131577.jpg",
      "https://static.tokkobroker.com/pictures/37769236360407025869896699902395140554240060929571075993262297578237759434011.jpg",
      "https://static.tokkobroker.com/pictures/75744506808559613257579389393193286766090694792224114017420725215370611098310.jpg",
      "https://static.tokkobroker.com/pictures/44435261985228582530918989197965146554555543467400999385709381196298832404485.jpg",
      "https://static.tokkobroker.com/pictures/92197288054338549950050438588122362317155956288736099783423463512337303667334.jpg"
    ],
    "real_address": "Av. Leandro N. Alem 449",
    "property_condition": "Muy bueno",
    "roofed_surface": "220.00",
    "room_amount": 5,
    "semiroofed_surface": "0.00",
    "situation": "Vacía ",
    "suite_amount": 0,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 28,
        "name": "Aire Acondicionado individual",
        "type": 3
      },
      {
        "id": 29,
        "name": "Alarma",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1525,
        "name": "Seguridad Diurna",
        "type": 3
      },
      {
        "id": 1526,
        "name": "Seguridad Porteria",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "220.00",
    "type": "Oficina",
    "unroofed_surface": "0.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.106Z",
    "updatedAt": "2023-06-26T17:39:06.106Z"
  },
  {
    "id": "421099ea-936c-4ed6-9b89-ca863e49ce9d",
    "address": "Increíble ambiente divisible con balcón aterrazado - Vuelta de Obligado al 3300",
    "bathroom_amount": 1,
    "age": 0,
    "description": "Increíble&nbsp;monoambiente divisible a estrenar, de amplias dimensiones con vista abierta y balcón aterrazado! \n\n\n- Hall de entrada\n- Gran living comedor con posibilidad de dividir, espacio para dormitorio con salida a balcón aterrazado.\n- Cocina integrada con barra desayunadora.\n- Baño completo con bañadera.\n\nTerminaciones:\n- Interiores de placards y vestidores totalmente equipados.\n- Cocina completa con horno y anafe separados de acero inoxidable eléctricos.\n- Descarga para lavarropas.\n- Mesadas de cuarzo blanco Norte en cocinas y de mármol en baños.\n- Canalización para aire acondicionado, teléfono y video.\n- Espejos y mampara en baño\n- DVH (doble vidrio hermético)\n\nPisos:\n- Porcelanato en baños, cocinas y balcones.\n- Patagonia Flooring Vinilum simil madera de alto impacto en cocina, living y dormitorio.\n\nCalefacción:\n- Piso radiante eléctrico con regulación diferenciada por ambiente.\n\nEquipamiento:\n- Portero Visor.\n- Cerradura electrónica en puertas de acceso a unidades.\n\n\nSe trata de un edificio sobre la calle Vuelta de Obligado 3352, entre las calles Manuela Pedraza y Juana Azurduy, en el valorado y residencial barrio de Nuñez. Situado a siete cuadras de Av. del Libertador, a cinco cuadras de la estación Congreso de Tucumán (subte D) y a tres cuadras de la estación Nuñez (tren Mitre).\n\nEdificio de estilo, con importante hall de acceso.\n11 pisos con unidades de 1, 2, 3 y 4 ambientes con cocheras y bauleras.\nAmplias dimensiones y excelente calidad constructiva.\nMuy alto nivel de calidad de terminaciones.\nEquipado con cámaras de seguridad y control de acceso.\n\nFull Amenities:\n- SUM.\n- Piscina.\n- Parrilla con pérgola.\n- Terraza verde\n\nCocheras cubiertas (en subsuelo) desde U$S 28.000.-\nEntrega Junio 2022\n\n\nÚLTIMAS UNIDADES EN VENTA ! SHOWROOM DISPONIBLE !\n\n\n¿Es lo que buscás? ¡Consultanos!\n\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski \n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\n        \r\n        ",
    "disposition": "Contrafrente",
    "expenses": 19000,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 115000,
            "period": 0,
            "currency": "USD"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Oeste",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/14296376644130347457923707291118937420555710038595502067959920755278909526346.jpg",
      "https://static.tokkobroker.com/pictures/18317381604370453230005252906271500988861571824788050043726569274947923174532.jpg",
      "https://static.tokkobroker.com/pictures/89422542650824310691377198085747355039442007402091105265138746740853078588388.jpg",
      "https://static.tokkobroker.com/pictures/75721939410581338231874077313159072837010277819428255121429556763480367565387.jpg",
      "https://static.tokkobroker.com/pictures/62577661692925700458188235031144900429043916967852846875210183461068435721030.jpg",
      "https://static.tokkobroker.com/pictures/13348774533275589251025154926593543480200059646604604032106099834252961174290.jpg",
      "https://static.tokkobroker.com/pictures/41144829738534446826199985244173590669764271889407346206754481861498793385593.jpg",
      "https://static.tokkobroker.com/pictures/112458749423653372288935015146528947814444997707198233110249968048650126048833.jpg",
      "https://static.tokkobroker.com/pictures/3838611838448494289339954785157718897715839095018306998694722493749619144086.jpg",
      "https://static.tokkobroker.com/pictures/56081946109909586882205906958518159556868556869621832856089661781719367529264.jpg",
      "https://static.tokkobroker.com/pictures/100626184198234912288473171774476871245683219383665411692561849654471808129350.jpg",
      "https://static.tokkobroker.com/pictures/56551325675615488889903843997524603801249656496053083888356583968761707597722.jpg",
      "https://static.tokkobroker.com/pictures/87985888038806066852708473491898873470800998790310304048152405319123265475934.jpg",
      "https://static.tokkobroker.com/pictures/101435604522123924622379020874942041404736085438840044990804115907166813246021.jpg",
      "https://static.tokkobroker.com/pictures/81269958612816262541677748607356235994251221430139100003958081617432546957157.jpg",
      "https://static.tokkobroker.com/pictures/6779160454002404657569660943311201239501733291007048528846232226541424322327.jpg",
      "https://static.tokkobroker.com/pictures/28675351486926089247865810356044255043100827914435011358366843443378140759078.jpg"
    ],
    "real_address": "Vuelta de Obligado 3352",
    "property_condition": "Excelente",
    "roofed_surface": "42.55",
    "room_amount": 1,
    "semiroofed_surface": "6.75",
    "situation": "Vacía ",
    "suite_amount": 0,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 7,
        "name": "Teléfono",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 18,
        "name": "Hall",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 31,
        "name": "Calefacción",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 46,
        "name": "Apto mascotas",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 1248,
        "name": "En construcción",
        "type": 3
      },
      {
        "id": 1390,
        "name": "Luminoso",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      }
    ],
    "toilet_amount": 0,
    "total_surface": "49.30",
    "type": "Departamento",
    "unroofed_surface": "0.00",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.117Z",
    "updatedAt": "2023-06-26T17:39:06.117Z"
  },
  {
    "id": "2fc4627d-4cd5-4ffd-8ceb-2d1748dc2663",
    "address": "Departamento 3 ambientes con balcón aterrazado - Dorrego al 1500",
    "bathroom_amount": 2,
    "age": -1,
    "description": "            Live In Dorrego\n\n¡30% de adelanto y 36 cuotas en pesos! Final de Obra principios del 2024\n\n- Descuentos por pago de contado\n\n¡Increíble 3 ambientes a estrenar, de amplias dimensiones con vista abierta y gran balcon aterrazado!\n\n- Toilette de recepción\n- Cocina completa integrada con horno, anafe y barra desayunadora de granito o similar.\n- Living comedor con salida al balcón corrido aterrazado\n- Master suite con salida al balcón corrido aterrazado, baño completo y vestidor de grandes dimensiones con interiores \n- Baño y toilette completos con espejo, mesada de mármol y accesorios.\n\n\nMáxima categoría y estilo contemporáneo con amplios amenities y terrazas verdes.\n\nImportante hall de acceso revestido en mármol previsto con cámaras de seguridad y locales comerciales en planta baja.\n\nEl edificio está constituido por 10 pisos, compuestos por unidades de 1,2, 3 y 4 ambientes.\nLas cocheras son cubiertas y se distribuyen en dos niveles de subsuelo con acceso mediante monta coches.\nPalieres con 2 ascensores de última categoría.\n\nAmenities:\n\n- SUM\n- Gimnasio totalmente equipado\n- Terraza\n- Sector parrilla\n- Piscina y solarium con azotea verde en el décimo piso\n\n\nExcelente ubicación:\n\nA pasos de polos gastronómicos y parques de Palermo Hollywood, Distrito Audiovisual, Silos de Dorrego y Mercado de Pulgas Nuevo Colegiales.\n\nEmplazado sobre Av. Dorrego esquina Av. Córdoba, cercano a las Avenidas más importantes de Capital Federal con múltiples medios de transporte en sus cercanías.\n\n\nExcelente calidad constructiva y terminaciones:\n\n- Calefacción eléctrica por losa radiante sectorizada por ambiente.\n- Aberturas de Aluminio negro opcional termopanel.\n- Pisos vinílicos simil madera Patagonia Flooring.\n- Griferías FV o similar.\n- Sanitarios FERRUM o similar.\n- Muebles de cocina completos con alacena y bajomesada.\n- Portero visor a color.\n- Preinstalación para aire acondicionado.\n- Categoría premium en calidad de construcción, materiales y terminaciones.\n\n\n\n¿Es lo que buscás? ¡Consultanos!\nNota: La información gráfica y escrita contenida en el presente aviso es meramente a título estimativo y no forma parte de ningún tipo de documentación contractual. Las medidas y superficies definitivas surgirán del título de propiedad del inmueble referido. Asimismo los importes de tasas, servicios y expensas indicados están sujetos a verificación. El valor del inmueble indicado en el presente puede ser modificado sin previo aviso.\n\nMatriculado Responsable Martin Raitarski\n\n- CMCPSI - 6705\n- CUCICBA - 8036\n\n\r\n        ",
    "disposition": "Frente",
    "expenses": 0,
    "floors_amount": 0,
    "has_temporary_rent": false,
    "location": "",
    "operations": [
      {
        "prices": [
          {
            "price": 96288992,
            "period": 0,
            "currency": "ARS"
          }
        ],
        "operation_type": "Venta"
      }
    ],
    "orientation": "Sur",
    "parking_lot_amount": 0,
    "photos": [
      "https://static.tokkobroker.com/pictures/113484226247271749697467970588430371054415257831768962082344002604662158711353.jpg",
      "https://static.tokkobroker.com/pictures/81173787012528199910319929690092732476663525380140018777090447456563730312107.jpg",
      "https://static.tokkobroker.com/pictures/2074043996139675482127535071677485987060806814259946703571561505621598191059.jpg",
      "https://static.tokkobroker.com/pictures/15374783842043432968389890680082608253412234096195032512667365137339562746620.jpg",
      "https://static.tokkobroker.com/pictures/45303921375280171528547189942618260383844942053055675294214643315678359582886.jpg",
      "https://static.tokkobroker.com/pictures/21370418501417861858234762474801194213557825857918520872701582755716565544820.jpg",
      "https://static.tokkobroker.com/pictures/44444313257674019021657282180118484437763543242496652273891623466352321818385.jpg",
      "https://static.tokkobroker.com/pictures/76752771306951279949349814949926474995664842360152442846132462880932677247029.jpg",
      "https://static.tokkobroker.com/pictures/56215129801091610610559817238955247051396660552650312530714247195900488820383.jpg",
      "https://static.tokkobroker.com/pictures/41498869063419631825606860066935689528690085218405114792034018172714827329835.jpg",
      "https://static.tokkobroker.com/pictures/48302659214648088562886632276019689429696474313886180642253921603265080953884.jpg"
    ],
    "real_address": "Av. Dorrego 1516 - Piso 7 Dto 2",
    "property_condition": "Excelente",
    "roofed_surface": "80.60",
    "room_amount": 3,
    "semiroofed_surface": "13.90",
    "situation": "Vacía ",
    "suite_amount": 2,
    "surface": "0.00",
    "tags": [
      {
        "id": 1,
        "name": "Agua Corriente",
        "type": 1
      },
      {
        "id": 2,
        "name": "Cloaca",
        "type": 1
      },
      {
        "id": 5,
        "name": "Electricidad",
        "type": 1
      },
      {
        "id": 6,
        "name": "Pavimento",
        "type": 1
      },
      {
        "id": 10,
        "name": "Balcón",
        "type": 2
      },
      {
        "id": 12,
        "name": "Cocina",
        "type": 2
      },
      {
        "id": 13,
        "name": "Comedor",
        "type": 2
      },
      {
        "id": 14,
        "name": "Comedor diario",
        "type": 2
      },
      {
        "id": 16,
        "name": "Suite",
        "type": 2
      },
      {
        "id": 20,
        "name": "Lavadero",
        "type": 2
      },
      {
        "id": 21,
        "name": "Living",
        "type": 2
      },
      {
        "id": 22,
        "name": "Living comedor",
        "type": 2
      },
      {
        "id": 25,
        "name": "Terraza",
        "type": 2
      },
      {
        "id": 26,
        "name": "Toilette",
        "type": 2
      },
      {
        "id": 27,
        "name": "Vestidor",
        "type": 2
      },
      {
        "id": 35,
        "name": "Parrilla",
        "type": 3
      },
      {
        "id": 36,
        "name": "Quincho",
        "type": 3
      },
      {
        "id": 40,
        "name": "Solarium",
        "type": 3
      },
      {
        "id": 41,
        "name": "SUM",
        "type": 3
      },
      {
        "id": 42,
        "name": "Seguridad",
        "type": 3
      },
      {
        "id": 47,
        "name": "Apto profesional",
        "type": 3
      },
      {
        "id": 51,
        "name": "Pileta",
        "type": 3
      },
      {
        "id": 1030,
        "name": "Cochera subterránea",
        "type": 3
      },
      {
        "id": 1512,
        "name": "Calefacción individual",
        "type": 3
      },
      {
        "id": 1517,
        "name": "Deck",
        "type": 3
      }
    ],
    "toilet_amount": 1,
    "total_surface": "94.50",
    "type": "Departamento",
    "unroofed_surface": "12.70",
    "videos": [],
    "isVisible": true,
    "isReserved": false,
    "createdAt": "2023-06-26T17:39:06.115Z",
    "updatedAt": "2023-06-26T17:39:06.115Z"
  }
]




const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({params}) {

  // const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const { id } = params
  
  // const propId = useSelector((state) => state.propId);
  // console.log(propId);
  const formattedPrice = hardcoding[0].operations[0]?.prices[0]?.price?.toLocaleString();
  return (


   
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                    >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                    >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
                >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={hardcoding[0].photos[2]}
              alt={hardcoding.photos}
              className="h-full w-full object-cover object-center"
              />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={hardcoding[0].photos[3]}
                alt={hardcoding.photos}
                className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={hardcoding[0].photos[4]}
                alt={hardcoding.photos}
                className="h-full w-full object-cover object-center"
                />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={hardcoding[0].photos[5]}
              alt={hardcoding.photos}
              className="h-full w-full object-cover object-center"
              />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {hardcoding[0].address}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ${formattedPrice} {hardcoding[0].operations[0]?.prices[0]?.currency}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
    

    
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Comprar/Alquilar
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{hardcoding[0].description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );



  
}