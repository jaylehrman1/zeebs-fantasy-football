/* ============================================================
   ZEEBS LEAGUE — SEASON-BY-SEASON RECORDS
   Add one entry per manager per season as you get the numbers.
   The site adds these up automatically to build the All-Time
   Record chart — no need to calculate totals yourself.

   Example of how to add a season once you have it:
     { year: 2025, manager: "Roy", wins: 9, losses: 4 },
   ============================================================ */

const ZEEBS_SEASON_RECORDS = [
  // 2025 — by owner
  { year: 2025, manager: "Roy",           wins: 8,  losses: 6 },
  { year: 2025, manager: "Dealba/Hurley", wins: 10, losses: 4 },
  { year: 2025, manager: "Sean/Kyle",     wins: 8,  losses: 6 },
  // Schoolyard T1ttie Gang. ESPN shows this owner as "Baskin" but his
  // real name is Chaskin — site always uses Chaskin.
  { year: 2025, manager: "Chaskin/Eagen", wins: 11, losses: 3 },
  { year: 2025, manager: "Kiley",         wins: 9,  losses: 5 },
  { year: 2025, manager: "Warden",        wins: 9,  losses: 5 },
  { year: 2025, manager: "Silver",        wins: 7,  losses: 7 },
  { year: 2025, manager: "Noff/Oriatti",  wins: 7,  losses: 7 },
  { year: 2025, manager: "Berglund",      wins: 4,  losses: 10 },
  { year: 2025, manager: "Prizant",       wins: 3,  losses: 11 },
  { year: 2025, manager: "Jay/Slep",      wins: 5,  losses: 9 },
  { year: 2025, manager: "Raye/AG",       wins: 3,  losses: 11 },

  // 2024 — by owner. Kiley and Berglund didn't play this season, so
  // only 10 of the 12 all-time managers have a 2024 entry.
  { year: 2024, manager: "Dealba/Hurley", wins: 9,  losses: 5 },
  // HOGS 2024 was co-owned with Brandon Krawitz, who isn't a regular
  // owner — the season is attributed to Prizant alone.
  { year: 2024, manager: "Prizant",       wins: 9,  losses: 5 },
  { year: 2024, manager: "Silver",        wins: 9,  losses: 5 },
  { year: 2024, manager: "Sean/Kyle",     wins: 7,  losses: 7 },
  { year: 2024, manager: "Jay/Slep",      wins: 7,  losses: 7 },
  { year: 2024, manager: "Raye/AG",       wins: 9,  losses: 5 },
  { year: 2024, manager: "Noff/Oriatti",  wins: 4,  losses: 10 },
  { year: 2024, manager: "Roy",           wins: 7,  losses: 7 },
  { year: 2024, manager: "Chaskin/Eagen", wins: 4,  losses: 10 },
  { year: 2024, manager: "Warden",        wins: 5,  losses: 9 },

  // 2023 — by owner. Kiley and Berglund didn't play this season either.
  { year: 2023, manager: "Raye/AG",       wins: 10, losses: 4 },
  { year: 2023, manager: "Jay/Slep",      wins: 10, losses: 4 },
  { year: 2023, manager: "Roy",           wins: 9,  losses: 5 },
  { year: 2023, manager: "Silver",        wins: 10, losses: 4 },
  { year: 2023, manager: "Noff/Oriatti",  wins: 8,  losses: 6 },
  // HOGS 2023 was co-owned with Brandon Krawitz — attributed to
  // Prizant alone, same as 2024.
  { year: 2023, manager: "Prizant",       wins: 8,  losses: 6 },
  { year: 2023, manager: "Warden",        wins: 4,  losses: 10 },
  { year: 2023, manager: "Dealba/Hurley", wins: 2,  losses: 12 },
  { year: 2023, manager: "Sean/Kyle",     wins: 3,  losses: 11 },
  { year: 2023, manager: "Chaskin/Eagen", wins: 6,  losses: 8 },

  // 2022 — by owner. Kiley and Berglund didn't play this season either.
  { year: 2022, manager: "Roy",           wins: 7,  losses: 7 },
  // Tee Time 2022 co-owned with simon shindler — Silver's usual
  // co-owner (Drew Moran) wasn't involved this year.
  { year: 2022, manager: "Silver",        wins: 7,  losses: 7 },
  { year: 2022, manager: "Jay/Slep",      wins: 9,  losses: 5 },
  { year: 2022, manager: "Warden",        wins: 11, losses: 3 },
  { year: 2022, manager: "Prizant",       wins: 8,  losses: 6 },
  { year: 2022, manager: "Noff/Oriatti",  wins: 7,  losses: 7 },
  { year: 2022, manager: "Raye/AG",       wins: 3,  losses: 11 },
  { year: 2022, manager: "Dealba/Hurley", wins: 5,  losses: 9 },
  { year: 2022, manager: "Sean/Kyle",     wins: 6,  losses: 8 },
  { year: 2022, manager: "Chaskin/Eagen", wins: 7,  losses: 7 },

  // 2021 — by owner. Kiley and Berglund didn't play this season either.
  { year: 2021, manager: "Sean/Kyle",     wins: 8,  losses: 6 },
  { year: 2021, manager: "Silver",        wins: 8,  losses: 6 },
  { year: 2021, manager: "Roy",           wins: 9,  losses: 5 },
  { year: 2021, manager: "Noff/Oriatti",  wins: 10, losses: 4 },
  { year: 2021, manager: "Dealba/Hurley", wins: 6,  losses: 8 },
  { year: 2021, manager: "Raye/AG",       wins: 8,  losses: 6 },
  { year: 2021, manager: "Prizant",       wins: 5,  losses: 9 },
  { year: 2021, manager: "Warden",        wins: 6,  losses: 8 },
  { year: 2021, manager: "Chaskin/Eagen", wins: 5,  losses: 9 },
  { year: 2021, manager: "Jay/Slep",      wins: 5,  losses: 9 },

  // 2020 — by owner. 13-game season. Kiley and Berglund didn't play.
  // Roy's team was co-owned with "Matt Cats" this year.
  { year: 2020, manager: "Roy",           wins: 7,  losses: 6 },
  { year: 2020, manager: "Noff/Oriatti",  wins: 7,  losses: 6 },
  { year: 2020, manager: "Dealba/Hurley", wins: 10, losses: 3 },
  { year: 2020, manager: "Sean/Kyle",     wins: 10, losses: 3 },
  { year: 2020, manager: "Jay/Slep",      wins: 9,  losses: 4 },
  { year: 2020, manager: "Silver",        wins: 9,  losses: 4 },
  { year: 2020, manager: "Raye/AG",       wins: 0,  losses: 13 },
  { year: 2020, manager: "Prizant",       wins: 4,  losses: 9 },
  { year: 2020, manager: "Warden",        wins: 4,  losses: 9 },
  { year: 2020, manager: "Chaskin/Eagen", wins: 5,  losses: 8 },

  // 2019 — by owner. 13-game season. Kiley and Berglund didn't play.
  { year: 2019, manager: "Raye/AG",       wins: 8,  losses: 5 },
  { year: 2019, manager: "Prizant",       wins: 7,  losses: 6 },
  { year: 2019, manager: "Roy",           wins: 9,  losses: 4 },
  { year: 2019, manager: "Warden",        wins: 9,  losses: 4 },
  { year: 2019, manager: "Silver",        wins: 7,  losses: 6 },
  { year: 2019, manager: "Sean/Kyle",     wins: 7,  losses: 6 },
  { year: 2019, manager: "Jay/Slep",      wins: 3,  losses: 10 },
  { year: 2019, manager: "Chaskin/Eagen", wins: 4,  losses: 9 },
  { year: 2019, manager: "Dealba/Hurley", wins: 6,  losses: 7 },
  { year: 2019, manager: "Noff/Oriatti",  wins: 5,  losses: 8 },

  // 2018 — by owner. Kiley played this year (Berglund still didn't).
  // Silver sat this season out.
  { year: 2018, manager: "Chaskin/Eagen", wins: 11, losses: 2 },
  { year: 2018, manager: "Raye/AG",       wins: 9,  losses: 4 },
  { year: 2018, manager: "Dealba/Hurley", wins: 6,  losses: 7 },
  { year: 2018, manager: "Roy",           wins: 6,  losses: 7 },
  // Woke up with a Full CHUBB co-owned with Nathan Berger this year —
  // attributed to Prizant.
  { year: 2018, manager: "Prizant",       wins: 7,  losses: 6 },
  { year: 2018, manager: "Noff/Oriatti",  wins: 6,  losses: 7 },
  { year: 2018, manager: "Jay/Slep",      wins: 6,  losses: 7 },
  // JG12 TB10 co-owned with Adi Bates this year — attributed to Kiley.
  { year: 2018, manager: "Kiley",         wins: 6,  losses: 7 },
  { year: 2018, manager: "Sean/Kyle",     wins: 3,  losses: 10 },
  { year: 2018, manager: "Warden",        wins: 5,  losses: 8 },

  // 2017 — by owner. This is the season Kiley's team was co-owned
  // with Ricky Gumirov (the trophy case lists this title as
  // "Gumirov/Kiley"), but season records still track him as "Kiley"
  // for consistency with every other year. Stablein/Baumbach's first
  // appearance in season data this year.
  { year: 2017, manager: "Kiley",         wins: 9,  losses: 4 },
  { year: 2017, manager: "Jay/Slep",      wins: 9,  losses: 4 },
  { year: 2017, manager: "Chaskin/Eagen", wins: 7,  losses: 6 },
  { year: 2017, manager: "Sean/Kyle",     wins: 7,  losses: 6 },
  { year: 2017, manager: "Stablein/Baumbach", wins: 8, losses: 5 },
  { year: 2017, manager: "Raye/AG",       wins: 7,  losses: 6 },
  { year: 2017, manager: "Prizant",       wins: 5,  losses: 8 },
  { year: 2017, manager: "Dealba/Hurley", wins: 5,  losses: 8 },
  { year: 2017, manager: "Roy",           wins: 4,  losses: 9 },
  { year: 2017, manager: "Warden",        wins: 4,  losses: 9 },
];
