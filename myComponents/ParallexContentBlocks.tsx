"use client";

import {
  Palette,
  Code,
  Layers,
  Lightbulb,
  Rocket,
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Vision",
    date: "Core Strength",
    content:
      "I approach every design with creativity, focusing on unique visual storytelling and meaningful user experiences.",
    category: "Mindset",
    icon: Lightbulb,
    relatedIds: [2],
    status: "Vision" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Experience",
    content:
      "Strong understanding of user-centered design, wireframing, prototyping, and crafting intuitive interfaces.",
    category: "Design",
    icon: Palette,
    relatedIds: [1, 3],
    status: "Design" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Code",
    date: "Technical Skill",
    content:
      "Build responsive, modern, and interactive web interfaces using clean and scalable code.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "Code" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "System",
    date: "Workflow",
    content:
      "Create reusable design systems and maintain visual consistency across all digital products.",
    category: "System Design",
    icon: Layers,
    relatedIds: [3, 5],
    status: "System" as const,
    energy: 80,
  },
  {
    id: 5,
    title: "Growth",
    date: "Vision",
    content:
      "Constantly learning, experimenting, and improving to deliver better digital experiences.",
    category: "Growth",
    icon: Rocket,
    relatedIds: [4],
    status: "Growth" as const,
    energy: 85,
  },
];

export function RadialOrbitalTimelineDemo() {
  return <RadialOrbitalTimeline timelineData={timelineData} />;
}