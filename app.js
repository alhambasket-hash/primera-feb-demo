const teams = [
  {
    id: "alicante",
    name: "HLA Alicante",
    short: "ALI",
    city: "Alicante",
    arena: "Pedro Ferrandiz",
    coach: "Rafa Monclova",
    colors: ["#111111", "#d9272e"],
    wins: 18,
    losses: 14,
    pf: 2521,
    pc: 2497,
    streak: "G1",
  },
  {
    id: "ourense",
    name: "Cloud.Gal Ourense Baloncesto",
    short: "OUR",
    city: "Ourense",
    arena: "Pazo dos Deportes Paco Paz",
    coach: "Moncho Lopez",
    colors: ["#1f4f8f", "#e7eef8"],
    wins: 14,
    losses: 18,
    pf: 2440,
    pc: 2506,
    streak: "P1",
  },
  {
    id: "menorca",
    name: "Hestia Menorca",
    short: "MEN",
    city: "Mahon",
    arena: "Pavello Menorca",
    coach: "Javi Zamora",
    colors: ["#0f8f77", "#f4f7fb"],
    wins: 17,
    losses: 15,
    pf: 2478,
    pc: 2462,
    streak: "G2",
  },
  {
    id: "obradoiro",
    name: "Monbus Obradoiro",
    short: "OBR",
    city: "Santiago de Compostela",
    arena: "Multiusos Fontes do Sar",
    coach: "Gonzalo Rodriguez",
    colors: ["#123c7c", "#f2b632"],
    wins: 21,
    losses: 11,
    pf: 2634,
    pc: 2501,
    streak: "G3",
  },
  {
    id: "palmer",
    name: "Palmer Basket Mallorca Palma",
    short: "MLP",
    city: "Palma",
    arena: "Palau Municipal d'Esports Son Moix",
    coach: "Pau Tomas",
    colors: ["#17213b", "#d7a642"],
    wins: 12,
    losses: 20,
    pf: 2387,
    pc: 2514,
    streak: "P3",
  },
  {
    id: "palencia",
    name: "SÃºper Agropal Palencia",
    short: "PAL",
    city: "Palencia",
    arena: "Pabellon Municipal de Palencia",
    coach: "Luis Guil",
    colors: ["#6f2dbd", "#f6d743"],
    wins: 22,
    losses: 10,
    pf: 2662,
    pc: 2489,
    streak: "G4",
  },
  {
    id: "tizona",
    name: "Grupo Ureta Tizona Burgos",
    short: "TIZ",
    city: "Burgos",
    arena: "El Plantio",
    coach: "Diego Ocampo",
    colors: ["#153e75", "#e5b53b"],
    wins: 19,
    losses: 13,
    pf: 2598,
    pc: 2519,
    streak: "P1",
  },
  {
    id: "melilla",
    name: "Melilla Ciudad del Deporte",
    short: "MEL",
    city: "Melilla",
    arena: "Pabellon Javier Imbroda",
    coach: "Alejandro Alcoba",
    colors: ["#11253f", "#087d86"],
    wins: 16,
    losses: 16,
    pf: 2503,
    pc: 2492,
    streak: "G1",
  },
  {
    id: "gipuzkoa",
    name: "Inveready Gipuzkoa",
    short: "GIP",
    city: "Donostia",
    arena: "Angulas Aguinaga Arena",
    coach: "Mikel Odriozola",
    colors: ["#7a1232", "#ffffff"],
    wins: 15,
    losses: 17,
    pf: 2437,
    pc: 2468,
    streak: "P2",
  },
  {
    id: "coruna",
    name: "Leyma CoruÃ±a",
    short: "COR",
    city: "A Coruna",
    arena: "Palacio de los Deportes",
    coach: "Diego Epifanio",
    colors: ["#f58220", "#0066b3"],
    wins: 20,
    losses: 12,
    pf: 2612,
    pc: 2508,
    streak: "G2",
  },
  {
    id: "cartagena",
    name: "Grupo Caesa Seguros FC Cartagena CB",
    short: "CAR",
    city: "Cartagena",
    arena: "Palacio de Deportes de Cartagena",
    coach: "Gustavo Aranzana",
    colors: ["#111111", "#f2c94c"],
    wins: 13,
    losses: 19,
    pf: 2398,
    pc: 2507,
    streak: "P2",
  },
  {
    id: "fibwi",
    name: "Fibwi Mallorca Basquet Palma",
    short: "FIB",
    city: "Palma",
    arena: "Palau d'Esports de Son Moix",
    coach: "Xavi Sastre",
    colors: ["#e21b2d", "#111111"],
    wins: 11,
    losses: 21,
    pf: 2350,
    pc: 2542,
    streak: "P4",
  },
  {
    id: "oviedo",
    name: "Alimerka Oviedo Baloncesto",
    short: "OVI",
    city: "Oviedo",
    arena: "PumarÃ­n",
    coach: "Javi Rodriguez",
    colors: ["#1b75bb", "#f2c94c"],
    wins: 18,
    losses: 14,
    pf: 2544,
    pc: 2509,
    streak: "G1",
  },
  {
    id: "estudiantes",
    name: "Movistar Estudiantes",
    short: "EST",
    city: "Madrid",
    arena: "Movistar Academy Magarinos",
    coach: "Pedro Rivero",
    colors: ["#009fe3", "#101820"],
    wins: 23,
    losses: 9,
    pf: 2710,
    pc: 2474,
    streak: "G5",
  },
  {
    id: "cantabria",
    name: "Grupo Alega Cantabria",
    short: "CAN",
    city: "Torrelavega",
    arena: "Vicente Trueba",
    coach: "David Mangas",
    colors: ["#0097a7", "#ffffff"],
    wins: 10,
    losses: 22,
    pf: 2328,
    pc: 2520,
    streak: "P5",
  },
  {
    id: "zamora",
    name: "Caja Rural CB Zamora",
    short: "ZAM",
    city: "Zamora",
    arena: "Angel Nieto",
    coach: "Saulo Hernandez",
    colors: ["#2d8a58", "#f4f7fb"],
    wins: 17,
    losses: 15,
    pf: 2488,
    pc: 2470,
    streak: "G1",
  },
  {
    id: "fuenlabrada",
    name: "Flexicar Fuenlabrada",
    short: "FUE",
    city: "Fuenlabrada",
    arena: "Fernando Martin",
    coach: "Toni Ten",
    colors: ["#f07a22", "#13294b"],
    wins: 21,
    losses: 11,
    pf: 2599,
    pc: 2449,
    streak: "P1",
  },
];

const players = [
  ["Jayson Granger", "EST", "Base", 16.8, 3.8, 6.9],
  ["Vitor Benite", "OBR", "Escolta", 15.6, 2.9, 2.4],
  ["Kevin Larsen", "COR", "Pivot", 17.1, 7.1, 1.9],
  ["Dee", "PAL", "Base", 15.7, 3.1, 6.8],
  ["Michael Caicedo", "MEL", "Alero", 16.2, 4.1, 2.7],
  ["Jordan Swing", "ALI", "Alero", 13.9, 4.7, 3.3],
  ["Javi Vega", "FUE", "Ala-pivot", 14.9, 6.2, 2.0],
  ["Alex Barrera", "TIZ", "Escolta", 12.6, 3.5, 2.5],
  ["Sergio Garcia", "GIP", "Base", 12.1, 2.9, 5.2],
  ["Atoumane Diagne", "ZAM", "Pivot", 10.7, 9.6, 1.1],
  ["Pablo Ferreiro", "OUR", "Alero", 11.8, 4.4, 2.2],
  ["Marc PeÃ±arroya", "MEN", "Base", 10.6, 2.7, 4.5],
  ["Pau Isern", "MLP", "Escolta", 12.3, 2.8, 2.6],
  ["Lucas N'Guessan", "FIB", "Pivot", 11.2, 7.4, 1.0],
  ["Oliver Arteaga", "OVI", "Pivot", 12.9, 6.8, 1.3],
  ["Asier Zengotitabengoa", "CAN", "Alero", 13.1, 4.9, 2.0],
  ["Djordje Dimitrijevic", "CAR", "Base", 14.0, 3.0, 4.6],
].map(([name, team, position, points, rebounds, assists], index) => ({
  id: index + 1,
  name,
  team,
  position,
  points,
  rebounds,
  assists,
}));

const officialCalendarData = `1|26/09/2025|ALI|87-76|OUR;1|26/09/2025|MEN|97-77|OBR;1|26/09/2025|MLP|69-78|PAL;1|26/09/2025|TIZ|106-91|MEL;1|26/09/2025|GIP|63-79|COR;1|26/09/2025|CAR|72-70|FIB;1|26/09/2025|OVI|87-101|EST;1|26/09/2025|CAN|72-96|ZAM;2|03/10/2025|MEN|70-71|FIB;2|03/10/2025|COR|87-72|OVI;2|03/10/2025|OBR|82-87|CAN;2|03/10/2025|EST|93-88|GIP;2|03/10/2025|FUE|82-73|MEL;2|03/10/2025|OUR|82-69|MLP;2|03/10/2025|PAL|90-73|CAR;2|03/10/2025|ZAM|101-95|TIZ;3|10/10/2025|ALI|81-74|FIB;3|10/10/2025|MEN|80-102|COR;3|10/10/2025|TIZ|89-93|FUE;3|10/10/2025|GIP|95-96|OBR;3|10/10/2025|CAR|82-78|OVI;3|10/10/2025|CAN|58-107|PAL;3|10/10/2025|ZAM|84-94|OUR;3|10/10/2025|MEL|70-82|EST;4|17/10/2025|FIB|88-83|ZAM;4|17/10/2025|COR|91-75|MLP;4|17/10/2025|OBR|79-59|MEL;4|17/10/2025|GIP|75-69|CAR;4|17/10/2025|EST|88-82|ALI;4|17/10/2025|FUE|90-75|CAN;4|17/10/2025|OVI|93-80|TIZ;4|17/10/2025|PAL|89-64|MEN;5|24/10/2025|ALI|94-86|ZAM;5|24/10/2025|MEN|97-61|CAR;5|24/10/2025|MLP|57-78|OVI;5|24/10/2025|TIZ|82-97|COR;5|24/10/2025|EST|78-79|OBR;5|24/10/2025|FUE|99-81|FIB;5|24/10/2025|CAN|87-66|OUR;5|24/10/2025|MEL|80-75|PAL;6|31/10/2025|TIZ|81-73|GIP;6|31/10/2025|COR|101-75|FUE;6|31/10/2025|CAR|68-95|EST;6|31/10/2025|OUR|84-80|MEN;6|31/10/2025|OVI|75-79|OBR;6|31/10/2025|PAL|59-79|ALI;6|31/10/2025|CAN|76-72|MEL;6|31/10/2025|ZAM|99-76|MLP;7|07/11/2025|MLP|83-80|MEN;7|07/11/2025|OBR|93-68|TIZ;7|07/11/2025|GIP|65-71|FIB;7|07/11/2025|EST|87-92|COR;7|07/11/2025|FUE|71-92|OVI;7|07/11/2025|OUR|91-65|CAR;7|07/11/2025|ZAM|77-102|PAL;7|07/11/2025|MEL|79-90|ALI;8|14/11/2025|ALI|109-73|MLP;8|14/11/2025|FIB|83-76|OUR;8|14/11/2025|COR|101-89|MEL;8|14/11/2025|GIP|82-86|ZAM;8|14/11/2025|EST|99-76|FUE;8|14/11/2025|CAR|68-94|OBR;8|14/11/2025|PAL|88-80|OVI;8|14/11/2025|CAN|84-91|TIZ;9|21/11/2025|ALI|101-90|CAN;9|21/11/2025|TIZ|77-99|OUR;9|21/11/2025|OBR|99-89|FIB;9|21/11/2025|FUE|70-87|GIP;9|21/11/2025|OVI|67-75|MEN;9|21/11/2025|PAL|83-52|EST;9|21/11/2025|ZAM|90-71|CAR;9|21/11/2025|MEL|90-76|MLP;10|05/12/2025|FIB|87-86|TIZ;10|05/12/2025|MEN|88-74|ZAM;10|05/12/2025|MLP|64-68|EST;10|05/12/2025|COR|82-75|PAL;10|05/12/2025|OBR|97-69|FUE;10|05/12/2025|GIP|77-70|ALI;10|05/12/2025|OUR|98-75|MEL;10|05/12/2025|OVI|97-79|CAN;11|12/12/2025|ALI|88-89|OVI;11|12/12/2025|MLP|77-68|CAR;11|12/12/2025|EST|102-85|TIZ;11|12/12/2025|FUE|78-71|OUR;11|12/12/2025|PAL|64-76|GIP;11|12/12/2025|CAN|83-80|MEN;11|12/12/2025|ZAM|69-81|COR;11|12/12/2025|MEL|72-79|FIB;12|16/12/2025|ALI|91-86|FUE;12|16/12/2025|FIB|86-93|PAL;12|16/12/2025|MEN|86-96|EST;12|16/12/2025|TIZ|95-59|MLP;12|16/12/2025|COR|94-77|OUR;12|16/12/2025|OBR|106-80|ZAM;12|16/12/2025|GIP|84-62|MEL;12|16/12/2025|CAR|68-74|CAN;13|21/12/2025|MLP|45-115|OBR;13|21/12/2025|TIZ|72-85|ALI;13|21/12/2025|FUE|73-67|PAL;13|21/12/2025|CAR|80-89|COR;13|21/12/2025|OUR|77-89|GIP;13|21/12/2025|CAN|77-65|FIB;13|21/12/2025|ZAM|104-102|OVI;13|21/12/2025|MEL|65-95|MEN;14|28/12/2025|ALI|95-77|CAR;14|28/12/2025|FIB|82-80|MLP;14|28/12/2025|MEN|80-70|FUE;14|28/12/2025|OBR|103-99|COR;14|28/12/2025|GIP|88-77|CAN;14|28/12/2025|EST|86-77|ZAM;14|28/12/2025|OVI|75-73|OUR;14|28/12/2025|PAL|91-76|TIZ;15|04/01/2026|MEN|81-68|ALI;15|04/01/2026|MLP|63-71|GIP;15|04/01/2026|COR|102-67|CAN;15|04/01/2026|EST|92-75|OUR;15|04/01/2026|CAR|75-88|FUE;15|04/01/2026|OVI|83-64|FIB;15|04/01/2026|PAL|85-87|OBR;15|04/01/2026|ZAM|97-88|MEL;16|09/01/2026|ALI|89-96|COR;16|09/01/2026|FIB|80-76|EST;16|09/01/2026|TIZ|85-102|MEN;16|09/01/2026|GIP|74-69|OVI;16|09/01/2026|FUE|79-61|ZAM;16|09/01/2026|OUR|96-93|OBR;16|09/01/2026|CAN|73-76|MLP;16|09/01/2026|MEL|84-91|CAR;17|16/01/2026|MEN|71-64|GIP;17|16/01/2026|MLP|79-88|FUE;17|16/01/2026|COR|94-72|FIB;17|16/01/2026|OBR|87-75|ALI;17|16/01/2026|EST|81-74|CAN;17|16/01/2026|CAR|89-87|TIZ;17|16/01/2026|OVI|101-70|MEL;17|16/01/2026|PAL|83-77|OUR;18|30/01/2026|ALI|63-82|PAL;18|30/01/2026|MLP|92-95|ZAM;18|30/01/2026|TIZ|80-76|FIB;18|30/01/2026|OBR|86-68|OVI;18|30/01/2026|GIP|73-66|EST;18|30/01/2026|OUR|69-72|FUE;18|30/01/2026|CAN|78-72|CAR;18|30/01/2026|MEL|72-105|COR;19|06/02/2026|FIB|84-78|MEL;19|06/02/2026|MEN|89-81|CAN;19|06/02/2026|EST|72-94|PAL;19|06/02/2026|FUE|76-69|TIZ;19|06/02/2026|CAR|64-84|GIP;19|06/02/2026|OUR|81-75|ALI;19|06/02/2026|OVI|84-89|COR;19|06/02/2026|ZAM|77-92|OBR;20|10/02/2026|ALI|78-71|MEL;20|10/02/2026|FIB|79-80|FUE;20|10/02/2026|COR|81-76|ZAM;20|10/02/2026|OBR|100-86|MEN;20|10/02/2026|GIP|93-65|TIZ;20|10/02/2026|CAR|81-80|OUR;20|10/02/2026|PAL|85-69|MLP;20|10/02/2026|CAN|79-87|OVI;21|15/02/2026|FIB|69-76|MEN;21|15/02/2026|MLP|65-85|COR;21|15/02/2026|TIZ|93-101|ZAM;21|15/02/2026|FUE|87-90|ALI;21|15/02/2026|OUR|103-97|EST;21|15/02/2026|OVI|61-76|PAL;21|15/02/2026|CAN|91-90|GIP;21|15/02/2026|MEL|70-92|OBR;22|20/02/2026|ALI|58-76|MEN;22|20/02/2026|TIZ|82-89|OVI;22|20/02/2026|COR|105-82|EST;22|20/02/2026|CAR|66-82|MLP;22|20/02/2026|OUR|81-69|FIB;22|20/02/2026|PAL|97-74|FUE;22|20/02/2026|ZAM|70-101|GIP;22|20/02/2026|MEL|83-77|CAN;23|06/03/2026|FIB|68-73|CAN;23|06/03/2026|MLP|88-72|TIZ;23|06/03/2026|COR|83-74|ALI;23|06/03/2026|GIP|81-79|OUR;23|06/03/2026|EST|85-78|MEN;23|06/03/2026|FUE|77-97|OBR;23|06/03/2026|OVI|92-80|CAR;23|06/03/2026|PAL|77-66|ZAM;24|10/03/2026|FIB|102-104|ALI;24|10/03/2026|MEN|89-74|MLP;24|10/03/2026|TIZ|74-91|PAL;24|10/03/2026|OBR|101-49|CAR;24|10/03/2026|GIP|90-74|FUE;24|10/03/2026|OUR|59-74|COR;24|10/03/2026|ZAM|75-86|EST;24|10/03/2026|MEL|79-87|OVI;25|15/03/2026|ALI|80-103|OBR;25|15/03/2026|MLP|86-83|CAN;25|15/03/2026|EST|90-66|FIB;25|15/03/2026|FUE|78-71|MEN;25|15/03/2026|CAR|82-68|MEL;25|15/03/2026|OUR|79-77|TIZ;25|15/03/2026|OVI|90-71|GIP;25|15/03/2026|PAL|99-87|COR;26|20/03/2026|FIB|69-95|OVI;26|20/03/2026|COR|105-84|TIZ;26|20/03/2026|OBR|89-80|MLP;26|20/03/2026|GIP|57-71|PAL;26|20/03/2026|CAR|78-77|ALI;26|20/03/2026|CAN|80-78|EST;26|20/03/2026|ZAM|72-67|MEN;26|20/03/2026|MEL|84-77|FUE;27|27/03/2026|ALI|83-81|EST;27|27/03/2026|FIB|63-87|OBR;27|27/03/2026|MEN|65-72|OVI;27|27/03/2026|TIZ|86-77|CAN;27|27/03/2026|COR|82-77|CAR;27|27/03/2026|FUE|87-67|MLP;27|27/03/2026|OUR|84-105|ZAM;27|27/03/2026|PAL|82-62|MEL;28|03/04/2026|MEN|88-70|TIZ;28|03/04/2026|MLP|72-56|OUR;28|03/04/2026|OBR|81-53|PAL;28|03/04/2026|EST|90-84|CAR;28|03/04/2026|OVI|76-74|ALI;28|03/04/2026|CAN|79-88|COR;28|03/04/2026|ZAM|80-79|FUE;28|03/04/2026|MEL|73-54|GIP;29|10/04/2026|ALI|74-87|GIP;29|10/04/2026|MLP|75-82|MEL;29|10/04/2026|TIZ|76-96|EST;29|10/04/2026|COR|84-92|OBR;29|10/04/2026|CAR|79-83|MEN;29|10/04/2026|OUR|67-72|CAN;29|10/04/2026|OVI|65-73|FUE;29|10/04/2026|ZAM|81-79|FIB;30|17/04/2026|FIB|77-80|CAR;30|17/04/2026|MEN|67-72|PAL;30|17/04/2026|OBR|94-57|OUR;30|17/04/2026|GIP|82-65|MLP;30|17/04/2026|EST|75-69|OVI;30|17/04/2026|FUE|75-74|COR;30|17/04/2026|CAN|74-82|ALI;30|17/04/2026|MEL|94-87|ZAM;31|21/04/2026|FIB|63-73|GIP;31|21/04/2026|TIZ|99-96|OBR;31|21/04/2026|COR|81-72|MEN;31|21/04/2026|EST|86-73|MEL;31|21/04/2026|CAR|64-78|ZAM;31|21/04/2026|OUR|90-93|PAL;31|21/04/2026|OVI|89-74|MLP;31|21/04/2026|CAN|80-89|FUE;32|26/04/2026|MEN|73-70|OUR;32|26/04/2026|MLP|77-68|ALI;32|26/04/2026|COR|92-81|GIP;32|26/04/2026|OBR|89-79|EST;32|26/04/2026|FUE|91-82|CAR;32|26/04/2026|PAL|92-70|FIB;32|26/04/2026|ZAM|86-89|CAN;32|26/04/2026|MEL|81-96|TIZ;33|01/05/2026|ALI|92-97|TIZ;33|01/05/2026|FIB|76-94|COR;33|01/05/2026|GIP|84-66|MEN;33|01/05/2026|EST|73-70|MLP;33|01/05/2026|CAR|72-82|PAL;33|01/05/2026|OVI|90-80|ZAM;33|01/05/2026|CAN|65-95|OBR;33|01/05/2026|MEL|84-93|OUR;34|08/05/2026|MEN|102-72|MEL;34|08/05/2026|MLP|59-85|FIB;34|08/05/2026|TIZ|93-80|CAR;34|08/05/2026|OBR|85-68|GIP;34|08/05/2026|FUE|77-70|EST;34|08/05/2026|OUR|70-74|OVI;34|08/05/2026|PAL|100-70|CAN;34|08/05/2026|ZAM|83-76|ALI`;

const games = officialCalendarData.split(";").map((row, index) => {
  const [round, date, home, score, away] = row.split("|");
  const [homeScore, awayScore] = score.split("-").map(Number);
  return {
    id: index + 1,
    phase: "Liga Regular",
    phaseKey: "regular",
    round: Number(round),
    date,
    time: "",
    home,
    away,
    homeScore,
    awayScore,
    venue: "Calendario oficial FEB",
    status: "Final",
  };
});

const playoffGames = [
  { id: 1001, phase: "Playoffs", phaseKey: "playoffs", round: 1, label: "Cuartos Â· Serie A Â· Partido 1", date: "15/05/2026", time: "", home: "EST", away: "ALI", homeScore: 93, awayScore: 77, venue: "Movistar Academy Magarinos", status: "Final" },
  { id: 1002, phase: "Playoffs", phaseKey: "playoffs", round: 1, label: "Cuartos Â· Serie A Â· Partido 2", date: "17/05/2026", time: "", home: "EST", away: "ALI", homeScore: 74, awayScore: 67, venue: "Movistar Academy Magarinos", status: "Final" },
  { id: 1003, phase: "Playoffs", phaseKey: "playoffs", round: 1, label: "Cuartos Â· Serie A Â· Partido 3", date: "22/05/2026", time: "", home: "ALI", away: "EST", homeScore: 72, awayScore: 113, venue: "Pedro Ferrandiz", status: "Final" },
  { id: 1004, phase: "Playoffs", phaseKey: "playoffs", round: 2, label: "Cuartos Â· Serie B Â· Partido 1", date: "15/05/2026", time: "", home: "COR", away: "MEN", homeScore: 93, awayScore: 73, venue: "Coliseum da CoruÃ±a", status: "Final" },
  { id: 1005, phase: "Playoffs", phaseKey: "playoffs", round: 2, label: "Cuartos Â· Serie B Â· Partido 2", date: "17/05/2026", time: "", home: "COR", away: "MEN", homeScore: 81, awayScore: 76, venue: "Coliseum da CoruÃ±a", status: "Final" },
  { id: 1006, phase: "Playoffs", phaseKey: "playoffs", round: 2, label: "Cuartos Â· Serie B Â· Partido 3", date: "22/05/2026", time: "", home: "MEN", away: "COR", homeScore: 85, awayScore: 82, venue: "Pavello Menorca", status: "Final" },
  { id: 1007, phase: "Playoffs", phaseKey: "playoffs", round: 2, label: "Cuartos Â· Serie B Â· Partido 4", date: "24/05/2026", time: "", home: "MEN", away: "COR", homeScore: 76, awayScore: 87, venue: "Pavello Menorca", status: "Final" },
  { id: 1008, phase: "Playoffs", phaseKey: "playoffs", round: 3, label: "Cuartos Â· Serie C Â· Partido 1", date: "15/05/2026", time: "", home: "PAL", away: "FUE", homeScore: 90, awayScore: 52, venue: "Pabellon Municipal de Palencia", status: "Final" },
  { id: 1009, phase: "Playoffs", phaseKey: "playoffs", round: 3, label: "Cuartos Â· Serie C Â· Partido 2", date: "17/05/2026", time: "", home: "PAL", away: "FUE", homeScore: 83, awayScore: 79, venue: "Pabellon Municipal de Palencia", status: "Final" },
  { id: 1010, phase: "Playoffs", phaseKey: "playoffs", round: 3, label: "Cuartos Â· Serie C Â· Partido 3", date: "22/05/2026", time: "", home: "FUE", away: "PAL", homeScore: 88, awayScore: 81, venue: "Fernando Martin", status: "Final" },
  { id: 1011, phase: "Playoffs", phaseKey: "playoffs", round: 3, label: "Cuartos Â· Serie C Â· Partido 4", date: "24/05/2026", time: "", home: "FUE", away: "PAL", homeScore: 78, awayScore: 72, venue: "Fernando Martin", status: "Final" },
  { id: 1012, phase: "Playoffs", phaseKey: "playoffs", round: 3, label: "Cuartos Â· Serie C Â· Partido 5", date: "30/05/2026", time: "", home: "PAL", away: "FUE", homeScore: 76, awayScore: 51, venue: "Pabellon Municipal de Palencia", status: "Final" },
  { id: 1013, phase: "Playoffs", phaseKey: "playoffs", round: 4, label: "Cuartos Â· Serie D Â· Partido 1", date: "15/05/2026", time: "", home: "GIP", away: "OVI", homeScore: 79, awayScore: 93, venue: "Angulas Aguinaga Arena", status: "Final" },
  { id: 1014, phase: "Playoffs", phaseKey: "playoffs", round: 4, label: "Cuartos Â· Serie D Â· Partido 2", date: "17/05/2026", time: "", home: "GIP", away: "OVI", homeScore: 75, awayScore: 83, venue: "Angulas Aguinaga Arena", status: "Final" },
  { id: 1015, phase: "Playoffs", phaseKey: "playoffs", round: 4, label: "Cuartos Â· Serie D Â· Partido 3", date: "22/05/2026", time: "", home: "OVI", away: "GIP", homeScore: 82, awayScore: 75, venue: "PumarÃ­n", status: "Final" },
];

const finalFourGames = [
  { id: 2001, phase: "Final Four", phaseKey: "final-four", round: 1, label: "Semifinal 1", date: "06/06/2026", time: "17:30", home: "COR", away: "PAL", homeScore: 92, awayScore: 81, venue: "Coliseum da CoruÃ±a", status: "Final" },
  { id: 2002, phase: "Final Four", phaseKey: "final-four", round: 1, label: "Semifinal 2", date: "06/06/2026", time: "20:15", home: "EST", away: "OVI", homeScore: 79, awayScore: 71, venue: "Coliseum da CoruÃ±a", status: "Final" },
  { id: 2003, phase: "Final Four", phaseKey: "final-four", round: 2, label: "Final", date: "07/06/2026", time: "19:00", home: "EST", away: "COR", homeScore: null, awayScore: null, venue: "Coliseum da CoruÃ±a", status: "Programado" },
];
const calendarPhases = [
  { key: "regular", label: "Liga Regular", games },
  { key: "playoffs", label: "Playoffs", games: playoffGames },
  { key: "final-four", label: "Final Four", games: finalFourGames },
];

function allCalendarGames() {
  return calendarPhases.flatMap((phase) => phase.games);
}

function currentCalendarGame() {
  return allCalendarGames().find((item) => item.id === selectedGameId) || allCalendarGames().at(-1);
}

function phaseRoundTitle(game = currentCalendarGame()) {
  if (!game) return "Calendario";
  if (game.phaseKey === "regular") return `Jornada ${game.round}`;
  if (game.phaseKey === "playoffs") return game.label?.replace(/ Â· Partido \d+$/, "") || "Playoffs";
  return game.label || game.phase || "Final Four";
}

function updateCurrentCompetitionLabels() {
  const game = currentCalendarGame();
  $("#currentCompetitionLabel").textContent = phaseRoundTitle(game);
  $("#currentCompetitionSub").textContent = game
    ? `${game.phase || "Liga Regular"} Â· ${game.date}${game.time ? ` Â· ${game.time}` : ""}`
    : "Resultados y proximos partidos";
  $("#featuredStageLabel").textContent = game?.phase || "Partido destacado";
  $("#featuredStatusLabel").textContent = game?.status || "";
}

function applyOfficialStandings() {
  const table = new Map(
    teams.map((team) => [
      team.short,
      { wins: 0, losses: 0, pf: 0, pc: 0, streak: [] },
    ]),
  );
  games.forEach((game) => {
    if (game.status !== "Final") return;
    const home = table.get(game.home);
    const away = table.get(game.away);
    home.pf += game.homeScore;
    home.pc += game.awayScore;
    away.pf += game.awayScore;
    away.pc += game.homeScore;
    if (game.homeScore > game.awayScore) {
      home.wins += 1;
      away.losses += 1;
      home.streak.push("G");
      away.streak.push("P");
    } else {
      away.wins += 1;
      home.losses += 1;
      away.streak.push("G");
      home.streak.push("P");
    }
  });
  teams.forEach((team) => {
    const stats = table.get(team.short);
    const last = stats.streak.at(-1) || "";
    let count = 0;
    for (let i = stats.streak.length - 1; i >= 0; i -= 1) {
      if (stats.streak[i] !== last) break;
      count += 1;
    }
    team.wins = stats.wins;
    team.losses = stats.losses;
    team.pf = stats.pf;
    team.pc = stats.pc;
    team.streak = `${last}${count}`;
  });
}

applyOfficialStandings();

const stories = [
  {
    tag: "Ascenso",
    title: "Cuatro aspirantes, una plaza: la carrera final por subir",
    colors: ["#11253f", "#087d86", "#d7a642"],
  },
  {
    tag: "MVP",
    title: "Kevin Larsen domina la pintura y lidera la jornada",
    colors: ["#0b559f", "#db5a42", "#f4c542"],
  },
  {
    tag: "Clubes",
    title: "El factor pabellon decide los cruces mas igualados",
    colors: ["#087d86", "#11253f", "#ffffff"],
  },
  {
    tag: "Cantera",
    title: "Los sub-22 ganan peso en la rotacion de los favoritos",
    colors: ["#d7a642", "#11253f", "#db5a42"],
  },
  {
    tag: "Previa",
    title: "Burgos y Estudiantes se miden en una noche de alta tension",
    colors: ["#db5a42", "#087d86", "#11253f"],
  },
];

let selectedTeamId = teams[0].id;
let selectedPhase = getCurrentCalendarSelection().phase;
let selectedRound = getCurrentCalendarSelection().round;
let selectedGameId =
  calendarPhases
    .find((phase) => phase.key === selectedPhase)
    ?.games.find((game) => game.round === selectedRound)?.id || games[0].id;
let selectedStat = "points";
let standingsMode = "general";
const views = ["inicio", "clasificacion", "calendario", "equipos", "equipo", "noticias", "estadisticas", "clubes"];
const newsStorageKey = "primeraFebDemoNews";
window.PRIMERA_FEB_SUPABASE = window.PRIMERA_FEB_SUPABASE || {
  url: "https://dnqawcpopcslmazemrhz.supabase.co",
  anonKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRucWF3Y3BvcGNzbG1hemVtcmh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MjAzMjQsImV4cCI6MjA5NjM5NjMyNH0.1I3-iiWJNdOs6m656TzTZg4AMP6t_UlK3x08-7WqI6I",
};
const supabaseSettings = window.PRIMERA_FEB_SUPABASE;
const supabaseClient =
  supabaseSettings.url && supabaseSettings.anonKey && window.supabase
    ? window.supabase.createClient(supabaseSettings.url, supabaseSettings.anonKey)
    : null;
let supabaseAccessToken = null;
let remoteStandings = new Map();

function hasSupabaseConfig() {
  return Boolean(supabaseSettings.url && supabaseSettings.anonKey);
}

async function supabaseFetch(path, options = {}) {
  const headers = {
    apikey: supabaseSettings.anonKey,
    Authorization: `Bearer ${supabaseAccessToken || supabaseSettings.anonKey}`,
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };
  const response = await fetch(`${supabaseSettings.url}${path}`, {
    ...options,
    headers,
  });
  if (!response.ok) {
    let message = response.statusText;
    try {
      const error = await response.json();
      message = error.message || error.msg || message;
    } catch (_) {}
    throw new Error(message);
  }
  if (response.status === 204) return null;
  return response.json();
}
const defaultNews = [
  {
    id: "n1",
    title: "Monbus Obradoiro cierra la liga regular en cabeza",
    tag: "Liga regular",
    team: "OBR",
    body: "El conjunto gallego termina la fase regular con el mejor balance y una diferencia de puntos dominante. La demo permite convertir este bloque en una noticia editable por el club o por el administrador.",
    date: "08/05/2026",
  },
  {
    id: "n2",
    title: "Leyma CoruÃ±a mantiene el pulso hasta la Ãºltima jornada",
    tag: "Clasificacion",
    team: "COR",
    body: "La parte alta de la tabla deja una pelea muy igualada entre los grandes favoritos. Cada noticia puede asociarse a un equipo para reutilizar colores y escudo en la tarjeta.",
    date: "08/05/2026",
  },
  {
    id: "n3",
    title: "La zona de playoff queda lista para las eliminatorias",
    tag: "Playoff",
    team: "PAL",
    body: "Con la liga regular completada, la web puede destacar cruces, previas, lÃ­deres y fichas de partido desde una secciÃ³n editorial gestionable.",
    date: "09/05/2026",
  },
];
let newsItems = loadNews();

const $ = (selector) => document.querySelector(selector);
const byShort = (short) => teams.find((team) => team.short === short);
const byId = (id) => teams.find((team) => team.id === id);

function loadNews() {
  try {
    return JSON.parse(localStorage.getItem(newsStorageKey)) || defaultNews;
  } catch (error) {
    return defaultNews;
  }
}

function saveNews() {
  localStorage.setItem(newsStorageKey, JSON.stringify(newsItems));
}

function setAdminMode(active) {
  document.body.classList.toggle("is-admin", active);
  $("#adminPanel").hidden = !active;
  $("#loginPanel").hidden = active;
  $("#editorPanel").hidden = !active;
}

async function loadRemoteNews() {
  if (!hasSupabaseConfig()) return;
  let data;
  try {
    data = await supabaseFetch(
      "/rest/v1/news?select=id,title,tag,team,body,published_at,created_at&order=published_at.desc,created_at.desc",
    );
  } catch (error) {
    return;
  }
  newsItems = data.map((item) => ({
    id: item.id,
    title: item.title,
    tag: item.tag,
    team: item.team,
    body: item.body,
    date: new Date(item.published_at).toLocaleDateString("es-ES"),
    published_at: item.published_at,
  }));
  renderNews();
}

async function loadRemoteSportsData() {
  if (!hasSupabaseConfig()) return;
  try {
    const [teamRows, gameRows, standingRows] = await Promise.all([
      supabaseFetch("/rest/v1/teams?select=short,name,city,arena,coach,colors&order=name.asc"),
      supabaseFetch("/rest/v1/games?select=*&order=game_date.asc,game_time.asc"),
      supabaseFetch("/rest/v1/standings?select=*&order=mode.asc,position.asc"),
    ]);
    if (teamRows.length) {
      teams.splice(0, teams.length, ...teamRows.map((team) => ({
        id: team.short.toLowerCase(),
        name: team.name,
        short: team.short,
        city: team.city || "",
        arena: team.arena || "",
        coach: team.coach || "",
        colors: team.colors?.length ? team.colors : ["#0b746e", "#18212c"],
        wins: 0,
        losses: 0,
        pf: 0,
        pc: 0,
        streak: "-",
      })));
    }
    if (gameRows.length) {
      games.splice(0, games.length, ...gameRows.map((game) => ({
        id: game.id,
        phase: game.phase,
        phaseKey: game.phase_key,
        round: game.round,
        label: game.label,
        date: game.game_date.split("-").reverse().join("/"),
        time: game.game_time || "",
        home: game.home,
        away: game.away,
        homeScore: game.home_score,
        awayScore: game.away_score,
        venue: game.venue || "",
        status: game.status,
      })));
      calendarPhases.find((phase) => phase.key === "regular").games = games.filter((game) => game.phaseKey === "regular");
      calendarPhases.find((phase) => phase.key === "playoffs").games = games.filter((game) => game.phaseKey === "playoffs");
      calendarPhases.find((phase) => phase.key === "final-four").games = games.filter((game) => game.phaseKey === "final-four");
      const current = getCurrentCalendarSelection();
      selectedPhase = current.phase;
      selectedRound = current.round;
      selectedGameId = calendarPhases.find((phase) => phase.key === selectedPhase)?.games.find((game) => game.round === selectedRound)?.id || games[0]?.id;
    }
    remoteStandings = new Map();
    standingRows.forEach((row) => {
      if (!remoteStandings.has(row.mode)) remoteStandings.set(row.mode, new Map());
      remoteStandings.get(row.mode).set(row.team, row);
    });
  } catch (error) {
    console.warn("No se pudieron cargar datos deportivos de Supabase", error);
  }
}

async function requestAdminAccess() {
  showView("noticias", false);
  history.replaceState({ view: "noticias" }, "", "#noticias");
  $("#adminPanel").hidden = false;
  if (!hasSupabaseConfig()) {
    $("#loginStatus").textContent = "Falta configurar Supabase URL y anon key.";
    document.body.classList.add("is-admin");
    $("#adminPanel").hidden = false;
    $("#loginPanel").hidden = false;
    $("#editorPanel").hidden = true;
    return;
  }
  if (supabaseAccessToken) {
    setAdminMode(true);
    fillNewsForm(newsItems[0]?.id || "");
  } else {
    document.body.classList.add("is-admin");
    $("#adminPanel").hidden = false;
    $("#loginPanel").hidden = false;
    $("#editorPanel").hidden = true;
  }
}

function parseGameDate(value) {
  const [day, month, year] = value.split("/").map(Number);
  return new Date(year, month - 1, day);
}

function getCurrentCalendarSelection() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (const phase of calendarPhases) {
    const upcoming = phase.games.find((game) => {
      const date = parseGameDate(game.date);
      date.setHours(0, 0, 0, 0);
      return date >= today;
    });
    if (upcoming) return { phase: phase.key, round: upcoming.round };
  }
  const lastPhaseWithGames = [...calendarPhases].reverse().find((phase) => phase.games.length);
  return {
    phase: lastPhaseWithGames?.key || "regular",
    round: lastPhaseWithGames?.games.at(-1)?.round || 1,
  };
}

function teamMark(team, size = "") {
  const style = `background: linear-gradient(135deg, ${team.colors[0]}, ${team.colors[1]});`;
  return `<span class="team-mark ${size}" style="${style}">${team.short}</span>`;
}

function teamMini(short) {
  const team = byShort(short);
  return `<span class="team-mini">${teamMark(team)}<strong>${team.name}</strong></span>`;
}

function renderTeamRibbon() {
  $("#teamRibbon").innerHTML = teams
    .map((team) => `
      <a class="ribbon-team" href="#equipos" data-ribbon-team="${team.id}">
        ${teamMark(team)}
        <span>${team.short}</span>
      </a>
    `)
    .join("");

  document.querySelectorAll("[data-ribbon-team]").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      openTeamDetail(item.dataset.ribbonTeam);
    });
  });
}

function renderMatchTicker() {
  $("#matchTicker").innerHTML = allCalendarGames()
    .slice(-10)
    .map((game) => {
      const score = game.status === "Final" ? `${game.homeScore}-${game.awayScore}` : game.time;
      return `
        <a class="ticker-game" href="#calendario" data-ticker-game="${game.id}">
          <strong>${game.date} Â· ${game.status}</strong>
          <span class="ticker-teams">
            <span>${game.home}</span>
            <span class="ticker-score">${score}</span>
            <span>${game.away}</span>
          </span>
        </a>
      `;
    })
    .join("");

  document.querySelectorAll("[data-ticker-game]").forEach((item) => {
    item.addEventListener("click", () => {
      selectedGameId = Number(item.dataset.tickerGame);
      const game = allCalendarGames().find((item) => item.id === selectedGameId);
      selectedPhase = game?.phaseKey || selectedPhase;
      selectedRound = game?.round || selectedRound;
      renderCalendar();
      renderMatchDetail();
      renderFeaturedGame();
      updateCurrentCompetitionLabels();
    });
  });
}

function renderStories() {
  $("#storyGrid").innerHTML = stories
    .map((story) => {
      const background = `linear-gradient(135deg, ${story.colors[0]} 0 45%, ${story.colors[1]} 46% 72%, ${story.colors[2]} 73% 100%)`;
      return `
        <article class="story-card" style="--story-bg:${background}">
          <span>${story.tag}</span>
          <strong>${story.title}</strong>
        </article>
      `;
    })
    .join("");
}

function renderNews() {
  $("#newsList").innerHTML = newsItems
    .map((item) => {
      const team = byShort(item.team) || teams[0];
      return `
        <article class="news-card" data-news-card="${item.id}">
          <div class="news-media" style="background: linear-gradient(135deg, ${team.colors[0]}, ${team.colors[1]});">
            ${teamMark(team)}
          </div>
          <div class="news-content">
            <span class="story-tag">${item.tag}</span>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            <div class="story-meta">
              <span>${item.date}</span>
              <span>${team.name}</span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-news-card]").forEach((card) => {
    card.addEventListener("click", () => {
      if (document.body.classList.contains("is-admin")) fillNewsForm(card.dataset.newsCard);
    });
  });
}

function renderNewsTeamOptions() {
  $("#newsTeam").innerHTML = teams
    .map((team) => `<option value="${team.short}">${team.name}</option>`)
    .join("");
}

function fillNewsForm(id) {
  const item = newsItems.find((news) => news.id === id) || {
    id: "",
    title: "",
    tag: "Actualidad",
    team: teams[0].short,
    body: "",
  };
  $("#newsId").value = item.id;
  $("#newsTitle").value = item.title;
  $("#newsTag").value = item.tag;
  $("#newsTeam").value = item.team;
  $("#newsBody").value = item.body;
}

function bindNewsAdmin() {
  $("#loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!hasSupabaseConfig()) {
      $("#loginStatus").textContent = "Falta configurar Supabase.";
      return;
    }
    $("#loginStatus").textContent = "Entrando...";
    try {
      const auth = await supabaseFetch("/auth/v1/token?grant_type=password", {
        method: "POST",
        body: JSON.stringify({
          email: $("#adminEmail").value.trim(),
          password: $("#adminPassword").value,
        }),
      });
      supabaseAccessToken = auth.access_token;
    } catch (error) {
      $("#loginStatus").textContent = "No se pudo entrar. Revisa email y contraseÃ±a.";
      return;
    }
    $("#loginStatus").textContent = "";
    setAdminMode(true);
    await loadRemoteNews();
    fillNewsForm(newsItems[0]?.id || "");
  });
  $("#logoutButton").addEventListener("click", async () => {
    supabaseAccessToken = null;
    setAdminMode(false);
    showView("noticias");
  });
  $("#newNewsButton").addEventListener("click", () => fillNewsForm(""));
  $("#deleteNewsButton").addEventListener("click", async () => {
    const id = $("#newsId").value;
    if (!id) return;
    if (hasSupabaseConfig() && document.body.classList.contains("is-admin")) {
      await supabaseFetch(`/rest/v1/news?id=eq.${encodeURIComponent(id)}`, {
        method: "DELETE",
        headers: { Prefer: "return=minimal" },
      });
      await loadRemoteNews();
    } else {
      newsItems = newsItems.filter((item) => item.id !== id);
      saveNews();
    }
    renderNews();
    fillNewsForm(newsItems[0]?.id || "");
  });
  $("#newsForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const id = $("#newsId").value || `n${Date.now()}`;
    const next = {
      id,
      title: $("#newsTitle").value.trim(),
      tag: $("#newsTag").value.trim(),
      team: $("#newsTeam").value,
      body: $("#newsBody").value.trim(),
      date: new Date().toLocaleDateString("es-ES"),
    };
    if (hasSupabaseConfig() && document.body.classList.contains("is-admin")) {
      const payload = {
        title: next.title,
        tag: next.tag,
        team: next.team,
        body: next.body,
        published_at: new Date().toISOString().slice(0, 10),
      };
      if ($("#newsId").value) {
        await supabaseFetch(`/rest/v1/news?id=eq.${encodeURIComponent(id)}`, {
          method: "PATCH",
          headers: { Prefer: "return=representation" },
          body: JSON.stringify(payload),
        });
      } else {
        const data = await supabaseFetch("/rest/v1/news", {
          method: "POST",
          headers: { Prefer: "return=representation" },
          body: JSON.stringify(payload),
        });
        next.id = data?.[0]?.id || next.id;
      }
      await loadRemoteNews();
      fillNewsForm(next.id);
    } else {
      const index = newsItems.findIndex((item) => item.id === id);
      if (index >= 0) newsItems[index] = next;
      else newsItems.unshift(next);
      saveNews();
      renderNews();
      fillNewsForm(id);
    }
  });
  $("#generateNewsButton").addEventListener("click", async () => {
    const status = $("#aiStatus");
    status.textContent = "Generando borrador...";
    $("#generateNewsButton").disabled = true;
    try {
      const team = byShort($("#newsTeam").value);
      const response = await fetch("/api/generate-news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: $("#aiType").value,
          team: team?.name || "",
          context: $("#aiContext").value.trim(),
        }),
      });
      if (!response.ok) throw new Error("No se pudo generar el texto");
      const draft = await response.json();
      $("#newsTitle").value = draft.title || $("#newsTitle").value;
      $("#newsTag").value = draft.tag || $("#newsTag").value;
      $("#newsBody").value = draft.body || $("#newsBody").value;
      status.textContent = "Borrador generado. Revisa antes de guardar.";
    } catch (error) {
      status.textContent = "No se pudo generar. Revisa que el servidor tenga Gemini configurado.";
    } finally {
      $("#generateNewsButton").disabled = false;
    }
  });
}

function showView(view, updateUrl = true) {
  const nextView = views.includes(view) ? view : "inicio";
  document.querySelectorAll("[data-view]").forEach((section) => {
    section.classList.toggle("active", section.dataset.view === nextView);
  });
  document.querySelectorAll("[data-view-link]").forEach((link) => {
    link.classList.toggle("active", link.dataset.viewLink === nextView);
  });
  if (updateUrl) {
    history.pushState({ view: nextView }, "", `#${nextView}`);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function routeFromHash() {
  const hash = location.hash.replace("#", "");
  if (hash === "admin") {
    requestAdminAccess();
  } else if (hash.startsWith("equipo-")) {
    openTeamDetail(hash.replace("equipo-", ""), false);
  } else {
    showView(hash, false);
  }
}

function openTeamDetail(teamId, updateUrl = true) {
  if (!byId(teamId)) return;
  selectedTeamId = teamId;
  renderTeams($("#teamSearch").value);
  renderTeamProfile();
  renderClubDetail();
  document.querySelectorAll("[data-view]").forEach((section) => {
    section.classList.toggle("active", section.dataset.view === "equipo");
  });
  document.querySelectorAll("[data-view-link]").forEach((link) => {
    link.classList.remove("active");
  });
  if (updateUrl) {
    history.pushState({ view: "equipo", teamId }, "", `#equipo-${teamId}`);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderFeaturedGame() {
  const game = allCalendarGames().find((item) => item.id === selectedGameId) || allCalendarGames().at(-1);
  const home = byShort(game.home);
  const away = byShort(game.away);
  $("#featuredGame").innerHTML = `
    <div class="score-line">
      <div class="score-team">${teamMark(home)}<strong>${home.name}</strong><span class="meta">Local</span></div>
      <div class="score">${game.status === "Final" ? `${game.homeScore} - ${game.awayScore}` : game.time}</div>
      <div class="score-team">${teamMark(away)}<strong>${away.name}</strong><span class="meta">Visitante</span></div>
    </div>
    <div class="detail-row"><span>${game.date} Â· ${game.time}</span><strong>${game.venue}</strong></div>
  `;
  updateCurrentCompetitionLabels();
}

function renderOverview() {
  $("#recentResults").innerHTML = games
    .filter((game) => game.status === "Final")
    .slice(-5)
    .reverse()
    .map((game) => `
      <div class="result-row">
        <span>${teamMini(game.home)}</span>
        <strong>${game.homeScore} - ${game.awayScore}</strong>
        <span>${teamMini(game.away)}</span>
      </div>
    `)
    .join("");

  const nextGames = allCalendarGames()
    .filter((game) => game.status !== "Final")
    .slice(0, 5);
  $("#nextGames").innerHTML = nextGames.length
    ? nextGames
        .map((game) => `
      <div class="fixture-row">
        <span>${teamMini(game.home)}</span>
        <strong>${game.time}</strong>
        <span>${teamMini(game.away)}</span>
      </div>
    `)
        .join("")
    : `<div class="fixture-row"><span class="muted">Liga regular finalizada</span><strong>Playoffs</strong></div>`;

  $("#leaders").innerHTML = [
    ["Puntos", "Kevin Larsen", "17.1"],
    ["Rebotes", "Atoumane Diagne", "9.6"],
    ["Asistencias", "Dee", "6.8"],
  ]
    .map(([label, name, value]) => `
      <div class="leader-row">
        <span><strong>${name}</strong><span class="meta">${label}</span></span>
        <strong>${value}</strong>
      </div>
    `)
    .join("");
}

function renderStandings() {
  const statsByTeam =
    remoteStandings.get(standingsMode)?.size
      ? remoteStandings.get(standingsMode)
      : calculateStandings(standingsMode);
  const sorted = teams
    .map((team) => {
      const stats = statsByTeam.get(team.short) || {};
      return {
        ...team,
        wins: stats.wins || 0,
        losses: stats.losses || 0,
        pf: stats.pf || 0,
        pc: stats.pc || 0,
        streak: stats.streak || "-",
        remotePosition: stats.position,
      };
    })
    .sort((a, b) => {
    if (a.remotePosition && b.remotePosition) return a.remotePosition - b.remotePosition;
    if (b.wins !== a.wins) return b.wins - a.wins;
    const tied = teams
      .map((team) => ({ ...team, ...statsByTeam.get(team.short) }))
      .filter((team) => team.wins === a.wins && team.losses === a.losses);
    if (tied.length > 1) {
      const tieStats = new Map(tied.map((team) => [team.short, { wins: 0, diff: 0 }]));
      games.forEach((game) => {
        if (!tieStats.has(game.home) || !tieStats.has(game.away)) return;
        const home = tieStats.get(game.home);
        const away = tieStats.get(game.away);
        home.diff += game.homeScore - game.awayScore;
        away.diff += game.awayScore - game.homeScore;
        if (game.homeScore > game.awayScore) home.wins += 1;
        else away.wins += 1;
      });
      const aTie = tieStats.get(a.short);
      const bTie = tieStats.get(b.short);
      if (bTie.wins !== aTie.wins) return bTie.wins - aTie.wins;
      if (bTie.diff !== aTie.diff) return bTie.diff - aTie.diff;
    }
    return b.pf - b.pc - (a.pf - a.pc);
  });
  $("#standingsBody").innerHTML = sorted
    .map((team, index) => {
      const played = team.wins + team.losses;
      const diff = team.pf - team.pc;
      return `
        <tr>
          <td><span class="rank">${index + 1}</span></td>
          <td>${teamMini(team.short)}<span class="meta">${team.city}</span></td>
          <td>${played}</td>
          <td>${team.wins}</td>
          <td>${team.losses}</td>
          <td>${team.pf}</td>
          <td>${team.pc}</td>
          <td>${diff > 0 ? "+" : ""}${diff}</td>
          <td>${team.streak}</td>
        </tr>
      `;
    })
    .join("");
}

function calculateStandings(mode = "general") {
  const table = new Map(
    teams.map((team) => [
      team.short,
      { wins: 0, losses: 0, pf: 0, pc: 0, streak: "" },
    ]),
  );
  const streaks = new Map(teams.map((team) => [team.short, []]));
  games.forEach((game) => {
    if (game.status !== "Final") return;
    if (mode === "home") {
      const home = table.get(game.home);
      home.pf += game.homeScore;
      home.pc += game.awayScore;
      if (game.homeScore > game.awayScore) home.wins += 1;
      else home.losses += 1;
      streaks.get(game.home).push(game.homeScore > game.awayScore ? "G" : "P");
      return;
    }
    if (mode === "away") {
      const away = table.get(game.away);
      away.pf += game.awayScore;
      away.pc += game.homeScore;
      if (game.awayScore > game.homeScore) away.wins += 1;
      else away.losses += 1;
      streaks.get(game.away).push(game.awayScore > game.homeScore ? "G" : "P");
      return;
    }
    const home = table.get(game.home);
    const away = table.get(game.away);
    home.pf += game.homeScore;
    home.pc += game.awayScore;
    away.pf += game.awayScore;
    away.pc += game.homeScore;
    if (game.homeScore > game.awayScore) {
      home.wins += 1;
      away.losses += 1;
      streaks.get(game.home).push("G");
      streaks.get(game.away).push("P");
    } else {
      away.wins += 1;
      home.losses += 1;
      streaks.get(game.away).push("G");
      streaks.get(game.home).push("P");
    }
  });
  teams.forEach((team) => {
    const streak = streaks.get(team.short);
    const last = streak.at(-1) || "-";
    let count = 0;
    for (let i = streak.length - 1; i >= 0; i -= 1) {
      if (streak[i] !== last) break;
      count += 1;
    }
    table.get(team.short).streak = last === "-" ? "-" : `${last}${count}`;
  });
  return table;
}

function renderCalendar() {
  const phase = calendarPhases.find((item) => item.key === selectedPhase) || calendarPhases[0];
  const phaseGames = phase.games;
  const rounds = [...new Set(phaseGames.map((game) => game.round))].sort((a, b) => a - b);
  if (rounds.length && !rounds.includes(selectedRound)) selectedRound = rounds[0];
  const roundGames = phaseGames.filter((game) => game.round === selectedRound);
  const roundLabel = (round) => {
    if (phase.key === "regular") return String(round);
    if (phase.key === "playoffs") return ["A", "B", "C", "D"][round - 1] || String(round);
    if (phase.key === "final-four") return round === 1 ? "SF" : "F";
    return String(round);
  };
  const summaryTitle = () => {
    if (phase.key === "regular") return `Jornada ${selectedRound}`;
    if (phase.key === "playoffs") return `Cuartos Â· Serie ${roundLabel(selectedRound)}`;
    if (phase.key === "final-four") return selectedRound === 1 ? "Semifinales" : "Final";
    return roundGames[0]?.label || phase.label;
  };
  $("#calendarList").innerHTML = `
    <div class="phase-tabs">
      ${calendarPhases
        .map((item) => `
          <button class="phase-tab ${item.key === selectedPhase ? "active" : ""}" type="button" data-phase="${item.key}">
            ${item.label}
          </button>
        `)
        .join("")}
    </div>
    <div class="round-nav">
      <button class="round-step" type="button" data-round-step="-1" ${!rounds.length || selectedRound === rounds[0] ? "disabled" : ""}>Anterior</button>
      <div class="round-picker" aria-label="Seleccionar jornada">
        ${rounds.length ? rounds.map((round) => `
          <button class="round-tile ${round === selectedRound ? "active" : ""}" type="button" data-round="${round}" aria-label="${phase.key === "regular" ? "Jornada" : "Ronda"} ${roundLabel(round)}">
            ${roundLabel(round)}
          </button>
        `).join("") : `<span class="round-empty">Pendiente</span>`}
      </div>
      <button class="round-step" type="button" data-round-step="1" ${!rounds.length || selectedRound === rounds.at(-1) ? "disabled" : ""}>Siguiente</button>
    </div>
    <div class="round-summary">
      <strong>${summaryTitle()}</strong>
      <span>${roundGames.length ? `${roundGames.length} partido${roundGames.length === 1 ? "" : "s"} Â· ${roundGames[0]?.date || ""}` : "Calendario pendiente de publicaciÃ³n"}</span>
    </div>
    <div class="round-games">
      ${roundGames.length ? roundGames.map((game) => {
      const score = game.status === "Final" ? `${game.homeScore} - ${game.awayScore}` : game.time;
      return `
        <article class="calendar-game ${game.id === selectedGameId ? "active" : ""}" data-game="${game.id}">
          <div>
            <span class="meta">${phase.key === "regular" ? `Jornada ${game.round}` : game.label || phase.label} Â· ${game.date}</span>
            <strong>${byShort(game.home).name}</strong>
            <span class="muted"> vs ${byShort(game.away).name}</span>
          </div>
          <span class="game-score">${score}</span>
        </article>
      `;
    })
    .join("") : `<article class="calendar-game empty-calendar"><div><strong>Final Four</strong><span class="muted">Cuando FEB publique sede, fechas y partidos, se podran cargar aqui.</span></div></article>`}
    </div>
  `;

  document.querySelectorAll("[data-phase]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedPhase = button.dataset.phase;
      const nextPhase = calendarPhases.find((item) => item.key === selectedPhase);
      selectedRound = nextPhase?.games[0]?.round || 1;
      selectedGameId = nextPhase?.games[0]?.id || selectedGameId;
      renderCalendar();
      renderMatchDetail();
      renderFeaturedGame();
    });
  });

  document.querySelectorAll("[data-round]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedRound = Number(button.dataset.round);
      selectedGameId = phaseGames.find((game) => game.round === selectedRound)?.id || selectedGameId;
      renderCalendar();
      renderMatchDetail();
      renderFeaturedGame();
    });
  });

  document.querySelectorAll("[data-round-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextIndex = rounds.indexOf(selectedRound) + Number(button.dataset.roundStep);
      selectedRound = rounds[nextIndex] || selectedRound;
      selectedGameId = phaseGames.find((game) => game.round === selectedRound)?.id || selectedGameId;
      renderCalendar();
      renderMatchDetail();
      renderFeaturedGame();
    });
  });

  document.querySelectorAll("[data-game]").forEach((item) => {
    item.addEventListener("click", () => {
      selectedGameId = Number(item.dataset.game);
      const game = allCalendarGames().find((item) => item.id === selectedGameId);
      selectedPhase = game?.phaseKey || selectedPhase;
      selectedRound = game?.round || selectedRound;
      renderCalendar();
      renderMatchDetail();
      renderFeaturedGame();
    });
  });
}

function renderMatchDetail() {
  const game = allCalendarGames().find((item) => item.id === selectedGameId);
  if (!game) {
    $("#matchDetail").innerHTML = `
      <div class="match-head">
        <span class="meta">Final Four</span>
        <strong>Pendiente</strong>
      </div>
      <div class="detail-row"><span>Estado</span><strong>Calendario pendiente de publicacion</strong></div>
    `;
    return;
  }
  const home = byShort(game.home);
  const away = byShort(game.away);
  const score = game.status === "Final" ? `${game.homeScore} - ${game.awayScore}` : game.time;
  $("#matchDetail").innerHTML = `
    <div class="match-head">
      <span class="meta">${game.phaseKey === "regular" ? `Jornada ${game.round}` : game.label || game.phase}</span>
      <strong>${game.status}</strong>
    </div>
    <div class="score-line">
      <div class="score-team">${teamMark(home)}<strong>${home.short}</strong></div>
      <div class="score">${score}</div>
      <div class="score-team">${teamMark(away)}<strong>${away.short}</strong></div>
    </div>
    <div class="detail-row"><span>Fecha</span><strong>${game.date}</strong></div>
    <div class="detail-row"><span>Hora</span><strong>${game.time}</strong></div>
    <div class="detail-row"><span>Pabellon</span><strong>${game.venue}</strong></div>
    <div class="detail-row"><span>Arbitros</span><strong>Designacion pendiente</strong></div>
  `;
}

function renderTeams(filter = "") {
  const normalized = filter.trim().toLowerCase();
  const filtered = teams.filter((team) =>
    `${team.name} ${team.city}`.toLowerCase().includes(normalized),
  );
  $("#teamGrid").innerHTML = filtered
    .map((team) => `
      <article class="team-card ${team.id === selectedTeamId ? "active" : ""}" data-team="${team.id}">
        <div class="team-card-head">
          ${teamMark(team)}
          <span class="meta">${team.city}</span>
        </div>
        <h3>${team.name}</h3>
        <span class="meta">${team.arena}</span>
        <div class="team-colors">
          <span class="swatch" style="background:${team.colors[0]}"></span>
          <span class="swatch" style="background:${team.colors[1]}"></span>
        </div>
      </article>
    `)
    .join("");

  document.querySelectorAll("[data-team]").forEach((item) => {
    item.addEventListener("click", () => {
      openTeamDetail(item.dataset.team);
    });
  });
}

function renderTeamProfile() {
  const team = byId(selectedTeamId);
  const roster = players.filter((player) => player.team === team.short);
  const fallback = players.slice(0, 6).map((player, index) => ({
    ...player,
    name: index < roster.length ? roster[index].name : player.name,
  }));
  const displayRoster = roster.length >= 4 ? roster : fallback;
  $("#teamProfile").style.setProperty(
    "--profile-bg",
    `linear-gradient(135deg, ${team.colors[0]}, ${team.colors[1]})`,
  );
  $("#teamProfile").innerHTML = `
    <div class="profile-hero">
      <div class="profile-identity">
        ${teamMark(team)}
        <div>
          <h2>${team.name}</h2>
          <p>${team.city} Â· ${team.arena}</p>
        </div>
      </div>
      <div class="profile-kpis">
        <span><strong>${team.wins}</strong>Victorias</span>
        <span><strong>${team.losses}</strong>Derrotas</span>
        <span><strong>${Math.round(team.pf / (team.wins + team.losses))}</strong>Pts/partido</span>
        <span><strong>${team.streak}</strong>Racha</span>
      </div>
    </div>
    <div class="profile-body">
      <div class="arena-panel">
        <span class="meta">Pabellon</span>
        <strong>${team.arena}</strong>
        <span>${team.city}</span>
      </div>
      <div>
        <h3>Plantilla destacada</h3>
        <div class="roster-list">
          ${displayRoster
            .slice(0, 6)
            .map((player) => `
              <div class="player-row">
                <span class="player-id">
                  <span class="avatar" style="--avatar-color:${team.colors[0]}"></span>
                  <span><strong>${player.name}</strong><span class="meta">${player.position}</span></span>
                </span>
                <strong>${player.points.toFixed(1)} pts</strong>
              </div>
            `)
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderClubDetail() {
  const team = byId(selectedTeamId);
  const roster = players.filter((player) => player.team === team.short);
  const displayRoster = roster.length >= 4 ? roster : players.slice(0, 8);
  const teamGames = games.filter((game) => game.home === team.short || game.away === team.short);
  const leaders = [...displayRoster].sort((a, b) => b.points - a.points).slice(0, 3);
  $("#clubDetail").style.setProperty(
    "--profile-bg",
    `linear-gradient(135deg, ${team.colors[0]}, ${team.colors[1]})`,
  );
  $("#clubDetail").innerHTML = `
    <div class="club-breadcrumb">
      <button class="back-button" type="button" data-back-teams>Equipos</button>
      <span>${team.name}</span>
    </div>
    <header class="club-hero">
      <div class="club-identity">
        ${teamMark(team)}
        <div>
          <span class="meta">Temporada 2025 - 2026</span>
          <h1>${team.name}</h1>
          <p>${team.city} Â· ${team.arena}</p>
        </div>
      </div>
      <div class="club-actions">
        <a href="#clubes">Web</a>
        <a href="#clubes">Entradas</a>
        <a href="#clubes">Contacto</a>
      </div>
    </header>
    <nav class="club-tabs" aria-label="Secciones del equipo">
      <a href="#club-resumen">Resumen</a>
      <a href="#club-plantilla">Plantilla</a>
      <a href="#club-partidos">Partidos</a>
      <a href="#club-estadisticas">Estadisticas</a>
      <a href="#club-lideres">Lideres</a>
    </nav>
    <div id="club-resumen" class="club-summary-grid">
      <article class="club-panel club-record">
        <h2>Resumen</h2>
        <div class="club-kpi-row">
          <span><strong>${team.wins}-${team.losses}</strong>Balance</span>
          <span><strong>${Math.round(team.pf / (team.wins + team.losses))}</strong>Pts/partido</span>
          <span><strong>${team.pf - team.pc > 0 ? "+" : ""}${team.pf - team.pc}</strong>Diferencia</span>
          <span><strong>${team.streak}</strong>Racha</span>
        </div>
      </article>
      <article class="club-panel">
        <h2>Datos del club</h2>
        <div class="detail-row"><span>Entrenador</span><strong>${team.coach}</strong></div>
        <div class="detail-row"><span>Pabellon</span><strong>${team.arena}</strong></div>
        <div class="detail-row"><span>Ciudad</span><strong>${team.city}</strong></div>
      </article>
    </div>
    <section id="club-plantilla" class="club-panel">
      <div class="club-section-head">
        <h2>Plantilla</h2>
        <span>${displayRoster.length} jugadores</span>
      </div>
      <div class="club-roster-grid">
        ${displayRoster
          .map((player, index) => `
            <article class="club-player-card">
              <span class="player-number">#${index + 4}</span>
              <span class="avatar" style="--avatar-color:${team.colors[0]}"></span>
              <div>
                <strong>${player.name}</strong>
                <span>${player.position} Â· ${player.points.toFixed(1)} pts</span>
              </div>
            </article>
          `)
          .join("")}
      </div>
    </section>
    <section id="club-partidos" class="club-panel">
      <div class="club-section-head">
        <h2>Partidos</h2>
        <span>Calendario del equipo</span>
      </div>
      <div class="club-games-list">
        ${(teamGames.length ? teamGames : games.slice(0, 4))
          .map((game) => {
            const score = game.status === "Final" ? `${game.homeScore} - ${game.awayScore}` : game.time;
            return `
              <article class="club-game-row">
                <span class="meta">J${game.round} Â· ${game.date}</span>
                <strong>${byShort(game.home).name}</strong>
                <span class="club-game-score">${score}</span>
                <strong>${byShort(game.away).name}</strong>
                <span class="meta">${game.status}</span>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
    <div class="club-bottom-grid">
      <section id="club-estadisticas" class="club-panel">
        <h2>Estadisticas</h2>
        <div class="club-stat-table">
          <div><span>PF</span><strong>${team.pf}</strong></div>
          <div><span>PC</span><strong>${team.pc}</strong></div>
          <div><span>Rebotes</span><strong>${Math.round(34.5 + team.wins)}</strong></div>
          <div><span>Asistencias</span><strong>${Math.round(13.2 + team.wins / 2)}</strong></div>
        </div>
      </section>
      <section id="club-lideres" class="club-panel">
        <h2>Lideres</h2>
        <div class="leader-list">
          ${leaders
            .map((player) => `
              <div class="leader-row">
                <span><strong>${player.name}</strong><span class="meta">${player.position}</span></span>
                <strong>${player.points.toFixed(1)} pts</strong>
              </div>
            `)
            .join("")}
        </div>
      </section>
    </div>
  `;
  document.querySelector("[data-back-teams]").addEventListener("click", () => showView("equipos"));
}

function renderStats() {
  const statLabels = { points: "pts", rebounds: "reb", assists: "ast" };
  const sorted = [...players].sort((a, b) => b[selectedStat] - a[selectedStat]).slice(0, 9);
  $("#statsGrid").innerHTML = sorted
    .map((player, index) => {
      const team = byShort(player.team);
      return `
        <article class="stat-card">
          <span class="stat-rank">${index + 1}</span>
          <span class="player-id">
            <span class="avatar" style="--avatar-color:${team.colors[0]}"></span>
            <span><strong>${player.name}</strong><span class="meta">${team.name}</span></span>
          </span>
          <span class="stat-value">${player[selectedStat].toFixed(1)} ${statLabels[selectedStat]}</span>
        </article>
      `;
    })
    .join("");
}

function bindControls() {
  $("#teamSearch").addEventListener("input", (event) => renderTeams(event.target.value));
  document.querySelectorAll("[data-standings-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      standingsMode = button.dataset.standingsMode;
      document.querySelectorAll("[data-standings-mode]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderStandings();
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const view = link.getAttribute("href").slice(1);
    if (!views.includes(view)) return;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      if (location.hash === `#${view}`) {
        showView(view, false);
      } else {
        location.hash = view;
      }
    });
  });
  document.querySelectorAll("[data-stat]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedStat = button.dataset.stat;
      document.querySelectorAll("[data-stat]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderStats();
    });
  });
  window.addEventListener("hashchange", routeFromHash);
  window.addEventListener("popstate", routeFromHash);
}

async function init() {
  await loadRemoteSportsData();
  renderTeamRibbon();
  renderMatchTicker();
  renderStories();
  renderFeaturedGame();
  renderOverview();
  renderStandings();
  renderCalendar();
  renderMatchDetail();
  renderTeams();
  renderTeamProfile();
  renderClubDetail();
  renderNewsTeamOptions();
  renderNews();
  await loadRemoteNews();
  renderStats();
  bindControls();
  bindNewsAdmin();
  setAdminMode(false);
  if (supabaseClient) {
    const { data } = await supabaseClient.auth.getSession();
    if (data.session && location.hash === "#admin") setAdminMode(true);
  }
  routeFromHash();
}

init();
