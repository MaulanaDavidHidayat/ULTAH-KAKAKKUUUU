const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "200397", // Change this to any 6-digit code (the passcode for access)
  passcodeTitle: "Ulangg tahunn kakakkuuu😙 codenyaaa kalau ngak bisa siapa kamuu ini buat kakakkuuu soalnya dia tahu ulang tahun dia sendiri meskipun adikssnyaa ini tau yaa🤣", // Title displayed on the passcode entry page
  successMessage: "iyaa dongg benerr masa salahh hahaha", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our anniversary date!", // Message shown for incorrect passcode
  cancelButtonText: "Batall kalau salah ultahh masa salah ultah sendirii hahahaha'clic text ini'", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Cari disini terus salin text direkomendasikann yaaa kakakkuuu", // Placeholder text in the search input
  trendingTitle: "Kisahh Kitaa hahahaha🗿😭", // Title for the trending searches section
  trendingSearches: [
    "kenapaa Kakakkuuuu sangatt lucukkk?", // Example trending search query
    "kenapaa Kakakkuuuu sangatt cantikkk?",
    "Tau ngakk Maulana David Hidayatt ituu Sesayang itu loh sama Almira Auliiaa",
    "Maulana David Hidayatt sukaa bikinn kakakknyaa marahh muluu hahaha",
    "Bakatt Terpendamm Maulana David Hidayatt Adalahh Membuatt kesall kakaknya sendiri😭", // Another example query
    `Tanggal lahir kakakkuuu (adikk puraaa-puraa lupaa aja hahaha)`, // A personalized trending search
  ],
  proTip: 'nihh text rekomendasinyaa salin yang didalam tanda 2petik "sudah seberapa lamaa mengenall kakakkkk😍"', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-11-01", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "tau ngak kakak kitaa udahh selamaa inii taukk lovee youuu haha", // Title displayed on the timer page
  timerMessage: "... dan sampai sekarangg semogaa kita teruss kenal gini yaa kakakkuuu", // Message shown alongside the timer
  timeUnits: {
    days: "Hari", // Label for days in the timer
    hours: "Jam", // Label for hours in the timer
    minutes: "Menit", // Label for minutes in the timer
    seconds: "Detik", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Mari kita rangkum waktu kebersamaan kita kakakkkuuu dan adikssmuuu", // Title for the recap page
  clickMeText: "Tekan inii", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Lucky", // Title of the song
      artist: "Jason Mraz & Colbie Caillat", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Count on Me",
      artist: "Bruno Mars",
      left: "40%",
      top: "15%",
    },
    {
      title: "Best Part",
      artist: "Daniel Caesar ft. H.E.R.",
      left: "15%",
      top: "40%",
    },
    {
      title: "A Sky Full of Stars",
      artist: "Coldplay",
      left: "30%",
      top: "75%",
    },
    {
      title: "American Boy",
      artist: "Estelle, Kanye West",
      left: "5%",
      top: "65%",
    },
    {
      title: "Sparks",
      artist: "Coldplay",
      left: "25%",
      top: "90%",
    },
    {
      title: "I Like Me Better",
      artist: "Soulja Boy, Sammie",
      left: "35%",
      top: "50%",
    },
    {
      title: "Sunsetz",
      artist: "Cigarettes After Sex",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Our Pictures", // Title for the messages recap page
    messageGallery: [
      { title: "November 13, 2025", description: "Foto Pertama kitaa saat main robloxx hahaha yang kakak bilangg bagusss hahaha" }, // Message entry
      { title: "November 9, 2025", description: "Pertama kali kakak ngirim foto ke adekk mo berangkat makan keluarga" },
      { title: "November 9, 2025", description: "Pertama kali juga adek ngirim foto ke kakak teruss kakak bilangg, Huwaaa tolong jangan yang gangguin adikku ini 🤏🏻 mode kaka protektif ni😗 click yang tengah lagii kakakk keluarr dulu terus clik yang tengahh" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "November 24, 2025", description: "senengg dehh ngirimm fotoo tanpaa adekk mintaa hahaha, Tapii inii Terlaluuu lucuukkk cantikkk tidakkk kuatt adekkk😫" }, // Picture entry
      { title: "November 30, 2025 - Desember 17, 2025", description: "lucunyeee oiiii hahaa kakakkkuuuu cantikkk bangetttt😗" },
      { title: "November 13, 2025 - sekarangg", description: "Makinn Nganggep Kakakkk kayaa kakakk kandungg sendirii pengenn manja ke kakakkk, seringg call/ sleep call hahaa, tidak ada penyesalan sedikitpun bisa kenal kakakkkk Lovee Youu Moree kakakkkuuuu😍" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Surat Ulang Tahun untuk Kakakkuuu Dari Adikk tercintamuuu😋         'kakakk Sehatt Selaluu disanaa Panjangg Umurr, Suksess Selaluu Kakakkkuuu", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Terima kasih untuk segalanya, kakakkkuuu sayangku! 💖 Semoga kita memiliki lebih banyak tahun-tahun indah bersama hehehe. pohon chrismast walau ngak ada salju🗿🤣", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "sudah seberapa lamaa mengenall kakakkkk😍", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
