import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

// Navigation links for the AI Club
export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to Use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Join Us",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign In",
    url: "#login",
    onlyMobile: true,
  },
];

// Icons for the hero section
export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

// Notification images for alerts and updates
export const notificationImages = [notification4, notification3, notification2];

// Company logos for partnerships or collaborations
export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

// Services offered by the AI Club
export const brainwaveServices = [
  "AI Chatbot Development",
  "Machine Learning Projects",
  "Workshops and Training",
];

// Icons for the brainwave services
export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

// Roadmap of the AI Club's development
export const roadmap = [
  {
    id: "0",
    title: "AI Workshops",
    text: "Conduct workshops to introduce AI concepts and applications to students.",
    date: "January 2024",
    status: "planned",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Hackathons",
    text: "Host hackathons to encourage innovation and collaboration among students.",
    date: "March 2024",
    status: "planned",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "AI Research Projects",
    text: "Initiate research projects to explore cutting-edge AI technologies.",
    date: "May 2024",
    status: "ongoing",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Community Building",
    text: "Build a community of AI enthusiasts through events and online platforms.",
    date: "Ongoing",
    status: "ongoing",
    imageUrl: roadmap4,
  },
];

// Collaboration text for promoting integration
export const collabText =
  "Join us in building innovative solutions and enhancing skills through collaboration.";

export const collabContent = [
  {
    id: "0",
    title: "Innovative Solutions",
    text: collabText,
  },
  {
    id: "1",
    title: "Skill Development",
  },
  {
    id: "2",
    title: "Community Engagement",
  },
];

// Collaboration apps used by the AI Club
export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

// Pricing plans for AI services
export const pricing = [
  {
    id: "0",
    title: "Free",
    description: "Basic AI chatbot, community support",
    price: "0",
    features: [
      "Access to basic AI chatbot features",
      "Community-driven support",
      "Explore the app and its functionalities for free",
    ],
  },
  {
    id: "1",
    title: "Standard",
    description: "Advanced AI chatbot with features and support",
    price: "9.99",
    features: [
      "Advanced AI chatbot features",
      "Access to exclusive events and workshops",
      "Priority community support",
    ],
  },
  {
    id: "2",
    title: "Pro",
    description: "Custom AI solutions and analytics",
    price: null,
    features: [
      "Tailored AI solutions for your needs",
      "Advanced analytics and reporting",
      "Dedicated support and consultations",
    ],
  },
];

// Benefits of joining the AI Club
export const benefits = [
  {
    id: "0",
    title: "Ask Anything",
    text: "Quickly find answers to your AI-related queries through our chatbot.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Learn and Improve",
    text: "Enhance your skills with our natural language processing resources.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect Anywhere",
    text: "Access our services and resources from any device, anytime.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Rapid Responses",
    text: "Receive quick and relevant responses to your questions.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Continuous Learning",
    text: "Stay updated with the latest in AI technology and practices.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Community Support",
    text: "Engage with like-minded individuals in our vibrant community.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

// Social media links for the AI Club
export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
