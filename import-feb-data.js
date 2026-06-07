const SUPABASE_URL = process.env.SUPABASE_URL || "https://dnqawcpopcslmazemrhz.supabase.co";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "";
const SUPABASE_EMAIL = process.env.SUPABASE_EMAIL || "";
const SUPABASE_PASSWORD = process.env.SUPABASE_PASSWORD || "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const SEASON = "2025-2026";
const FEB_CALENDAR_URL = "https://baloncestoenvivo.feb.es/calendario.aspx?g=1&nm=primerafeb&t=2025";
const FEB_RESULTS_URL = "https://baloncestoenvivo.feb.es/resultados.aspx?g=1&nm=primerafeb&t=2025";

const teams = [
  { short: "ALI", name: "HLA Alicante", city: "Alicante", arena: "Pedro Ferrandiz", coach: "Rafa Monclova", colors: ["#111111", "#d9272e"] },
  { short: "OUR", name: "Cloud.Gal Ourense Baloncesto", city: "Ourense", arena: "Pazo dos Deportes Paco Paz", coach: "Moncho Lopez", colors: ["#1f4f8f", "#e7eef8"] },
  { short: "MEN", name: "Hestia Menorca", city: "Mahon", arena: "Pavello Menorca", coach: "Javi Zamora", colors: ["#0f8f77", "#f4f7fb"] },
  { short: "OBR", name: "Monbus Obradoiro", city: "Santiago de Compostela", arena: "Multiusos Fontes do Sar", coach: "Gonzalo Rodriguez", colors: ["#123c7c", "#f2b632"] },
  { short: "MLP", name: "Palmer Basket Mallorca Palma", city: "Palma", arena: "Palau Municipal d'Esports Son Moix", coach: "Pau Tomas", colors: ["#17213b", "#d7a642"] },
  { short: "PAL", name: "Súper Agropal Palencia", city: "Palencia", arena: "Pabellon Municipal de Palencia", coach: "Luis Guil", colors: ["#6f2dbd", "#f6d743"] },
  { short: "TIZ", name: "Grupo Ureta Tizona Burgos", city: "Burgos", arena: "El Plantio", coach: "Diego Ocampo", colors: ["#153e75", "#e5b53b"] },
  { short: "MEL", name: "Melilla Ciudad del Deporte", city: "Melilla", arena: "Pabellon Javier Imbroda", coach: "Alejandro Alcoba", colors: ["#11253f", "#087d86"] },
  { short: "GIP", name: "Inveready Gipuzkoa", city: "Donostia", arena: "Angulas Aguinaga Arena", coach: "Mikel Odriozola", colors: ["#7a1232", "#ffffff"] },
  { short: "COR", name: "Leyma Coruña", city: "A Coruña", arena: "Coliseum da Coruña", coach: "Diego Epifanio", colors: ["#f58220", "#0066b3"] },
  { short: "CAR", name: "Grupo Caesa Seguros FC Cartagena CB", city: "Cartagena", arena: "Palacio de Deportes de Cartagena", coach: "Gustavo Aranzana", colors: ["#111111", "#f2c94c"] },
  { short: "FIB", name: "Fibwi Mallorca Basquet Palma", city: "Palma", arena: "Palau d'Esports de Son Moix", coach: "Xavi Sastre", colors: ["#e21b2d", "#111111"] },
  { short: "OVI", name: "Alimerka Oviedo Baloncesto", city: "Oviedo", arena: "Pumarín", coach: "Javi Rodriguez", colors: ["#1b75bb", "#f2c94c"] },
  { short: "EST", name: "Movistar Estudiantes", city: "Madrid", arena: "Movistar Academy Magarinos", coach: "Pedro Rivero", colors: ["#009fe3", "#101820"] },
  { short: "CAN", name: "Grupo Alega Cantabria", city: "Torrelavega", arena: "Vicente Trueba", coach: "David Mangas", colors: ["#0097a7", "#ffffff"] },
  { short: "ZAM", name: "Caja Rural CB Zamora", city: "Zamora", arena: "Angel Nieto", coach: "Saulo Hernandez", colors: ["#2d8a58", "#f4f7fb"] },
  { short: "FUE", name: "Flexicar Fuenlabrada", city: "Fuenlabrada", arena: "Fernando Martin", coach: "Toni Ten", colors: ["#f07a22", "#13294b"] },
];

const officialTeamMap = {
  "HLA ALICANTE": "ALI",
  "CLOUD.GAL OURENSE BALONCESTO": "OUR",
  "HESTIA MENORCA": "MEN",
  "MONBUS OBRADOIRO": "OBR",
  "PALMER BASKET MALLORCA PALMA": "MLP",
  "SÚPER AGROPAL PALENCIA": "PAL",
  "GRUPO URETA TIZONA BURGOS": "TIZ",
  "MELILLA CIUDAD DEL DEPORTE": "MEL",
  "INVEREADY GIPUZKOA": "GIP",
  "LEYMA CORUÑA": "COR",
  "GRUPO CAESA SEGUROS FC CARTAGENA CB": "CAR",
  "FIBWI MALLORCA BASQUET PALMA": "FIB",
  "ALIMERKA OVIEDO BALONCESTO": "OVI",
  "MOVISTAR ESTUDIANTES": "EST",
  "GRUPO ALEGA CANTABRIA": "CAN",
  "CAJA RURAL CB ZAMORA": "ZAM",
  "FLEXICAR FUENLABRADA": "FUE",
};

const finalFourGames = [
  { id: "ff-1", phase_key: "final-four", phase: "Final Four", round: 1, label: "Semifinal 1", game_date: "2026-06-06", game_time: "17:30", home: "COR", away: "PAL", home_score: 92, away_score: 81, venue: "Coliseum da Coruña", status: "Final" },
  { id: "ff-2", phase_key: "final-four", phase: "Final Four", round: 1, label: "Semifinal 2", game_date: "2026-06-06", game_time: "20:15", home: "EST", away: "OVI", home_score: 79, away_score: 71, venue: "Coliseum da Coruña", status: "Final" },
  { id: "ff-3", phase_key: "final-four", phase: "Final Four", round: 2, label: "Final", game_date: "2026-06-07", game_time: "19:00", home: "EST", away: "COR", home_score: null, away_score: null, venue: "Coliseum da Coruña", status: "Programado" },
];

function normalizeHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#218;/g, "Ú")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function toIsoDate(value) {
  const [day, month, year] = value.split("/");
  return `${year}-${month}-${day}`;
}

function consumeTeam(text) {
  const names = Object.keys(officialTeamMap).sort((a, b) => b.length - a.length);
  const trimmed = text.trimStart();
  for (const name of names) {
    if (trimmed.startsWith(name)) return { name, rest: trimmed.slice(name.length).trimStart() };
  }
  return null;
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!response.ok) throw new Error(`FEB request failed ${response.status}`);
  return response.text();
}

async function parseRegularSeason() {
  const html = await fetchText(FEB_CALENDAR_URL);
  const text = normalizeHtml(html);
  const start = text.indexOf("Jornada 1 ");
  const end = text.indexOf("Federación Española");
  const schedule = text.slice(start, end);
  const blocks = [...schedule.matchAll(/Jornada (\d+) (\d{2}\/\d{2}\/\d{4}) Local Resultado Visitante ([\s\S]*?)(?=Jornada \d+ \d{2}\/\d{2}\/\d{4}|$)/g)];
  const games = [];
  for (const block of blocks) {
    const round = Number(block[1]);
    const date = block[2];
    let rest = block[3].trim();
    while (rest.length > 0) {
      const home = consumeTeam(rest);
      if (!home) break;
      const score = home.rest.match(/^(\d+)-(\d+)|^(\*)-(\*)/);
      if (!score) break;
      const afterScore = home.rest.slice(score[0].length).trimStart();
      const away = consumeTeam(afterScore);
      if (!away) break;
      const hasScore = score[1] && score[2];
      games.push({
        id: `regular-${round}-${officialTeamMap[home.name]}-${officialTeamMap[away.name]}`,
        season: SEASON,
        phase_key: "regular",
        phase: "Liga Regular",
        round,
        label: `Jornada ${round}`,
        game_date: toIsoDate(date),
        game_time: "",
        home: officialTeamMap[home.name],
        away: officialTeamMap[away.name],
        home_score: hasScore ? Number(score[1]) : null,
        away_score: hasScore ? Number(score[2]) : null,
        venue: "Calendario oficial FEB",
        status: hasScore ? "Final" : "Programado",
        source_url: FEB_CALENDAR_URL,
      });
      rest = away.rest.trimStart();
    }
  }
  return games;
}

async function parseCurrentPlayoffFinal() {
  const html = await fetchText(FEB_RESULTS_URL);
  const text = normalizeHtml(html);
  const match = text.match(/MOVISTAR ESTUDIANTES - LEYMA CORUÑA (\S+) (\d{2}\/\d{2}\/\d{4}) (\d{2}:\d{2})/);
  if (!match) return [];
  const [homeScore, awayScore] = match[1] === "*-*" ? [null, null] : match[1].split("-").map(Number);
  return [{
    id: "ff-3",
    season: SEASON,
    phase_key: "final-four",
    phase: "Final Four",
    round: 2,
    label: "Final",
    game_date: toIsoDate(match[2]),
    game_time: match[3],
    home: "EST",
    away: "COR",
    home_score: homeScore,
    away_score: awayScore,
    venue: "Coliseum da Coruña",
    status: homeScore === null ? "Programado" : "Final",
    source_url: FEB_RESULTS_URL,
  }];
}

function calculateStandings(games, mode) {
  const table = new Map(teams.map((team) => [team.short, { team: team.short, played: 0, wins: 0, losses: 0, pf: 0, pc: 0, diff: 0, streaks: [] }]));
  for (const game of games) {
    if (game.phase_key !== "regular" || game.status !== "Final") continue;
    const home = table.get(game.home);
    const away = table.get(game.away);
    if (mode !== "away") {
      home.played += 1;
      home.pf += game.home_score;
      home.pc += game.away_score;
      if (game.home_score > game.away_score) home.wins += 1;
      else home.losses += 1;
      home.streaks.push(game.home_score > game.away_score ? "G" : "P");
    }
    if (mode !== "home") {
      away.played += 1;
      away.pf += game.away_score;
      away.pc += game.home_score;
      if (game.away_score > game.home_score) away.wins += 1;
      else away.losses += 1;
      away.streaks.push(game.away_score > game.home_score ? "G" : "P");
    }
  }
  return [...table.values()]
    .map((row) => {
      const last = row.streaks.at(-1) || "-";
      let count = 0;
      for (let i = row.streaks.length - 1; i >= 0; i -= 1) {
        if (row.streaks[i] !== last) break;
        count += 1;
      }
      return { ...row, mode, season: SEASON, diff: row.pf - row.pc, streak: last === "-" ? "-" : `${last}${count}` };
    })
    .sort((a, b) => b.wins - a.wins || b.diff - a.diff)
    .map((row, index) => ({ ...row, position: index + 1, updated_at: new Date().toISOString() }));
}

async function getAccessToken() {
  if (SUPABASE_SERVICE_ROLE_KEY) return SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_ANON_KEY || !SUPABASE_EMAIL || !SUPABASE_PASSWORD) {
    throw new Error("Set SUPABASE_ANON_KEY plus SUPABASE_EMAIL/SUPABASE_PASSWORD, or SUPABASE_SERVICE_ROLE_KEY.");
  }
  const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: { apikey: SUPABASE_ANON_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ email: SUPABASE_EMAIL, password: SUPABASE_PASSWORD }),
  });
  if (!response.ok) throw new Error(await response.text());
  const json = await response.json();
  return json.access_token;
}

async function upsert(table, rows, token) {
  if (!rows.length) return;
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify(rows),
  });
  if (!response.ok) throw new Error(`${table}: ${await response.text()}`);
}

async function main() {
  const token = await getAccessToken();
  const regularGames = await parseRegularSeason();
  const liveFinal = await parseCurrentPlayoffFinal();
  const allGames = [
    ...regularGames,
    ...finalFourGames.map((game) => ({ ...game, season: SEASON, source_url: FEB_RESULTS_URL })),
  ];
  for (const game of liveFinal) {
    const index = allGames.findIndex((item) => item.id === game.id);
    if (index >= 0) allGames[index] = game;
    else allGames.push(game);
  }
  const standings = ["general", "home", "away"].flatMap((mode) => calculateStandings(allGames, mode));
  await upsert("teams", teams.map((team) => ({ ...team, updated_at: new Date().toISOString() })), token);
  await upsert("games", allGames.map((game) => ({ ...game, updated_at: new Date().toISOString() })), token);
  await upsert("standings", standings, token);
  console.log(`Imported ${teams.length} teams, ${allGames.length} games, ${standings.length} standings rows.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
