// Product data - should match shopData from script.js
const productDatabase = {
  1: {
    id: 1,
    title: "Огненный цветок матери",
    category: "painting",
    price: 70000,
    image: "images/mother's-ember-flower.jpg",
    material: "Масло, холст",
    size: "50x70 см",
    description:
      "Эта мощная картина представляет собой глубокое исследование материнской энергии и силы. Огненный цветок символизирует вечный огонь любви, заботы и защиты.",
    fullDescription: `
            <p>Эта мощная картина представляет собой глубокое исследование материнской энергии и силы. Огненный цветок символизирует вечный огонь любви, заботы и защиты, который матери несут в своих сердцах.</p>
            <p>Работа выполнена с использованием ярких, насыщенных цветов, где преобладают огненные оттенки - красные, оранжевые и золотые тона создают ощущение тепла, страсти и жизненной силы. Центральный образ цветка выполнен с особой выразительностью, каждый лепесток словно излучает энергию и свет.</p>
            <p>Картина написана маслом на холсте, что придает ей особую глубину и текстуру. Мастерское использование техники импасто создает рельефность, делая произведение буквально живым.</p>
            <p>Это произведение станет прекрасным дополнением любого интерьера, наполняя пространство энергией материнской любви и защиты.</p>
        `,
  },
  2: {
    id: 2,
    title: "Инь Ян",
    category: "painting",
    price: 70000,
    image: "images/ying-yang.jpg",
    material: "Масло, холст",
    size: "50x70 см",
    description:
      "Классический символ баланса и гармонии, представленный в современной интерпретации. Картина отражает вечную борьбу и единство противоположностей.",
    fullDescription: `
            <p>Классический символ баланса и гармонии, представленный в современной интерпретации. Картина "Инь Ян" отражает вечную борьбу и единство противоположностей.</p>
            <p>Художник мастерски передал концепцию взаимодействия темного и светлого начал, женского и мужского, инь и ян. Композиция построена на плавных переходах и контрастах, создавая визуальную метафору единства мира.</p>
            <p>Работа выполнена маслом на холсте с использованием техники плавных переходов цветов, что создает ощущение движения и динамики. Каждая деталь продумана и несет глубокий философский смысл.</p>
            <p>Эта картина идеально подходит для пространств, где ценится баланс, гармония и философское осмысление жизни.</p>
        `,
  },
  3: {
    id: 3,
    title: "Летняя",
    category: "painting",
    price: 25000,
    image: "images/summer.jpg",
    material: "Масло, холст",
    size: "50x60 см",
    description:
      "Яркая и жизнерадостная картина, наполненная энергией летнего дня. Работа передает всю красоту и тепло летнего сезона.",
    fullDescription: `
            <p>Яркая и жизнерадостная картина, наполненная энергией летнего дня. Работа передает всю красоту и тепло летнего сезона.</p>
            <p>Палитра картины построена на теплых, солнечных тонах - золотистые, желтые и оранжевые оттенки создают ощущение яркого солнечного света. Зеленые акценты напоминают о пышной летней растительности.</p>
            <p>Картина написана маслом на холсте с выразительными мазками, создающими ощущение движения и жизни. Каждый элемент композиции словно дышит летним зноем и свежестью.</p>
            <p>Это произведение идеально подходит для создания летнего настроения в любом интерьере круглый год.</p>
        `,
  },
  4: {
    id: 4,
    title: "Формирующаяся планета",
    category: "painting",
    price: 70000,
    image: "images/emerging-planet.jpg",
    material: "Масло, холст",
    size: "50x70 см",
    description:
      "Монументальное произведение, изображающее момент рождения новой планеты в космическом пространстве. Картина отражает процесс созидания и зарождения жизни.",
    fullDescription: `
            <p>Монументальное произведение, изображающее момент рождения новой планеты в космическом пространстве. Картина отражает процесс созидания и зарождения жизни.</p>
            <p>Центральный образ формирующейся планеты выполнен с невероятной детализацией - видны тектонические процессы, движение материи, рождение атмосферы. Космическое пространство вокруг наполнено звездами, туманностями и светом зарождающейся жизни.</p>
            <p>Работа написана маслом на холсте с использованием сложной техники многослойной живописи. Художник использует контраст между темным космическим пространством и ярким светом новой планеты.</p>
            <p>Эта картина станет центральным элементом коллекции любого ценителя космического искусства и философских произведений.</p>
        `,
  },
  5: {
    id: 5,
    title: "Сила Рода",
    category: "painting",
    price: 70000,
    image: "images/kind's-power.jpg",
    material: "Масло, холст",
    size: "50x70 см",
    description:
      "Глубокое и сильное произведение, исследующее концепцию родовой силы и связи поколений. Картина передает энергию предков и силу традиций.",
    fullDescription: `
            <p>Глубокое и сильное произведение, исследующее концепцию родовой силы и связи поколений. Картина передает энергию предков и силу традиций.</p>
            <p>Композиция построена на изображении символических образов, связанных с родом и наследием. Яркие, контрастные цвета создают ощущение мощи и стабильности. Каждый элемент несет в себе глубокий смысл связи между поколениями.</p>
            <p>Работа выполнена маслом на холсте с использованием выразительных мазков и текстуры. Художник мастерски передает ощущение вечности и преемственности.</p>
            <p>Эта картина станет мощным символом семейных ценностей и родовых связей в любом доме.</p>
        `,
  },
  6: {
    id: 6,
    title: "Танец Души",
    category: "painting",
    price: 35000,
    image: "images/soul's-dance.jpg",
    material: "Масло, холст",
    size: "50x60 см",
    description:
      "Экспрессивное и динамичное произведение, изображающее внутренний танец души. Картина передает движение энергии, эмоций и духовного освобождения.",
    fullDescription: `
            <p>Экспрессивное и динамичное произведение, изображающее внутренний танец души. Картина передает движение энергии, эмоций и духовного освобождения.</p>
            <p>Композиция построена на плавных, танцевальных линиях и движениях. Яркие, насыщенные цвета создают ощущение радости, свободы и гармонии. Каждый элемент словно движется в ритме вселенского танца.</p>
            <p>Работа выполнена маслом на холсте с использованием техники экспрессивной живописи. Динамичные мазки создают ощущение движения и энергии.</p>
            <p>Эта картина наполнит любое пространство энергией радости, свободы и духовного развития.</p>
        `,
  },
  7: {
    id: 7,
    title: "Шивалингам",
    category: "painting",
    price: 15000,
    image: "images/shivalingam.jpg",
    material: "Масло, холст",
    size: "35×45 см",
    description:
      "Экспрессивная акриловая картина, изображающая мистический лик Господа Шивы, сливающийся с священным Шива-лингамом.",
    fullDescription: `
            <p>Эта уникальная картина представляет собой глубокое духовное произведение, воплощающее в себе мистическую силу и космическую гармонию. Центральный образ работы - лицо Господа Шивы, одного из главных божеств индуистского пантеона, символизирующего разрушение и созидание, время и вечность.</p>
            
            <p>Художник мастерски передал священное слияние божественного лика с Шива-лингамом - древним символом творческой энергии вселенной. Глаза Шивы широко открыты и пронзительны, несущие в себе бездну космического знания. На лбу отчетливо виден традиционный трипундра - три горизонтальные линии, увенчанные вертикальным знаком третьего глаза, символизирующего внутреннее видение и духовное просветление.</p>
            
            <p>Нижняя часть композиции представляет собой текучие сине-белые волны, изображающие священную реку Ганг, которая согласно мифологии стекает с головы Шивы. Эти водные потоки плавно переходят в темный лингам, выполненный с использованием техники импасто, что придает работе объемность и текстуру.</p>
            
            <p>Левая сторона полотна погружает зрителя в мир природы - пышная зеленая растительность символизирует рост, развитие и связь с земными силами. Справа же полыхает огненная энергия - красные, оранжевые и желтые оттенки создают ощущение божественной силы, трансформации и очищения. Вертикально расположенный трезубец (Тришула) - традиционный атрибут Шивы - усиливает впечатление могущества и защиты.</p>
            
            <p>Небо, выполненное в ярких желтых и оранжевых тонах, создает ощущение божественного сияния, рассвета сознания и просветления. Контраст между холодными сине-зелеными тонами и теплыми огненными оттенками создает визуальное напряжение, отражающее дуалистическую природу мироздания.</p>
            
            <p>Картина написана маслом на холсте с использованием техники импасто, что придает работе рельефность и глубину. Каждый мазок кисти несет в себе энергию и эмоцию, создавая живое, дышащее произведение искусства.</p>
            
            <p>Это произведение станет центральным элементом любой коллекции, несущим в себе не только эстетическую ценность, но и глубокий духовный смысл. Картина наполняет пространство особой энергетикой, способствуя медитации, размышлениям и внутреннему развитию.</p>
        `,
  },
  8: {
    id: 8,
    title: "Нежность",
    category: "painting",
    price: 30000,
    image: "images/tenderness.jpg",
    material: "Масло, холст",
    size: "50x60 см",
    description:
      "Нежная и чувственная картина, передающая всю мягкость и тепло человеческих эмоций. Работа наполнена легкостью и воздушностью.",
    fullDescription: `
            <p>Нежная и чувственная картина, передающая всю мягкость и тепло человеческих эмоций. Работа наполнена легкостью и воздушностью.</p>
            <p>Палитра картины построена на мягких, пастельных тонах - нежные розовые, голубые и персиковые оттенки создают ощущение легкости и нежности. Плавные переходы цветов создают ощущение мягкости и гармонии.</p>
            <p>Работа выполнена маслом на холсте с использованием техники тонких, почти акварельных мазков. Каждый элемент композиции дышит нежностью и теплом.</p>
            <p>Эта картина станет прекрасным дополнением спальни или гостиной, создавая атмосферу уюта и спокойствия.</p>
        `,
  },
  9: {
    id: 9,
    title: "Путь в глубину",
    category: "painting",
    price: 25000,
    image: "images/path-to-deep.jpg",
    material: "Масло, холст",
    size: "50×70 см",
    description:
      "Философское произведение, исследующее путь внутреннего развития и самопознания. Картина символически изображает путешествие в глубины собственного сознания.",
    fullDescription: `
            <p>Философское произведение, исследующее путь внутреннего развития и самопознания. Картина символически изображает путешествие в глубины собственного сознания.</p>
            <p>Композиция построена на создании ощущения глубины и перспективы. Темные и светлые тона контрастируют, создавая ощущение движения от поверхности к глубине. Центральный образ пути ведет зрителя вглубь картины и собственного сознания.</p>
            <p>Работа выполнена маслом на холсте с использованием техники многослойной живописи. Художник мастерски передает ощущение пространства и глубины.</p>
            <p>Эта картина станет источником вдохновения для медитации и размышлений о жизненном пути.</p>
        `,
  },
  10: {
    id: 10,
    title: "Шаманка",
    category: "painting",
    price: 35000,
    image: "images/shamanka.jpg",
    material: "Масло, холст",
    size: "50×50 см",
    description:
      "Мощное и мистическое произведение, изображающее образ шаманки - проводницы между мирами. Картина передает силу, мудрость и связь с духовными силами.",
    fullDescription: `
            <p>Мощное и мистическое произведение, изображающее образ шаманки - проводницы между мирами. Картина передает силу, мудрость и связь с духовными силами.</p>
            <p>Центральный образ выполнен с большой выразительностью - в глазах шаманки читается глубокая мудрость и связь с потусторонним миром. Окружение наполнено символическими элементами, связанными с шаманскими практиками.</p>
            <p>Работа выполнена маслом на холсте с использованием контрастных цветов и выразительных мазков. Темные и яркие тона создают ощущение мистики и тайны.</p>
            <p>Эта картина станет мощным духовным символом и источником энергии в любом пространстве.</p>
        `,
  },
  11: {
    id: 11,
    title: "Пробуждение Жизни",
    category: "painting",
    price: 20000,
    image: "images/life's-reborn.jpg",
    material: "Масло, холст",
    size: "40×50 см",
    description:
      "Жизнеутверждающее произведение, изображающее момент пробуждения и зарождения новой жизни. Картина наполнена энергией роста и обновления.",
    fullDescription: `
            <p>Жизнеутверждающее произведение, изображающее момент пробуждения и зарождения новой жизни. Картина наполнена энергией роста и обновления.</p>
            <p>Композиция построена на изображении символов жизни - ростки, цветы, пробуждение природы. Яркие, свежие цвета создают ощущение весеннего обновления и надежды. Каждый элемент композиции символизирует новое начало.</p>
            <p>Работа выполнена маслом на холсте с использованием техники выразительной живописи. Светлые тона и контрасты создают ощущение свежести и жизненной силы.</p>
            <p>Эта картина принесет в любой дом энергию обновления, надежды и новой жизни.</p>
        `,
  },
  12: {
    id: 12,
    title: "Женщины Рода",
    category: "painting",
    price: 70000,
    image: "images/kind's-women.jpg",
    material: "Масло, холст",
    size: "50×60 см",
    description:
      "Монументальное произведение, воспевающее силу и красоту женщин рода. Картина отражает связь между поколениями женщин и их роль в сохранении традиций.",
    fullDescription: `
            <p>Монументальное произведение, воспевающее силу и красоту женщин рода. Картина отражает связь между поколениями женщин и их роль в сохранении традиций.</p>
            <p>Композиция построена на изображении женских образов, объединенных общей энергией и связью. Каждая фигура несет в себе определенный символизм и силу. Яркие, насыщенные цвета создают ощущение мощи и красоты.</p>
            <p>Работа выполнена маслом на холсте с использованием сложной техники многофигурной композиции. Художник мастерски передает единство и индивидуальность каждой фигуры.</p>
            <p>Эта картина станет мощным символом женской силы и родовых связей в любом доме.</p>
        `,
  },
  13: {
    id: 13,
    title: "Сила",
    category: "painting",
    price: 70000,
    image: "images/power.jpg",
    material: "Масло, холст",
    size: "50×60 см",
    description:
      "Мощное и динамичное произведение, исследующее концепцию внутренней и внешней силы. Картина передает энергию могущества и уверенности.",
    fullDescription: `
            <p>Мощное и динамичное произведение, исследующее концепцию внутренней и внешней силы. Картина передает энергию могущества и уверенности.</p>
            <p>Композиция построена на создании ощущения мощи и стабильности. Контрастные цвета и выразительные формы создают ощущение силы и энергии. Каждый элемент композиции усиливает общее впечатление могущества.</p>
            <p>Работа выполнена маслом на холсте с использованием техники экспрессивной живописи. Смелые мазки и контрасты создают ощущение динамики и силы.</p>
            <p>Эта картина наполнит любое пространство энергией уверенности и мощи, станет источником вдохновения и силы.</p>
        `,
  },
  14: {
    id: 14,
    title: "Единение",
    category: "painting",
    price: 70000,
    image: "images/unity.jpg",
    material: "Масло, холст",
    size: "50×60 см",
    description:
      "Гармоничное произведение, отражающее концепцию единения и целостности. Картина передает идею соединения противоположностей в единое целое.",
    fullDescription: `
            <p>Гармоничное произведение, отражающее концепцию единения и целостности. Картина передает идею соединения противоположностей в единое целое.</p>
            <p>Композиция построена на создании ощущения целостности и гармонии. Плавные переходы цветов и форм создают ощущение единства. Каждый элемент композиции связан с другими, образуя единое целое.</p>
            <p>Работа выполнена маслом на холсте с использованием техники плавных переходов и гармоничных цветовых решений. Художник мастерски передает идею единения.</p>
            <p>Эта картина станет символом гармонии и единства в любом пространстве, создавая атмосферу спокойствия и целостности.</p>
        `,
  },
  15: {
    id: 15,
    title: "Танец энергий",
    category: "painting",
    price: 40000,
    image: "images/dance-of-energies.jpg",
    material: "Масло, холст",
    size: "50×60 см",
    description:
      "Динамичное и энергичное произведение, изображающее движение и взаимодействие различных энергий. Картина передает ощущение постоянного движения и трансформации.",
    fullDescription: `
            <p>Динамичное и энергичное произведение, изображающее движение и взаимодействие различных энергий. Картина передает ощущение постоянного движения и трансформации.</p>
            <p>Композиция построена на создании ощущения движения и потока энергий. Яркие, контрастные цвета создают ощущение динамики и жизни. Каждый элемент композиции находится в движении, создавая общий ритм танца.</p>
            <p>Работа выполнена маслом на холсте с использованием техники экспрессивной живописи. Динамичные мазки и яркие цвета создают ощущение энергии и движения.</p>
            <p>Эта картина наполнит любое пространство энергией жизни и движения, создавая ощущение динамики и активности.</p>
        `,
  },
  16: {
    id: 16,
    title: "Встреча",
    category: "painting",
    price: 70000,
    image: "images/meeting.jpg",
    material: "Масло, холст",
    size: "50×60 см",
    description:
      "Эмоциональное произведение, изображающее момент встречи - символической или реальной. Картина передает глубину человеческих отношений и значимость встреч.",
    fullDescription: `
            <p>Эмоциональное произведение, изображающее момент встречи - символической или реальной. Картина передает глубину человеческих отношений и значимость встреч.</p>
            <p>Композиция построена на создании ощущения близости и связи между персонажами или символами. Мягкие, теплые тона создают ощущение тепла и человечности. Каждый элемент композиции усиливает эмоциональное воздействие.</p>
            <p>Работа выполнена маслом на холсте с использованием техники эмоциональной живописи. Плавные переходы и мягкие тона создают ощущение близости и тепла.</p>
            <p>Эта картина станет символом человеческих связей и отношений, наполняя пространство теплом и эмоциональностью.</p>
        `,
  },
  17: {
    id: 17,
    title: "Pachamama",
    category: "painting",
    price: 20000,
    image: "images/pachamama.jpg",
    material: "Масло, холст",
    size: "40×40 см",
    description:
      "Духовное произведение, посвященное Pachamama - богине Земли в культурах Анд. Картина отражает связь человека с матерью-Землей и природой.",
    fullDescription: `
            <p>Духовное произведение, посвященное Pachamama - богине Земли в культурах Анд. Картина отражает связь человека с матерью-Землей и природой.</p>
            <p>Композиция построена на изображении символов Земли и природы - плодородие, рост, жизнь. Земные тона и натуральные цвета создают ощущение связи с природой. Каждый элемент композиции символизирует аспекты жизни на Земле.</p>
            <p>Работа выполнена маслом на холсте с использованием техники, подчеркивающей природные элементы. Теплые земные тона создают ощущение плодородия и жизни.</p>
            <p>Эта картина станет символом связи с природой и Землей, наполняя пространство энергией плодородия и жизни.</p>
        `,
  },
  18: {
    id: 18,
    title: "Календарь 2026",
    category: "painting",
    price: 2000,
    image: "images/calendar-1.jpg",
    material: "Печать, бумага",
    size: "A3",
    description:
      "Авторский календарь с картинами художницы. Каждый месяц украшен уникальным произведением искусства, создавая вдохновение на весь год.",
    fullDescription: `
            <p>Уникальный авторский календарь, созданный на основе картин художницы Ольги Сидоровой. Это не просто календарь - это настоящее произведение искусства, которое будет сопровождать вас весь год.</p>
            
            <p>Каждый месяц календаря представляет собой отдельную картину из коллекции художницы. Все работы выполнены в едином стиле и несут глубокий символический смысл, создавая особую атмосферу в вашем пространстве.</p>
            
            <p>Календарь напечатан на качественной плотной бумаге, что обеспечивает яркость и долговечность изображений. Формат A4 позволяет удобно разместить его на стене, на рабочем столе или подарить близким людям.</p>
            
            <p>Это идеальный подарок для тех, кто ценит искусство и хочет окружить себя красотой в повседневной жизни. Каждый день года будет наполнен вдохновением от прекрасных произведений искусства.</p>
            
            <p>Календарь включает 12 уникальных картин, каждая из которых отражает определенный аспект жизни, природы и духовности. Откройте для себя новую картину каждый месяц!</p>
        `,
    video: "videos/calendar-video.mp4",
    images: [
      "images/calendar-1.jpg",
      "images/calendar-2.jpg",
      "images/calendar-3.jpg",
    ],
  },
};

function imagePathToProductSlug(imagePath) {
  if (!imagePath || typeof imagePath !== "string") return "";
  const slash = imagePath.lastIndexOf("/");
  const base = slash >= 0 ? imagePath.slice(slash + 1) : imagePath;
  const dot = base.lastIndexOf(".");
  const name = dot > 0 ? base.slice(0, dot) : base;
  return name
    .replace(/[''\u2019]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

let slugToIdMapCache = null;
function getSlugToIdMap() {
  if (!slugToIdMapCache) {
    slugToIdMapCache = {};
    for (const key of Object.keys(productDatabase)) {
      const p = productDatabase[key];
      const path = p.image || (p.images && p.images[0]) || "";
      const slug = imagePathToProductSlug(path);
      if (slug) slugToIdMapCache[slug] = p.id;
    }
  }
  return slugToIdMapCache;
}

function shopPageHref() {
  if (window.SiteRoutes && SiteRoutes.getSiteBasePath()) {
    return SiteRoutes.pathTo("shop");
  }
  return "shop";
}

// Get product ID from URL: /repo/slug, затем ?id=, затем #slug
function getProductId() {
  if (window.SiteRoutes) {
    const after = SiteRoutes.pathnameAfterRepo();
    if (after.length) {
      const last = after[after.length - 1];
      if (!last.endsWith(".html") && !SiteRoutes.isIndexSection(last)) {
        const id = getSlugToIdMap()[last.toLowerCase()];
        if (id) return id;
      }
    }
  }
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id");
  if (idParam !== null && idParam !== "") {
    const id = parseInt(idParam, 10);
    if (!Number.isNaN(id) && getProductData(id)) return id;
  }
  const rawHash = window.location.hash.replace(/^#/, "");
  if (rawHash) {
    const slug = decodeURIComponent(rawHash).toLowerCase();
    const id = getSlugToIdMap()[slug];
    if (id) return id;
  }
  return NaN;
}

function getSlugForProductId(id) {
  const p = getProductData(id);
  if (!p) return null;
  const path = p.image || (p.images && p.images[0]) || "";
  return imagePathToProductSlug(path) || null;
}

function syncProductUrlSlug(product) {
  const slug = imagePathToProductSlug(
    product.image || (product.images && product.images[0]) || "",
  );
  if (!slug) return;
  if (window.SiteRoutes && SiteRoutes.getSiteBasePath()) {
    const desired = SiteRoutes.pathTo(slug);
    const cur = window.location.pathname.replace(/\/+$/, "");
    const want = desired.replace(/\/+$/, "");
    if (cur !== want || window.location.search || window.location.hash) {
      history.replaceState(null, "", desired);
    }
    return;
  }
  const params = new URLSearchParams(window.location.search);
  const currentHash = window.location.hash.replace(/^#/, "");
  if (params.has("id") || currentHash !== slug) {
    history.replaceState(null, "", `product.html#${slug}`);
  }
}

// Get all product IDs in order
function getAllProductIds() {
  return Object.keys(productDatabase)
    .map((id) => parseInt(id))
    .sort((a, b) => a - b);
}

// Get product data
function getProductData(id) {
  return productDatabase[id] || null;
}

// Get next product ID
function getNextProductId(currentId) {
  const allIds = getAllProductIds();
  const currentIndex = allIds.indexOf(currentId);
  if (currentIndex === -1 || currentIndex === allIds.length - 1) {
    return allIds[0]; // Loop to first
  }
  return allIds[currentIndex + 1];
}

// Get previous product ID
function getPrevProductId(currentId) {
  const allIds = getAllProductIds();
  const currentIndex = allIds.indexOf(currentId);
  if (currentIndex === -1 || currentIndex === 0) {
    return allIds[allIds.length - 1]; // Loop to last
  }
  return allIds[currentIndex - 1];
}

// Format price
function formatPrice(price) {
  return new Intl.NumberFormat("ru-RU").format(price);
}

// Get category name
function getCategoryName(category) {
  const names = {
    painting: "Живопись",
    graphic: "Графика",
    decorative: "Декоративное искусство",
    digital: "Цифровое искусство",
  };
  return names[category] || category;
}

// Render product page
function renderProduct() {
  const container = document.getElementById("productContainer");
  const productId = getProductId();

  if (!productId) {
    container.innerHTML =
      '<div class="error">Товар не найден. <a href="' +
      shopPageHref() +
      '">Вернуться в магазин</a></div>';
    return;
  }

  const product = getProductData(productId);

  if (!product) {
    container.innerHTML =
      '<div class="error">Товар не найден. <a href="' +
      shopPageHref() +
      '">Вернуться в магазин</a></div>';
    return;
  }

  // Handle video and multiple images
  let mediaHtml = "";

  if (product.video) {
    // Product has video
    mediaHtml = `
            <div class="product-media">
                <div class="product-video">
                    <video controls class="product-video-player">
                        <source src="${product.video}" type="video/mp4">
                        Ваш браузер не поддерживает видео.
                    </video>
                </div>
                ${
                  product.images && product.images.length > 0
                    ? `
                    <div class="product-gallery">
                        <h3 class="gallery-title">Фото календаря</h3>
                        <div class="gallery-grid">
                            ${product.images
                              .map(
                                (img, idx) => `
                                <div class="gallery-item" data-gallery-src="${img.replace(/"/g, "&quot;")}" data-gallery-index="${idx}">
                                    <img src="${img}" alt="${product.title} - фото ${idx + 1}" />
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                `
                    : ""
                }
            </div>
        `;
  } else if (product.images && product.images.length > 0) {
    // Product has multiple images
    mediaHtml = `
            <div class="product-media">
                <div class="product-gallery-main">
                    <img src="${product.images[0]}" alt="${product.title}" class="product-main-image" id="mainProductImage" />
                </div>
                <div class="product-gallery-thumbs">
                    ${product.images
                      .map(
                        (img, idx) => `
                        <img src="${img}" alt="${product.title} - фото ${idx + 1}" 
                             class="gallery-thumb ${idx === 0 ? "active" : ""}" 
                             data-thumb-src="${img.replace(/"/g, "&quot;")}" data-thumb-index="${idx}" />
                    `,
                      )
                      .join("")}
                </div>
            </div>
        `;
  } else {
    // Single image (original behavior)
    const imageHtml =
      product.image.startsWith("images/") || product.image.startsWith("http")
        ? `<img src="${product.image}" alt="${product.title}" class="product-image" style="cursor: pointer;" data-product-id="${product.id}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'product-image-placeholder\\' data-product-id=\\'${product.id}\\'>🎨</div>';" />`
        : `<div class="product-image-placeholder" style="cursor: pointer;" data-product-id="${product.id}">${product.image}</div>`;

    mediaHtml = `<div class="product-image-section">${imageHtml}</div>`;
  }

  container.innerHTML = `
        <div class="product-wrapper">
            ${mediaHtml}
            <div class="product-info-section">
                <h1 class="product-title">${product.title}</h1>
                <p class="product-category">${getCategoryName(product.category)}</p>
                
                <div class="product-details">
                    ${
                      product.size
                        ? `<div class="product-detail-item">
                        <span class="detail-label">Размер:</span>
                        <span class="detail-value">${product.size}</span>
                    </div>`
                        : ""
                    }
                    
                    ${
                      product.material
                        ? `<div class="product-detail-item">
                        <span class="detail-label">Материал:</span>
                        <span class="detail-value">${product.material}</span>
                    </div>`
                        : ""
                    }
                    
                    <div class="product-detail-item">
                        <span class="detail-label">Категория:</span>
                        <span class="detail-value">${getCategoryName(product.category)}</span>
                    </div>
                </div>
                
                <div class="product-price-section">
                    <div class="product-price">${formatPrice(product.price)} ₽</div>
                    <button class="btn btn-primary btn-large" onclick="handlePurchase(${product.id})">
                        Купить
                    </button>
                </div>
                
                <div class="product-description">
                    <h2>Описание</h2>
                    <div class="description-short">
                        <p>${product.description || "Оригинальное произведение искусства, выполненное с любовью и мастерством."}</p>
                    </div>
                    <div class="description-full">
                        ${
                          product.fullDescription ||
                          `
                            <p>Это уникальное произведение искусства создано профессиональным художником с использованием качественных материалов и проверенных временем техник. Картина несет в себе глубокий смысл и эстетическую ценность, способную преобразить любое пространство.</p>
                            <p>Работа выполнена с вниманием к деталям и передает особую энергетику, которая будет радовать владельца долгие годы. Каждое произведение уникально и неповторимо, что делает его ценным приобретением для коллекционеров и ценителей искусства.</p>
                            <p>Картина готова к размещению и может быть доставлена в любой регион. При необходимости можно обсудить варианты оформления и обрамления.</p>
                        `
                        }
                    </div>
                </div>
            </div>
        </div>
    `;

  // Update page title
  document.title = `${product.title} - Olga Sidorova Art`;

  syncProductUrlSlug(product);

  // Add click handler to product image (if single image)
  const productImage = container.querySelector("[data-product-id]");
  if (productImage) {
    productImage.addEventListener("click", function () {
      openProductModal(
        product.image,
        product.title,
        product.fullDescription || product.description || "",
      );
    });
  }

  // Gallery: open photo in modal (video + images layout) — pass gallery for prev/next
  container
    .querySelectorAll(".gallery-item[data-gallery-src]")
    .forEach((el) => {
      el.addEventListener("click", function () {
        const src = this.getAttribute("data-gallery-src");
        const idx = parseInt(this.getAttribute("data-gallery-index"), 10);
        openProductModal(
          src,
          `${product.title} — фото ${idx + 1}`,
          product.description || "",
          product.images,
          idx,
        );
      });
    });

  // Thumbs: change main image + open modal on main image click (images-only layout)
  const mainImg = container.querySelector("#mainProductImage");
  const thumbs = container.querySelectorAll(".gallery-thumb[data-thumb-src]");
  if (mainImg && product.images && product.images.length) {
    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", function () {
        const src = this.getAttribute("data-thumb-src");
        const idx = parseInt(this.getAttribute("data-thumb-index"), 10);
        mainImg.src = src;
        thumbs.forEach((t, i) => t.classList.toggle("active", i === idx));
      });
    });
    mainImg.style.cursor = "pointer";
    mainImg.addEventListener("click", function () {
      const activeThumb = container.querySelector(".gallery-thumb.active");
      const idx = activeThumb
        ? parseInt(activeThumb.getAttribute("data-thumb-index"), 10)
        : 0;
      openProductModal(
        product.images[idx],
        product.title,
        product.fullDescription || product.description || "",
        product.images,
        idx,
      );
    });
  }

  // Update navigation arrows
  updateNavigationArrows(productId);
}

// Initialize navigation arrows (called once on page load)
function initializeNavigationArrows() {
  const prevBtn = document.getElementById("prevProduct");
  const nextBtn = document.getElementById("nextProduct");

  if (prevBtn) {
    prevBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const currentId = getProductId();
      if (currentId) {
        const prevId = getPrevProductId(currentId);
        const prevSlug = getSlugForProductId(prevId);
        if (
          window.SiteRoutes &&
          SiteRoutes.getSiteBasePath() &&
          prevSlug
        ) {
          window.location.href = SiteRoutes.pathTo(prevSlug);
        } else if (prevSlug) {
          window.location.href = `product.html#${prevSlug}`;
        } else {
          window.location.href = `product.html?id=${prevId}`;
        }
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const currentId = getProductId();
      if (currentId) {
        const nextId = getNextProductId(currentId);
        const nextSlug = getSlugForProductId(nextId);
        if (
          window.SiteRoutes &&
          SiteRoutes.getSiteBasePath() &&
          nextSlug
        ) {
          window.location.href = SiteRoutes.pathTo(nextSlug);
        } else if (nextSlug) {
          window.location.href = `product.html#${nextSlug}`;
        } else {
          window.location.href = `product.html?id=${nextId}`;
        }
      }
    });
  }
}

// Update navigation arrows (kept for compatibility, but not needed now)
function updateNavigationArrows(currentId) {
  // Arrows are initialized once, they read current ID from URL
}

// Handle purchase
function handlePurchase(productId) {
  const product = getProductData(productId);
  if (product) {
    openBuyModal(product.title);
  }
}

// Modal gallery state (for prev/next when viewing calendar or multi-image product)
let modalGalleryImages = null;
let modalGalleryIndex = -1;
let modalGalleryTitle = "";
let modalGalleryDescription = "";
let modalHideCaption = false;

function buildModalCaption(title, description) {
  let descriptionText = "";
  if (description) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = description;
    descriptionText = tempDiv.textContent || tempDiv.innerText || "";
    if (descriptionText.length > 300) {
      descriptionText = descriptionText.substring(0, 300) + "...";
    }
  }
  return `<strong>${title}</strong>${descriptionText ? "<br><br>" + descriptionText : ""}`;
}

function showModalImage(src, title, description) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const modalImageContainer = modal.querySelector(".modal-image-container");

  if (
    src.startsWith("images/") ||
    src.startsWith("http") ||
    src.startsWith("blob:")
  ) {
    modalImage.src = src;
    modalImage.alt = title;
    modalImage.style.display = "block";
    modalImageContainer.innerHTML = "";
    modalImageContainer.appendChild(modalImage);
  } else {
    modalImage.src = "";
    modalImage.style.display = "none";
    modalImageContainer.innerHTML = `<div style="font-size: 8rem; color: white;">🎨</div>`;
  }
  if (modalHideCaption) {
    modalCaption.innerHTML = "";
    modalCaption.classList.add("modal-caption-hidden");
  } else {
    modalCaption.classList.remove("modal-caption-hidden");
    modalCaption.innerHTML = buildModalCaption(title, description);
  }
}

function modalGalleryPrev() {
  if (!modalGalleryImages || modalGalleryImages.length === 0) return;
  modalGalleryIndex =
    (modalGalleryIndex - 1 + modalGalleryImages.length) %
    modalGalleryImages.length;
  const src = modalGalleryImages[modalGalleryIndex];
  const title = `${modalGalleryTitle} — фото ${modalGalleryIndex + 1}`;
  showModalImage(src, title, modalGalleryDescription);
}

function modalGalleryNext() {
  if (!modalGalleryImages || modalGalleryImages.length === 0) return;
  modalGalleryIndex = (modalGalleryIndex + 1) % modalGalleryImages.length;
  const src = modalGalleryImages[modalGalleryIndex];
  const title = `${modalGalleryTitle} — фото ${modalGalleryIndex + 1}`;
  showModalImage(src, title, modalGalleryDescription);
}

function openProductModal(
  image,
  title,
  description,
  galleryImages,
  galleryIndex,
) {
  const modal = document.getElementById("imageModal");
  const prevBtn = document.getElementById("modalPrev");
  const nextBtn = document.getElementById("modalNext");

  modalGalleryImages =
    galleryImages && galleryImages.length > 0 ? galleryImages : null;
  modalGalleryIndex =
    typeof galleryIndex === "number" && modalGalleryImages ? galleryIndex : -1;
  modalGalleryTitle = title.replace(/\s*—\s*фото\s+\d+\s*$/, "").trim();
  modalGalleryDescription = description || "";
  modalHideCaption = true;

  showModalImage(image, title, description);
  modal.classList.add("active");

  if (prevBtn && nextBtn) {
    if (modalGalleryImages && modalGalleryImages.length > 1) {
      prevBtn.classList.remove("modal-arrow-hidden");
      nextBtn.classList.remove("modal-arrow-hidden");
    } else {
      prevBtn.classList.add("modal-arrow-hidden");
      nextBtn.classList.add("modal-arrow-hidden");
    }
  }
}

function closeProductModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.remove("active");
  modalGalleryImages = null;
  modalGalleryIndex = -1;
  modalHideCaption = false;
}

// Buy modal: choose contact method
function openBuyModal(title) {
  const modal = document.getElementById("buyModal");
  const titleEl = document.getElementById("buyModalTitle");
  if (modal && titleEl) {
    titleEl.textContent = title
      ? `Вы хотите купить «${title}»?`
      : "Вы хотите купить?";
    modal.classList.add("active");
  }
}

function closeBuyModal() {
  const modal = document.getElementById("buyModal");
  if (modal) modal.classList.remove("active");
}

function initializeBuyModal() {
  const modal = document.getElementById("buyModal");
  if (!modal) return;
  const backdrop = modal.querySelector(".buy-modal-backdrop");
  const closeBtn = modal.querySelector(".buy-modal-close");
  const options = modal.querySelectorAll(".buy-modal-option");

  if (backdrop) {
    backdrop.addEventListener("click", closeBuyModal);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeBuyModal);
  }
  options.forEach((opt) => {
    opt.addEventListener("click", function () {
      closeBuyModal();
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeBuyModal();
    }
  });
}

// Initialize modal
function initializeModal() {
  const modal = document.getElementById("imageModal");
  const modalClose = document.querySelector(".modal-close");
  const prevBtn = document.getElementById("modalPrev");
  const nextBtn = document.getElementById("modalNext");

  if (modalClose) {
    modalClose.addEventListener("click", closeProductModal);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      modalGalleryPrev();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      modalGalleryNext();
    });
  }

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeProductModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") {
      closeProductModal();
    } else if (modalGalleryImages && modalGalleryImages.length > 1) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        modalGalleryPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        modalGalleryNext();
      }
    }
  });
}

// Initialize mobile navigation
function initializeMobileNavigation() {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-link");

  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      nav.classList.toggle("active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (e) {
      if (nav && nav.classList.contains("active")) {
        if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
          nav.classList.remove("active");
        }
      }
    });

    // Close mobile menu after clicking a link
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (nav && nav.classList.contains("active")) {
          nav.classList.remove("active");
        }
      });
    });
  }
}

// Scroll to top button
function initializeScrollToTop() {
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (!scrollToTopBtn) return;

  let lastScrollTop = 0;

  // Show/hide button based on scroll position and direction
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Show button when scrolled down more than 300px
    if (scrollTop > 300) {
      // Determine scroll direction
      if (scrollTop > lastScrollTop) {
        // Scrolling down - hide button
        scrollToTopBtn.classList.remove("visible");
      } else {
        // Scrolling up - show button
        scrollToTopBtn.classList.add("visible");
      }
    } else {
      // Near top - hide button
      scrollToTopBtn.classList.remove("visible");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Scroll to top on click
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  initializeModal();
  initializeBuyModal();
  initializeMobileNavigation();
  initializeScrollToTop();
  initializeNavigationArrows();
  renderProduct();
});
