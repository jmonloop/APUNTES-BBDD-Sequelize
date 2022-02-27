'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Peliculas', [ //Tener en cuenta que es el nombre de la clase del modelo pero EN PLURAL
      {
        "title": "Tall in the Saddle",
        "synopsis": "a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate",
        "adult": true,
        "popularity": 3.4,
        "image": "http://dummyimage.com/110x100.png/dddddd/000000",
        "createdAt": "2021-08-11 15:57:39",
        "updatedAt": "2021-08-17 14:59:21"
      }, {
        "title": "Survival Island (Three)",
        "synopsis": "lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum",
        "adult": false,
        "popularity": 5.2,
        "image": "http://dummyimage.com/245x100.png/5fa2dd/ffffff",
        "createdAt": "2022-01-27 11:24:01",
        "updatedAt": "2021-10-04 19:32:32"
      }, {
        "title": "The Thief",
        "synopsis": "vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce",
        "adult": false,
        "popularity": 5.7,
        "image": "http://dummyimage.com/243x100.png/ff4444/ffffff",
        "createdAt": "2021-04-22 13:57:17",
        "updatedAt": "2022-01-11 10:15:59"
      }, {
        "title": "Day of the Dolphin, The",
        "synopsis": "velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
        "adult": true,
        "popularity": 0.5,
        "image": "http://dummyimage.com/248x100.png/ff4444/ffffff",
        "createdAt": "2021-10-08 18:35:14",
        "updatedAt": "2021-05-08 10:12:55"
      }, {
        "title": "Loveless, The (Breakdown)",
        "synopsis": "ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum",
        "adult": true,
        "popularity": 8.4,
        "image": "http://dummyimage.com/219x100.png/5fa2dd/ffffff",
        "createdAt": "2021-04-11 02:06:09",
        "updatedAt": "2022-02-04 03:08:58"
      }, {
        "title": "The Package",
        "synopsis": "convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci",
        "adult": false,
        "popularity": 1.3,
        "image": "http://dummyimage.com/125x100.png/ff4444/ffffff",
        "createdAt": "2021-02-24 21:31:17",
        "updatedAt": "2021-11-16 06:41:50"
      }, {
        "title": "Lady Jane",
        "synopsis": "eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in",
        "adult": false,
        "popularity": 5.4,
        "image": "http://dummyimage.com/205x100.png/cc0000/ffffff",
        "createdAt": "2021-05-13 06:17:05",
        "updatedAt": "2021-08-24 03:05:18"
      }, {
        "title": "Sympathy for the Devil",
        "synopsis": "proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in",
        "adult": true,
        "popularity": 7.0,
        "image": "http://dummyimage.com/133x100.png/dddddd/000000",
        "createdAt": "2021-05-25 21:55:11",
        "updatedAt": "2021-07-13 12:51:22"
      }, {
        "title": "Easy Life, The (Il Sorpasso)",
        "synopsis": "sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis",
        "adult": false,
        "popularity": 8.7,
        "image": "http://dummyimage.com/176x100.png/cc0000/ffffff",
        "createdAt": "2021-04-09 19:45:42",
        "updatedAt": "2021-04-01 10:24:37"
      }, {
        "title": "Missing, The",
        "synopsis": "varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus",
        "adult": true,
        "popularity": 4.6,
        "image": "http://dummyimage.com/234x100.png/cc0000/ffffff",
        "createdAt": "2021-03-17 08:48:23",
        "updatedAt": "2021-05-31 07:46:48"
      }, {
        "title": "Viy or Spirit of Evil (Viy)",
        "synopsis": "in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus",
        "adult": true,
        "popularity": 9.7,
        "image": "http://dummyimage.com/145x100.png/5fa2dd/ffffff",
        "createdAt": "2021-05-30 01:12:53",
        "updatedAt": "2021-04-30 19:41:17"
      }, {
        "title": "Mother Lode",
        "synopsis": "montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id",
        "adult": true,
        "popularity": 9.5,
        "image": "http://dummyimage.com/214x100.png/ff4444/ffffff",
        "createdAt": "2021-08-06 02:28:48",
        "updatedAt": "2021-09-13 06:44:38"
      }, {
        "title": "Welcome to Macintosh",
        "synopsis": "eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
        "adult": true,
        "popularity": 1.4,
        "image": "http://dummyimage.com/130x100.png/cc0000/ffffff",
        "createdAt": "2021-11-01 04:55:35",
        "updatedAt": "2021-11-29 18:28:34"
      }, {
        "title": "Lifeguard",
        "synopsis": "vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis",
        "adult": true,
        "popularity": 3.6,
        "image": "http://dummyimage.com/194x100.png/dddddd/000000",
        "createdAt": "2021-04-02 22:00:53",
        "updatedAt": "2021-04-26 06:10:27"
      }, {
        "title": "Max Payne",
        "synopsis": "convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id",
        "adult": false,
        "popularity": 3.5,
        "image": "http://dummyimage.com/154x100.png/cc0000/ffffff",
        "createdAt": "2021-04-24 02:37:12",
        "updatedAt": "2021-12-26 02:06:40"
      }, {
        "title": "Darker Than Night",
        "synopsis": "suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed",
        "adult": false,
        "popularity": 8.2,
        "image": "http://dummyimage.com/114x100.png/dddddd/000000",
        "createdAt": "2022-01-11 03:45:20",
        "updatedAt": "2022-01-27 13:13:19"
      }, {
        "title": "Galaxy of Terror (Quest)",
        "synopsis": "nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien",
        "adult": true,
        "popularity": 9.9,
        "image": "http://dummyimage.com/236x100.png/cc0000/ffffff",
        "createdAt": "2021-04-08 18:54:58",
        "updatedAt": "2021-07-10 14:50:12"
      }, {
        "title": "Major and the Minor, The",
        "synopsis": "sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend",
        "adult": true,
        "popularity": 1.7,
        "image": "http://dummyimage.com/166x100.png/dddddd/000000",
        "createdAt": "2021-04-13 05:04:39",
        "updatedAt": "2021-06-20 11:28:08"
      }, {
        "title": "David Copperfield",
        "synopsis": "mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id",
        "adult": false,
        "popularity": 3.0,
        "image": "http://dummyimage.com/174x100.png/dddddd/000000",
        "createdAt": "2021-12-09 02:01:37",
        "updatedAt": "2021-02-25 23:23:50"
      }, {
        "title": "Carried Away",
        "synopsis": "tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas",
        "adult": false,
        "popularity": 1.5,
        "image": "http://dummyimage.com/154x100.png/dddddd/000000",
        "createdAt": "2021-05-25 11:34:15",
        "updatedAt": "2021-09-02 12:40:31"
      }, {
        "title": "Man of La Mancha",
        "synopsis": "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi",
        "adult": false,
        "popularity": 1.2,
        "image": "http://dummyimage.com/188x100.png/ff4444/ffffff",
        "createdAt": "2021-06-10 08:25:18",
        "updatedAt": "2022-01-29 23:05:39"
      }, {
        "title": "Practical Magic",
        "synopsis": "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst",
        "adult": false,
        "popularity": 8.9,
        "image": "http://dummyimage.com/158x100.png/cc0000/ffffff",
        "createdAt": "2021-08-11 11:51:59",
        "updatedAt": "2021-08-05 19:23:24"
      }, {
        "title": "Serena",
        "synopsis": "volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non",
        "adult": true,
        "popularity": 8.5,
        "image": "http://dummyimage.com/243x100.png/ff4444/ffffff",
        "createdAt": "2021-10-04 22:27:18",
        "updatedAt": "2021-03-09 07:43:10"
      }, {
        "title": "Group, The",
        "synopsis": "primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu",
        "adult": false,
        "popularity": 7.9,
        "image": "http://dummyimage.com/142x100.png/ff4444/ffffff",
        "createdAt": "2021-09-03 10:08:29",
        "updatedAt": "2021-03-29 23:15:17"
      }, {
        "title": "Ernest Rides Again",
        "synopsis": "orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum",
        "adult": true,
        "popularity": 9.4,
        "image": "http://dummyimage.com/230x100.png/ff4444/ffffff",
        "createdAt": "2022-01-20 12:55:57",
        "updatedAt": "2021-08-22 06:54:36"
      }, {
        "title": "Ice Soldiers",
        "synopsis": "sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus",
        "adult": true,
        "popularity": 8.3,
        "image": "http://dummyimage.com/156x100.png/ff4444/ffffff",
        "createdAt": "2021-08-08 17:09:03",
        "updatedAt": "2021-06-23 20:32:12"
      }, {
        "title": "Betrayal",
        "synopsis": "aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna",
        "adult": true,
        "popularity": 9.2,
        "image": "http://dummyimage.com/203x100.png/cc0000/ffffff",
        "createdAt": "2021-03-24 09:56:07",
        "updatedAt": "2021-10-25 14:30:56"
      }, {
        "title": "Thank You a Lot",
        "synopsis": "ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium",
        "adult": true,
        "popularity": 7.3,
        "image": "http://dummyimage.com/209x100.png/dddddd/000000",
        "createdAt": "2021-07-15 23:22:49",
        "updatedAt": "2021-12-08 01:29:47"
      }, {
        "title": "The Hound of the Baskervilles",
        "synopsis": "morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar",
        "adult": false,
        "popularity": 3.1,
        "image": "http://dummyimage.com/159x100.png/ff4444/ffffff",
        "createdAt": "2022-02-22 11:42:51",
        "updatedAt": "2021-07-04 13:50:20"
      }, {
        "title": "RoboCop",
        "synopsis": "amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue",
        "adult": false,
        "popularity": 4.8,
        "image": "http://dummyimage.com/224x100.png/cc0000/ffffff",
        "createdAt": "2021-02-28 22:40:35",
        "updatedAt": "2022-02-21 15:48:11"
      }, {
        "title": "The Pirates",
        "synopsis": "tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra",
        "adult": true,
        "popularity": 0.5,
        "image": "http://dummyimage.com/188x100.png/dddddd/000000",
        "createdAt": "2022-01-07 13:35:41",
        "updatedAt": "2021-03-26 01:31:18"
      }, {
        "title": "Jeepers Creepers 2",
        "synopsis": "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse",
        "adult": true,
        "popularity": 6.4,
        "image": "http://dummyimage.com/171x100.png/cc0000/ffffff",
        "createdAt": "2022-01-13 19:30:38",
        "updatedAt": "2021-12-10 15:54:29"
      }, {
        "title": "Morons From Outer Space",
        "synopsis": "ac consequat metus sapien ut nunc vestibulum ante ipsum primis",
        "adult": true,
        "popularity": 6.4,
        "image": "http://dummyimage.com/153x100.png/5fa2dd/ffffff",
        "createdAt": "2021-11-19 01:55:07",
        "updatedAt": "2021-05-16 06:04:25"
      }, {
        "title": "White Night Wedding (Brúðguminn)",
        "synopsis": "tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi",
        "adult": false,
        "popularity": 3.2,
        "image": "http://dummyimage.com/240x100.png/cc0000/ffffff",
        "createdAt": "2021-05-19 20:25:09",
        "updatedAt": "2021-09-03 03:12:59"
      }, {
        "title": "Cool School, The",
        "synopsis": "odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
        "adult": true,
        "popularity": 0.3,
        "image": "http://dummyimage.com/162x100.png/ff4444/ffffff",
        "createdAt": "2021-05-03 14:00:56",
        "updatedAt": "2021-03-18 21:10:43"
      }, {
        "title": "Wolf",
        "synopsis": "pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl",
        "adult": false,
        "popularity": 8.2,
        "image": "http://dummyimage.com/245x100.png/ff4444/ffffff",
        "createdAt": "2021-08-17 22:16:55",
        "updatedAt": "2021-09-03 00:49:11"
      }, {
        "title": "Moordwijven",
        "synopsis": "porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient",
        "adult": true,
        "popularity": 4.6,
        "image": "http://dummyimage.com/113x100.png/ff4444/ffffff",
        "createdAt": "2021-02-27 06:27:16",
        "updatedAt": "2022-01-15 06:20:03"
      }, {
        "title": "R-Point (Arpointeu)",
        "synopsis": "vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper",
        "adult": false,
        "popularity": 7.7,
        "image": "http://dummyimage.com/103x100.png/dddddd/000000",
        "createdAt": "2021-09-06 15:16:16",
        "updatedAt": "2021-09-23 08:32:36"
      }, {
        "title": "Mean Machine",
        "synopsis": "accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
        "adult": false,
        "popularity": 5.3,
        "image": "http://dummyimage.com/209x100.png/cc0000/ffffff",
        "createdAt": "2022-02-01 17:07:53",
        "updatedAt": "2021-08-27 19:46:17"
      }, {
        "title": "Wish You Were Here",
        "synopsis": "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis",
        "adult": false,
        "popularity": 8.7,
        "image": "http://dummyimage.com/124x100.png/cc0000/ffffff",
        "createdAt": "2021-10-11 00:17:38",
        "updatedAt": "2021-09-05 11:43:25"
      }, {
        "title": "X2: X-Men United",
        "synopsis": "mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum",
        "adult": true,
        "popularity": 7.0,
        "image": "http://dummyimage.com/202x100.png/dddddd/000000",
        "createdAt": "2021-03-25 11:55:54",
        "updatedAt": "2021-08-01 19:03:19"
      }, {
        "title": "Surgeon, The",
        "synopsis": "nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris",
        "adult": false,
        "popularity": 4.6,
        "image": "http://dummyimage.com/128x100.png/cc0000/ffffff",
        "createdAt": "2021-05-15 16:14:37",
        "updatedAt": "2021-08-07 12:02:20"
      }, {
        "title": "Resurrected, The",
        "synopsis": "donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo",
        "adult": false,
        "popularity": 6.3,
        "image": "http://dummyimage.com/170x100.png/5fa2dd/ffffff",
        "createdAt": "2021-12-13 07:20:14",
        "updatedAt": "2021-05-23 02:54:47"
      }, {
        "title": "Snug as a Bug (U Pana Boga za piecem)",
        "synopsis": "vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum",
        "adult": true,
        "popularity": 8.6,
        "image": "http://dummyimage.com/118x100.png/ff4444/ffffff",
        "createdAt": "2021-09-28 12:24:58",
        "updatedAt": "2021-10-30 19:22:26"
      }, {
        "title": "Sword of Desperation (Hisshiken torisashi)",
        "synopsis": "pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat",
        "adult": true,
        "popularity": 3.9,
        "image": "http://dummyimage.com/197x100.png/5fa2dd/ffffff",
        "createdAt": "2021-06-22 08:42:22",
        "updatedAt": "2021-05-07 01:28:15"
      }, {
        "title": "The Natural Love",
        "synopsis": "luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec",
        "adult": false,
        "popularity": 8.6,
        "image": "http://dummyimage.com/186x100.png/5fa2dd/ffffff",
        "createdAt": "2021-07-14 16:27:45",
        "updatedAt": "2021-04-25 13:47:44"
      }, {
        "title": "Naked Gun: From the Files of Police Squad!, The",
        "synopsis": "vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio",
        "adult": true,
        "popularity": 4.0,
        "image": "http://dummyimage.com/221x100.png/cc0000/ffffff",
        "createdAt": "2021-12-06 11:34:01",
        "updatedAt": "2021-05-09 12:14:31"
      }, {
        "title": "Real Cancun, The",
        "synopsis": "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec",
        "adult": false,
        "popularity": 9.8,
        "image": "http://dummyimage.com/170x100.png/ff4444/ffffff",
        "createdAt": "2021-12-07 07:11:52",
        "updatedAt": "2021-11-18 10:09:09"
      }, {
        "title": "Stage Door Canteen",
        "synopsis": "justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat",
        "adult": true,
        "popularity": 7.5,
        "image": "http://dummyimage.com/228x100.png/ff4444/ffffff",
        "createdAt": "2021-06-21 02:13:02",
        "updatedAt": "2021-12-10 19:25:07"
      }, {
        "title": "Garbage Pail Kids Movie, The",
        "synopsis": "lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat",
        "adult": false,
        "popularity": 9.6,
        "image": "http://dummyimage.com/195x100.png/dddddd/000000",
        "createdAt": "2021-11-19 20:01:56",
        "updatedAt": "2021-09-26 17:31:20"
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
