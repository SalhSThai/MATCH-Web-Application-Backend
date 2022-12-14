"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("users", [
      {
        username: "bassy",
        password:
          "$2a$12$WEIcQFbEG10aJ2sRqvFaUO9ky.vOWxvFSyUfQw0bqrOufNKx44JNa",
        role: "member",
        email: null,
        first_name: "bbbbb",
        last_name: "cccc",
        phone_number: "0899999999",
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667033776/GroupProject/mo_1_y2ldwh.jpg",
        birth_date: "2002-07-15",
        about_me: "good boy",
        occupation: "engineer",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "bewwy",
        password:
          "$2a$12$pU9gvY3nSR6Jy3dfWlRlouFj2ptSNjLmXzN45j.lE6GIjWQO3IgLy",
        role: "member",
        email: null,
        first_name: "aaaaa",
        last_name: "sssss",
        phone_number: "0811111111",
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667033771/GroupProject/bomb_1_yhdvwg.jpg",
        birth_date: "2002-07-16",
        about_me: "good girl",
        occupation: "doctor",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "gemmy",
        password:
          "$2a$12$EwCAep5G.L48CGhCEm4eEOn0lXS71EVjiDI9HLga1GMxX9K5/oOXO",
        role: "member",
        email: "a@gmail.com",
        first_name: "bbbb",
        last_name: "cccc",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667033771/GroupProject/anun_1_jobnue.jpg",
        birth_date: "2002-07-15",
        about_me: "good guy",
        occupation: "teacher",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "nany",
        password:
          "$2a$12$4LV4OlUJszuFLgjnqg7LvuPQakg/g396/nRSmL.8Nzq4ucEkSWRaS",
        role: "member",
        email: "n@gmail.com",
        first_name: "nnnn",
        last_name: "bbbb",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667033769/GroupProject/nun_1_xx5cqd.jpg",
        birth_date: "2002-06-15",
        about_me: "good game",
        occupation: "rider",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "bally",
        password:
          "$2a$12$aRVjkD8S0pvRRLw7YQPHyOfABKrr0ZX6TIf2Hmrj1iErorc/LRrEO",
        role: "member",
        email: "h@gmail.com",
        first_name: "hhhh",
        last_name: "uuuu",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667033839/GroupProject/5_2_rs5j2w.jpg",
        birth_date: "2002-03-22",
        about_me: "good gene",
        occupation: "driver",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "many",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "admin",
        email: "m@gmail.com",
        first_name: "mmmm",
        last_name: "nnnn",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667033926/GroupProject/kapook_1_iovv2t.jpg",
        birth_date: "2002-03-27",
        about_me: "good admin",
        occupation: "admin",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Tulip",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Tulip@gmail.com",
        first_name: "Tulip",
        last_name: "Tulip",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890504/GroupProject/tulip_2_avblfz.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Alderley",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Alderley@gmail.com",
        first_name: "Alderley",
        last_name: "Alderley",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890506/GroupProject/%E0%B8%AD%E0%B8%AD%E0%B9%80%E0%B8%94%E0%B8%A2%E0%B9%8C_4_jmj6lo.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "aclaire ",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "aclaire@gmail.com",
        first_name: "aclaire",
        last_name: "aclaire",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890506/GroupProject/%E0%B9%80%E0%B8%AD%E0%B9%81%E0%B8%84_c3oy2i.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Venice",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Venice@gmail.com",
        first_name: "Venice",
        last_name: "Venice",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890505/GroupProject/vanish_3_yxwftb.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Neptune",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Neptune@gmail.com",
        first_name: "Neptune",
        last_name: "Neptune",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890505/GroupProject/%E0%B9%80%E0%B8%99%E0%B8%9B%E0%B8%88%E0%B8%B9%E0%B8%99_3_uz0u1i.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "NewYear",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "NewYear@gmail.com",
        first_name: "NewYear",
        last_name: "NewYear",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890505/GroupProject/%E0%B8%9B%E0%B8%B5%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_viyuxw.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "blur",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "blur@gmail.com",
        first_name: "blur",
        last_name: "blur",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890504/GroupProject/blu_1_mrk9xp.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Alin",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Alin@gmail.com",
        first_name: "Alin",
        last_name: "Alin",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890504/GroupProject/Alin_1_ly3x9z.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Pponly",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Pp@gmail.com",
        first_name: "Pp",
        last_name: "Pp",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890502/GroupProject/1_jjcqmb.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        username: "Sherry",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Sherry@gmail.com",
        first_name: "Sherry",
        last_name: "Sherry",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890503/GroupProject/3_3_enm7v4.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Melbourne",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Melbourne@gmail.com",
        first_name: "Melbourne",
        last_name: "Melbourne",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890502/GroupProject/3_2_cbjxna.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Yuki",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Yuki@gmail.com",
        first_name: "Yuki",
        last_name: "Yuki",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890501/GroupProject/2_qaffb6.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Riko",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Riko@gmail.com",
        first_name: "Riko",
        last_name: "Riko",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890504/GroupProject/riko_1_snn21u.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Chiwa",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Chiwa@gmail.com",
        first_name: "Chiwa",
        last_name: "Chiwa",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1666890505/GroupProject/%E0%B8%8A%E0%B8%B4%E0%B8%A7%E0%B8%B2_disnxz.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "game",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "game@gmail.com",
        first_name: "game",
        last_name: "game",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667036614/GroupProject/bnun_sifie7.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "sandy",
        password:
          "$2a$12$WEIcQFbEG10aJ2sRqvFaUO9ky.vOWxvFSyUfQw0bqrOufNKx44JNa",
        role: "member",
        email: null,
        first_name: "sandy",
        last_name: "sandy",
        phone_number: "0899999900",
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132294/GroupProject/406raedoil8axizwi_wpkage.jpg",
        birth_date: "2002-07-15",
        about_me: "good girl",
        occupation: "engineer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "fern",
        password:
          "$2a$12$pU9gvY3nSR6Jy3dfWlRlouFj2ptSNjLmXzN45j.lE6GIjWQO3IgLy",
        role: "member",
        email: null,
        first_name: "fern",
        last_name: "fern",
        phone_number: "0811111100",
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132295/GroupProject/406raegxrl9p8grge_zfejun.jpg",
        birth_date: "2002-07-16",
        about_me: "good girl",
        occupation: "doctor",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "Jam",
        password:
          "$2a$12$EwCAep5G.L48CGhCEm4eEOn0lXS71EVjiDI9HLga1GMxX9K5/oOXO",
        role: "member",
        email: "Jam@gmail.com",
        first_name: "Jam",
        last_name: "Jam",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667133131/GroupProject/300151641_913175602933593_989121301812250021_n_wuhkzp.jpg",
        birth_date: "2002-07-15",
        about_me: "good guy",
        occupation: "teacher",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "frame",
        password:
          "$2a$12$4LV4OlUJszuFLgjnqg7LvuPQakg/g396/nRSmL.8Nzq4ucEkSWRaS",
        role: "member",
        email: "frame@gmail.com",
        first_name: "frame",
        last_name: "frame",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132295/GroupProject/406rae5b1l7nhme8s_r3x0qb.jpg",
        birth_date: "2002-06-15",
        about_me: "good game",
        occupation: "rider",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "pladow",
        password:
          "$2a$12$aRVjkD8S0pvRRLw7YQPHyOfABKrr0ZX6TIf2Hmrj1iErorc/LRrEO",
        role: "member",
        email: "pladow@gmail.com",
        first_name: "pladow",
        last_name: "pladow",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132295/GroupProject/306960977_827406628617085_224114062780136015_n_lp8zov.jpg",
        birth_date: "2002-03-22",
        about_me: "good gene",
        occupation: "driver",
        gender: "MALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "flour",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "flour@gmail.com",
        first_name: "flour",
        last_name: "flour",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132296/GroupProject/313102838_588622696396071_6797056266366024900_n_wqhdbf.jpg",
        birth_date: "2002-03-27",
        about_me: "good admin",
        occupation: "admin",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Foul",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Foul@gmail.com",
        first_name: "Foul",
        last_name: "Foul",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132296/GroupProject/313207995_672236874470724_4621285147522405609_n_mm9tdv.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Van",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Van@gmail.com",
        first_name: "Van",
        last_name: "Van",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132296/GroupProject/vanish_1_cujawa.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Oreo",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Oreo@gmail.com",
        first_name: "Oreo",
        last_name: "Oreo",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132296/GroupProject/311834739_142336511866661_7890905380116576792_n_ljc5qj.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Cream",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Cream@gmail.com",
        first_name: "Cream",
        last_name: "Cream",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132296/GroupProject/313198933_588007999790874_5231398820979467283_n_lyswgy.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },{
        username: "Neko",
        password:
          "$2a$12$3LobnJW91yxK7SaczP7q6u7RAtfDtruyAp5/ZX/fYUQwfKFsx7ONK",
        role: "member",
        email: "Neko@gmail.com",
        first_name: "Neko",
        last_name: "Neko",
        phone_number: null,
        profile_image:
          "https://res.cloudinary.com/klothcloud/image/upload/v1667132302/GroupProject/250313681_144174344608554_6837510388731075099_n_suwpza.jpg",
        birth_date: "2002-03-27",
        about_me: "so good",
        occupation: "influencer",
        gender: "FEMALE",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("users", null, {});
  },
};
