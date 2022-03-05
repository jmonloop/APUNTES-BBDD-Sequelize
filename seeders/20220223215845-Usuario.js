'use strict';
//Importo bcrypt y authConfig para hashear los password del seeder
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [ //Tener en cuenta que es el nombre de la clase del modelo pero EN PLURAL
    {
      "name": "Noelyn",
      "surname": "Pinnijar",
      "age": 35,
      "email": "npinnijar0@goodreads.com",
      "nickname": "npinnijar0",
      "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-06-15 02:44:52",
      "updatedAt": "2021-09-03 04:13:26"
    }, {
      "name": "Adrian",
      "surname": "Lazenbury",
      "age": 52,
      "email": "alazenbury1@wufoo.com",
      "nickname": "alazenbury1",
      "password":bcrypt.hashSync("2543", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-10-22 05:57:26",
      "updatedAt": "2021-06-09 23:35:27"
    }, {
      "name": "Luz",
      "surname": "Hadrill",
      "age": 75,
      "email": "lhadrill2@examiner.com",
      "nickname": "lhadrill2",
      "password":bcrypt.hashSync("dsfsdf", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-05-11 11:07:01",
      "updatedAt": "2021-08-14 20:38:42"
    }, {
      "name": "Aveline",
      "surname": "Devanney",
      "age": 10,
      "email": "adevanney3@toplist.cz",
      "nickname": "adevanney3",
      "password":bcrypt.hashSync("12sdasd34", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-05-23 23:28:53",
      "updatedAt": "2022-01-07 15:07:55"
    }, {
      "name": "Therese",
      "surname": "Brownsworth",
      "age": 15,
      "email": "tbrownsworth4@sina.com.cn",
      "nickname": "tbrownsworth4",
      "password":bcrypt.hashSync("sadasd", Number.parseInt(authConfig.rounds)),
      "createdAt": "2022-01-08 20:55:47",
      "updatedAt": "2021-11-13 22:26:26"
    }, {
      "name": "Cirilo",
      "surname": "Bains",
      "age": 17,
      "email": "cbains5@census.gov",
      "nickname": "cbains5",
      "password":bcrypt.hashSync("4rfg54", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-06-13 01:09:39",
      "updatedAt": "2021-06-17 05:26:27"
    }, {
      "name": "Miriam",
      "surname": "Stanyforth",
      "age": 26,
      "email": "mstanyforth6@clickbank.net",
      "nickname": "mstanyforth6",
      "password":bcrypt.hashSync("fsf32", Number.parseInt(authConfig.rounds)),
      "createdAt": "2022-02-02 13:05:49",
      "updatedAt": "2022-02-14 11:55:57"
    }, {
      "name": "Arlie",
      "surname": "Siuda",
      "age": 27,
      "email": "asiuda7@twitpic.com",
      "nickname": "asiuda7",
      "password":bcrypt.hashSync("asd324", Number.parseInt(authConfig.rounds)),
      "createdAt": "2022-01-16 22:59:43",
      "updatedAt": "2021-05-26 13:10:14"
    }, {
      "name": "Querida",
      "surname": "Murrock",
      "age": 69,
      "email": "qmurrock8@ftc.gov",
      "nickname": "qmurrock8",
      "password":bcrypt.hashSync("2d121", Number.parseInt(authConfig.rounds)),
      "createdAt": "2022-01-05 02:17:56",
      "updatedAt": "2021-10-13 20:39:48"
    }, {
      "name": "Catlee",
      "surname": "Eberle",
      "age": 70,
      "email": "ceberle9@desdev.cn",
      "nickname": "ceberle9",
      "password":bcrypt.hashSync("we1dd", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-08-06 18:24:55",
      "updatedAt": "2021-06-08 04:08:18"
    }, {
      "name": "Byran",
      "surname": "Collyer",
      "age": 74,
      "email": "bcollyera@domainmarket.com",
      "nickname": "bcollyera",
      "password":bcrypt.hashSync("1d2dd21", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-11-06 02:59:38",
      "updatedAt": "2021-06-04 21:05:46"
    }, {
      "name": "Ives",
      "surname": "Neesam",
      "age": 25,
      "email": "ineesamb@usa.gov",
      "nickname": "ineesamb",
      "password":bcrypt.hashSync("1ccc234", Number.parseInt(authConfig.rounds)),
      "createdAt": "2022-02-03 02:03:12",
      "updatedAt": "2021-06-12 03:50:22"
    }, {
      "name": "Correy",
      "surname": "Snibson",
      "age": 21,
      "email": "csnibsonc@addthis.com",
      "nickname": "csnibsonc",
      "password":bcrypt.hashSync("dww11", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-06-21 06:19:53",
      "updatedAt": "2021-06-06 07:27:58"
    }, {
      "name": "Lyle",
      "surname": "Trench",
      "age": 48,
      "email": "ltrenchd@tmall.com",
      "nickname": "ltrenchd",
      "password":bcrypt.hashSync("asdsqq", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-11-13 08:26:58",
      "updatedAt": "2021-09-17 17:58:43"
    }, {
      "name": "Felix",
      "surname": "Siemianowicz",
      "age": 76,
      "email": "fsiemianowicze@patch.com",
      "nickname": "fsiemianowicze",
      "password":bcrypt.hashSync("d11dc", Number.parseInt(authConfig.rounds)),
      "createdAt": "2022-02-19 00:54:36",
      "updatedAt": "2021-04-15 18:43:57"
    }, {
      "name": "Sherlocke",
      "surname": "Vinau",
      "age": 34,
      "email": "svinauf@unicef.org",
      "nickname": "svinauf",
      "password":bcrypt.hashSync("asdjd", Number.parseInt(authConfig.rounds)),
      "createdAt": "2022-02-09 07:18:52",
      "updatedAt": "2021-08-15 07:31:19"
    }, {
      "name": "Ashlin",
      "surname": "Jira",
      "age": 34,
      "email": "ajirag@ebay.com",
      "nickname": "ajirag",
      "password":bcrypt.hashSync("ccsqq", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-09-26 01:50:31",
      "updatedAt": "2021-10-04 00:25:48"
    }, {
      "name": "Noam",
      "surname": "Skeffington",
      "age": 25,
      "email": "nskeffingtonh@businessinsider.com",
      "nickname": "nskeffingtonh",
      "password":bcrypt.hashSync("sdq112", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-07-24 01:01:44",
      "updatedAt": "2021-12-24 15:07:02"
    }, {
      "name": "Ashien",
      "surname": "Ranscomb",
      "age": 13,
      "email": "aranscombi@nifty.com",
      "nickname": "aranscombi",
      "password":bcrypt.hashSync("ss11cc", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-11-18 03:22:38",
      "updatedAt": "2021-04-16 18:58:26"
    }, {
      "name": "Ezequiel",
      "surname": "Breckell",
      "age": 22,
      "email": "ebreckellj@oracle.com",
      "nickname": "ebreckellj",
      "password":bcrypt.hashSync("s1cv1v", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-04-20 19:01:06",
      "updatedAt": "2021-10-01 01:51:43"
    }, {
      "name": "Buck",
      "surname": "Petkovic",
      "age": 80,
      "email": "bpetkovick@github.com",
      "nickname": "bpetkovick",
      "password":bcrypt.hashSync("s.sad", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-07-23 17:03:29",
      "updatedAt": "2022-02-19 19:39:34"
    }, {
      "name": "Olly",
      "surname": "Catherine",
      "age": 38,
      "email": "ocatherinel@sbwire.com",
      "nickname": "ocatherinel",
      "password":bcrypt.hashSync("sc1234", Number.parseInt(authConfig.rounds)),
      "createdAt": "2022-01-16 05:44:03",
      "updatedAt": "2021-02-27 13:54:04"
    }, {
      "name": "Hamil",
      "surname": "Adanez",
      "age": 45,
      "email": "hadanezm@sina.com.cn",
      "nickname": "hadanezm",
      "password":bcrypt.hashSync("sd1123", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-07-27 19:05:19",
      "updatedAt": "2021-12-02 03:08:19"
    }, {
      "name": "Ericha",
      "surname": "Shalliker",
      "age": 23,
      "email": "eshallikern@ebay.co.uk",
      "nickname": "eshallikern",
      "password":bcrypt.hashSync("asd11xc", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-10-16 23:50:40",
      "updatedAt": "2021-08-24 17:06:06"
    }, {
      "name": "Sunny",
      "surname": "Roloff",
      "age": 71,
      "email": "sroloffo@shop-pro.jp",
      "nickname": "sroloffo",
      "password":bcrypt.hashSync("sd sqq", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-07-18 11:16:28",
      "updatedAt": "2021-09-08 14:33:37"
    }, {
      "name": "West",
      "surname": "Fendt",
      "age": 19,
      "email": "wfendtp@unesco.org",
      "nickname": "wfendtp",
      "password":bcrypt.hashSync("asdds1", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-12-18 17:17:05",
      "updatedAt": "2021-12-21 15:31:59"
    }, {
      "name": "Evvie",
      "surname": "Leat",
      "age": 43,
      "email": "eleatq@slideshare.net",
      "nickname": "eleatq",
      "password":bcrypt.hashSync("sd1cf", Number.parseInt(authConfig.rounds)),
      "createdAt": "2022-02-18 20:12:30",
      "updatedAt": "2021-11-11 12:51:28"
    }, {
      "name": "Birdie",
      "surname": "Mildner",
      "age": 60,
      "email": "bmildnerr@ft.com",
      "nickname": "bmildnerr",
      "password":bcrypt.hashSync("sdd1r", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-12-26 08:46:19",
      "updatedAt": "2021-11-09 02:29:40"
    }, {
      "name": "Audie",
      "surname": "Riping",
      "age": 73,
      "email": "aripings@yale.edu",
      "nickname": "aripings",
      "password":bcrypt.hashSync("12d3sdsa4", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-12-08 21:32:35",
      "updatedAt": "2021-12-03 04:05:26"
    }, {
      "name": "Cristy",
      "surname": "Scammonden",
      "age": 42,
      "email": "cscammondent@topsy.com",
      "nickname": "cscammondent",
      "password":bcrypt.hashSync("sad123", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-04-15 10:25:41",
      "updatedAt": "2021-08-08 17:53:51"
    }, {
      "name": "Nanice",
      "surname": "Lambrick",
      "age": 69,
      "email": "nlambricku@barnesandnoble.com",
      "nickname": "nlambricku",
      "password":bcrypt.hashSync("sdsaaw", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-11-06 12:21:13",
      "updatedAt": "2021-03-15 09:22:00"
    }, {
      "name": "Marvin",
      "surname": "Gatrell",
      "age": 58,
      "email": "mgatrellv@nymag.com",
      "nickname": "mgatrellv",
      "password":bcrypt.hashSync("sd1vv", Number.parseInt(authConfig.rounds)),
      "createdAt": "2022-01-10 04:57:50",
      "updatedAt": "2021-10-11 22:16:02"
    }, {
      "name": "Lorant",
      "surname": "Currum",
      "age": 38,
      "email": "lcurrumw@flavors.me",
      "nickname": "lcurrumw",
      "password":bcrypt.hashSync("asdaqwe", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-07-14 08:16:15",
      "updatedAt": "2021-04-21 13:42:33"
    }, {
      "name": "Brendan",
      "surname": "Fiddy",
      "age": 40,
      "email": "bfiddyx@altervista.org",
      "nickname": "bfiddyx",
      "password":bcrypt.hashSync("sadaqw", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-12-21 21:03:06",
      "updatedAt": "2021-07-02 21:17:48"
    }, {
      "name": "Kerry",
      "surname": "Bragger",
      "age": 32,
      "email": "kbraggery@photobucket.com",
      "nickname": "kbraggery",
      "password":bcrypt.hashSync("asd1h", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-05-30 18:01:22",
      "updatedAt": "2021-08-31 21:23:58"
    }, {
      "name": "Natal",
      "surname": "Sanz",
      "age": 57,
      "email": "nsanzz@about.com",
      "nickname": "nsanzz",
      "password":bcrypt.hashSync("7j56h", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-08-11 07:32:27",
      "updatedAt": "2021-04-11 01:17:37"
    }, {
      "name": "Isabella",
      "surname": "Burnapp",
      "age": 12,
      "email": "iburnapp10@myspace.com",
      "nickname": "iburnapp10",
      "password":bcrypt.hashSync("sad12e", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-11-04 18:15:09",
      "updatedAt": "2021-09-04 11:47:55"
    }, {
      "name": "Betsey",
      "surname": "Szymanski",
      "age": 70,
      "email": "bszymanski11@360.cn",
      "nickname": "bszymanski11",
      "password":bcrypt.hashSync("asdwed", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-04-30 18:12:03",
      "updatedAt": "2022-01-26 00:03:32"
    }, {
      "name": "Georgetta",
      "surname": "Sturgess",
      "age": 31,
      "email": "gsturgess12@ucsd.edu",
      "nickname": "gsturgess12",
      "password":bcrypt.hashSync("asd12d", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-07-02 20:28:58",
      "updatedAt": "2021-11-02 08:32:51"
    }, {
      "name": "Englebert",
      "surname": "Huetson",
      "age": 39,
      "email": "ehuetson13@ca.gov",
      "nickname": "ehuetson13",
      "password":bcrypt.hashSync("asdasdqw", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-07-03 20:24:25",
      "updatedAt": "2021-05-15 20:32:28"
    }, {
      "name": "Raul",
      "surname": "Rickcord",
      "age": 78,
      "email": "rrickcord14@bloglovin.com",
      "nickname": "rrickcord14",
      "password":bcrypt.hashSync("asdwc", Number.parseInt(authConfig.rounds)),
      "createdAt": "2022-02-21 20:58:17",
      "updatedAt": "2021-12-12 00:39:15"
    }, {
      "name": "Darwin",
      "surname": "Meeson",
      "age": 75,
      "email": "dmeeson15@arizona.edu",
      "nickname": "dmeeson15",
      "password":bcrypt.hashSync("sad12", Number.parseInt(authConfig.rounds)),
      "createdAt": "2022-01-25 01:53:18",
      "updatedAt": "2021-11-04 04:33:44"
    }, {
      "name": "Mirabel",
      "surname": "Iorio",
      "age": 26,
      "email": "miorio16@dot.gov",
      "nickname": "miorio16",
      "password":bcrypt.hashSync("sad1", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-10-23 21:21:25",
      "updatedAt": "2021-04-24 09:23:36"
    }, {
      "name": "Chicky",
      "surname": "Bentick",
      "age": 12,
      "email": "cbentick17@g.co",
      "nickname": "cbentick17",
      "password":bcrypt.hashSync("sadasd", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-03-12 18:17:15",
      "updatedAt": "2021-05-27 01:44:55"
    }, {
      "name": "Muire",
      "surname": "Legonidec",
      "age": 36,
      "email": "mlegonidec18@reuters.com",
      "nickname": "mlegonidec18",
      "password":bcrypt.hashSync("asdd", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-09-16 19:37:35",
      "updatedAt": "2021-09-29 10:06:44"
    }, {
      "name": "Corette",
      "surname": "Cuming",
      "age": 70,
      "email": "ccuming19@msu.edu",
      "nickname": "ccuming19",
      "password":bcrypt.hashSync("sadbn", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-03-31 19:01:24",
      "updatedAt": "2021-04-09 00:09:16"
    }, {
      "name": "Teirtza",
      "surname": "Zuanazzi",
      "age": 50,
      "email": "tzuanazzi1a@ca.gov",
      "nickname": "tzuanazzi1a",
      "password":bcrypt.hashSync("sad11", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-08-08 03:36:14",
      "updatedAt": "2021-09-24 02:57:40"
    }, {
      "name": "Maryrose",
      "surname": "Strong",
      "age": 27,
      "email": "mstrong1b@blogspot.com",
      "nickname": "mstrong1b",
      "password":bcrypt.hashSync("sd223", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-06-02 16:59:00",
      "updatedAt": "2021-04-26 22:13:48"
    }, {
      "name": "Celeste",
      "surname": "Montel",
      "age": 78,
      "email": "cmontel1c@ifeng.com",
      "nickname": "cmontel1c",
      "password":bcrypt.hashSync("fdjkk", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-11-19 11:10:21",
      "updatedAt": "2022-02-14 14:06:22"
    }, {
      "name": "Shelley",
      "surname": "Quant",
      "age": 49,
      "email": "squant1d@apple.com",
      "nickname": "squant1d",
      "password":bcrypt.hashSync("asdsd g", Number.parseInt(authConfig.rounds)),
      "createdAt": "2021-08-09 21:18:32",
      "updatedAt": "2021-04-08 02:21:13"
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
