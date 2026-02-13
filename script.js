const pages = [
  {
    name: "Dashboard",
    cards: [
      {
        title: "Quick-start wizard",
        tag: "Onboarding",
        description: "Finish studio setup in under 15 minutes with guided actions.",
        points: ["Brand profile complete", "Community channels pending", "First challenge draft ready"],
      },
      {
        title: "Live activity feed",
        tag: "Realtime",
        description: "Monitor member messages, joins, and challenge participation.",
        points: ["12 new Discord members", "43 WhatsApp interactions", "3 feedback responses"],
      },
      {
        title: "Weekly priorities",
        tag: "Action",
        description: "Suggested next actions to improve retention and consistency.",
        points: ["Approve reel caption", "Schedule 2 challenges", "Review SEO prompts"],
      },
    ],
  },
  {
    name: "Branding & Customization",
    cards: [
      {
        title: "Brand identity kit",
        tag: "White-label",
        description: "Upload logos, tune colors, and select typography with live previews.",
        points: ["Logo variants", "Palette tokens", "Font pairings"],
      },
      {
        title: "Voice & tone",
        tag: "Guidelines",
        description: "Define communication style for posts, reels, and welcome messages.",
        points: ["Friendly coach tone", "Local language options", "CTA examples"],
      },
    ],
  },
  {
    name: "Plan & Billing",
    cards: [
      {
        title: "Tier options",
        tag: "Pricing",
        description: "Basic €50, Pro €99, Pro Max €119 with annual discounts.",
        points: ["Pro annual: 10% off", "Pro Max annual: 30% off", "Easy upgrade/downgrade"],
      },
      {
        title: "Savings visualizer",
        tag: "Transparent",
        description: "Toggle annual billing and instantly compare monthly equivalent costs.",
        points: ["Auto-prorated changes", "Invoice history", "Tax-ready exports"],
      },
    ],
  },
  {
    name: "Retention Kit Setup",
    cards: [
      {
        title: "Community integrations",
        tag: "Discord + WhatsApp",
        description: "Connect channels and configure role-based access for team members.",
        points: ["Discord bot setup", "WhatsApp broadcast templates", "Member onboarding flow"],
      },
      {
        title: "Welcome journey",
        tag: "Retention",
        description: "Set automated greetings, intro tasks, and challenge invitations.",
        points: ["Welcome DM", "First-week checklist", "Motivation nudges"],
      },
    ],
  },
  {
    name: "Content Calendar & Publishing",
    cards: [
      {
        title: "Weekly cadence",
        tag: "Content engine",
        description: "Manage posts, one reel, and two weekly challenges with localization.",
        points: ["Calendar drag-and-drop", "Hashtag suggestions", "Post time optimization"],
      },
      {
        title: "One-click publishing",
        tag: "Multichannel",
        description: "Deploy approved content to linked channels from one workflow.",
        points: ["Discord", "WhatsApp", "Social integrations"],
      },
    ],
  },
  {
    name: "SEO & Discovery Tools",
    cards: [
      {
        title: "Keyword opportunities",
        tag: "Europe-focused",
        description: "Receive localized keyword ideas and optimization prompts per campaign.",
        points: ["Caption SEO", "Title tuning", "Alt-text suggestions"],
      },
    ],
  },
  {
    name: "Ebooks & Pamphlets Library",
    cards: [
      {
        title: "Resource vault",
        tag: "Authority",
        description: "Customize and export white-label educational material quickly.",
        points: ["Metadata editing", "PDF + social snippets", "Campaign tagging"],
      },
    ],
  },
  {
    name: "Branding Assets & Media Library",
    cards: [
      {
        title: "Template library",
        tag: "Creative",
        description: "Access posts, reels, stories, and pamphlet templates in one place.",
        points: ["Drag-and-drop editor", "Brand-safe presets", "Asset collections"],
      },
    ],
  },
  {
    name: "Analytics & Insights",
    cards: [
      {
        title: "Performance dashboard",
        tag: "Insights",
        description: "Track engagement, reach, and channel health with trend reporting.",
        points: ["Date/channel filters", "Retention KPIs", "Actionable recommendations"],
      },
    ],
  },
  {
    name: "Help & Community Support",
    cards: [
      {
        title: "Support hub",
        tag: "Enablement",
        description: "Get onboarding tours, FAQs, and best-practice guides for non-technical teams.",
        points: ["Interactive guides", "Template exchange", "Weekly live touchpoints"],
      },
    ],
  },
];

const nav = document.getElementById("page-nav");
const pageContent = document.getElementById("page-content");
const pageTitle = document.getElementById("active-page-title");
const cardTemplate = document.getElementById("card-template");

function renderPage(page) {
  pageTitle.textContent = page.name;
  pageContent.innerHTML = "";

  page.cards.forEach((card) => {
    const node = cardTemplate.content.cloneNode(true);
    node.querySelector("h3").textContent = card.title;
    node.querySelector(".tag").textContent = card.tag;
    node.querySelector("p").textContent = card.description;

    const ul = node.querySelector("ul");
    card.points.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      ul.append(li);
    });

    pageContent.append(node);
  });
}

pages.forEach((page, index) => {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = page.name;

  btn.addEventListener("click", () => {
    document.querySelectorAll("#page-nav button").forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");
    renderPage(page);
  });

  if (index === 0) {
    btn.classList.add("active");
    renderPage(page);
  }

  li.append(btn);
  nav.append(li);
});
