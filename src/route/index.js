// Підключаємо технологію express для back-end сервера
const express = require("express");
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router();

// ================================================================
var header = {
  name: {
    firstname: "Vitalinaa",
    lastname: "Hurtovenko",
  },
  position: "Junior Fullstack JS Developer",
  salary: "600$ в місяць",
  address: "Kyiv, Ukraine",
};

var footer = {
  social: {
    email: {
      text: "dmytro@mail.com",
      href: "mailto:dmytro@mail.com",
    },

    phone: {
      text: "+380670000123",
      href: "tel:+380670000123",
    },

    linkedin: {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/dmytro-test",
    },
  },
  address: "Kyiv, Ukraine",
};
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get("/", function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render("index", {});
  //                  ↑↑ сюди вводимо JSON дані
});

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get("/summary", function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render("summary", {
    // ↙ сюди вводимо JSON дані
    page: {
      title: "Resume | Summary",
    },

    header,

    main: {
      summary: {
        title: "Summary",
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.d`,
      },

      experience: {
        title: "Other experience",
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
            tournament position, goals etc), analyzing by simple mathematics models and preparing probability
            for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  });
});

// ================================================================
router.get("/skills", function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render("skills", {
    // ↙ сюди вводимо JSON дані
    page: {
      title: "Resume | Skills",
    },

    header,

    main: {
      skills: [
        {
          name: "HTML",
          point: 10,
          isTop: true,
        },
        {
          name: "Handlebars",
          point: 10,
          isTop: true,
        },
        {
          name: "Vs Code",
          point: 10,
          isTop: true,
        },
        {
          name: "Git",
          point: 9,
          isTop: false,
        },
        {
          name: "Terminal",
          point: 9,
          isTop: false,
        },
        {
          name: "NPM",
          point: 9,
          isTop: false,
        },
        {
          name: "React.js",
          point: 0,
          isTop: false,
        },
        {
          name: "PHP",
          point: null,
          isTop: false,
        },
      ],
      hobbies: [
        {
          name: "Programming",
          isMain: true,
        },
        {
          name: "Learning",
          isMain: true,
        },
        {
          name: "Creating",
          isMain: false,
        },
        {
          name: "Painting",
          isMain: false,
        },
      ],
    },

    footer,
  });
});
// ================================================================
router.get("/education", function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render("education", {
    // ↙ сюди вводимо JSON дані
    page: {
      title: "Resume | Education",
    },

    header,

    main: {
      educations: [
        {
          name: "Дит. садок",
          isEnd: true,
        },
        {
          name: "NURE",
          isEnd: false,
        },
        {
          name: "It brains",
          isEnd: false,
        },
        {
          name: "School №84",
          isEnd: true,
        },
        {
          name: "hackers club",
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: "Hdsfkvnl",
          id: "3503",
        },
        {
          name: "Alflf",
          id: "4803",
        },
        {
          name: "Jfpdfn",
          id: "6789",
        },
        {
          name: "JKFK",
          id: "8383",
        },
        {
          name: "Ulvs",
          id: "8456",
        },
        {
          name: "VFEke",
          id: "7564",
        },
      ],
    },

    footer,
  });
});
// Підключаємо роутер до бек-енду
router.get("/work", function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render("work", {
    // ↙ сюди вводимо JSON дані
    layout: "big",
    page: {
      title: "Resume | Work",
    },

    header,

    main: {
      works: [
        {
          position: "Junior Fullstack Developer",
          company: {
            name: "It Brains",
            url: null,
          },
          duration: {
            from: "10.10.2019",
            to: null,
          },
          projectAmount: 3,
          stackAmount: 3,
          awardAmount: 2,

          projects: [
            {
              name: "Resume",
              url: "https://it-brains.com.ua/",
              about:
                "Задачі та ТЗ для виконання домашнього завдання ви можете відкрити за посиланням",
              stacks: [
                {
                  name: "React.js",
                },
                {
                  name: "HTML / CSS",
                },
                {
                  name: "Node.js",
                },
              ],
              awards: [
                {
                  name: "Inside the list, it adds a list item (<li>) with the content of the name property from the current education item.",
                },
                {
                  name: "The provided code appears to be a template in a markup language like Handlebars",
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  });
});
module.exports = router;
