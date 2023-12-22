import zephyrionLabyrinth from "./dungeons/zephyrion-labyrinth.dungeon";
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
        ...zephyrionLabyrinth,
      },
      templeOfTheElements: {
        name: "Temple of the Elements",
        id: "templeOfTheElements",
        description: {
          tr: "Her odada farklı bir elementin egemen olduğu, elementlere dayalı bulmacaların ve sınavların olduğu tapınak.",
          en: "A temple where each room is dominated by a different element, featuring puzzles and trials based on these elements.",
        },
      },
      magicalLibrary: {
        name: "Magical Library",
        id: "magicalLibrary",
        description: {
          tr: "Kaybolmuş büyüleri içeren, gizemli kitaplar ve sihirli engellerle korunan büyük bir kütüphane.",
          en: "A vast library safeguarded by mysterious books and magical barriers, containing lost enchantments.",
        },
      },
      corridorOfSpirits: {
        name: "Corridor of Spirits",
        id: "corridorOfSpirits",
        description: {
          tr: "Hayaletlerin dolaştığı, ruhları barındıran koridorlarla dolu bir labirent.",
          en: "A labyrinth filled with corridors harboring wandering ghosts and lingering spirits.",
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
    dungeons: {
      gigantiaShrine: {
        name: "Gigantia Shrine",
        id: "gigantiaShrine",
        description: {
          tr: "Dev antik yapıların içinde, kayıp bir tanrıya adanmış tapınaklar.",
          en: "Inside colossal ancient structures, temples dedicated to a lost god.",
        },
      },
      mythicMazeCitadel: {
        name: "Mythic Maze Citadel",
        id: "mythicMazeCitadel",
        description: {
          tr: "Eski efsaneler ve mitolojik yaratıkların labirenti, her bölüm farklı bir efsaneyle ilişkilendirilmiş.",
          en: "A labyrinthine complex intertwined with ancient legends and mythical creatures, each section intertwined with a distinct myth.",
        },
      },
      legendariadSpire: {
        name: "Legendariad Spire",
        id: "legendariadSpire",
        description: {
          tr: " Farklı efsanelerin anlatıldığı, kuleler arası geçişler gerektiren bir bölge.",
          en: "A region where towers stand, each narrating different legends, requiring passage between them to explore the diverse tales.",
        },
      },
      forgottenDivinityGrotto: {
        name: "Forgotten Divinity Grotto",
        id: "forgottenDivinityGrotto",
        description: {
          tr: " Unutulmuş tanrıların heykelleri ve gizli geçitlerle dolu gizemli bir mağara.",
          en: "A mysterious cave filled with statues of forgotten gods and concealed passages, shrouded in secrecy and ancient lore.",
        },
      },
      timeNexusObservatory: {
        name: "Time Nexus Observatory",
        id: "timeNexusObservatory",
        description: {
          tr: "Zamanla ilgili eski bir mekan, zamanla oynayabilen tuhaf mekanizmalar içerir.",
          en: "An ancient location intricately designed with peculiar mechanisms capable of manipulating time, serving as a hub for temporal exploration and understanding.",
        },
      },
    },
  },
  solsticeHaven: {
    description: {
      tr: "Daima günün en uzun ve en kısa olduğu günleri kutlayan bir şehir. Festivalleriyle ünlüdür, her dönüm noktasında kutlamalar yapılır.",
      en: "A city that celebrates the longest and shortest days of the year perpetually. Renowned for its festivals, it holds celebrations at every solstice.",
    },
    name: "Solstice Haven",
    id: "solsticeHaven",
    dungeons: {
      solarSanctum: {
        name: "Solar Sanctum",
        id: "solarSanctum",
        description: {
          tr: "Güneşin dönüm noktalarına adanmış, ışıkla dolu bir tapınak.",
          en: "A temple dedicated to the pivotal moments of the sun, brimming with radiant light and celestial symbolism.",
        },
      },
      chronoGate: {
        name: "Chrono Gate",
        id: "chronoGate",
        description: {
          tr: "Geçmiş ve geleceği manipüle edebilen gizemli bir portal.",
          en: "A mysterious portal capable of manipulating the past and the future, shrouded in enigmatic powers over time.",
        },
      },
      shiftwoodGrove: {
        name: "Shiftwood Grove",
        id: "shiftwoodGrove",
        description: {
          tr: "Mevsimlerin değişimlerini yansıtan, büyülü bitkiler ve gizemli yaratıklarla dolu bir orman.",
          en: "A forest teeming with enchanted flora and mystical creatures, reflecting the transitions of seasons and harboring a sense of magical transformation.",
        },
      },
    },
  },
  duskmere: {
    description: {
      tr: "Gizemli ve romantik bir atmosfere sahip bir şehir. Gün batımındaki manzaralarıyla tanınır, aynı zamanda karanlık büyülere de ev sahipliği yapar.",
      en: "A city with a mysterious and romantic atmosphere, renowned for its sunset vistas and simultaneously hosting dark enchantments.",
    },
    name: "Duskmere",
    id: "duskmere",
    dungeons: {
      oraclesSanctum: {
        name: "Oracle's Sanctum",
        id: "oraclesSanctum",
        description: {
          tr: "Geleceği gören kahinlerin ziyaret ettiği, gizemli bir mağara.",
          en: "Mysterious cave visited by seers and prophets, revered for its enigmatic ability to glimpse into the future.",
        },
      },
      spectralEnclave: {
        name: "Spectral Enclave",
        id: "spectralEnclave",
        description: {
          tr: "Gizemli hayaletlerin ve ruhların dolaştığı terk edilmiş bir şehir alanı.",
          en: "Abandoned urban area haunted by mysterious phantoms and wandering spirits, shrouded in an eerie, ghostly ambiance.",
        },
      },
      obscuriaArchives: {
        name: "Obscuria Archives",
        id: "obscuriaArchives",
        description: {
          tr: "Korkunç efsanelerin ve lanetli kitapların bulunduğu bir kütüphane.",
          en: "A library housing chilling legends and cursed tomes, containing a collection of terrifying tales and forbidden knowledge.",
        },
      },
    },
  },
  celestia: {
    description: {
      tr: "Yüksek tepelerin üzerine kurulu, bulutların üstünde bir şehir. Gökyüzüne yakın olmasıyla bilinir ve burası yıldız gözlemleri için idealdir.",
      en: "Perched atop high hills, a city above the clouds. Known for its proximity to the sky, it's an ideal spot for stargazing.",
    },
    name: "Celestia",
    id: "celestia",
    dungeons: {
      stellarLuminaryShrine: {
        name: "Stellar Luminary Shrine",
        id: "stellarLuminaryShrine",
        description: {
          tr: "Yıldızların gücünün adanmış olduğu, astral enerjilerle dolu bir tapınak.",
          en: "A temple dedicated to the power of the stars, infused with astral energies and celestial forces.",
        },
      },
      highSkyreachMonastery: {
        name: "High Skyreach Monastery",
        id: "highSkyreachMonastery",
        description: {
          tr: "Uzaklara doğru yükselen, bulutların üstünde bir manastır.",
          en: "A monastery soaring high above, resting atop the clouds, reaching toward distant horizons.",
        },
      },
      galesPassage: {
        name: "Gale's Passage",
        id: "galesPassage",
        description: {
          tr: " Hızlı geçişler ve rüzgarın gücüyle oluşturulan bir mağara.",
          en: "A cavern crafted for swift traversal, utilizing the power of wind currents to create rapid transitions within its confines.",
        },
      },
    },
  },
  astradon: {
    description: {
      tr: "Astral enerjilerle dolu, mistik bir şehir. Burası farklı boyutlar arasında geçiş noktası olarak kabul edilir, mistik varlıkların izlerini taşır.",
      en: "An mystical city brimming with astral energies. It's considered a gateway between different dimensions, bearing traces of mystical beings.",
    },
    name: "Astradon",
    id: "astradon",
    dungeons: {
      dimensionalTraverseArchway: {
        name: "Dimensional Traverse Archway",
        id: "dimensionalTraverseArchway",
        description: {
          tr: "Farklı boyutlara geçiş sağlayan, mistik bir geçit sistemine sahip bir geçit.",
          en: "A mystical gateway system allowing passage into various dimensions and realms.",
        },
      },
      starstoneCaverns: {
        name: "Starstone Caverns",
        id: "starstoneCaverns",
        description: {
          tr: "Astral enerjilerle dolu, mistik bir şehir. Burası farklı boyutlar arasında geçiş noktası olarak kabul edilir, mistik varlıkların izlerini taşır.",
          en: "An mystical city brimming with astral energies. It's considered a gateway between different dimensions, bearing traces of mystical beings.",
        },
      },
      eternalSoulwood: {
        name: "Eternal Soulwood",
        id: "eternalSoulwood",
        description: {
          tr: "Ruhların dolaştığı, mistik ağaçların bulunduğu gizemli bir ormanlık alan.",
          en: "A mystical wooded area where spirits wander among ancient, mystical trees, carrying an ethereal ambiance and ancient wisdom.",
        },
      },
      infinityVoidNexus: {
        name: "Infinity Void Nexus",
        id: "infinityVoidNexus",
        description: {
          tr: "Astral enerjinin yüksek olduğu, göz alıcı ve sıra dışı bir alana açılan bir geçit.",
          en: "A dazzling and extraordinary gateway leading to an area of heightened astral energy, captivating in its boundless expanse and brilliance.",
        },
      },
    },
  },
  seraphim: {
    description: {
      tr: "Meleklerin efsanevi varlıklarıyla ilişkilendirilen bir şehir. Burası barış ve iyilik üzerine kurulmuş bir topluluktur.",
      en: "A city associated with the legendary beings of angels. It's a community built upon peace and goodness.",
    },
    name: "Seraphim",
    id: "seraphim",
    dungeons: {
      seraphsAscent: {
        name: "Seraph's Ascent",
        id: "seraphsAscent",
        description: {
          tr: "Meleklerin izlerini taşıyan, bulutlar arasında yükselen bir labirent.",
          en: "A labyrinth soaring amidst the clouds, bearing traces of celestial beings and their ethereal presence.",
        },
      },
      chapelOfRadianceCaverns: {
        name: "Chapel of Radiance Caverns",
        id: "chapelOfRadianceCaverns",
        description: {
          tr: "Işıkla dolu, meleklerin ve ışığın gücünü yansıtan bir mağara sistem.",
          en: "A system of caves brimming with light, reflecting the power of angels and the brilliance of illumination.",
        },
      },
      elevationOfVirtueTemple: {
        name: "Elevation of Virtue Temple",
        id: "elevationOfVirtueTemple",
        description: {
          tr: " İyilik ve barışın sembolü, meleklerin adandığı bir tapınak.",
          en: "A sanctuary dedicated to goodness and peace, revered by angels as a symbol of benevolence.",
        },
      },
      purityRamparts: {
        name: "Purity Ramparts",
        id: "purityRamparts",
        description: {
          tr: "Koruyucu büyülerle güçlendirilmiş, ışıkla dolu bir surlar sistemi.",
          en: "Fortifications strengthened by protective enchantments, bathed in radiant light forming an illuminated barrier system.",
        },
      },
      sacredLamentPeak: {
        name: "Sacred Lament Peak",
        id: "sacredLamentPeak",
        description: {
          tr: "Meleklerin dualarının yükseldiği, yüksek bir dağ zirvesi.",
          en: "A lofty mountain summit where the prayers of angels ascend, echoing through the celestial heights.",
        },
      },
    },
  },
  shadowfen: {
    description: {
      tr: "Sisli bataklıklarla çevrili, gizemli bir şehir. Burası karanlık büyülere ve eski gizemlere ev sahipliği yapar.",
      en: "Surrounded by misty swamplands, a mysterious city that harbors dark enchantments and ancient mysteries.",
    },
    name: "Shadowfen",
    id: "shadowfen",
    dungeons: {
      "Phantom Moors": {
        name: "Phantom Moors",
        id: "phantomMoors",
        description: {
          tr: "Hayaletlerin dolaştığı, sislerle örtülü bir bataklık alanı.",
          en: "A marshland veiled in mists where phantoms roam, creating an eerie and mysterious atmosphere.",
        },
      },
      shadowcraftShrine: {
        name: "Shadowcraft Shrine",
        id: "shadowcraftShrine",
        description: {
          tr: "Lanetli büyülerin ve karanlık ritüellerin yapıldığı bir tapınak.",
          en: "A temple where cursed sorcery and dark rituals are practiced, shrouded in ominous energy and enigmatic ceremonies.",
        },
      },
      umbralLabyrinth: {
        name: "Umbral Labyrinth",
        id: "umbralLabyrinth",
        description: {
          tr: "Karanlık gölgelerle dolu, karanlık büyülerin bulunduğu bir labirent.",
          en: "A maze filled with dark shadows and imbued with the essence of sinister sorcery, concealing arcane and mysterious powers within its depths.",
        },
      },
      accursedHollows: {
        name: "Accursed Hollows",
        id: "accursedHollows",
        description: {
          tr: "Hayaletlerin ve lanetli ruhların barındığı, karanlık ve tehlikeli bir mağara sistemi.",
          en: "A perilous cave system harboring phantoms and cursed spirits, immersed in darkness and inherent danger.",
        },
      },
      abyssOfSorrow: {
        name: "Abyss of Sorrow",
        id: "abyssOfSorrow",
        description: {
          tr: "Üzüntü ve karanlığın hakim olduğu, mistik bir bölge.",
          en: "A mystical realm where sadness and darkness reign supreme, shrouded in an aura of melancholy and mystique.",
        },
      },
    },
  },
  luminara: {
    description: {
      tr: "Parıldayan ışıklarıyla ünlü bir şehir. Burası kristal yapıları ve ışık oyunlarıyla bilinir, sanat ve ışık büyüsüne odaklanmıştır.",
      en: "A city renowned for its shimmering lights. It's known for its crystal structures and light displays, focusing on art and the enchantment of light.",
    },
    name: "Luminara",
    id: "luminara",
    dungeons: {
      cascadeOfLight: {
        name: "Cascade of Light",
        id: "cascadeOfLight",
        description: {
          tr: " Işığın akan bir şelaleyle temsil edildiği, aydınlık ve büyülü bir yer.",
          en: "A luminous and enchanting place represented by a cascading waterfall of light, radiating brightness and enchantment.",
        },
      },
      radiantSpire: {
        name: "Radiant Spire",
        id: "radiantSpire",
        description: {
          tr: " Işık büyüsünün öğretildiği ve kullanıldığı bir kule.",
          en: "A tower where light magic is taught and practiced, serving as a hub for the mastery and utilization of luminous enchantments.",
        },
      },
      skyMirrors: {
        name: "Sky Mirrors",
        id: "skyMirrors",
        description: {
          tr: "Yıldızların yansıtıldığı ve ışığın oyunlarının izlenebildiği bir alan.",
          en: "A space where stars are reflected, allowing the observation of the playful dance of light in the celestial expanse.",
        },
      },
      tracesOfTheStars: {
        name: "Traces of the Stars",
        id: "tracesOfTheStars",
        description: {
          tr: "Aydınlık yolların bulunduğu, yıldızların izlerini takip eden bir alan.",
          en: "An area adorned with illuminated pathways, where one follows the trails left by the stars, guiding travelers through their celestial journey.",
        },
      },
    },
  },
  nyxhollow: {
    description: {
      tr: "Geceye adanmış, gölgelerin şehri. Ay ışığının gizemi ve gece ruhlarının dans ettiği bir yer olarak bilinir.",
      en: "Dedicated to the night, a city of shadows. Known for the mystery of moonlight and as a place where nocturnal spirits dance.",
    },
    name: "Nyxhollow",
    id: "nyxhollow",
    dungeons: {
      obsidianDreamCavern: {
        name: "Obsidian Dream Cavern",
        id: "obsidianDreamCavern",
        description: {
          tr: "Karanlık rüyaların ve kabusların yaşandığı, karanlıkla dolu bir mağara.",
          en: "A cave shrouded in darkness where dark dreams and nightmares take form, embodying an abyss of unsettling visions.",
        },
      },
      nocturnalPassage: {
        name: "Nocturnal Passage",
        id: "nocturnalPassage",
        description: {
          tr: " Karanlıkta yolunu bulmaya çalışanların karşılaştığı bir alan.",
          en: "A domain where travelers navigate through darkness, encountering challenges as they seek their path amidst the shroud of night.",
        },
      },
      dreadHollow: {
        name: "Dread Hollow",
        id: "dreadHollow",
        description: {
          tr: "Korkuların ve karanlığın en derin olduğu, gizemli bir bölge.",
          en: "A mysterious realm where fears and darkness reach their deepest depths, shrouded in enigma and foreboding ambiance.",
        },
      },
      midnightPathway: {
        name: "Midnight Pathway",
        id: "midnightPathway",
        description: {
          tr: "Ay ışığının en güçlü olduğu, gecenin yolları.",
          en: " The pathways illuminated by the strongest moonlight, traversing through the essence of the night.",
        },
      },
    },
  },
  wyvernsReach: {
    description: {
      tr: "Ejderhaların antik çağlardan kalan izlerini taşıyan bir şehir. Ejderha mitolojisi ve onların mirası burada yaşar, bir zamanlar bu şehirde ejderha uçuşları düzenlenirmiş.",
      en: "An ancient city bearing traces of dragons from antiquity. The mythology of dragons and their legacy live on here; it's said that dragon flights were once held in this city.",
    },
    name: "Wyvern's Reach",
    id: "wyvernsReach",
    dungeons: {
      dragonMonument: {
        name: "Dragon Monument",
        id: "dragonMonument",
        description: {
          tr: "Ejderha heykellerinin bulunduğu, antik ejderha anıtlarının korunduğu bir alan.",
          en: " An area adorned with dragon sculptures, safeguarding ancient dragon monuments within its confines.",
        },
      },
      infernoCaverns: {
        name: "Inferno Caverns",
        id: "infernoCaverns",
        description: {
          tr: "Alev kusabilen yaratıkların ve lav akıntılarının bulunduğu, tehlikeli bir mağara.",
          en: "A perilous cave inhabited by creatures capable of spewing flames and featuring streams of lava, creating a hazardous environment.",
        },
      },
      scaleboundDungeons: {
        name: "Scalebound Dungeons",
        id: "scaleboundDungeons",
        description: {
          tr: "Ejderhaların pullarını taşıyan, ejderha koruması altındaki zindanlar.",
          en: "Dungeons protected by dragons and adorned with the scales of these majestic creatures.",
        },
      },
      scaleCollectorsDungeon: {
        name: "Scale Collector's Dungeon",
        id: "scaleCollectorsDungeon",
        description: {
          tr: "Ejderhaların izlerini takip eden bir macera boyunca pulları toplamaya odaklanılan bir zindan.",
          en: "A dungeon adventure centered around tracking the traces of dragons to collect their scales along the way.",
        },
      },
    },
  },
};

export default Locations;
