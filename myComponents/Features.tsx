import * as React from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BentoGridShowcase } from "../components/bento-grid";
import {
  BadgeCheck,
  Calendar,
  HeartPulse,
  PenIcon,
  PenTool,
  Phone,
  Plus,

  Smartphone,

  Zap,
} from "lucide-react";

import { MessageCircle } from "lucide-react";

// --- Helper Components for the Demo ---
// These components represent the content for each slot.
// I've updated the image URLs to match your new layout.

const IntegrationsCard = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-lg">Features</CardTitle>
      <CardDescription>
        UI Design
      </CardDescription>
    </CardHeader>
    <CardContent className="flex items-center justify-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
      <img src="/Assets/Logos/figma-icon.svg" className="h-6 w-6 text-muted-foreground"/>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <Smartphone className="h-6 w-6 text-muted-foreground" />
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <PenTool className="h-6 w-6 text-muted-foreground" />
      </div>
    </CardContent>
  </Card>
);

const FeatureTagsCard = () => (
  <Card className="h-full">
    <CardContent className="flex h-full flex-col justify-center gap-3 p-6">
  
<a
  href="https://www.figma.com/proto/eyxyX9yo7VcOnYU9XKlTIc/Mosqguard?node-id=1-2&t=Qh565fy3pySu4g4H-1"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    className="w-full h-15 flex items-center gap-1.5 border-purple-300 px-3 py-1.5 text-purple-700 hover:bg-purple-100 rounded-full cursor-pointer hover:text-purple-700"
  >
    View Prototype
    <Plus className="h-3 w-3" />
  </Button>
</a>
      


   <a
  href="https://github.com/thanujaDev26/MOSQGUARD#"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    className="w-full h-15 flex items-center gap-1.5 border-purple-300 px-3 py-1.5 text-purple-700 hover:bg-purple-100 rounded-full cursor-pointer hover:text-purple-700"
  >
    View Github
    <Plus className="h-3 w-3" />
  </Button>
</a>


    </CardContent>
  </Card>
);

const MainFeatureCard = () => (
  <Card className="relative h-full w-full overflow-hidden">
    <div className="absolute top-6 left-6 z-10 rounded-lg bg-background/50 p-2 backdrop-blur-sm">
      <p className="text-sm  font-bold tracking-tighter">Application.</p>
    </div>
    <img
      src="/Assets/App-Mos.png"
      alt="Smiling woman in a pink traditional dress"
      className="h-full w-full object-cover"
    />
  </Card>
);

const StatCard = () => (
  <Card className="flex h-full flex-col justify-between bg-lime-100/80 p-6 dark:bg-lime-950/80">
    <BadgeCheck className="h-8 w-8 text-lime-700 dark:text-lime-300" />
    <div>
      <p className="text-6xl font-bold text-lime-900 dark:text-lime-100">100%</p>
      <p className="text-sm text-lime-800 dark:text-lime-200">
        Designed clear digital experiences.
      </p>
    </div>
  </Card>
);

const SecondaryFeatureCard = () => (
  <Card className="relative h-full w-full overflow-hidden">
    <img
      src="/Assets/Mos-Back.webp"
      className="h-60 w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-transparent to-transparent dark:from-blue-900/40" />
    <p className="absolute bottom-6 left-6 z-10 max-w-[80%] text-xl font-bold text-white [text-shadow:_0_1px_4px_rgb(0_0_0_/_30%)]">
      Small changes and big impact on the way!
    </p>
  </Card>
);

const JourneyCard = () => (
  <Card className="relative h-full w-full overflow-hidden p-6">
    <CardTitle className="text-lg">Workflow & Journey Design</CardTitle>
    <CardDescription>
      Designed clear user workflows for smooth digital experience.
    </CardDescription>
    {/* Avatar constellation */}
    <div className="absolute -right-4 -bottom-4 h-48 w-48">
      <div className="absolute top-8 left-20">
        <Avatar>
          <AvatarImage src="https://api.uifaces.co/our-content/faces/49.jpg" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
      <div className="absolute top-24 left-8">
        <Avatar>
          <AvatarImage src="https://api.uifaces.co/our-content/faces/14.jpg" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </Card>
);

// --- The Default Demo ---
export default function Features() {
  return (
    <div className="w-full p-4 md:p-30">
      

      <BentoGridShowcase
        integrations={<IntegrationsCard />}
        featureTags={<FeatureTagsCard />}
        mainFeature={<MainFeatureCard />}
        secondaryFeature={<SecondaryFeatureCard />}
        statistic={<StatCard />}
        journey={<JourneyCard />}
      />
    </div>
  );
}