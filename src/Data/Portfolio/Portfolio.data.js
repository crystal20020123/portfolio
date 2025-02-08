//Images
import NovmUser from "Assets/portfolio/novmuser/1.jpg";
import OllaBot from "Assets/portfolio/ollabot/1.jpg";
import SketchToImage from "Assets/portfolio/sketchtoimage/1.jpg";
import Leveld from "Assets/portfolio/leveld/1.jpg";
import Vocalo from "Assets/portfolio/vocalo/1.jpg";
import HeyLuna from "Assets/portfolio/heyluna/1.jpg";
import Hamie from "Assets/portfolio/hamie/1.jpg";
import TeleBook from "Assets/portfolio/telebook/1.jpg";
import Dragon from "Assets/portfolio/dragon/1.jpg";
import Dbazzar from "Assets/portfolio/dbazzar/1.jpg";
import Alison from "Assets/portfolio/alison/1.jpg";
import Magic from "Assets/portfolio/magic/1.jpg";
import Weverse from "Assets/portfolio/weverse/1.jpg";
import Aruba from "Assets/portfolio/aruba/1.jpg";
import Spark from "Assets/portfolio/spark/1.jpg";
import UniPlace from "Assets/portfolio/uniplace/1.jpg";
import Alomoves from "Assets/portfolio/alomoves/1.jpg";
import OnBuy from "Assets/portfolio/onbuy/1.jpg";
import Detection from "Assets/portfolio/detection/1.jpg";
import Lummi from "Assets/portfolio/lummi/1.jpg";

const portfolioData = [
  {
    name: "Sketch To Image transforms any sketches into stunning image using AI magic.",
    filter: "ai",
    image: SketchToImage,
    title: "sketchtoimage",
    count: 6,
    url: "https://sketchtoimage.com",
    keywords: ["Stable Diffusion", "Generative Art"],
  },
  {
    name: "AI-powered writing assistant designed to enhance your novel creation process.",
    filter: "ai",
    image: NovmUser,
    title: "novmuser",
    count: 5,
    url: "https://novmuserai.com",
    keywords: ["AI agent", "Generative AI"],
  },
  {
    name: "AI-powered platform offering images, including photos, illustrations, and 3D visuals.",
    filter: "ai",
    image: Lummi,
    title: "lummi",
    count: 4,
    url: "https://www.lummi.ai",
    keywords: ["Image Generator", "Stable Diffusion"],
  },
  {
    name: "SaaS platform for creating custom AI chatbots without coding.",
    filter: "ai",
    image: OllaBot,
    title: "ollabot",
    count: 4,
    url: "https://app.ollabot.com",
    keywords: ["AI chatbot", "Langchain"],
  },
  {
    name: "Simple and straightforward with AI being the cherry on top.",
    filter: "ai",
    image: Leveld,
    title: "leveld",
    count: 5,
    url: "https://leveld-frontend.vercel.app",
    keywords: ["Next.js", "OpenAI"],
  },
  {
    name: "Speak and improve your English fluency with AI-powered spoken English tutor.",
    filter: "ai",
    image: Vocalo,
    title: "vocalo",
    count: 5,
    url: "https://vocalo.ai",
    keywords: ["Generative AI", "Llama Index"],
  },
  {
    name: "HeyLuna.ai is an AI powered virtual assistant with long term memory that can understand.",
    filter: "ai",
    image: HeyLuna,
    title: "heyluna",
    count: 5,
    url: "https://heyluna.ai",
    keywords: ["AI agent", "Llama Index"],
  },
  {
    name: "Telegram mini app by tapping to fly",
    filter: "app",
    image: Hamie,
    title: "hamie",
    count: 2,
    url: "https://t.me/hamie_game_bot",
    keywords: ["Mini App", "Constructor"],
  },
  {
    name: "Telegram mini app for booking hotels",
    filter: "app",
    image: TeleBook,
    title: "telebook",
    count: 3,
    url: "https://t.me/tebook_bot",
    keywords: ["Mini App", "React.js"],
  },
  {
    name: "Tap the screen to earn Dragonz Gold, build the most epic deck of Heroes",
    filter: "app",
    image: Dragon,
    title: "dragon",
    count: 4,
    url: "https://t.me/dragonz_land_bot",
    keywords: ["Mini App", "React.js"],
  },
  {
    name: "All-in-one super app aimed at providing a true digital lifestyle.",
    filter: "app",
    image: Dbazzar,
    title: "dbazzar",
    count: 2,
    url: "https://play.google.com/store/apps/details?id=com.dbazzar.apptwo",
    keywords: ["Android", "React Native"],
  },
  {
    name: "Harness technology to make education and skills training available to anyone, anywhere.",
    filter: "web",
    image: Alison,
    title: "alison",
    count: 4,
    url: "https://alison.com",
    keywords: ["Laravel", "Backbone.js"],
  },
  {
    name: "Magic Spoon is high-protein, keto-friendly, gluten-free cereal with 0g of sugar.",
    filter: "web",
    image: Magic,
    title: "magic",
    count: 6,
    url: "https://magicspoon.com",
    keywords: ["Shopify", "Vue.js"],
  },
  {
    name: "Weverse is a social network for connecting with artists.",
    filter: "app",
    image: Weverse,
    title: "weverse",
    count: 2,
    url: "https://play.google.com/store/apps/details?id=co.benx.weverse&hl=en_US",
    keywords: ["Android", "React Native"],
  },
  {
    name: " Ultimate travel companion, providing our famous Happy Hour Map, and Wi-Fi Map.",
    filter: "app",
    image: Aruba,
    title: "aruba",
    count: 3,
    url: "https://play.google.com/store/apps/details?id=com.arubasmartmap.aruba_smart_map",
    keywords: ["Android", "React Native"],
  },
  {
    name: "With our variety of kids dresses, clothes, and complete kids outfits",
    filter: "web",
    image: Spark,
    title: "spark",
    count: 3,
    url: "https://sparkleinpink.com",
    keywords: ["React.js", "Nest.js"],
  },
  {
    name: "Marketplace of unique places for students, young workers, travellers or families.",
    filter: "web",
    image: UniPlace,
    title: "uniplace",
    count: 3,
    url: "https://www.uniplaces.com",
    keywords: ["Shop", "Django"],
  },
  {
    name: "Offer a wide range of fitness classes and an engage online community",
    filter: "web",
    image: Alomoves,
    title: "alomoves",
    count: 1,
    url: "https://www.alomoves.com",
    keywords: ["Ecommerce", "React.js"],
  },
  {
    name: "UK-founded online marketplace; the highest-ranked marketplace, at that.",
    filter: "web",
    image: OnBuy,
    title: "onbuy",
    count: 4,
    url: "https://www.onbuy.com",
    keywords: ["Ecommerce", "Next.js"],
  },
  {
    name: "This shows object detection by Yolo",
    filter: "ai",
    image: Detection,
    title: "detection",
    count: 1,
    url: "/video",
    keywords: ["Object detection", "Yolo"],
  },
];

export default portfolioData;
