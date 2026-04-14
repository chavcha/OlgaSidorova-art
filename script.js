// Shop data
const shopData = [
  {
    id: 1,
    title: "Огненный цветок матери",
    category: "painting",
    price: 70000,
    image: "images/mother's-ember-flower.jpg",
    material: "Масло, холст",
    size: "50x70 см",
    description:
      "Эта мощная картина представляет собой глубокое исследование материнской энергии и силы. Огненный цветок символизирует вечный огонь любви, заботы и защиты.",
  },
  {
    id: 2,
    title: "Инь Ян",
    category: "painting",
    price: 70000,
    image: "images/ying-yang.jpg",
    material: "Масло, холст",
    size: "50x70 см",
    description:
      "Классический символ баланса и гармонии, представленный в современной интерпретации. Картина отражает вечную борьбу и единство противоположностей.",
  },
  {
    id: 3,
    title: "Летняя",
    category: "painting",
    price: 25000,
    image: "images/summer.jpg",
    material: "Масло, холст",
    size: "50x60 см",
    description:
      "Яркая и жизнерадостная картина, наполненная энергией летнего дня. Работа передает всю красоту и тепло летнего сезона.",
  },
  {
    id: 4,
    title: "Формирующаяся планета",
    category: "painting",
    price: 70000,
    image: "images/emerging-planet.jpg",
    material: "Масло, холст",
    size: "50x70 см",
    description:
      "Монументальное произведение, изображающее момент рождения новой планеты в космическом пространстве. Картина отражает процесс созидания и зарождения жизни.",
  },
  {
    id: 5,
    title: "Сила Рода",
    category: "painting",
    price: 70000,
    image: "images/kind's-power.jpg",
    material: "Масло, холст",
    size: "50x70 см",
    description:
      "Глубокое и сильное произведение, исследующее концепцию родовой силы и связи поколений. Картина передает энергию предков и силу традиций.",
  },
  {
    id: 6,
    title: "Танец Души",
    category: "painting",
    price: 35000,
    image: "images/soul's-dance.jpg",
    material: "Масло, холст",
    size: "50x60 см",
    description:
      "Экспрессивное и динамичное произведение, изображающее внутренний танец души. Картина передает движение энергии, эмоций и духовного освобождения.",
  },
  {
    id: 7,
    title: "Шивалингам",
    category: "painting",
    price: 15000,
    image: "images/shivalingam.jpg",
    material: "Масло, холст",
    size: "35×45 см",
    description:
      "Экспрессивная акриловая картина, изображающая мистический лик Господа Шивы, сливающийся с священным Шива-лингамом.",
  },
  {
    id: 8,
    title: "Нежность",
    category: "painting",
    price: 30000,
    image: "images/tenderness.jpg",
    material: "Масло, холст",
    size: "50x60 см",
    description:
      "Нежная и чувственная картина, передающая всю мягкость и тепло человеческих эмоций. Работа наполнена легкостью и воздушностью.",
  },
  {
    id: 9,
    title: "Путь в глубину",
    category: "painting",
    price: 25000,
    image: "images/path-to-deep.jpg",
    material: "Масло, холст",
    size: "50×70 см",
    description:
      "Философское произведение, исследующее путь внутреннего развития и самопознания. Картина символически изображает путешествие в глубины собственного сознания.",
  },
  {
    id: 10,
    title: "Шаманка",
    category: "painting",
    price: 35000,
    image: "images/shamanka.jpg",
    material: "Масло, холст",
    size: "50×50 см",
    description:
      "Мощное и мистическое произведение, изображающее образ шаманки - проводницы между мирами. Картина передает силу, мудрость и связь с духовными силами.",
  },
  {
    id: 11,
    title: "Пробуждение Жизни",
    category: "painting",
    price: 20000,
    image: "images/life's-reborn.jpg",
    material: "Масло, холст",
    size: "40×50 см",
    description:
      "Жизнеутверждающее произведение, изображающее момент пробуждения и зарождения новой жизни. Картина наполнена энергией роста и обновления.",
  },
  {
    id: 12,
    title: "Женщины Рода",
    category: "painting",
    price: 70000,
    image: "images/kind's-women.jpg",
    material: "Масло, холст",
    size: "50×60 см",
    description:
      "Монументальное произведение, воспевающее силу и красоту женщин рода. Картина отражает связь между поколениями женщин и их роль в сохранении традиций.",
  },
  {
    id: 13,
    title: "Сила",
    category: "painting",
    price: 70000,
    image: "images/power.jpg",
    material: "Масло, холст",
    size: "50×60 см",
    description:
      "Мощное и динамичное произведение, исследующее концепцию внутренней и внешней силы. Картина передает энергию могущества и уверенности.",
  },
  {
    id: 14,
    title: "Единение",
    category: "painting",
    price: 70000,
    image: "images/unity.jpg",
    material: "Масло, холст",
    size: "50×60 см",
    description:
      "Гармоничное произведение, отражающее концепцию единения и целостности. Картина передает идею соединения противоположностей в единое целое.",
  },
  {
    id: 15,
    title: "Танец энергий",
    category: "painting",
    price: 40000,
    image: "images/dance-of-energies.jpg",
    material: "Масло, холст",
    size: "50×60 см",
    description:
      "Динамичное и энергичное произведение, изображающее движение и взаимодействие различных энергий. Картина передает ощущение постоянного движения и трансформации.",
  },
  {
    id: 16,
    title: "Встреча",
    category: "painting",
    price: 70000,
    image: "images/meeting.jpg",
    material: "Масло, холст",
    size: "50×60 см",
    description:
      "Эмоциональное произведение, изображающее момент встречи - символической или реальной. Картина передает глубину человеческих отношений и значимость встреч.",
  },
  {
    id: 17,
    title: "Pachamama",
    category: "painting",
    price: 20000,
    image: "images/pachamama.jpg",
    material: "Масло, холст",
    size: "40×40 см",
    description:
      "Духовное произведение, посвященное Pachamama - богине Земли в культурах Анд. Картина отражает связь человека с матерью-Землей и природой.",
  },
  {
    id: 18,
    title: "Календарь 2026",
    category: "painting",
    price: 2000,
    image: "images/calendar2026.jpg",
    material: "Печать, бумага",
    size: "A3",
    description:
      "Авторский календарь с картинами художницы. Каждый месяц украшен уникальным произведением искусства, создавая вдохновение на весь год.",
    video: "videos/calendar-video.mp4",
    images: [
      "images/calendar2026.jpg",
      "images/calendar-2.jpg",
      "images/calendar-3.jpg",
    ],
  },
  {
    id: 19,
    title: "Обережная",
    category: "painting",
    price: 25000,
    image: "images/oberezhnaya.jpg",
    material: "Масло, холст",
    size: "50×50 см",
    description:
      "Символическая работа о защите, внутренней силе и связи с природой. Картина наполнена теплой энергией и ощущением поддержки.",
  },
  {
    id: 20,
    title: "Реальная иллюзия",
    category: "painting",
    price: 35000,
    image: "images/real-illusion.jpg",
    material: "Масло, холст",
    size: "50×70 см",
    description:
      "Экспрессивная композиция, исследующая границу между реальным и воображаемым. Контрастные формы и цвета создают ощущение многослойной реальности.",
  },
  {
    id: 21,
    title: "Печать на холсте",
    category: "painting",
    price: 3680,
    pricePrefix: "от",
    image: "images/holst-print.jpg",
    material: "Печать, холст",
    size: "20x27 см и больше",
    description:
      "Печать выбранной картины на холсте в разных форматах. В карточке доступны видео и фото с примерами и актуальной сеткой цен.",
    video: "videos/holst-video.mp4",
    images: ["images/holst-print.jpg", "images/holst-price-list.jpg"],
  },
];

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", function () {
  scrollToIndexSectionInitial();
  initializeNavigation();
  initializeShop();
  initializeModal();
  initializeBuyModal();
  initializeContactForm();
});

function scrollToIndexSectionInitial() {
  if (!window.SiteRoutes) return;
  let section = SiteRoutes.getIndexSectionFromPath();
  const hashSection = window.location.hash.replace(/^#/, "");
  if (SiteRoutes.isIndexSection(hashSection)) {
    section = hashSection;
  }
  const el = document.getElementById(section);
  if (!el) return;
  requestAnimationFrame(function () {
    el.scrollIntoView({ block: "start" });
  });
}

// Navigation
function initializeNavigation() {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav");

  function extractSectionFromHref(href) {
    if (!href) return "";
    const cleanHref = href.trim();
    if (SiteRoutes.isIndexSection(cleanHref)) return cleanHref;

    if (cleanHref.startsWith("#")) {
      const hashName = cleanHref.slice(1);
      return SiteRoutes.isIndexSection(hashName) ? hashName : "";
    }

    const hashIdx = cleanHref.indexOf("#");
    if (hashIdx !== -1) {
      const hashName = cleanHref.slice(hashIdx + 1);
      return SiteRoutes.isIndexSection(hashName) ? hashName : "";
    }

    return "";
  }

  document.body.addEventListener("click", function (e) {
    if (!window.SiteRoutes || !document.getElementById("home")) return;
    const a = e.target.closest("a");
    if (!a) return;
    const href = a.getAttribute("href");
    const section = extractSectionFromHref(href);
    if (!section) return;
    const targetSection = document.getElementById(section);
    if (!targetSection) return;
    e.preventDefault();
    history.pushState({ section }, "", SiteRoutes.pathTo(section));
    targetSection.scrollIntoView({ behavior: "smooth" });
    const navLink = document.querySelector(
      '.nav-link[data-section="' + section + '"]',
    );
    if (navLink) updateActiveNavLink(navLink);
    if (nav && nav.classList.contains("active")) {
      nav.classList.remove("active");
    }
  });

  window.addEventListener("popstate", function () {
    if (!window.SiteRoutes) return;
    const section = SiteRoutes.getIndexSectionFromPath();
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    const link = document.querySelector(
      '.nav-link[data-section="' + section + '"]',
    );
    if (link) updateActiveNavLink(link);
  });

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      nav.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (nav && nav.classList.contains("active")) {
      if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        nav.classList.remove("active");
      }
    }
  });

  // Update active nav link on scroll
  window.addEventListener("scroll", updateActiveNavOnScroll);

  // Initialize scroll to top button
  initializeScrollToTop();
}

function updateActiveNavLink(activeLink) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  activeLink.classList.add("active");
}

function updateActiveNavOnScroll() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(
      `.nav-link[data-section="${sectionId}"]`,
    );

    if (
      scrollPos >= sectionTop &&
      scrollPos < sectionTop + sectionHeight &&
      navLink
    ) {
      updateActiveNavLink(navLink);
    }
  });
}

// Scroll to top button
function initializeScrollToTop() {
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (!scrollToTopBtn) return;

  let lastScrollTop = 0;
  let isScrollingDown = false;

  // Show/hide button based on scroll position and direction
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Show button when scrolled down more than 300px
    if (scrollTop > 300) {
      // Determine scroll direction
      if (scrollTop > lastScrollTop) {
        // Scrolling down - hide button
        isScrollingDown = true;
        scrollToTopBtn.classList.remove("visible");
      } else {
        // Scrolling up - show button
        isScrollingDown = false;
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

function getCategoryName(category) {
  const names = {
    painting: "Живопись",
    graphic: "Графика",
    decorative: "Декоративное искусство",
    digital: "Цифровое искусство",
  };
  return names[category] || category;
}

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

function shopItemProductHref(item) {
  const slug = imagePathToProductSlug(item.image);
  if (!slug) return `product.html?id=${item.id}`;
  if (window.SiteRoutes) return SiteRoutes.pathTo(slug);
  return `product.html#${slug}`;
}

// Shop
function initializeShop() {
  const shopGrid = document.getElementById("shopGrid");

  shopData.forEach((item) => {
    const shopItem = createShopItem(item);
    shopGrid.appendChild(shopItem);
  });
}

function createShopItem(item) {
  const div = document.createElement("div");
  div.className = "shop-item";
  const imageHtml =
    item.image.startsWith("images/") || item.image.startsWith("http")
      ? `<img src="${item.image}" alt="${item.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='🎨';" />`
      : `<div class="shop-item-placeholder">${item.image}</div>`;
  const productHref = shopItemProductHref(item);
  div.innerHTML = `
        <a href="${productHref}" class="shop-item-link">
            <div class="shop-item-image">${imageHtml}</div>
            <div class="shop-item-info">
                <h3 class="shop-item-title">${item.title}</h3>
                <p class="shop-item-category">${getCategoryName(item.category)}</p>
                ${item.material ? `<p class="shop-item-material">${item.material}</p>` : ""}
                ${item.size ? `<p class="shop-item-size">Размер: ${item.size}</p>` : ""}
                <p class="shop-item-price">${item.pricePrefix ? item.pricePrefix + " " : ""}${formatPrice(item.price)} ₽</p>
            </div>
        </a>
        <div class="shop-item-buttons">
            <a href="${productHref}" class="btn btn-secondary shop-item-btn-link">
                Подробнее
            </a>
            <button class="btn btn-primary shop-item-btn" onclick="event.preventDefault(); event.stopPropagation(); handlePurchase(${item.id}); return false;">
                Купить
            </button>
        </div>
    `;
  return div;
}

function formatPrice(price) {
  return new Intl.NumberFormat("ru-RU").format(price);
}

function handlePurchase(itemId) {
  const item = shopData.find((i) => i.id === itemId);
  if (item) {
    openBuyModal(item.title);
  }
}

// Modal
function initializeModal() {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const modalClose = document.querySelector(".modal-close");

  window.openModal = function (image, caption, description) {
    const modalImageContainer = modal.querySelector(".modal-image-container");
    if (image.startsWith("images/") || image.startsWith("http")) {
      modalImage.src = image;
      modalImage.alt = caption;
      modalImage.style.display = "block";
      if (modalImageContainer.textContent !== "") {
        modalImageContainer.innerHTML = "";
        modalImageContainer.appendChild(modalImage);
      }
    } else {
      modalImage.src = "";
      modalImage.style.display = "none";
      modalImageContainer.innerHTML = `<div style="font-size: 8rem; color: white;">${image}</div>`;
    }
    modalCaption.textContent = description
      ? `${caption} - ${description}`
      : caption;
    modal.classList.add("active");
  };

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.remove("active");
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

// Contact Form
function initializeContactForm() {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
      };

      // Here you would typically send the data to a server
      console.log("Form submitted:", formData);

      alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
      form.reset();
    });
  }
}
