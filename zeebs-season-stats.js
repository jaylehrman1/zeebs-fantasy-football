/* ============================================================
   ZEEBS LEAGUE — FULL SEASON STANDINGS
   One entry per team per season, straight off the platform's
   final-standings screen (rank, record, points for/against, etc).
   Keyed by year so more seasons can be added alongside 2025.
   ============================================================ */

const ZEEBS_SEASON_STATS = {
  2025: [
    { rank: 1,  team: "Waiver Wire Warriors",   owner: "Roy",           wins: 8,  losses: 6,  pf: 1617.16, pa: 1529.00, pfg: 115.5, pag: 109.2, diff: 6.3 },
    { rank: 2,  team: "Warden's of the East",    owner: "Dealba/Hurley", wins: 10, losses: 4,  pf: 1794.22, pa: 1511.44, pfg: 128.2, pag: 108.0, diff: 20.2 },
    { rank: 3,  team: "Egebuka Deez Nutz",       owner: "Sean/Kyle",     wins: 8,  losses: 6,  pf: 1613.14, pa: 1537.04, pfg: 115.2, pag: 109.8, diff: 5.4 },
    { rank: 4,  team: "Schoolyard T1ttie Gang",  owner: "Chaskin/Eagen", wins: 11, losses: 3,  pf: 1627.28, pa: 1456.74, pfg: 116.2, pag: 104.1, diff: 12.2 },
    { rank: 5,  team: "LA Kings",                owner: "Kiley",         wins: 9,  losses: 5,  pf: 1554.04, pa: 1574.12, pfg: 111.0, pag: 112.4, diff: -1.4 },
    { rank: 6,  team: "Shawnee Sooners",         owner: "Warden",        wins: 9,  losses: 5,  pf: 1656.16, pa: 1600.50, pfg: 118.3, pag: 114.3, diff: 4.0 },
    { rank: 7,  team: "GOOD BETTER BEST",        owner: "Silver",        wins: 7,  losses: 7,  pf: 1610.68, pa: 1620.22, pfg: 115.0, pag: 115.7, diff: -0.7 },
    { rank: 8,  team: "Noffiatti Orinoffi",      owner: "Noff/Oriatti",  wins: 7,  losses: 7,  pf: 1529.68, pa: 1546.66, pfg: 109.3, pag: 110.5, diff: -1.2 },
    { rank: 9,  team: "Kyle's Deluxe Team",      owner: "Berglund",      wins: 4,  losses: 10, pf: 1560.86, pa: 1657.72, pfg: 111.5, pag: 118.4, diff: -6.9 },
    { rank: 10, team: "HOGS",                    owner: "Prizant",       wins: 3,  losses: 11, pf: 1475.48, pa: 1649.34, pfg: 105.4, pag: 117.8, diff: -12.4 },
    { rank: 11, team: "Dak to the Future",       owner: "Jay/Slep",      wins: 5,  losses: 9,  pf: 1568.40, pa: 1763.10, pfg: 112.0, pag: 125.9, diff: -13.9 },
    { rank: 12, team: "The Struggle",            owner: "Raye/AG",       wins: 3,  losses: 11, pf: 1500.92, pa: 1662.14, pfg: 107.2, pag: 118.7, diff: -11.5 },
  ],

  // 2024 — only 10 teams since Kiley and Berglund didn't play that
  // season. HOGS was co-owned with Brandon Krawitz (not a regular
  // owner), so that season is attributed to Prizant alone. Schoolyard
  // T1ttie Gang's owner shows as "Baskin" on ESPN but is really
  // Chaskin — site always uses Chaskin.
  2024: [
    { rank: 1,  team: "Warden's of the East",   owner: "Dealba/Hurley", wins: 9,  losses: 5,  pf: 1802.86, pa: 1672.92, pfg: 128.8, pag: 119.5, diff: 9.3 },
    { rank: 2,  team: "HOGS",                   owner: "Prizant",       wins: 9,  losses: 5,  pf: 1739.06, pa: 1570.68, pfg: 124.2, pag: 112.2, diff: 12.0 },
    { rank: 3,  team: "Michael Jefferson",      owner: "Silver",        wins: 9,  losses: 5,  pf: 1936.24, pa: 1606.76, pfg: 138.3, pag: 114.8, diff: 23.5 },
    { rank: 4,  team: "Make Allen Great Again", owner: "Sean/Kyle",     wins: 7,  losses: 7,  pf: 1770.60, pa: 1763.46, pfg: 126.5, pag: 126.0, diff: 0.5 },
    { rank: 5,  team: "Silence of the Lambs",   owner: "Jay/Slep",      wins: 7,  losses: 7,  pf: 1796.10, pa: 1687.90, pfg: 128.3, pag: 120.6, diff: 7.7 },
    { rank: 6,  team: "The Struggle",           owner: "Raye/AG",       wins: 9,  losses: 5,  pf: 1787.56, pa: 1582.10, pfg: 127.7, pag: 113.0, diff: 14.7 },
    { rank: 7,  team: "Noffiatti Orinoffi",     owner: "Noff/Oriatti",  wins: 4,  losses: 10, pf: 1461.50, pa: 1917.70, pfg: 104.4, pag: 137.0, diff: -32.6 },
    { rank: 8,  team: "Kansas City Chiefs",     owner: "Roy",           wins: 7,  losses: 7,  pf: 1670.86, pa: 1693.42, pfg: 119.3, pag: 121.0, diff: -1.6 },
    { rank: 9,  team: "Schoolyard T1ttie Gang", owner: "Chaskin/Eagen", wins: 4,  losses: 10, pf: 1508.18, pa: 1775.72, pfg: 107.7, pag: 126.8, diff: -19.1 },
    { rank: 10, team: "Shawnee Sooners",        owner: "Warden",        wins: 5,  losses: 9,  pf: 1613.08, pa: 1815.38, pfg: 115.2, pag: 129.7, diff: -14.4 },
  ],

  // 2023 — only 10 teams, same reason as 2024 (Kiley and Berglund
  // didn't play). HOGS co-owned with Brandon Krawitz again, attributed
  // to Prizant.
  2023: [
    { rank: 1,  team: "The Struggle",             owner: "Raye/AG",       wins: 10, losses: 4,  pf: 1869.18, pa: 1649.28, pfg: 133.5, pag: 117.8, diff: 15.7 },
    { rank: 2,  team: "Christian Mingle",         owner: "Jay/Slep",      wins: 10, losses: 4,  pf: 1730.70, pa: 1566.44, pfg: 123.6, pag: 111.9, diff: 11.7 },
    { rank: 3,  team: "Kansas City Chiefs",       owner: "Roy",           wins: 9,  losses: 5,  pf: 1589.62, pa: 1646.88, pfg: 113.5, pag: 117.6, diff: -4.1 },
    { rank: 4,  team: "The King",                 owner: "Silver",        wins: 10, losses: 4,  pf: 1804.70, pa: 1609.92, pfg: 128.9, pag: 115.0, diff: 13.9 },
    { rank: 5,  team: "Noffiatti Orinoffi",       owner: "Noff/Oriatti",  wins: 8,  losses: 6,  pf: 1658.48, pa: 1634.80, pfg: 118.5, pag: 116.8, diff: 1.7 },
    { rank: 6,  team: "HOGS",                     owner: "Prizant",       wins: 8,  losses: 6,  pf: 1774.06, pa: 1693.26, pfg: 126.7, pag: 120.9, diff: 5.8 },
    { rank: 7,  team: "Shawnee Sooners",          owner: "Warden",        wins: 4,  losses: 10, pf: 1566.56, pa: 1687.20, pfg: 111.9, pag: 120.5, diff: -8.6 },
    { rank: 8,  team: "Warden's of the (NFC) North", owner: "Dealba/Hurley", wins: 2, losses: 12, pf: 1606.58, pa: 1777.34, pfg: 114.8, pag: 127.0, diff: -12.2 },
    { rank: 9,  team: "Build the Wall(er)",       owner: "Sean/Kyle",     wins: 3,  losses: 11, pf: 1484.74, pa: 1806.14, pfg: 106.1, pag: 129.0, diff: -23.0 },
    { rank: 10, team: "Gurnee Garlic Knots",      owner: "Chaskin/Eagen", wins: 6,  losses: 8,  pf: 1574.94, pa: 1588.30, pfg: 112.5, pag: 113.5, diff: -1.0 },
  ],

  // 2022 — only 10 teams, same reason as other years (Kiley and
  // Berglund didn't play). Tee Time co-owned with simon shindler
  // instead of Silver's usual partner Drew Moran — still Silver.
  2022: [
    { rank: 1,  team: "2020 All-Pro Team",       owner: "Roy",           wins: 7,  losses: 7,  pf: 1832.54, pa: 1648.40, pfg: 130.9, pag: 117.7, diff: 13.2 },
    { rank: 2,  team: "Tee Time",                owner: "Silver",        wins: 7,  losses: 7,  pf: 1726.02, pa: 1761.66, pfg: 123.3, pag: 125.8, diff: -2.5 },
    { rank: 3,  team: "Christian Mingle",        owner: "Jay/Slep",      wins: 9,  losses: 5,  pf: 1677.74, pa: 1560.46, pfg: 119.8, pag: 111.5, diff: 8.4 },
    { rank: 4,  team: "Shawnee Sooners",         owner: "Warden",        wins: 11, losses: 3,  pf: 1813.08, pa: 1557.42, pfg: 129.5, pag: 111.2, diff: 18.3 },
    { rank: 5,  team: "HOGS",                    owner: "Prizant",       wins: 8,  losses: 6,  pf: 1728.12, pa: 1693.24, pfg: 123.4, pag: 120.9, diff: 2.5 },
    { rank: 6,  team: "Noffiatti Orinoffi",      owner: "Noff/Oriatti",  wins: 7,  losses: 7,  pf: 1787.24, pa: 1651.14, pfg: 127.7, pag: 117.9, diff: 9.7 },
    { rank: 7,  team: "The Struggle",            owner: "Raye/AG",       wins: 3,  losses: 11, pf: 1508.96, pa: 1820.40, pfg: 107.8, pag: 130.0, diff: -22.2 },
    { rank: 8,  team: "MyK.Hunt Ertz",           owner: "Dealba/Hurley", wins: 5,  losses: 9,  pf: 1503.28, pa: 1692.78, pfg: 107.4, pag: 120.9, diff: -13.5 },
    { rank: 9,  team: "Silence Of the Lamb",     owner: "Sean/Kyle",     wins: 6,  losses: 8,  pf: 1684.50, pa: 1860.06, pfg: 120.3, pag: 132.9, diff: -12.5 },
    { rank: 10, team: "The Return Of The Tity",  owner: "Chaskin/Eagen", wins: 7,  losses: 7,  pf: 1614.76, pa: 1630.68, pfg: 115.3, pag: 116.5, diff: -1.1 },
  ],

  // 2021 — only 10 teams, same reason as other years (Kiley and
  // Berglund didn't play). This is the season Sean/Kyle won the title.
  2021: [
    { rank: 1,  team: "Silence Of the Lamb",        owner: "Sean/Kyle",     wins: 8,  losses: 6, pf: 1575.56, pa: 1646.82, pfg: 112.5, pag: 117.6, diff: -5.1 },
    { rank: 2,  team: "Rodgers and Adams",          owner: "Silver",        wins: 8,  losses: 6, pf: 1822.10, pa: 1662.48, pfg: 130.2, pag: 118.7, diff: 11.4 },
    { rank: 3,  team: "Blow For Thibodeaux",        owner: "Roy",           wins: 9,  losses: 5, pf: 1825.68, pa: 1626.76, pfg: 130.4, pag: 116.2, diff: 14.2 },
    { rank: 4,  team: "Noffiatti Orinoffi",         owner: "Noff/Oriatti",  wins: 10, losses: 4, pf: 1918.62, pa: 1780.70, pfg: 137.0, pag: 127.2, diff: 9.9 },
    { rank: 5,  team: "The Lemon Pepper Steppers",  owner: "Dealba/Hurley", wins: 6,  losses: 8, pf: 1752.82, pa: 1835.44, pfg: 125.2, pag: 131.1, diff: -5.9 },
    { rank: 6,  team: "The Struggle",               owner: "Raye/AG",       wins: 8,  losses: 6, pf: 1697.78, pa: 1753.78, pfg: 121.3, pag: 125.3, diff: -4.0 },
    { rank: 7,  team: "HOGS",                       owner: "Prizant",       wins: 5,  losses: 9, pf: 1617.70, pa: 1752.96, pfg: 115.5, pag: 125.2, diff: -9.7 },
    { rank: 8,  team: "Shawnee Sooners",            owner: "Warden",        wins: 6,  losses: 8, pf: 1681.10, pa: 1657.88, pfg: 120.1, pag: 118.4, diff: 1.7 },
    { rank: 9,  team: "The Fighting Scott Hansons", owner: "Chaskin/Eagen", wins: 5,  losses: 9, pf: 1661.46, pa: 1755.82, pfg: 118.7, pag: 125.4, diff: -6.7 },
    { rank: 10, team: "Harry Butt",                 owner: "Jay/Slep",      wins: 5,  losses: 9, pf: 1704.00, pa: 1784.18, pfg: 121.7, pag: 127.4, diff: -5.7 },
  ],

  // 2020 — 13-game season. Only 10 teams, same reason as other years
  // (Kiley and Berglund didn't play). Roy's team co-owned with Matt
  // Cats this year. This is Roy's first championship season.
  2020: [
    { rank: 1,  team: "Detroit, Please Hire Rob Saleh",   owner: "Roy",           wins: 7,  losses: 6,  pf: 1698.30, pa: 1614.24, pfg: 130.6, pag: 124.2, diff: 6.5 },
    { rank: 2,  team: "Noffiatti Orinoffi",               owner: "Noff/Oriatti",  wins: 7,  losses: 6,  pf: 1588.38, pa: 1484.90, pfg: 122.2, pag: 114.2, diff: 8.0 },
    { rank: 3,  team: "The Bucking Broncos",               owner: "Dealba/Hurley", wins: 10, losses: 3,  pf: 1786.16, pa: 1566.54, pfg: 137.4, pag: 120.5, diff: 16.9 },
    { rank: 4,  team: "Hawaiian Robe Wearing Koalas",      owner: "Sean/Kyle",     wins: 10, losses: 3,  pf: 1585.24, pa: 1498.24, pfg: 121.9, pag: 115.2, diff: 6.7 },
    { rank: 5,  team: "Lions Suck",                        owner: "Jay/Slep",      wins: 9,  losses: 4,  pf: 1717.60, pa: 1614.64, pfg: 132.1, pag: 124.2, diff: 7.9 },
    { rank: 6,  team: "Patrick Mahomes",                   owner: "Silver",        wins: 9,  losses: 4,  pf: 1704.26, pa: 1544.36, pfg: 131.1, pag: 118.8, diff: 12.3 },
    { rank: 7,  team: "The Struggle",                      owner: "Raye/AG",       wins: 0,  losses: 13, pf: 1465.38, pa: 1772.00, pfg: 112.7, pag: 136.3, diff: -23.6 },
    { rank: 8,  team: "Jerry's WORLD",                     owner: "Prizant",       wins: 4,  losses: 9,  pf: 1473.30, pa: 1640.06, pfg: 113.3, pag: 126.2, diff: -12.8 },
    { rank: 9,  team: "Shawnee Sooners",                   owner: "Warden",        wins: 4,  losses: 9,  pf: 1364.26, pa: 1516.46, pfg: 104.9, pag: 116.7, diff: -11.7 },
    { rank: 10, team: "The Red Storm People",              owner: "Chaskin/Eagen", wins: 5,  losses: 8,  pf: 1447.00, pa: 1578.44, pfg: 111.3, pag: 121.4, diff: -10.1 },
  ],

  // 2019 — 13-game season. Only 10 teams, same reason as other years
  // (Kiley and Berglund didn't play). This is Raye/AG's first
  // championship season.
  2019: [
    { rank: 1,  team: "The Struggle",               owner: "Raye/AG",       wins: 8, losses: 5,  pf: 1626.50, pa: 1552.58, pfg: 125.1, pag: 119.4, diff: 5.7 },
    { rank: 2,  team: "Jerry's WORLD",              owner: "Prizant",       wins: 7, losses: 6,  pf: 1654.10, pa: 1515.84, pfg: 127.2, pag: 116.6, diff: 10.6 },
    { rank: 3,  team: "Kelce Kamara Klan",          owner: "Roy",           wins: 9, losses: 4,  pf: 1932.32, pa: 1626.64, pfg: 148.6, pag: 125.1, diff: 23.5 },
    { rank: 4,  team: "Shawnee Sooners",            owner: "Warden",        wins: 9, losses: 4,  pf: 1622.06, pa: 1574.98, pfg: 124.8, pag: 121.2, diff: 3.6 },
    { rank: 5,  team: "Simon and Silver",           owner: "Silver",        wins: 7, losses: 6,  pf: 1565.40, pa: 1495.60, pfg: 120.4, pag: 115.0, diff: 5.4 },
    { rank: 6,  team: "Hawaiian Robe Wearing Koalas", owner: "Sean/Kyle",   wins: 7, losses: 6,  pf: 1487.90, pa: 1487.76, pfg: 114.5, pag: 114.4, diff: 0.0 },
    { rank: 7,  team: "Run CMC",                    owner: "Jay/Slep",      wins: 3, losses: 10, pf: 1450.62, pa: 1626.80, pfg: 111.6, pag: 125.1, diff: -13.6 },
    { rank: 8,  team: "1962 Buffalo Bills",         owner: "Chaskin/Eagen", wins: 4, losses: 9,  pf: 1342.86, pa: 1699.18, pfg: 103.3, pag: 130.7, diff: -27.4 },
    { rank: 9,  team: "Worldwide Unit Enterprises", owner: "Dealba/Hurley", wins: 6, losses: 7,  pf: 1529.84, pa: 1530.38, pfg: 117.7, pag: 117.7, diff: 0.0 },
    { rank: 10, team: "Noffiatti Orinoffi",         owner: "Noff/Oriatti",  wins: 5, losses: 8,  pf: 1474.26, pa: 1576.10, pfg: 113.4, pag: 121.2, diff: -7.8 },
  ],

  // 2018 — Kiley's first season in the data (Berglund still hadn't
  // joined); Silver sat this year out. This is Chaskin/Eagen's
  // championship season. Co-owners Nathan Berger (Prizant's team) and
  // Adi Bates (Kiley's team) are one-off and not tracked as owners.
  2018: [
    { rank: 1,  team: "Titty City Committee",      owner: "Chaskin/Eagen", wins: 11, losses: 2,  pf: 1940.42, pa: 1561.88, pfg: 149.3, pag: 120.1, diff: 29.1 },
    { rank: 2,  team: "The Struggle",              owner: "Raye/AG",       wins: 9,  losses: 4,  pf: 1725.40, pa: 1529.80, pfg: 132.7, pag: 117.7, diff: 15.0 },
    { rank: 3,  team: "Issa Team",                 owner: "Dealba/Hurley", wins: 6,  losses: 7,  pf: 1661.92, pa: 1651.52, pfg: 127.8, pag: 127.0, diff: 0.8 },
    { rank: 4,  team: "1st-Team All Quads",        owner: "Roy",           wins: 6,  losses: 7,  pf: 1622.28, pa: 1681.86, pfg: 124.8, pag: 129.4, diff: -4.6 },
    { rank: 5,  team: "Woke up with a Full CHUBB", owner: "Prizant",       wins: 7,  losses: 6,  pf: 1655.00, pa: 1735.76, pfg: 127.3, pag: 133.5, diff: -6.2 },
    { rank: 6,  team: "Noffiatti Orinoffi",        owner: "Noff/Oriatti",  wins: 6,  losses: 7,  pf: 1687.26, pa: 1699.44, pfg: 129.8, pag: 130.7, diff: -0.9 },
    { rank: 7,  team: "The No Bell Prize",         owner: "Jay/Slep",      wins: 6,  losses: 7,  pf: 1563.38, pa: 1692.82, pfg: 120.3, pag: 130.2, diff: -10.0 },
    { rank: 8,  team: "JG12 TB10",                 owner: "Kiley",         wins: 6,  losses: 7,  pf: 1551.96, pa: 1511.82, pfg: 119.4, pag: 116.3, diff: 3.1 },
    { rank: 9,  team: "Hawaiian Robe Wearing Koalas", owner: "Sean/Kyle",  wins: 3,  losses: 10, pf: 1491.90, pa: 1725.24, pfg: 114.8, pag: 132.7, diff: -17.9 },
    { rank: 10, team: "Shawnee Sooners",           owner: "Warden",        wins: 5,  losses: 8,  pf: 1619.58, pa: 1728.96, pfg: 124.6, pag: 133.0, diff: -8.4 },
  ],

  // 2017 — Kiley's title season, co-owned with Ricky Gumirov (trophy
  // case credits "Gumirov/Kiley"); season records track him as
  // "Kiley". First appearance of Stablein/Baumbach in season data.
  // Warden's co-owner Adi Bates this year is a one-off, same as 2018.
  2017: [
    { rank: 1,  team: "Congrats Jay and Slep", owner: "Kiley",             wins: 9, losses: 4, pf: 1585.42, pa: 1434.06, pfg: 122.0, pag: 110.3, diff: 11.6 },
    { rank: 2,  team: "Defending Champs",      owner: "Jay/Slep",          wins: 9, losses: 4, pf: 1670.56, pa: 1515.00, pfg: 128.5, pag: 116.5, diff: 12.0 },
    { rank: 3,  team: "Team Rocket",           owner: "Chaskin/Eagen",     wins: 7, losses: 6, pf: 1389.14, pa: 1381.16, pfg: 106.9, pag: 106.2, diff: 0.6 },
    { rank: 4,  team: "Hawaiian Robe Wearing Koalas", owner: "Sean/Kyle",  wins: 7, losses: 6, pf: 1492.62, pa: 1479.44, pfg: 114.8, pag: 113.8, diff: 1.0 },
    { rank: 5,  team: "Barry McCockiner",      owner: "Stablein/Baumbach", wins: 8, losses: 5, pf: 1498.38, pa: 1370.06, pfg: 115.3, pag: 105.4, diff: 9.9 },
    { rank: 6,  team: "The Struggle",          owner: "Raye/AG",           wins: 7, losses: 6, pf: 1425.48, pa: 1470.56, pfg: 109.7, pag: 113.1, diff: -3.5 },
    { rank: 7,  team: "Team PB",               owner: "Prizant",           wins: 5, losses: 8, pf: 1411.10, pa: 1473.28, pfg: 108.5, pag: 113.3, diff: -4.8 },
    { rank: 8,  team: "Issa Team",             owner: "Dealba/Hurley",     wins: 5, losses: 8, pf: 1426.20, pa: 1522.06, pfg: 109.7, pag: 117.1, diff: -7.4 },
    { rank: 9,  team: "Denver Broncos",        owner: "Roy",               wins: 4, losses: 9, pf: 1451.58, pa: 1472.18, pfg: 111.7, pag: 113.2, diff: -1.6 },
    { rank: 10, team: "Shawnee Sooners",       owner: "Warden",            wins: 4, losses: 9, pf: 1402.34, pa: 1635.02, pfg: 107.9, pag: 125.8, diff: -17.9 },
  ],
};
