import Location from "./models/location.type";

const Locations: {
  [key: string]: Location;
} = {
  eldorath: {
    description: {
      tr: "Efsanevi anıtları ve büyülü atmosferiyle ünlü bir şehir. Burası sihirbazlar ve bilgelerin buluşma noktasıdır, antik büyülerin sırlarını barındırır.",
      en: "The city is famous for its legendary monuments and enchanting atmosphere. It's a meeting point for wizards and sages, harboring the secrets of ancient spells.",
    },
    name: "Eldorath",
    id: "eldorath",
    dungeons: {
      zephyrionLabyrinth: {
        name: "Zephyrion Labyrinth",
        id: "zephyrionLabyrinth",
        description: {
          tr: "Büyülü koridorlar ve tuzaklarla dolu labirent, sihirli kristallerle aydınlatılmış.",
          en: "Her odada farklı bir elementin egemen olduğu, elementlere dayalı bulmacaların ve sınavların olduğu tapınak.",
        },
      },
      templeOfTheElements: {
        name: "Temple of the Elements",
        id: "templeOfTheElements",
        description: {
          tr: "Her odada farklı bir elementin egemen olduğu, elementlere dayalı bulmacaların ve sınavların olduğu tapınak.",
          en: "",
        },
      },
      magicalLibrary: {
        name: "Magical Library",
        id: "magicalLibrary",
        description: {
          tr: "Kaybolmuş büyüleri içeren, gizemli kitaplar ve sihirli engellerle korunan büyük bir kütüphane.",
          en: "",
        },
      },
      corridorOfSpirits: {
        name: "Corridor of Spirits",
        id: "corridorOfSpirits",
        description: {
          tr: "Hayaletlerin dolaştığı, ruhları barındıran koridorlarla dolu bir labirent.",
          en: "",
        },
      },
    },
  },
  aerendir: {
    description: {
      tr: "Elf topluluklarının gizemli ormanlarında yükselen, doğanın ve elf kültürünün birleştiği bir şehir. Burası doğa ile iç içe olan bir yaşam tarzına sahiptir.",
      en: "A city rising within the mysterious forests of Elven communities, where nature and Elven culture intertwine. It embraces a lifestyle deeply connected to nature.",
    },
    name: "Aerendir",
    id: "aerendir",
    dungeons: {
      acaciaTemple: {
        name: "Acacia Temple",
        id: "acaciaTemple",
        description: {
          tr: "Ormanın derinliklerinde bulunan, doğaya saygı ve uyum gerektiren bir tapınak.",
          en: "Located deep within the forest, a temple that requires respect and harmony with nature.",
        },
      },
      fairyCave: {
        name: "Fairy Cave",
        id: "fairyCave",
        description: {
          tr: "Perilerin ve büyülü yaratıkların yaşadığı, gizemli bir mağara sistemi.",
          en: "A mysterious cave system where fairies and magical creatures reside.",
        },
      },
      elvenShadows: {
        name: "Elven Shadows",
        id: "elvenShadows",
        description: {
          tr: "Hayaletlerin dolaştığı, ruhları barındıran koridorlarla dolu bir mağara sistemi.",
          en: "A cave system filled with corridors where ghosts roam and spirits reside.",
        },
      },
      heartOfNature: {
        name: "Heart of Nature",
        id: "heartOfNature",
        description: {
          tr: "Ormanın kalbinde, doğanın ruhunu temsil eden gizemli bir alana açılan bir giriş.",
          en: "Deep within the forest, an entrance leading to a mysterious area symbolizing the spirit of nature.",
        },
      },
    },
  },
  cephalon: {
    description: {
      tr: "Mitoslarla dolu, eski çağlardan kalma bir şehir. Efsanelere göre, burası kayıp bir medeniyetin kalıntıları üzerine kurulmuştur.",
      en: "A city steeped in myths, dating back to ancient times. According to legends, it's built upon the remnants of a lost civilization.",
    },
    name: "Cephalon",
    id: "cephalon",
  },
  solsticeHaven: {
    description: {
      tr: "Daima günün en uzun ve en kısa olduğu günleri kutlayan bir şehir. Festivalleriyle ünlüdür, her dönüm noktasında kutlamalar yapılır.",
      en: "A city that celebrates the longest and shortest days of the year perpetually. Renowned for its festivals, it holds celebrations at every solstice.",
    },
    name: "Solstice Haven",
    id: "solsticeHaven",
  },
  duskmere: {
    description: {
      tr: "Gizemli ve romantik bir atmosfere sahip bir şehir. Gün batımındaki manzaralarıyla tanınır, aynı zamanda karanlık büyülere de ev sahipliği yapar.",
      en: "A city with a mysterious and romantic atmosphere, renowned for its sunset vistas and simultaneously hosting dark enchantments.",
    },
    name: "Duskmere",
    id: "duskmere",
  },
  celestia: {
    description: {
      tr: "Yüksek tepelerin üzerine kurulu, bulutların üstünde bir şehir. Gökyüzüne yakın olmasıyla bilinir ve burası yıldız gözlemleri için idealdir.",
      en: "Perched atop high hills, a city above the clouds. Known for its proximity to the sky, it's an ideal spot for stargazing.",
    },
    name: "Celestia",
    id: "celestia",
  },
  astradon: {
    description: {
      tr: "Astral enerjilerle dolu, mistik bir şehir. Burası farklı boyutlar arasında geçiş noktası olarak kabul edilir, mistik varlıkların izlerini taşır.",
      en: "An mystical city brimming with astral energies. It's considered a gateway between different dimensions, bearing traces of mystical beings.",
    },
    name: "Astradon",
    id: "astradon",
  },
  seraphim: {
    description: {
      tr: "Meleklerin efsanevi varlıklarıyla ilişkilendirilen bir şehir. Burası barış ve iyilik üzerine kurulmuş bir topluluktur.",
      en: "A city associated with the legendary beings of angels. It's a community built upon peace and goodness.",
    },
    name: "Seraphim",
    id: "seraphim",
  },
  shadowfen: {
    description: {
      tr: "Sisli bataklıklarla çevrili, gizemli bir şehir. Burası karanlık büyülere ve eski gizemlere ev sahipliği yapar.",
      en: "Surrounded by misty swamplands, a mysterious city that harbors dark enchantments and ancient mysteries.",
    },
    name: "Shadowfen",
    id: "shadowfen",
  },
  luminara: {
    description: {
      tr: "Parıldayan ışıklarıyla ünlü bir şehir. Burası kristal yapıları ve ışık oyunlarıyla bilinir, sanat ve ışık büyüsüne odaklanmıştır.",
      en: "A city renowned for its shimmering lights. It's known for its crystal structures and light displays, focusing on art and the enchantment of light.",
    },
    name: "Luminara",
    id: "luminara",
  },
  nyxhollow: {
    description: {
      tr: "Geceye adanmış, gölgelerin şehri. Ay ışığının gizemi ve gece ruhlarının dans ettiği bir yer olarak bilinir.",
      en: "Dedicated to the night, a city of shadows. Known for the mystery of moonlight and as a place where nocturnal spirits dance.",
    },
    name: "Nyxhollow",
    id: "nyxhollow",
  },
  wyvernsReach: {
    description: {
      tr: "Ejderhaların antik çağlardan kalan izlerini taşıyan bir şehir. Ejderha mitolojisi ve onların mirası burada yaşar, bir zamanlar bu şehirde ejderha uçuşları düzenlenirmiş.",
      en: "An ancient city bearing traces of dragons from antiquity. The mythology of dragons and their legacy live on here; it's said that dragon flights were once held in this city.",
    },
    name: "Wyvern's Reach",
    id: "wyvernsReach",
  },
};

export default Locations;
