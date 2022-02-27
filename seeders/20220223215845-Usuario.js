'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [ //Tener en cuenta que es el nombre de la clase del modelo pero EN PLURAL
      {
        "name": "Caria",
        "surname": "Sharma",
        "age": 42,
        "email": "csharma0@cbslocal.com",
        "nickname": "csharma0",
        "password": "F6F512",
        "createdAt": "2021-07-06 09:23:08",
        "updatedAt": "2021-10-02 09:22:58"
      }, {
        "name": "Ginger",
        "surname": "Sworn",
        "age": 66,
        "email": "gsworn1@businessweek.com",
        "nickname": "gsworn1",
        "password": "SFo333",
        "createdAt": "2021-07-03 16:16:11",
        "updatedAt": "2021-10-10 03:32:46"
      }, {
        "name": "Siward",
        "surname": "Bernholt",
        "age": 73,
        "email": "sbernholt2@buzzfeed.com",
        "nickname": "sbernholt2",
        "password": "IhQ291",
        "createdAt": "2021-05-05 11:10:18",
        "updatedAt": "2021-07-25 21:56:25"
      }, {
        "name": "Aguistin",
        "surname": "Ride",
        "age": 22,
        "email": "aride3@etsy.com",
        "nickname": "aride3",
        "password": "syS110",
        "createdAt": "2022-02-03 12:02:03",
        "updatedAt": "2021-10-01 03:38:00"
      }, {
        "name": "Angelo",
        "surname": "Yea",
        "age": 54,
        "email": "ayea4@newsvine.com",
        "nickname": "ayea4",
        "password": "CXQ946",
        "createdAt": "2021-10-21 22:21:13",
        "updatedAt": "2022-02-06 08:49:54"
      }, {
        "name": "Vilhelmina",
        "surname": "Tother",
        "age": 64,
        "email": "vtother5@4shared.com",
        "nickname": "vtother5",
        "password": "MNv737",
        "createdAt": "2021-08-03 14:09:28",
        "updatedAt": "2022-01-01 15:31:28"
      }, {
        "name": "Damaris",
        "surname": "Griffen",
        "age": 45,
        "email": "dgriffen6@mozilla.com",
        "nickname": "dgriffen6",
        "password": "ld8810",
        "createdAt": "2021-11-10 08:24:30",
        "updatedAt": "2021-06-21 17:58:20"
      }, {
        "name": "Pegeen",
        "surname": "Yokel",
        "age": 35,
        "email": "pyokel7@cargocollective.com",
        "nickname": "pyokel7",
        "password": "F0N792",
        "createdAt": "2021-03-25 11:24:48",
        "updatedAt": "2021-06-04 06:19:48"
      }, {
        "name": "Mame",
        "surname": "Semor",
        "age": 42,
        "email": "msemor8@google.cn",
        "nickname": "msemor8",
        "password": "0EU551",
        "createdAt": "2022-01-24 20:35:12",
        "updatedAt": "2021-09-28 13:10:44"
      }, {
        "name": "Charita",
        "surname": "Beven",
        "age": 75,
        "email": "cbeven9@state.tx.us",
        "nickname": "cbeven9",
        "password": "CTU049",
        "createdAt": "2021-08-31 10:06:06",
        "updatedAt": "2021-05-15 18:54:43"
      }, {
        "name": "Meredith",
        "surname": "Whapple",
        "age": 72,
        "email": "mwhapplea@seattletimes.com",
        "nickname": "mwhapplea",
        "password": "ODA102",
        "createdAt": "2022-01-01 22:22:45",
        "updatedAt": "2021-12-03 13:28:01"
      }, {
        "name": "Rey",
        "surname": "Curnnok",
        "age": 15,
        "email": "rcurnnokb@washington.edu",
        "nickname": "rcurnnokb",
        "password": "xRu953",
        "createdAt": "2021-10-26 19:07:00",
        "updatedAt": "2021-08-20 16:05:46"
      }, {
        "name": "Josiah",
        "surname": "Berrington",
        "age": 56,
        "email": "jberringtonc@com.com",
        "nickname": "jberringtonc",
        "password": "TpN099",
        "createdAt": "2021-12-17 23:38:54",
        "updatedAt": "2021-05-24 10:44:28"
      }, {
        "name": "Franky",
        "surname": "O'Dooghaine",
        "age": 47,
        "email": "fodooghained@state.gov",
        "nickname": "fodooghained",
        "password": "mU1309",
        "createdAt": "2021-10-06 06:03:00",
        "updatedAt": "2021-12-02 02:53:15"
      }, {
        "name": "Sallie",
        "surname": "Widmore",
        "age": 20,
        "email": "swidmoree@dropbox.com",
        "nickname": "swidmoree",
        "password": "nx2391",
        "createdAt": "2021-11-16 12:32:48",
        "updatedAt": "2021-03-17 19:12:13"
      }, {
        "name": "Darrelle",
        "surname": "Synke",
        "age": 30,
        "email": "dsynkef@zimbio.com",
        "nickname": "dsynkef",
        "password": "X6C328",
        "createdAt": "2021-10-07 18:44:31",
        "updatedAt": "2022-01-30 03:26:22"
      }, {
        "name": "Alikee",
        "surname": "Lapenna",
        "age": 43,
        "email": "alapennag@google.co.jp",
        "nickname": "alapennag",
        "password": "dmM479",
        "createdAt": "2021-05-27 19:44:48",
        "updatedAt": "2021-04-03 19:43:59"
      }, {
        "name": "Crysta",
        "surname": "Cicconetti",
        "age": 42,
        "email": "ccicconettih@ox.ac.uk",
        "nickname": "ccicconettih",
        "password": "dwS064",
        "createdAt": "2021-07-03 17:23:52",
        "updatedAt": "2021-08-29 21:54:02"
      }, {
        "name": "Ring",
        "surname": "Slatford",
        "age": 23,
        "email": "rslatfordi@themeforest.net",
        "nickname": "rslatfordi",
        "password": "3g6430",
        "createdAt": "2022-02-14 05:29:19",
        "updatedAt": "2021-05-24 08:25:55"
      }, {
        "name": "Tailor",
        "surname": "Wildey",
        "age": 29,
        "email": "twildeyj@last.fm",
        "nickname": "twildeyj",
        "password": "l2A586",
        "createdAt": "2021-04-10 06:08:33",
        "updatedAt": "2022-01-03 20:22:24"
      }, {
        "name": "Caresse",
        "surname": "Lynam",
        "age": 51,
        "email": "clynamk@vinaora.com",
        "nickname": "clynamk",
        "password": "8d1159",
        "createdAt": "2021-08-18 07:15:33",
        "updatedAt": "2022-02-11 06:43:17"
      }, {
        "name": "Dorree",
        "surname": "Lanfear",
        "age": 71,
        "email": "dlanfearl@statcounter.com",
        "nickname": "dlanfearl",
        "password": "rSz471",
        "createdAt": "2021-09-21 15:35:35",
        "updatedAt": "2021-10-21 07:02:43"
      }, {
        "name": "Lombard",
        "surname": "Olyff",
        "age": 18,
        "email": "lolyffm@statcounter.com",
        "nickname": "lolyffm",
        "password": "2Hb064",
        "createdAt": "2021-03-19 22:21:59",
        "updatedAt": "2022-01-12 23:32:32"
      }, {
        "name": "Guillemette",
        "surname": "Archbold",
        "age": 61,
        "email": "garchboldn@yahoo.co.jp",
        "nickname": "garchboldn",
        "password": "NgJ417",
        "createdAt": "2021-09-05 13:28:01",
        "updatedAt": "2021-03-31 09:17:40"
      }, {
        "name": "Darcy",
        "surname": "Averall",
        "age": 54,
        "email": "daverallo@drupal.org",
        "nickname": "daverallo",
        "password": "IlP601",
        "createdAt": "2021-03-22 16:07:28",
        "updatedAt": "2022-01-31 14:14:03"
      }, {
        "name": "Bealle",
        "surname": "Trood",
        "age": 72,
        "email": "btroodp@weather.com",
        "nickname": "btroodp",
        "password": "EXx898",
        "createdAt": "2021-06-20 12:56:43",
        "updatedAt": "2022-01-08 14:50:34"
      }, {
        "name": "Goober",
        "surname": "Sanday",
        "age": 56,
        "email": "gsandayq@tripadvisor.com",
        "nickname": "gsandayq",
        "password": "7Ch053",
        "createdAt": "2021-08-25 12:42:11",
        "updatedAt": "2021-02-23 15:12:24"
      }, {
        "name": "Hilliary",
        "surname": "McCaughey",
        "age": 54,
        "email": "hmccaugheyr@delicious.com",
        "nickname": "hmccaugheyr",
        "password": "fgo112",
        "createdAt": "2021-04-18 18:02:55",
        "updatedAt": "2021-10-13 18:52:31"
      }, {
        "name": "Hubert",
        "surname": "Morter",
        "age": 35,
        "email": "hmorters@springer.com",
        "nickname": "hmorters",
        "password": "23K033",
        "createdAt": "2021-06-11 08:16:17",
        "updatedAt": "2021-07-23 04:33:42"
      }, {
        "name": "Lilas",
        "surname": "Rabbe",
        "age": 70,
        "email": "lrabbet@google.fr",
        "nickname": "lrabbet",
        "password": "XQa290",
        "createdAt": "2022-01-26 00:24:32",
        "updatedAt": "2021-09-22 04:30:44"
      }, {
        "name": "Drusie",
        "surname": "Newnham",
        "age": 30,
        "email": "dnewnhamu@umich.edu",
        "nickname": "dnewnhamu",
        "password": "Ead409",
        "createdAt": "2021-04-24 08:57:19",
        "updatedAt": "2022-02-11 04:39:26"
      }, {
        "name": "Dee dee",
        "surname": "Napolione",
        "age": 75,
        "email": "dnapolionev@seattletimes.com",
        "nickname": "dnapolionev",
        "password": "hLQ180",
        "createdAt": "2021-11-28 20:31:08",
        "updatedAt": "2021-07-14 12:47:12"
      }, {
        "name": "Junie",
        "surname": "Akers",
        "age": 73,
        "email": "jakersw@tamu.edu",
        "nickname": "jakersw",
        "password": "ClJ639",
        "createdAt": "2021-08-15 13:50:47",
        "updatedAt": "2021-03-25 19:42:59"
      }, {
        "name": "Lucas",
        "surname": "Mussilli",
        "age": 62,
        "email": "lmussillix@linkedin.com",
        "nickname": "lmussillix",
        "password": "5eR365",
        "createdAt": "2021-04-21 07:40:11",
        "updatedAt": "2021-03-17 05:10:25"
      }, {
        "name": "Lindon",
        "surname": "Kite",
        "age": 51,
        "email": "lkitey@trellian.com",
        "nickname": "lkitey",
        "password": "iLJ873",
        "createdAt": "2021-07-25 05:12:37",
        "updatedAt": "2021-03-01 00:36:21"
      }, {
        "name": "Caprice",
        "surname": "Greggor",
        "age": 18,
        "email": "cgreggorz@timesonline.co.uk",
        "nickname": "cgreggorz",
        "password": "1ln280",
        "createdAt": "2021-09-02 01:30:29",
        "updatedAt": "2021-10-31 17:27:54"
      }, {
        "name": "Cirillo",
        "surname": "Dunnett",
        "age": 23,
        "email": "cdunnett10@archive.org",
        "nickname": "cdunnett10",
        "password": "9w3157",
        "createdAt": "2021-10-12 01:55:28",
        "updatedAt": "2021-07-01 10:23:41"
      }, {
        "name": "Tova",
        "surname": "Kmicicki",
        "age": 31,
        "email": "tkmicicki11@opera.com",
        "nickname": "tkmicicki11",
        "password": "6kL978",
        "createdAt": "2021-11-22 23:41:42",
        "updatedAt": "2021-07-15 07:40:58"
      }, {
        "name": "Robinson",
        "surname": "O'Flynn",
        "age": 29,
        "email": "roflynn12@answers.com",
        "nickname": "roflynn12",
        "password": "qfV077",
        "createdAt": "2021-06-08 05:24:36",
        "updatedAt": "2021-11-21 21:14:21"
      }, {
        "name": "Wynnie",
        "surname": "Reiglar",
        "age": 45,
        "email": "wreiglar13@google.com.br",
        "nickname": "wreiglar13",
        "password": "Q3O862",
        "createdAt": "2021-05-20 20:22:04",
        "updatedAt": "2021-10-13 02:04:13"
      }, {
        "name": "Sally",
        "surname": "Hemphill",
        "age": 27,
        "email": "shemphill14@cdc.gov",
        "nickname": "shemphill14",
        "password": "W8n131",
        "createdAt": "2021-08-12 16:24:32",
        "updatedAt": "2021-05-09 16:35:03"
      }, {
        "name": "Carlynne",
        "surname": "Childers",
        "age": 64,
        "email": "cchilders15@paginegialle.it",
        "nickname": "cchilders15",
        "password": "J4o432",
        "createdAt": "2021-03-18 12:23:18",
        "updatedAt": "2021-09-25 10:33:43"
      }, {
        "name": "Kev",
        "surname": "Klinck",
        "age": 36,
        "email": "kklinck16@oaic.gov.au",
        "nickname": "kklinck16",
        "password": "XWR983",
        "createdAt": "2021-08-05 09:07:21",
        "updatedAt": "2022-01-09 07:18:45"
      }, {
        "name": "Rasla",
        "surname": "Aynscombe",
        "age": 37,
        "email": "raynscombe17@wordpress.org",
        "nickname": "raynscombe17",
        "password": "a95341",
        "createdAt": "2021-08-15 21:09:38",
        "updatedAt": "2021-03-17 03:51:05"
      }, {
        "name": "Gustav",
        "surname": "Novakovic",
        "age": 48,
        "email": "gnovakovic18@constantcontact.com",
        "nickname": "gnovakovic18",
        "password": "Kr8254",
        "createdAt": "2021-06-12 21:25:00",
        "updatedAt": "2021-04-01 14:08:36"
      }, {
        "name": "Lew",
        "surname": "Benedetti",
        "age": 76,
        "email": "lbenedetti19@blogs.com",
        "nickname": "lbenedetti19",
        "password": "nYK247",
        "createdAt": "2021-11-29 20:09:27",
        "updatedAt": "2021-05-08 09:37:49"
      }, {
        "name": "Lory",
        "surname": "Roll",
        "age": 49,
        "email": "lroll1a@ameblo.jp",
        "nickname": "lroll1a",
        "password": "1lR561",
        "createdAt": "2021-03-18 04:23:17",
        "updatedAt": "2021-12-31 12:14:44"
      }, {
        "name": "Toddy",
        "surname": "Schmuhl",
        "age": 30,
        "email": "tschmuhl1b@istockphoto.com",
        "nickname": "tschmuhl1b",
        "password": "2Dq535",
        "createdAt": "2021-02-25 17:16:15",
        "updatedAt": "2021-03-13 15:00:52"
      }, {
        "name": "Heindrick",
        "surname": "Spink",
        "age": 30,
        "email": "hspink1c@mysql.com",
        "nickname": "hspink1c",
        "password": "Mwq316",
        "createdAt": "2021-10-10 13:32:05",
        "updatedAt": "2021-03-06 22:23:06"
      }, {
        "name": "Debor",
        "surname": "Giacomuzzo",
        "age": 54,
        "email": "dgiacomuzzo1d@hc360.com",
        "nickname": "dgiacomuzzo1d",
        "password": "gza649",
        "createdAt": "2021-04-19 09:06:46",
        "updatedAt": "2021-05-31 23:05:43"
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
