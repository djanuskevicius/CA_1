const TEXTS = {
  menu: {
    home: {
      lt: 'Pagrindinis',
      en: 'Home',
    },

    todos: {
      lt: 'Darbų sąrašas',
      en: 'Todo list',
    },
    login: {
      lt: 'Prisijungti',
      en: 'Log In',
    },
    logout: {
      lt: 'Atsijungti',
      en: 'Log Out',
    },
    language: {
      lithuanian: {
        lt: 'LT',
        en: 'LT',
      },
      english: {
        lt: 'EN',
        en: 'EN',
      },
    },
  },

  form: {
    title: {
      lt: 'Pridėti naują užduotį',
      en: 'Add new task',
    },
    taskTitle: {
      lt: 'Pridėti užduoties antraštę',
      en: 'Assign task title',
    },
    taskDescription: {
      lt: 'Pridėti užduoties aprašymą',
      en: 'Assign task description',
    },
    taskStatus: {
      lt: 'Jūsų užduoties statusas',
      en: 'Your task status',
    },
    button: {
      lt: 'Pridėti užduoti',
      en: 'Add task',
    },
    optionOne: {
      lt: 'Jūsų antraštė',
      en: 'Your task title goes here',
    },
    optionTwo: {
      lt: 'Jūsų aprašymas',
      en: 'Your task description goes here',
    },
    selectOne: {
      lt: 'Ne pradėta',
      en: 'To Do',
    },
    selectTwo: {
      lt: 'Pradėta',
      en: 'In progress',
    },
    selectThree: {
      lt: 'Baigta',
      en: 'Done',
    },
    edit: {
      lt: 'Pakeisti užduotį',
      en: 'Edit task',
    },
    editTitle: {
      lt: 'Pakeisti užduoties antraštę',
      en: 'Edit task title',
    },
    editDescription: {
      lt: 'Pakeisti užduoties aprašymą',
      en: 'Edit task description',
    },
    editStatus: {
      lt: 'Pakeisti užduoties statusą',
      en: 'Edit task status',
    },
    validationTitle: {
      lt: "Butina irašyti antraštę",
      en: "Title cannot be empty",
    },
    validationStatus: {
      lt: "Būtina pasirinkti statusą",
      en: "Status cannot be empty",
    },
  },

  page: {
    homePage: {
      title: {
        lt: 'TaskMate',
        en: 'TaskMate',
      },
      description: {
        paragraph1: {
          lt: 'Programėlė "TaskMate" yra paprasta ir intuityvi užduočių sąrašo programa, leidžianti vartotojams kurti ir valdyti sukurtas užduotis. Ji turi patogią sąsają, kuri leidžia naujiems ar esamiems vartotojams lengvai prisijungti ir pasiekti savo asmeninį darbų sąrašą.',
          en: 'The "TaskMate" app is a simple and intuitive to-do list application that allows users to create and manage tasks. It has a user-friendly interface that enables new or existing users to log in easily and access their personalized to-do list.',
        },
        paragraph2: {
          lt: 'Prisijungę vartotojai gali peržiūrėti dabartinį užduočių sąrašą ir greitai pridėti naujas užduotis, atnaujinti esamas užduotis, lengvai pašalinti jas iš sąrašo, kai užduočių nebereikia.',
          en: 'Once logged in, users can view their current list of tasks and quickly add new ones, update their existing tasks, easily remove it from their list when not needed.',
        },
        paragraph3: {
          lt: 'Ši "TaskMate" programėlė yra patogus ir efektyvus įrankis visiems, norintiems nepamiršti savo dienotvarkės ir efektyviai valdyti savo kasdienes užduotis.',
          en: 'This "TaskMate" to-do list app is a convenient and efficient tool for anyone looking to stay organized and manage their daily tasks effectively.',
        },
      },
      footer: {
        lt: '© Visos teisės saugomos',
        en: '© All rights reserved',
      },
    },
    signUpForm: {
      title: {
        lt: 'Registracija',
        en: 'Sign Up',
      },
      name: {
        lt: 'Vardas',
        en: 'Name',
        placeholder: {
          lt: 'Įveskite vardą...',
          en: 'Enter your name...',
        },
      },
      surname: {
        lt: 'Pavardė',
        en: 'Surname',
        placeholder: {
          lt: 'Įveskite pavardę...',
          en: 'Enter your surname...',
        },
      },
      email: {
        lt: 'El. Paštas',
        en: 'Email',
        placeholder: {
          lt: 'pavizdys@pavizdys.com',
          en: 'example@example.com',
        },
      },
      password: {
        lt: 'Slaptažodis',
        en: 'Password',
        placeholder: {
          lt: 'Įveskite slaptažodį...',
          en: 'Enter your password...',
        },
      },
      required: {
        lt: 'Privaloma',
        en: 'Required',
        email: {
          lt: 'jau egzistuoja',
          en: 'already exists',
        },
      },
      button: {
        lt: 'Registruotis',
        en: 'Sign Up',
      },
    },

    loginForm: {
      title: {
        lt: 'Prisijungimas',
        en: 'Log In',
      },
      button: {
        lt: 'Prisijungti',
        en: 'Log In',
      },
      validate: {
        lt: 'Vartotojas neegzistuoja',
        en: 'The user does not exist',
      },
    },

    todoListPage: {
      title: {
        lt: 'Darbų sąrašo puslapis',
        en: 'Todo list page',
      },
    },
  },
};

export default TEXTS;
