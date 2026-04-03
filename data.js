// ============================================================
// MAHABHARATA WEBSITE DATA
// Sources: BORI Critical Edition, Ganguli Translation (1883-96),
//          Bhagavad Gita As It Is (Prabhupada), Valmiki/Vyasa texts
// ============================================================
// Add these constants at the top of data.js
const KAURAVA_BROTHERS = [
  "Duryodhana", "Dushasana", "Vikarna", "Chitrasena", "Vivimsati", "Dussaha", "Durmukha", "Durmarshana", "Vivitsu", "Jalasandha", "Sama", "Saha", "Vinda", "Anuvinda", "Durdharsha", "Subahu", "Dushpradharshana", "Durmarshana", "Durmukha", "Dushkarna", "Karna", "Chitra", "Upachitra", "Chitraksba", "Charuchitra", "Sarasana", "Durmada", "Durvigaha", "Vivitsu", "Vikalanana", "Urnanabha", "Sunabha", "Nanda", "Upananda", "Chitrabana", "Chitravarman", "Suvarman", "Durvilochana", "Ayobahu", "Mahabahu", "Chitrangada", "Chitrakuvala", "Bhimavega", "Bhimabala", "Balaki", "Balavardhana", "Ugrayudha", "Bhimaratha", "Suratha", "Karna", "Dhurdhara", "Dhurmukha", "Dhurjaya", "Durvirocha", "Duryodhana", "Dushasana", "Vikarna", "Sama", "Saha", "Vinda", "Anuvinda", "Durdharsha", "Subahu", "Dushpradharshana", "Durmarshana", "Durmukha", "Dushkarna", "Karna", "Chitra", "Upachitra", "Chitraksba", "Charuchitra", "Sarasana", "Durmada", "Durvigaha", "Vivitsu", "Vikalanana", "Urnanabha", "Sunabha", "Nanda", "Upananda", "Chitrabana", "Chitravarman", "Suvarman", "Durvilochana", "Ayobahu", "Mahabahu", "Chitrangada", "Chitrakuvala", "Bhimavega", "Bhimabala", "Balaki", "Balavardhana", "Ugrayudha", "Bhimaratha", "Suratha", "Karna", "Dushala (Sister)", "Yuyutsu (Half-brother)"
];

const FAMILY_LINKS = [
  { parent: "Shantanu", wife: "Ganga", children: ["Bhishma"] },
  { parent: "Shantanu", wife: "Satyavati", children: ["Chitrangada", "Vichitravirya"] },
  { parent: "Vichitravirya", wife: "Ambika", children: ["Dhritarashtra"] },
  { parent: "Vichitravirya", wife: "Ambalika", children: ["Pandu"] },
  { parent: "Vichitravirya", wife: "Maid", children: ["Vidura"] }
];
const CHARACTERS = [
  // ── PANDAVAS ──
  {
    id: "yudhishthira",
    name: "Yudhishthira",
    sanskrit: "युधिष्ठिर",
    title: "The King of Dharma",
    group: "pandava",
    emoji: "👑",
    color: "#D4AF37",
    parents: "Kunti & Dharma (God of Righteousness)",
    spouse: "Draupadi, Devika",
    children: "Prativindhya (by Draupadi), Yaudheya (by Devika)",
    weapon: "Spear",
    shortDesc: "The eldest Pandava, known for his unwavering commitment to truth and righteousness.",
    fullDesc: `Yudhishthira, meaning "steady in battle," was the eldest of the five Pandava brothers. He was the son of Queen Kunti and the god Dharma (Yama), and thus also known as Dharmaraja — the King of Righteousness.\n\nYudhishthira was celebrated for his deep commitment to truth. It is said that throughout his life, he never uttered a single lie — except once on the battlefield of Kurukshetra, when he said "Ashwatthama is dead" ambiguously, which he deeply regretted.\n\nHis greatest weakness was his love for gambling. When challenged to a dice game by the cunning Shakuni, Yudhishthira lost his kingdom, his brothers, himself, and even Draupadi — leading to the great war.\n\nAfter the war, Yudhishthira became the emperor of Hastinapura. He performed the Ashwamedha Yajna and ruled justly for many years before undertaking the great journey to heaven (Mahaprasthanika Parva).`,
    kidFriendly: "Yudhishthira was the oldest Pandava brother. He was known for always telling the truth — he was one of the most honest people in the whole story! He loved his brothers very much and became king after the great war.",
    facts: ["Never told a lie in his entire life (almost!)", "His chariot wheel never touched the ground because of his righteousness", "He was so righteous that even his enemies respected him", "He chose a dog's company over heaven, showing his compassion"],
    significance: "Yudhishthira represents the ideal of Dharma — righteous conduct in all situations."
  },
  {
    id: "bhima",
    name: "Bhima",
    sanskrit: "भीम",
    title: "The Son of Wind",
    group: "pandava",
    emoji: "💪",
    color: "#8B4513",
    parents: "Kunti & Vayu (God of Wind)",
    spouse: "Draupadi, Hidimba, Balandhara",
    children: "Sutasoma (by Draupadi), Ghatotkacha (by Hidimba), Sarvaga (by Balandhara)",
    weapon: "Mace (Gada)",
    shortDesc: "The second Pandava, possessing the strength of ten thousand elephants. A fierce warrior and devoted brother.",
    fullDesc: `Bhima was the second of the Pandava brothers, born of Kunti and the wind-god Vayu. Gifted with extraordinary physical strength — said to equal ten thousand elephants — he was the most powerful warrior among the Pandavas.\n\nFrom childhood, Bhima had a fierce rivalry with Duryodhana. Jealous of Bhima's strength, Duryodhana once poisoned him and threw him into the Ganga river, but Bhima was rescued by the Nagas and received even greater strength.\n\nBhima was also a gourmet and cook of extraordinary skill — he later disguised himself as a cook named Vallabha in the court of King Virata during the Pandavas' year of incognito exile.\n\nHis most memorable vow was to kill all 100 Kauravas in battle to avenge the humiliation of Draupadi. He fulfilled every vow — killing Dushasana and smearing Draupadi's hair with his blood, and finally killing Duryodhana in a mace duel.`,
    kidFriendly: "Bhima was the second Pandava brother and the strongest of them all! He was as strong as ten thousand elephants. He loved eating, cooking, and fighting for his family. He was very protective of his brothers and Draupadi.",
    facts: ["Had the strength of ten thousand elephants", "His son Ghatotkacha was a mighty rakshasa warrior", "He ate so much that he was sometimes called 'Vrikodara' (wolf-bellied)", "He once lived for a year disguised as a cook"],
    significance: "Bhima represents the power of righteous action and the protector of the innocent."
  },
  {
    id: "arjuna",
    name: "Arjuna",
    sanskrit: "अर्जुन",
    title: "The Greatest Archer",
    group: "pandava",
    emoji: "🏹",
    color: "#1a5f7a",
    parents: "Kunti & Indra (King of Gods)",
    spouse: "Draupadi, Subhadra, Ulupi, Chitrangada",
    children: "Shrutakarma (Draupadi), Abhimanyu (Subhadra), Iravan (Ulupi), Babruvahana (Chitrangada)",
    weapon: "Gandiva bow, Pashupatastra",
    shortDesc: "The greatest archer of his age and recipient of the Bhagavad Gita. Krishna's dearest friend.",
    fullDesc: `Arjuna, the third Pandava, is often considered the central hero of the Mahabharata. Born of Kunti and Indra, the king of the gods, he possessed divine gifts of strength, speed, and archery skill unsurpassed in his era.\n\nArjuna was the favorite student of Drona, the great weapons teacher. He shot a bird's eye while balancing on one leg — demonstrating the focus that would define his life. He won the great Swayamvara contest (archery tournament) to marry Draupadi.\n\nIt is to Arjuna that Lord Krishna delivered the Bhagavad Gita on the battlefield of Kurukshetra. When Arjuna saw his relatives in the opposing army and refused to fight, Krishna spent the first chapter of their dialogue listening to Arjuna's grief, then delivered the 700 verses of divine wisdom.\n\nArjuna's most celebrated achievements include defeating Shiva himself (as a hunter) to receive the Pashupatastra, retrieving the cattle of Virata single-handedly, and finally slaying Karna in the great war.`,
    kidFriendly: "Arjuna was the best archer in the whole world! He could shoot an arrow so precisely that he could hit a fish's eye by only looking at its reflection in water. He was Lord Krishna's best friend, and Krishna taught him the Bhagavad Gita — the most important lessons about life.",
    facts: ["Shot a rotating fish's eye looking only at its reflection in water", "Was taught directly by Drona AND by the god Shiva", "His bow was called Gandiva — a divine weapon", "He is sometimes called Savyasachi (ambidextrous archer)"],
    significance: "Arjuna represents the sincere seeker of truth who receives divine guidance."
  },
  {
    id: "nakula",
    name: "Nakula",
    sanskrit: "नकुल",
    title: "The Handsome Twin",
    group: "pandava",
    emoji: "⚔️",
    color: "#2d6a4f",
    parents: "Madri & Ashwini Kumaras (Twin Divine Physicians)",
    spouse: "Draupadi, Karenumati",
    children: "Shatanika (Draupadi), Niramitra (Karenumati)",
    weapon: "Sword",
    shortDesc: "The fourth Pandava, twin brother of Sahadeva. Known for unmatched beauty and skill with horses.",
    fullDesc: `Nakula was the fourth of the Pandava brothers, one of the twin sons of Madri (Pandu's second wife) and the Ashwini Kumaras — the divine physicians of the gods. He was said to be the most handsome man on earth.\n\nNakula was an expert horseman and could handle any horse or chariot with supreme skill. During the year of hiding, he disguised himself as a horse-keeper named Granthika in the kingdom of Virata.\n\nDespite being considered less prominently than his older brothers, Nakula was devoted, skilled, and deeply loyal to Yudhishthira. He was one of the warriors who survived the Kurukshetra war.`,
    kidFriendly: "Nakula was one of the younger Pandava brothers — a twin! He was known for being very handsome and the best with horses. He could tame any wild horse and was an amazing horseman.",
    facts: ["Said to be the most handsome man alive", "Expert with horses and swords", "His twin was Sahadeva", "During the year of hiding, he worked as a horse keeper"],
    significance: "Nakula represents loyalty, skill, and devoted service."
  },
  {
    id: "sahadeva",
    name: "Sahadeva",
    sanskrit: "सहदेव",
    title: "The Wise Twin",
    group: "pandava",
    emoji: "🌟",
    color: "#6b4226",
    parents: "Madri & Ashwini Kumaras",
    spouse: "Draupadi, Vijaya",
    children: "Shrutasena (Draupadi), Suhotra (Vijaya)",
    weapon: "Sword",
    shortDesc: "The youngest Pandava. A brilliant astrologer and the wisest of the five brothers.",
    fullDesc: `Sahadeva was the youngest of the five Pandavas, twin brother of Nakula. While Nakula was known for his beauty and horsemanship, Sahadeva was renowned for his wisdom and knowledge of astrology and omens.\n\nHe is said to have known the outcome of the Kurukshetra war from the beginning — including who would live and who would die — but was under a curse that prevented him from revealing this knowledge unless asked.\n\nDuryodhana actually consulted Sahadeva about the most auspicious date to begin the war (knowing Sahadeva would never lie), and Sahadeva honestly gave him the date — which was also the most auspicious for the Pandavas.\n\nDuring the year of hiding, he disguised himself as a cowherd named Tantripala in Virata's kingdom.`,
    kidFriendly: "Sahadeva was the youngest Pandava and Nakula's twin brother. He was the wisest of all brothers and knew how to read stars and predict the future! He always told the truth, even to his enemies.",
    facts: ["Could predict the future through astrology", "Knew the war's outcome but couldn't tell anyone unless asked", "Even Duryodhana trusted him for honest answers", "Was an expert with cows and cattle"],
    significance: "Sahadeva represents wisdom, honesty, and the power of knowledge."
  },
  {
    id: "draupadi",
    name: "Draupadi",
    sanskrit: "द्रौपदी",
    title: "The Fire-Born Princess",
    group: "pandava",
    emoji: "🔥",
    color: "#c0392b",
    parents: "Born from sacred fire of King Drupada",
    spouse: "All five Pandavas",
    children: "Upapandavas (five sons, one from each Pandava)",
    weapon: "Wisdom and divine protection",
    shortDesc: "The wife of the five Pandavas. Born from sacred fire. A symbol of strength, dignity, and divine protection.",
    fullDesc: `Draupadi, also called Krishnaa (dark-complexioned) and Panchali (princess of Panchala), is one of the most complex and powerful women in the Mahabharata. She was born from a sacred sacrificial fire lit by her father Drupada with the specific purpose of producing a child who would destroy Drona.\n\nShe won Arjuna at her Swayamvara — a contest where she chose her husband. Through a misunderstanding when Arjuna brought her home, she ended up marrying all five Pandava brothers.\n\nThe most pivotal moment of her life — and the Mahabharata — came when Yudhishthira gambled her away in the dice game. The Kauravas attempted to disrobe her in the royal court. In her moment of deepest humiliation, Draupadi cried out to Lord Krishna, who miraculously extended her sari so it could never be removed. This insult became the central cause of the Kurukshetra war.\n\nDraupadi is worshipped as a goddess in South India (Draupadi Amman), particularly in Tamil Nadu.`,
    kidFriendly: "Draupadi was a very special princess who was born from sacred fire — she just appeared in flames! She was brave and strong and married all five Pandava brothers. When she was treated unfairly, Lord Krishna protected her with a miracle. She is still worshipped as a goddess in India today!",
    facts: ["Born from a sacred fire, not from a mother", "Worshipped as a goddess (Draupadi Amman) in Tamil Nadu", "Her humiliation triggered the Kurukshetra war", "Krishna miraculously protected her sari during attempted disrobing"],
    significance: "Draupadi represents the dignity of women and divine protection of the righteous."
  },
  // ── KAURAVAS ──
  {
    id: "duryodhana",
    name: "Duryodhana",
    sanskrit: "दुर्योधन",
    title: "The Stubborn Prince",
    group: "kaurava",
    emoji: "⚠️",
    color: "#4a0e0e",
    parents: "Gandhari & Dhritarashtra",
    spouse: "Bhanumati",
    children: "Lakshmana Kumara",
    weapon: "Mace (Gada)",
    shortDesc: "The eldest Kaurava prince. His jealousy and pride led to the great war. A tragic antagonist.",
    fullDesc: `Duryodhana was the eldest of the 100 Kaurava brothers, son of King Dhritarashtra and Queen Gandhari. His name means "difficult to conquer in battle" — though he was ultimately defeated.\n\nFrom childhood, Duryodhana harbored deep jealousy toward the Pandavas, particularly Bhima. He attempted to kill Bhima by poisoning him as a child. His jealousy stemmed partly from his own insecurity — the Pandavas were always praised more.\n\nDuryodhana had genuine virtues: he was a skilled warrior (a student of Balarama in mace-fighting), a loyal friend to Karna, and a generous ruler. Karna's loyalty to him was absolute. His greatest flaw was his pride and inability to accept the Pandavas' rightful claim.\n\nIt was Duryodhana's refusal to give the Pandavas even "five villages" — even after the Kurukshetra war was inevitable — that sealed the fate of millions. He died in a mace duel with Bhima.`,
    kidFriendly: "Duryodhana was the oldest of 100 brothers called the Kauravas. He was very jealous of the Pandava brothers and this jealousy caused great trouble. He was actually a skilled fighter and a loyal friend — but his refusal to share caused a terrible war.",
    facts: ["Had 99 brothers — all born from the same mother Gandhari", "Was a student of Balarama (Krishna's brother) for mace fighting", "His best friend Karna was actually the eldest Pandava (unknown to him)", "He chose Krishna's army over Krishna's personal guidance"],
    significance: "Duryodhana represents the tragedy of pride and jealousy overcoming one's better nature."
  },
  {
    id: "karna",
    name: "Karna",
    sanskrit: "कर्ण",
    title: "The Generous Warrior",
    group: "kaurava",
    emoji: "☀️",
    color: "#c47a00",
    parents: "Kunti & Surya (Sun God) — raised by charioteer Adhiratha",
    spouse: "Vrushali, Supriya",
    children: "Vrishasena, Chitrasena, and others",
    weapon: "Divine armor (Kavacha-Kundala), Vasavi Shakti spear",
    shortDesc: "The greatest tragic hero of Mahabharata. Born with divine armor. Loyal friend, generous giver, and unparalleled warrior.",
    fullDesc: `Karna is perhaps the most beloved and tragic figure in all of Mahabharata. Born of Queen Kunti before her marriage — when she inadvertently summoned the Sun god Surya with a divine mantra — Karna was born wearing natural golden armor (Kavacha) and earrings (Kundala) that made him nearly invincible.\n\nAbandoned by Kunti in a basket on a river, he was raised by a charioteer named Adhiratha and his wife Radha, giving him the name Radheya. Throughout his life, Karna was mocked as a "suta-putra" (charioteer's son) and denied the education of a Kshatriya warrior — despite his extraordinary abilities.\n\nKarna's loyalty to Duryodhana — who recognized his genius and made him king of Anga — was absolute. Even after Kunti revealed to Karna that he was the eldest Pandava, he refused to switch sides and betray his friend.\n\nHe was renowned for his generosity — he never turned away a person who asked him for anything. Even on the day of his death, when Indra came disguised as a Brahmin asking for his Kavacha-Kundala (his divine armor), Karna gave it, knowing it would lead to his death.\n\nKrishna himself said that if all virtues were placed on one side of a scale, Karna's generosity alone might outweigh them.`,
    kidFriendly: "Karna is the saddest and most inspiring character in the story. He was actually the oldest Pandava brother — but nobody knew! He was born with magical golden armor. He was the most generous person who ever lived — he would give anything to anyone who asked. He chose to stay loyal to his friend even when he knew he would lose.",
    facts: ["Was actually the eldest Pandava — Kunti's first son", "Born with natural golden armor and earrings that made him invincible", "Gave away his protective armor to Indra while knowing it would kill him", "Krishna considered him one of the greatest warriors ever born", "His charity was so legendary that even gods sought to test it"],
    significance: "Karna represents loyalty, generosity, and the tragedy of circumstance over character."
  },
  {
    id: "shakuni",
    name: "Shakuni",
    sanskrit: "शकुनि",
    title: "The Master Gambler",
    group: "kaurava",
    emoji: "🎲",
    color: "#2c003e",
    parents: "King Subala of Gandhara",
    spouse: "Unknown",
    children: "Uluka",
    weapon: "Cunning, loaded dice",
    shortDesc: "Uncle of the Kauravas and master of deception. His dice game changed the course of history.",
    fullDesc: `Shakuni was the prince of Gandhara and brother of Gandhari (Duryodhana's mother). He was the master manipulator of the Mahabharata, engineering the dice game that led directly to the Kurukshetra war.\n\nAccording to some versions, Shakuni harbored deep resentment against the Kuru family — when Bhishma arranged Gandhari's marriage to the blind Dhritarashtra, Shakuni's family was imprisoned and humiliated. His dice were supposedly made from his father's bones, ensuring he always won.\n\nShakuni was extraordinarily intelligent and a master strategist. He manipulated Duryodhana at every step — not out of love for his nephew, but to destroy the Kuru dynasty from within as revenge.`,
    kidFriendly: "Shakuni was the uncle of Duryodhana and a very clever but tricky person. He was the best dice player in the world — but his dice were magical and always helped him cheat. He talked Duryodhana into making bad decisions.",
    facts: ["His dice were made from his father's bones", "He secretly wanted to destroy the Kuru dynasty", "He was from the kingdom of Gandhara (present-day Afghanistan)", "He was killed in the war by Sahadeva"],
    significance: "Shakuni represents the destructive power of hatred disguised as loyalty."
  },
  // ── DIVINE ──
  {
    id: "krishna",
    name: "Krishna",
    sanskrit: "कृष्ण",
    title: "The Divine Strategist",
    group: "divine",
    emoji: "🪈",
    color: "#1a237e",
    parents: "Devaki & Vasudeva (biological), Yashoda & Nanda (foster)",
    spouse: "Rukmini, Satyabhama, and others",
    children: "Pradyumna, and others",
    weapon: "Sudarshana Chakra, Kaumodaki mace, His wisdom",
    shortDesc: "The eighth avatar of Vishnu. Arjuna's charioteer, divine guide, and the speaker of the Bhagavad Gita.",
    fullDesc: `Krishna is the central divine figure of the Mahabharata and is considered the eighth avatar (incarnation) of Lord Vishnu. He plays a unique role — not as a warrior who fights, but as a guide, friend, and the revealer of divine truth.\n\nKrishna was a childhood friend of the Pandavas and later became Arjuna's closest companion and brother-in-law (he gave his sister Subhadra to Arjuna). When war became inevitable, both Duryodhana and Arjuna approached Krishna for help. Krishna gave Duryodhana his entire army and gave Arjuna himself — as a non-combatant charioteer.\n\nOn the battlefield of Kurukshetra, Krishna revealed his divine cosmic form (Vishwarupa) to Arjuna and delivered the Bhagavad Gita — 700 verses of spiritual wisdom that cover dharma, devotion, action, knowledge, and liberation.\n\nKrishna's diplomacy is legendary. He went to Hastinapura as a peace ambassador, offering Duryodhana a last chance to avoid war. When Duryodhana arrogantly tried to imprison Krishna, the Lord revealed his cosmic form, filling the entire palace with his radiance.\n\nAfter the war, Krishna lived for 36 years before the Pandavas' retirement. He died when a hunter mistook his foot for a deer and shot him with an arrow.`,
    kidFriendly: "Krishna is the most important character in the whole story! He is God himself, come to Earth to help people. He was Arjuna's best friend and charioteer during the war. He taught Arjuna the most important lessons about life — lessons called the Bhagavad Gita. He never picked up a weapon during the war but guided everyone with his wisdom and love.",
    facts: ["Lifted the entire Govardhana mountain on his little finger", "Revealed his infinite cosmic form (Vishwarupa) on the battlefield", "Gave his entire army to Duryodhana but chose to guide Arjuna personally", "Was the 8th avatar of Lord Vishnu", "His flute music could charm all living beings"],
    significance: "Krishna represents divine wisdom, unconditional love, and the ultimate guide on the path of righteousness."
  },
  {
    id: "bhishma",
    name: "Bhishma",
    sanskrit: "भीष्म",
    title: "The Grandfather",
    group: "sage",
    emoji: "🏹",
    color: "#37474f",
    parents: "Ganga (river goddess) & King Shantanu",
    spouse: "None (took a vow of celibacy)",
    children: "None",
    weapon: "All weapons — an unmatched master",
    shortDesc: "The grand patriarch of the Kuru family. Made a terrible vow to protect the throne at the cost of his own happiness.",
    fullDesc: `Bhishma, born Devavrata, is one of the most powerful and tragic figures in the Mahabharata. The son of King Shantanu and the river goddess Ganga, he possessed exceptional martial abilities taught by the great sage Parashurama himself.\n\nHis tragedy began when his father Shantanu fell in love with Satyavati, a fisherman's daughter. Her father refused the marriage unless Satyavati's sons inherited the throne — not Devavrata. To fulfil his father's wishes, Devavrata took two terrible vows: to never claim the throne, and to remain celibate his entire life. This extreme vow earned him the name Bhishma (one who has made a terrible vow).\n\nBhishma then served the Kuru throne loyally for his entire long life — long because he had received a boon to die only when he chose to. He educated the Pandavas and Kauravas, served as commander of the Kaurava army for the first 10 days of the Kurukshetra war, and fell on a bed of arrows.\n\nLying on his bed of arrows, waiting for the auspicious moment to die, Bhishma delivered the Shanti Parva — over 14,000 verses of wisdom on dharma, statecraft, and spirituality — to Yudhishthira.`,
    kidFriendly: "Bhishma was the great-grandfather of both the Pandavas and Kauravas. He made a very hard promise when he was young to never get married and to always protect the kingdom. He kept his promise his whole life even though it made him very sad sometimes. He was so strong that he could choose when to die!",
    facts: ["Could choose the moment of his own death", "Was taught by the legendary sage Parashurama", "Lay on a bed of arrows for 58 days waiting for an auspicious time to die", "His original name was Devavrata — Bhishma means 'one who made a terrible vow'", "Taught thousands of verses of wisdom while dying"],
    significance: "Bhishma represents sacrifice, loyalty, and the complex weight of unfulfilled duties."
  },
  {
    id: "drona",
    name: "Drona",
    sanskrit: "द्रोण",
    title: "The Master Teacher",
    group: "sage",
    emoji: "📚",
    color: "#1b5e20",
    parents: "Born from a pot (Drona = pot), son of sage Bharadwaja",
    spouse: "Kripi",
    children: "Ashwatthama",
    weapon: "Brahmastra, all divine weapons",
    shortDesc: "The greatest weapons teacher of the age. Guru of both Pandavas and Kauravas. Torn between duty and love.",
    fullDesc: `Dronacharya was born of the sage Bharadwaja in a miraculous fashion — hence the name Drona (born from a pot). He became the preeminent acharya (teacher) of weapons and warfare of his age.\n\nDrona was a childhood friend of Drupada, prince of Panchala. When they grew up, Drupada humiliated Drona publicly, refusing to acknowledge their friendship. This led Drona to seek revenge through his students — he asked the Pandavas to capture Drupada as their gurudakshina (teacher's fee).\n\nDrona taught both the Pandavas and Kauravas. His favorite student was Arjuna, whom he considered the greatest archer in the world. He famously denied Ekalavya's discipleship (fearing a rival to Arjuna) and asked for Ekalavya's right thumb as gurudakshina — one of the controversial episodes of the epic.\n\nIn the war, Drona commanded the Kaurava army after Bhishma's fall. He was devastated when told (falsely) that his son Ashwatthama had died — and was killed by Dhrishtadyumna while distracted in grief.`,
    kidFriendly: "Drona was the greatest teacher of warriors in the whole world. He taught both the Pandavas and Kauravas how to fight. His favorite student was Arjuna, who became the greatest archer ever. Drona was very wise but also made some unfair decisions that he later regretted.",
    facts: ["Taught the entire Kuru royal family all warfare skills", "His favorite student was Arjuna", "His son Ashwatthama also became a great warrior", "He knew how to use the Brahmastra — the most powerful weapon", "He was born miraculously from a pot"],
    significance: "Drona represents the dual burden of a teacher — loyalty to students vs. duty to righteousness."
  },
  {
    id: "vidura",
    name: "Vidura",
    sanskrit: "विदुर",
    title: "The Wise Minister",
    group: "sage",
    emoji: "🧿",
    color: "#4527a0",
    parents: "Sage Vyasa & a palace maid",
    spouse: "Sulabha",
    children: "None mentioned prominently",
    weapon: "Wisdom and righteous counsel",
    shortDesc: "Half-brother of Dhritarashtra and Pandu. The wisest and most righteous minister in Hastinapura.",
    fullDesc: `Vidura was the son of sage Vyasa and a palace maidservant. He was the half-brother of Dhritarashtra and Pandu, and served as the prime minister of Hastinapura under King Dhritarashtra.\n\nVidura was known as the embodiment of dharma — some versions say he was an incarnation of Yama (god of righteousness) himself. His counsel was always righteous, though often ignored by Dhritarashtra who was blinded by love for his son Duryodhana.\n\nVidura repeatedly warned against the dice game, against the disrobing of Draupadi, and urged that the Pandavas receive their rightful share of the kingdom. When his advice was ignored, he retired to the forest in grief.\n\nThe "Vidura Niti" — a collection of his wise sayings and political maxims — is still studied as a classic text of statecraft and ethics.`,
    kidFriendly: "Vidura was the wisest person in the palace. He was the king's brother and his top adviser. He always told the truth and tried to stop the bad things from happening — but nobody listened to him. He wrote down many wise lessons that people still read today!",
    facts: ["Said to be an incarnation of the god Yama (Dharma)", "His 'Vidura Niti' is a classic text of wisdom", "Always opposed the mistreatment of the Pandavas", "He hosted the sage Maitreya and is described as humble and genuinely virtuous"],
    significance: "Vidura represents the voice of conscience and the often-unheeded wisdom of righteousness."
  },
  {
    id: "abhimanyu",
    name: "Abhimanyu",
    sanskrit: "अभिमन्यु",
    title: "The Brave Young Hero",
    group: "pandava",
    emoji: "🌙",
    color: "#0277bd",
    parents: "Arjuna & Subhadra",
    spouse: "Uttara",
    children: "Parikshit (born after his death)",
    weapon: "Bow, chariot warfare",
    shortDesc: "Son of Arjuna. Learned the art of Chakravyuha formation in the womb. A symbol of youthful bravery.",
    fullDesc: `Abhimanyu was the son of Arjuna and Subhadra (Krishna's sister). He is celebrated as one of the bravest warriors in the Mahabharata and his death is one of its most heart-wrenching episodes.\n\nAccording to the epic, when Abhimanyu was still in his mother's womb, Arjuna was explaining the secret of how to break the Chakravyuha (a complex spiral military formation) to Subhadra. She fell asleep before Arjuna could explain how to EXIT the formation — so Abhimanyu was born knowing how to enter but not how to exit.\n\nAt age 16, on the 13th day of the Kurukshetra war, Abhimanyu alone entered the Chakravyuha formation and fought brilliantly. When his chariot wheel broke and his weapons ran out, seven great warriors — including Drona and Karna — attacked him simultaneously (a clear violation of the rules of war). He died fighting with a chariot wheel as his only weapon.\n\nHis son Parikshit (born after his death) survived the Ashwatthama's Brahmastra attack and continued the Pandava lineage — eventually becoming the king to whom the Mahabharata was first told.`,
    kidFriendly: "Abhimanyu was Arjuna's son and one of the bravest young warriors ever. He learned special battle secrets while he was still a baby inside his mom! At just 16 years old, he fought bravely against many older warriors. His story makes everyone both sad and proud.",
    facts: ["Learned battle formations while still in the womb", "Was only 16 years old when he died in battle", "Fought seven great warriors simultaneously", "His son Parikshit continued the Pandava lineage", "The Mahabharata was first told to Parikshit, his son"],
    significance: "Abhimanyu represents youthful courage, sacrifice, and the injustice of unfair war."
  }
];

// ── STORY DATA ──
const STORY_CHAPTERS = [
  {
    id: 1,
    title: "The Origins of the Kuru Dynasty",
    parva: "Adi Parva",
    emoji: "🌊",
    summary: "The story begins with the ancient Kuru dynasty. King Shantanu falls in love with the river goddess Ganga. Their son Devavrata grows up to be the mighty Bhishma, who makes a terrible vow that changes everything.",
    fullStory: `Long ago, on the banks of the holy river Ganga, there lived a wise and powerful king named Shantanu who ruled the kingdom of Hastinapura. One day, while walking by the river, Shantanu saw a beautiful woman and fell deeply in love with her.\n\nThe woman was Ganga herself — the river goddess in human form. Ganga agreed to marry Shantanu on one condition: he must never question anything she does. Shantanu agreed, and they were married.\n\nGanga and Shantanu had seven children — but Ganga drowned each one at birth! Shantanu watched in horror but remembered his promise and said nothing. When the eighth child was born, Shantanu could bear it no longer and cried out to stop her. Ganga explained: the first seven children were divine beings who had been cursed to take human birth, and she was freeing them. The eighth child would live — but now Ganga had to leave.\n\nThe eighth child was Devavrata, who grew up to be extraordinarily skilled in all the arts of war and wisdom. Years later, Shantanu fell in love again — this time with Satyavati, a fisherman's daughter. Her father refused the marriage unless Satyavati's sons — not Devavrata — inherited the throne.\n\nDevavrata, out of pure love for his father, went to the fisherman and made two terrible vows: he would never claim the throne of Hastinapura, and he would remain celibate his entire life so that his children would never compete with Satyavati's children.\n\nThe gods in heaven rained flowers upon Devavrata and called out "Bhishma! Bhishma!" — one who has made a terrible (bhishana) vow. And so Devavrata became Bhishma, the grand patriarch of the Kuru dynasty.`,
    kidVersion: "A long long time ago, there was a great king named Shantanu. He married a river goddess and had a very special son. When his son grew up, he made a very hard promise to help his father — he promised to never be king and never get married. He kept this promise his whole life! Everyone called him Bhishma, which means 'the one who made a great vow.'",
    lesson: "A promise made from love and selflessness is the greatest act of devotion.",
    duration: "~10 minutes"
  },
  {
    id: 2,
    title: "The Birth of the Pandavas and Kauravas",
    parva: "Adi Parva",
    emoji: "👶",
    summary: "King Pandu's tragic curse, and the miraculous birth of the five Pandava brothers and the hundred Kaurava brothers. Two families of cousins who will one day face each other on the battlefield.",
    fullStory: `After Bhishma's great vow, Satyavati's sons ruled Hastinapura. Eventually, the kingdom came to two brothers: the blind Dhritarashtra and the just and noble Pandu.\n\nBecause Dhritarashtra was blind, Pandu was crowned king. He had two wives — Kunti and Madri. Kunti had received a special mantra from the sage Durvasa: by reciting it, she could summon any god and have a child blessed with that god's qualities.\n\nBut tragedy struck when Pandu accidentally killed a sage and his wife who were in the form of deer. The dying sage cursed Pandu: if he ever embraced his wife with love, he would die instantly. Pandu, grief-stricken, retired to the forest.\n\nIn the forest, Kunti used her mantra to have children for Pandu. She summoned Dharma (the god of righteousness) and had Yudhishthira. She summoned Vayu (the wind god) and had the mighty Bhima. She summoned Indra (king of the gods) and had Arjuna, the greatest archer. Then she shared the mantra with Madri, who summoned the twin physicians Ashwini Kumaras and had Nakula and Sahadeva.\n\nMeanwhile, in Hastinapura, Dhritarashtra had become king. His wife Gandhari — out of love for her blind husband — blindfolded herself and wore the blindfold her entire life. She had received a boon for 100 sons, and after carrying them for two years, she gave birth to a hard mass which sage Vyasa divided into 101 pieces — from which 100 sons (the Kauravas) and one daughter (Dushala) were born. The eldest was Duryodhana.\n\nWhen Duryodhana was born, donkeys brayed, jackals howled, and evil omens filled the sky. Wise advisors told Dhritarashtra to abandon the child for the kingdom's good. But a father's love is blind — Dhritarashtra could not abandon his son, and so the seeds of war were planted.`,
    kidVersion: "King Pandu had a curse and couldn't be a normal king, so he lived in the forest. He and his wives had five special sons — the Pandavas — each son was a gift from a different god! The oldest cousin Duryodhana was born with bad omens. Even before they grew up, the two families already had problems.",
    lesson: "The choices made for our children shape not just their future, but the world.",
    duration: "~12 minutes"
  },
  {
    id: 3,
    title: "Growing Up — Education and Rivalry",
    parva: "Adi Parva",
    emoji: "🏹",
    summary: "The young princes are educated by the great teacher Drona. Arjuna emerges as the star student. The rivalry between the Pandavas and Kauravas grows. A mysterious warrior named Karna appears.",
    fullStory: `After Pandu's death, the five young Pandavas came to live in Hastinapura with their cousins the Kauravas. Both groups of princes were taught by the great weaponmaster Dronacharya.\n\nDrona immediately recognized that Arjuna had an extraordinary gift. He taught all the princes equally, but gave special attention to Arjuna. When all the princes could shoot a wooden bird from a tree, only Arjuna could answer correctly when Drona asked: "What do you see?" Most said "I see the tree, the branch, the bird..." Only Arjuna said "I see only the bird's eye." This focus made him the greatest archer of his age.\n\nAfter their training was complete, the princes held a great tournament — a Rangabhoomi — to display their skills. Arjuna dazzled everyone. Then, suddenly, a young man arrived and challenged Arjuna! He was Karna — unknown to anyone, actually Arjuna's oldest half-brother, born of Kunti and the Sun god.\n\nThe crowd asked Karna his lineage, for only princes could challenge princes. Karna had no princely lineage. In that moment of humiliation, Duryodhana stepped forward and immediately crowned Karna as king of Anga — a generous act that bound Karna to the Kaurava side forever.\n\nDuryodhana's cruelty toward the Pandavas grew alongside the rivalry. He had their family's palace built from lacquer — a flammable material — and plotted to burn them alive. The Pandavas escaped through a secret tunnel, but were believed dead for some time.`,
    kidVersion: "The Pandava and Kaurava brothers all went to school together with a great teacher named Drona! Arjuna was the best student — he could focus completely on just the thing he was aiming at. A mysterious new warrior named Karna showed up and became Duryodhana's best friend. Duryodhana was mean to the Pandavas and even tried to hurt them!",
    lesson: "True focus and dedication will always outshine jealousy and shortcuts.",
    duration: "~15 minutes"
  },
  {
    id: 4,
    title: "The Dice Game — A Kingdom Lost",
    parva: "Sabha Parva",
    emoji: "🎲",
    summary: "The fateful dice game engineered by Shakuni. Yudhishthira loses everything — his kingdom, his brothers, himself, and finally Draupadi. The humiliation of Draupadi becomes the spark that ignites the great war.",
    fullStory: `After the Pandavas built the magnificent city of Indraprastha, Yudhishthira performed the grand Rajasuya Yajna — a ceremony of imperial sovereignty. All kings came to pay tribute. Krishna killed the arrogant Shishupala who had insulted the assembly.\n\nDuryodhana visited Indraprastha and was humiliated repeatedly by the palace's magical illusions — he stepped into a pool thinking it was solid floor, and walked into solid crystal thinking it was an open passage. Draupadi's laughter stung his pride deeply.\n\nBack in Hastinapura, Duryodhana's uncle Shakuni proposed a plan: invite the Pandavas to a dice game. Shakuni, who possessed magical dice, would ensure Duryodhana won everything.\n\nYudhishthira, who loved the game of dice but was not skilled at it, could not refuse the invitation — refusing was against Kshatriya honor. Game after game, Shakuni cheated with loaded dice. Yudhishthira lost his treasuries, his kingdom, his army, his brothers one by one, and finally himself.\n\nThen Duryodhana whispered to him: "You still have Draupadi. Stake her."\n\nYudhishthira, in his clouded judgment, staked Draupadi — and lost.\n\nDuryodhana sent his brother Dushasana to drag Draupadi to the court. There, Dushasana attempted to disrobe her publicly. Draupadi called out to Krishna in desperation. Krishna, though not physically present, miraculously extended her sari so it could never be removed. Dushasana collapsed exhausted after unwinding yards and yards of cloth.\n\nThe great elders — Bhishma, Drona, Vidura — watched in shame but did not act. Dhritarashtra, horrified, granted Draupadi three boons. She asked that her husbands be freed and their weapons returned.\n\nThe Pandavas were exiled for 12 years in the forest, followed by one year of living in disguise. If recognized during the final year, the exile would begin again.`,
    kidVersion: "The Pandavas had a beautiful kingdom, but then something terrible happened. They were invited to a cheating dice game by their cousins. Yudhishthira kept playing and kept losing — he lost everything! Then Draupadi was treated very badly in front of everyone. But Lord Krishna miraculously protected her. As punishment, the Pandavas had to live in the forest for 13 years.",
    lesson: "Speak up against injustice. Silence in the face of wrong is also a wrong.",
    duration: "~20 minutes"
  },
  {
    id: 5,
    title: "Thirteen Years of Exile",
    parva: "Vana Parva & Virata Parva",
    emoji: "🌳",
    summary: "The Pandavas spend twelve years in the forest, gaining wisdom and divine weapons. The thirteenth year they live in disguise in King Virata's court. Arjuna receives divine weapons from the gods and Lord Shiva himself.",
    fullStory: `The twelve years in the forest were not simply a punishment — they became a period of immense spiritual growth and preparation.\n\nArjuna undertook a great pilgrimage and severe penance to receive divine weapons. He pleased Indra, his father, and ultimately faced Shiva himself in the form of a hunter (Kirata). They fought a fierce battle, and when Arjuna recognized that his opponent was Shiva, he was blessed with the Pashupatastra — the most powerful weapon in existence.\n\nBhima encountered Hanuman (Rama's devoted general from the Ramayana) in the forest, who appeared as an old monkey. When Bhima asked him to move his tail from his path, Hanuman challenged him to lift it — Bhima, the strongest man alive, could not move it with all his might! Hanuman revealed his true form and blessed Bhima, saying his roar would sound in Bhima's war cry.\n\nYudhishthira received wisdom from Yaksha (a nature spirit who was actually Yama, his divine father) by the lake, answering profound questions about life, death, and dharma.\n\nIn the thirteenth year, the Pandavas entered the kingdom of Virata in disguise:\n- Yudhishthira became a dice-teacher to the king\n- Bhima became a cook\n- Arjuna disguised himself as a eunuch dance teacher named Brihannala\n- Nakula became a horse-keeper\n- Sahadeva became a cow-keeper\n- Draupadi became a lady's maid\n\nThey successfully completed their year in hiding, though they were nearly discovered several times — including when Bhima had to control his rage when Draupadi was harassed.`,
    kidVersion: "For 12 years, the Pandavas lived in the forest and got stronger and wiser. Arjuna even fought the great god Shiva! Then for one whole year they had to pretend to be different people and hide. Arjuna pretended to be a dance teacher, Bhima pretended to be a cook. Nobody recognized them!",
    lesson: "Great challenges, when faced with patience and wisdom, prepare us for even greater ones.",
    duration: "~18 minutes"
  },
  {
    id: 6,
    title: "The Great War — Kurukshetra",
    parva: "Bhishma, Drona, Karna, Shalya Parvas",
    emoji: "⚔️",
    summary: "The 18-day war at Kurukshetra. Before the first arrow is shot, Arjuna falters — and Krishna delivers the Bhagavad Gita. Eighteen days of epic battles, heroic deaths, and the triumph of dharma.",
    fullStory: `After the Pandavas completed their exile, they asked for their kingdom back — even just five villages. Duryodhana declared: "I will not give them even as much land as a needle can pierce!" War was now inevitable.\n\nBoth sides assembled enormous armies at the field of Kurukshetra. The Pandavas had seven armies; the Kauravas had eleven. Krishna went as a peace ambassador — offering any compromise — but Duryodhana refused.\n\nOn the first morning, as the two armies faced each other, Arjuna asked Krishna to drive his chariot between the armies. Looking across, Arjuna saw his grandfather Bhishma, his teacher Drona, his cousins, uncles, friends — all whom he loved. He collapsed in grief, laying down his bow, declaring he could not fight.\n\nKrishna then delivered the Bhagavad Gita — 700 verses of divine wisdom on duty, action, devotion, and liberation.\n\nThe war lasted 18 days:\n\nDays 1-10 (Bhishma commands the Kauravas): Bhishma was virtually invincible. Krishna himself had to break his vow of non-combat when Bhishma threatened to overwhelm the Pandavas. On Day 10, Arjuna (with Shikhandi as his shield) finally fell Bhishma with arrows. Bhishma lay on a bed of arrows, waiting for an auspicious day to die.\n\nDays 11-15 (Drona commands): Drona formed the deadly Chakravyuha formation on Day 13. Young Abhimanyu entered but was killed by seven warriors simultaneously — the most heartbreaking day of the war.\n\nDays 16-17 (Karna commands): Karna and Arjuna finally fought their legendary duel. Karna's chariot wheel sank into the ground; as he dismounted to fix it, Arjuna — guided by Krishna — killed him.\n\nDay 18: Duryodhana was found hiding in a lake. He fought his final mace duel with Bhima, who struck him below the belt (technically illegal but justified by Bhima's vow) and shattered his thigh. The war was over.\n\nThe Pandavas had won — but at enormous cost. Almost all warriors on both sides were dead. The night after the war, Ashwatthama (Drona's son) attacked the sleeping Pandava camp, killing their five sons and the army leaders. The Upapandavas — the five sons of the Pandavas and Draupadi — were all killed.`,
    kidVersion: "After trying everything to make peace, the great war finally started. Before the war began, Arjuna was scared to fight his own family members. Krishna taught him the Bhagavad Gita and helped him understand why he must do his duty. The war lasted 18 days and was very sad — many great heroes died. In the end, the Pandavas won, but they were very sad because so many people they loved also died.",
    lesson: "Dharma must be upheld even when it is painful. A righteous war for justice is not wrong.",
    duration: "~30 minutes"
  },
  {
    id: 7,
    title: "After the War — Wisdom and the Journey Home",
    parva: "Shanti, Anushasana, Swargarohana Parvas",
    emoji: "🕊️",
    summary: "The Pandavas rule Hastinapura, but grief weighs heavily. Bhishma shares his last wisdom. Eventually, the Pandavas undertake the great final journey toward the Himalayas.",
    fullStory: `After the war, the Pandavas were victorious but hollow. Yudhishthira was consumed with guilt about the millions who died. Krishna guided him to visit the dying Bhishma, who lay on his bed of arrows.\n\nFor months, Bhishma taught Yudhishthira the wisdom of dharma, statecraft, and spirituality — this became the Shanti Parva (Peace) and Anushasana Parva (Instructions), the two longest books of the Mahabharata.\n\nYudhishthira ruled as emperor for many years. He performed the Ashwamedha Yajna (horse sacrifice) to atone for the deaths in the war. The kingdom prospered.\n\nBut tragedy continued. Krishna returned to Dwaraka, where the Yadava clan — his own people — destroyed themselves in a drunken battle, fulfilling a curse. Krishna was struck by a hunter's arrow in his foot and died, returning to his divine form.\n\nWhen the Pandavas heard of Krishna's death, they knew their time in the world had also come. Yudhishthira crowned Parikshit (Abhimanyu's son) as king and the five brothers with Draupadi undertook the Mahaprasthanika — the Great Journey.\n\nThey walked toward the Himalayas and the divine mountain Meru. One by one, Draupadi and each brother fell along the way. Only Yudhishthira and a dog who had followed them reached the gates of heaven.\n\nIndra came in a heavenly chariot and invited Yudhishthira to heaven — but said the dog could not come. Yudhishthira refused: he would not abandon one who had followed him faithfully. At that moment, the dog revealed himself to be Dharma (Yama) — Yudhishthira's divine father — testing him one final time.\n\nYudhishthira was granted entry to heaven — and found all his brothers, Draupadi, and even his enemies there, all at peace.`,
    kidVersion: "After winning the war, the Pandavas were sad because many people they loved had died. They ruled the kingdom for many years. When they were old, they decided to walk to heaven! One by one they got tired and fell asleep along the way. Only Yudhishthira and a dog made it to the gates of heaven. Yudhishthira refused to leave the dog behind — and then the dog turned out to be his father, the god Dharma! They all went to heaven together.",
    lesson: "Compassion and loyalty, shown to even the humblest being, is the highest virtue.",
    duration: "~15 minutes"
  }
];

// ── BHAGAVAD GITA DATA ──
const GITA_CHAPTERS = [
  {
    chapter: 1,
    title: "Arjuna's Despair",
    sanskrit: "अर्जुनविषादयोग",
    transliteration: "Arjuna Vishada Yoga",
    verses: 47,
    summary: "Arjuna surveys the battlefield and, seeing his relatives and teachers on both sides, is overcome with grief. He lays down his bow and refuses to fight. This chapter sets the stage for Krishna's divine teaching.",
    theme: "The crisis of duty — when our personal attachments conflict with our responsibilities",
    featured_verses: [
      {
        number: "1.28",
        sanskrit: "दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्",
        transliteration: "dṛṣṭvemaṁ svajanaṁ kṛṣṇa yuyutsuṁ samupasthitam",
        english: "O Krishna, seeing my relatives and friends assembled here, eager to fight, my limbs fail me and my mouth is parched.",
        insight: "This is the moment of Arjuna's breakdown — and the beginning of his liberation. Sometimes we must hit our lowest point before we can receive wisdom.",
        kidVersion: "Arjuna looked at all the people he would have to fight and realized they were his family and teachers. He felt so sad that he couldn't even hold his bow. He sat down and started crying."
      }
    ],
    emoji: "😔",
    color: "#455a64"
  },
  {
    chapter: 2,
    title: "Sankhya Yoga — The Yoga of Knowledge",
    sanskrit: "सांख्ययोग",
    transliteration: "Sankhya Yoga",
    verses: 72,
    summary: "Krishna begins his teaching. He explains the eternal nature of the soul (Atman) — that the soul is never born and never dies. He introduces the concept of Karma Yoga — performing one's duty without attachment to results.",
    theme: "The immortality of the soul and the importance of doing one's duty",
    featured_verses: [
      {
        number: "2.20",
        sanskrit: "न जायते म्रियते वा कदाचिन् नायं भूत्वा भविता वा न भूयः",
        transliteration: "na jāyate mriyate vā kadācin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ",
        english: "The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval.",
        insight: "This is the core revelation of the Gita: our true self is the eternal soul, not the temporary body. Understanding this destroys the fear of death.",
        kidVersion: "Krishna told Arjuna: 'Don't be sad. The people you see are not going to truly die. Our real self — our soul — can never be destroyed! It's like how a snake sheds its old skin — our soul just moves to a new body.'"
      },
      {
        number: "2.47",
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
        transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana",
        english: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",
        insight: "Perhaps the most famous verse of the Gita. Do your work sincerely, but don't be obsessed with results. This is the foundation of Karma Yoga.",
        kidVersion: "Krishna said: 'Do your very best at everything you do — but don't be too worried about whether you win or lose. Just do your best and let God handle the rest!' This is one of the most important lessons in life."
      }
    ],
    emoji: "💡",
    color: "#1565c0"
  },
  {
    chapter: 3,
    title: "Karma Yoga — The Yoga of Action",
    sanskrit: "कर्मयोग",
    transliteration: "Karma Yoga",
    verses: 43,
    summary: "Krishna elaborates on selfless action. He explains that even the wise must act — inaction is not an option. Every person must perform their duty without selfish motives, as an offering to God.",
    theme: "Why we must always act, and how to act without selfish attachment",
    featured_verses: [
      {
        number: "3.19",
        sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर",
        transliteration: "tasmād asaktaḥ satataṁ kāryaṁ karma samācara",
        english: "Therefore, without attachment, perform always the work that has to be done; for by performing work without attachment, one attains the Supreme.",
        insight: "Detachment from results doesn't mean indifference — it means complete dedication to the work itself, offered as service to something greater.",
        kidVersion: "Krishna said: 'Keep doing good things and helping others, not because you want a reward, but because it's the right thing to do. When you do things this way, you become closer to God.'"
      }
    ],
    emoji: "🔄",
    color: "#2e7d32"
  },
  {
    chapter: 4,
    title: "Jnana Yoga — The Yoga of Knowledge",
    sanskrit: "ज्ञानकर्मसंन्यासयोग",
    transliteration: "Jnana Karma Sannyasa Yoga",
    verses: 42,
    summary: "Krishna reveals that he has taught this wisdom in past ages. He explains the purpose of divine incarnation (avatar). He discusses how sacred knowledge destroys sin.",
    theme: "The eternal wisdom and why God takes birth on Earth",
    featured_verses: [
      {
        number: "4.7-4.8",
        sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत | अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||",
        transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham",
        english: "Whenever righteousness is on the decline and unrighteousness rises, O Arjuna, at that time I manifest myself. To deliver the pious and to annihilate the miscreants, as well as to reestablish the principles of dharma, I appear, millennium after millennium.",
        insight: "Krishna reveals why God incarnates — not just for one religion or people, but as a universal response whenever truth and goodness are threatened.",
        kidVersion: "Krishna said: 'Whenever the world becomes a very bad and unfair place, I come down to Earth to help good people and teach everyone the right way to live. That's why I am here now — to help you and all good people.'"
      }
    ],
    emoji: "📖",
    color: "#6a1b9a"
  },
  {
    chapter: 6,
    title: "Dhyana Yoga — The Yoga of Meditation",
    sanskrit: "आत्मसंयमयोग",
    transliteration: "Atma Samyama Yoga",
    verses: 47,
    summary: "Krishna describes the ideal yogi — one who is self-controlled and always meditating on the divine. He explains the practice of meditation and its goal: union with the Supreme Soul.",
    theme: "How to calm and control the mind through meditation",
    featured_verses: [
      {
        number: "6.35",
        sanskrit: "असंशयं महाबाहो मनो दुर्निग्रहं चलम् | अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ||",
        transliteration: "asaṁśayaṁ mahābāho mano durnigrahaṁ calam abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate",
        english: "Undoubtedly, O mighty-armed Arjuna, the mind is restless and very difficult to restrain, but it can be controlled through practice and detachment.",
        insight: "Arjuna had said the mind is like the wind — impossible to control. Krishna's response: practice and non-attachment are the keys. The mind can be trained.",
        kidVersion: "Arjuna said 'My mind jumps around everywhere like a monkey! How can I control it?' Krishna said: 'It IS very hard to control the mind — but with regular practice and patience, anyone can do it. Just like learning to ride a bike!'"
      }
    ],
    emoji: "🧘",
    color: "#00695c"
  },
  {
    chapter: 9,
    title: "The Royal Knowledge — Bhakti Yoga",
    sanskrit: "राजविद्याराजगुह्ययोग",
    transliteration: "Raja Vidya Raja Guhya Yoga",
    verses: 34,
    summary: "Krishna declares this the greatest secret: devotion to God. He explains that all beings rest in him, and he is equally present in all. The simplest offering made with pure devotion is accepted.",
    theme: "The path of devotion — the easiest and most joyful way to God",
    featured_verses: [
      {
        number: "9.26",
        sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति | तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ||",
        transliteration: "patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati tad aham bhakty-upahṛtam aśnāmi prayatātmanaḥ",
        english: "If one offers to Me with devotion a leaf, a flower, a fruit, or water, I lovingly accept that offering made with a pure heart.",
        insight: "God does not require grand rituals or expensive offerings. A single flower, a fruit, even just clean water — offered with genuine love — is gladly received.",
        kidVersion: "Krishna said: 'I don't need big fancy gifts. If you offer me even just a leaf, a flower, or some water — but you offer it with real love in your heart — I will happily accept it!' God loves sincerity more than expensive gifts."
      }
    ],
    emoji: "🌸",
    color: "#c62828"
  },
  {
    chapter: 11,
    title: "The Vision of the Universal Form",
    sanskrit: "विश्वरूपदर्शनयोग",
    transliteration: "Vishwarupa Darshana Yoga",
    verses: 55,
    summary: "Arjuna asks to see Krishna's divine cosmic form. Krishna grants him divine vision, and Arjuna sees the entire universe — all gods, all beings, past, present, and future — contained within Krishna's form.",
    theme: "The revelation of God's infinite, all-encompassing nature",
    featured_verses: [
      {
        number: "11.12",
        sanskrit: "दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता | यदि भाः सदृशी सा स्याद्भासस्तस्य महात्मनः ||",
        transliteration: "divi sūrya-sahasrasya bhaved yugapad utthitā yadi bhāḥ sadṛśī sā syād bhāsas tasya mahātmanaḥ",
        english: "If hundreds of thousands of suns rose simultaneously into the sky, their combined radiance might resemble the effulgence of that Supreme Person.",
        insight: "Human language struggles to describe the infinite. The image of a thousand suns is the closest approximation to the indescribable glory of the cosmic form.",
        kidVersion: "Arjuna asked to see Krishna's true form. Krishna showed him — and it was so bright and so huge that Arjuna was amazed! It was like seeing thousands of suns shining at once. Arjuna could see the whole universe inside Krishna's body! He was so scared and amazed that he asked Krishna to please go back to looking normal."
      }
    ],
    emoji: "🌌",
    color: "#1a237e"
  },
  {
    chapter: 18,
    title: "Liberation Through Renunciation",
    sanskrit: "मोक्षसंन्यासयोग",
    transliteration: "Moksha Sannyasa Yoga",
    verses: 78,
    summary: "The final and longest chapter. Krishna summarizes all his teachings and delivers the ultimate instruction: abandon all duties and surrender completely to God. He promises liberation to all who do so.",
    theme: "The final surrender — giving everything to God and receiving everything in return",
    featured_verses: [
      {
        number: "18.65",
        sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु | मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे ||",
        transliteration: "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru mām evaiṣyasi satyaṁ te pratijāne priyo 'si me",
        english: "Always think of Me, become My devotee, worship Me, and bow down to Me. So shall you come to Me without fail. I promise you this because you are My very dear friend.",
        insight: "This is Krishna's personal promise — not a distant command, but an intimate vow to his friend Arjuna. The path of devotion is sealed with divine friendship.",
        kidVersion: "Krishna said: 'Always think of me, love me, pray to me. I promise you — I PROMISE — that you will always reach me. And I make this promise because you are my dear, dear friend.' Isn't it amazing that God calls us his friends?"
      },
      {
        number: "18.66",
        sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज | अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ||",
        transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ",
        english: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
        insight: "The final and most profound instruction of the Gita: complete surrender. Not abandoning one's duties, but offering everything — including the sense of 'I am the doer' — to God. The promise: complete liberation.",
        kidVersion: "This is the most important verse of the whole Gita! Krishna said: 'Let go of everything and just trust me completely. I will take care of everything for you. Don't be afraid — ever.' This is God's biggest and most beautiful promise to all of us."
      }
    ],
    emoji: "🙏",
    color: "#bf360c"
  }
];
