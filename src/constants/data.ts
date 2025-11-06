import { Brain, Target, Users, TrendingUp, Calendar, MapPin, Trophy, DollarSign } from "lucide-react";
import carlsenImg from "@/assets/carlsen.jpg";
import kasparovImg from "@/assets/kasparov.jpg";
import anandImg from "@/assets/anand.jpg";
import strategyImg from "@/assets/blog-strategy.jpg";
import tournamentImg from "@/assets/blog-tournament.jpg";
import trainingImg from "@/assets/blog-training.jpg";

export const chessPlayers = [
  {
    name: "Magnus Carlsen",
    title: "World Champion",
    achievement: "5-time World Chess Champion",
    image: carlsenImg,
    color: "from-accent to-accent/70"
  },
  {
    name: "Garry Kasparov",
    title: "Legend",
    achievement: "Former World Champion & Chess Icon",
    image: kasparovImg,
    color: "from-primary to-primary/70"
  },
  {
    name: "Viswanathan Anand",
    title: "Grandmaster",
    achievement: "5-time World Champion",
    image: anandImg,
    color: "from-secondary to-secondary/70"
  }
];

export const chessBenefits = [
  {
    icon: Brain,
    title: "Enhance Critical Thinking",
    description: "Develop problem-solving skills and strategic planning abilities"
  },
  {
    icon: Target,
    title: "Improve Focus",
    description: "Build concentration and attention to detail through gameplay"
  },
  {
    icon: Users,
    title: "Build Sportsmanship",
    description: "Learn respect, fair play, and graceful winning and losing"
  },
  {
    icon: TrendingUp,
    title: "Boost Confidence",
    description: "Gain self-assurance through achievement and skill development"
  }
];

export const chessTips = [
  { icon: "♔", text: "Control the Center", description: "Dominate the middle squares for better piece mobility" },
  { icon: "♜", text: "Develop Your Pieces", description: "Move your pieces out early in the game" },
  { icon: "♛", text: "Protect Your King", description: "Castle early and keep your king safe" }
];

export const tournamentInfo = [
  { icon: Calendar, label: "Date", value: "March 15-17, 2025" },
  { icon: MapPin, label: "Venue", value: "Central Sports Complex" },
  { icon: Users, label: "Participants", value: "50+ Schools" },
  { icon: DollarSign, label: "Prize Pool", value: "$5,000+" }
];

export const tournamentFormat = [
  { value: "5", label: "Rounds" },
  { value: "3", label: "Age Categories" },
  { value: "30", label: "Minutes per Game" }
];

export const blogPosts = [
  {
    title: "Top 10 Opening Strategies Every Student Should Know",
    date: "March 5, 2025",
    description: "Master these fundamental chess openings to gain an early advantage in your games.",
    image: strategyImg
  },
  {
    title: "Interview with Last Year's Champion",
    date: "March 3, 2025",
    description: "Exclusive insights from the 2024 champion on preparation, strategy, and mindset.",
    image: tournamentImg
  },
  {
    title: "How to Prepare Your Team for Success",
    date: "March 1, 2025",
    description: "Essential tips for coaches and team leaders to build winning strategies.",
    image: trainingImg
  }
];

export const newsItems = [
  { text: "Registration Extended to March 10th", highlight: true },
  { text: "New Prize Categories Added", highlight: false },
  { text: "Guest Appearance by GM Anish Giri", highlight: false },
  { text: "Practice Sessions Open for All Participants", highlight: false }
];

export const quickUpdates = [
  { icon: "📢", title: "Live Coverage", description: "All games streamed online" },
  { icon: "🏆", title: "Trophy Ceremony", description: "March 17, 5 PM" },
  { icon: "📸", title: "Photo Gallery", description: "Professional photography" }
];
