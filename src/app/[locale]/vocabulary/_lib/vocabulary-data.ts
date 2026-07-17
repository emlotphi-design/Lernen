import type { LucideIcon } from "lucide-react";
import {
  Users,
  UtensilsCrossed,
  Clock,
  MessagesSquare,
  Plane,
  ShoppingBag,
  Sofa,
  CloudSun,
  Briefcase,
  HeartPulse,
  Gamepad2,
  Bus,
  GraduationCap,
  Cpu,
  Newspaper,
  Heart,
  TrendingUp,
  Leaf,
  Landmark,
  Palette,
  FlaskConical,
  Scale,
  Brain,
  BookText,
} from "lucide-react";
import type { CefrLevel } from "@/components/ui/level-badge";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type VocabCategory = {
  id: string;
  labelKey: string;
  icon: LucideIcon;
  level: CefrLevel;
  wordCount: number;
  completion: number;
  lastStudiedDaysAgo: number | null;
  difficulty: Difficulty;
};

export const CATEGORIES: VocabCategory[] = [
  { id: "family", labelKey: "catFamily", icon: Users, level: "A1", wordCount: 45, completion: 90, lastStudiedDaysAgo: 1, difficulty: "beginner" },
  { id: "food-drink", labelKey: "catFoodDrink", icon: UtensilsCrossed, level: "A1", wordCount: 60, completion: 75, lastStudiedDaysAgo: 2, difficulty: "beginner" },
  { id: "numbers-time", labelKey: "catNumbersTime", icon: Clock, level: "A1", wordCount: 35, completion: 100, lastStudiedDaysAgo: 5, difficulty: "beginner" },
  { id: "greetings", labelKey: "catGreetings", icon: MessagesSquare, level: "A1", wordCount: 30, completion: 100, lastStudiedDaysAgo: 6, difficulty: "beginner" },

  { id: "travel", labelKey: "catTravel", icon: Plane, level: "A2", wordCount: 55, completion: 60, lastStudiedDaysAgo: 3, difficulty: "beginner" },
  { id: "shopping", labelKey: "catShopping", icon: ShoppingBag, level: "A2", wordCount: 50, completion: 45, lastStudiedDaysAgo: 7, difficulty: "intermediate" },
  { id: "home-furniture", labelKey: "catHomeFurniture", icon: Sofa, level: "A2", wordCount: 40, completion: 30, lastStudiedDaysAgo: 14, difficulty: "beginner" },
  { id: "weather", labelKey: "catWeather", icon: CloudSun, level: "A2", wordCount: 25, completion: 55, lastStudiedDaysAgo: 4, difficulty: "beginner" },

  { id: "work-career", labelKey: "catWork", icon: Briefcase, level: "B1", wordCount: 65, completion: 25, lastStudiedDaysAgo: 21, difficulty: "intermediate" },
  { id: "health-body", labelKey: "catHealth", icon: HeartPulse, level: "B1", wordCount: 70, completion: 15, lastStudiedDaysAgo: null, difficulty: "intermediate" },
  { id: "hobbies", labelKey: "catHobbies", icon: Gamepad2, level: "B1", wordCount: 50, completion: 35, lastStudiedDaysAgo: 10, difficulty: "beginner" },
  { id: "transportation", labelKey: "catTransportation", icon: Bus, level: "B1", wordCount: 45, completion: 20, lastStudiedDaysAgo: null, difficulty: "intermediate" },

  { id: "education", labelKey: "catEducation", icon: GraduationCap, level: "B2", wordCount: 60, completion: 10, lastStudiedDaysAgo: null, difficulty: "intermediate" },
  { id: "technology", labelKey: "catTechnology", icon: Cpu, level: "B2", wordCount: 75, completion: 5, lastStudiedDaysAgo: null, difficulty: "intermediate" },
  { id: "media-news", labelKey: "catMediaNews", icon: Newspaper, level: "B2", wordCount: 55, completion: 0, lastStudiedDaysAgo: null, difficulty: "advanced" },
  { id: "relationships", labelKey: "catRelationships", icon: Heart, level: "B2", wordCount: 40, completion: 12, lastStudiedDaysAgo: null, difficulty: "intermediate" },

  { id: "business-economy", labelKey: "catBusinessEconomy", icon: TrendingUp, level: "C1", wordCount: 80, completion: 0, lastStudiedDaysAgo: null, difficulty: "advanced" },
  { id: "environment-nature", labelKey: "catEnvironmentNature", icon: Leaf, level: "C1", wordCount: 65, completion: 0, lastStudiedDaysAgo: null, difficulty: "advanced" },
  { id: "politics-society", labelKey: "catPoliticsSociety", icon: Landmark, level: "C1", wordCount: 70, completion: 0, lastStudiedDaysAgo: null, difficulty: "advanced" },
  { id: "culture-arts", labelKey: "catCultureArts", icon: Palette, level: "C1", wordCount: 60, completion: 0, lastStudiedDaysAgo: null, difficulty: "intermediate" },

  { id: "science-research", labelKey: "catScienceResearch", icon: FlaskConical, level: "C2", wordCount: 90, completion: 0, lastStudiedDaysAgo: null, difficulty: "advanced" },
  { id: "law-justice", labelKey: "catLawJustice", icon: Scale, level: "C2", wordCount: 85, completion: 0, lastStudiedDaysAgo: null, difficulty: "advanced" },
  { id: "philosophy-ethics", labelKey: "catPhilosophyEthics", icon: Brain, level: "C2", wordCount: 75, completion: 0, lastStudiedDaysAgo: null, difficulty: "advanced" },
  { id: "literature-rhetoric", labelKey: "catLiteratureRhetoric", icon: BookText, level: "C2", wordCount: 70, completion: 0, lastStudiedDaysAgo: null, difficulty: "advanced" },
];

export const CEFR_LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
