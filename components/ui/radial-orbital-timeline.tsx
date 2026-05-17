"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useAnimationFrame, useMotionValue, useTransform, animate } from "framer-motion";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "Vision" | "Design" | "Code" | "System" | "Growth";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const rotationAngle = useMotionValue(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [radius, setRadius] = useState<number>(200);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement> | React.PointerEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useAnimationFrame((t, delta) => {
    if (autoRotate && viewMode === "orbital") {
      rotationAngle.set((rotationAngle.get() + 6 * (delta / 1000)) % 360);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(120);
      } else if (window.innerWidth < 768) {
        setRadius(160);
      } else {
        setRadius(200);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    let targetRot = 270 - targetAngle;
    
    // Normalize targetRot to avoid spinning multiple extra times
    const currentRot = rotationAngle.get();
    const normalizedCurrent = currentRot % 360;
    const diff = targetRot - normalizedCurrent;
    // Calculate shortest path
    let shortestDiff = diff;
    if (shortestDiff > 180) shortestDiff -= 360;
    if (shortestDiff < -180) shortestDiff += 360;

    animate(rotationAngle, currentRot + shortestDiff, { duration: 0.8, ease: "easeInOut" });
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "Vision":
        return "text-white bg-green-500 ";
      case "Design":
        return "text-white bg-orange-500 ";
      case "Code":
        return "text-white bg-blue-500 ";
      case "System":
        return "text-white bg-purple-500 ";
      case "Growth":
        return "text-white bg-red-500 ";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="w-full h-[700px] flex flex-col items-center justify-center bg-black overflow-hidden rounded-2xl"
      ref={containerRef}
      onPointerDown={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md"></div>
          </div>

          <div 
            className="absolute rounded-full border border-white/10 transition-all duration-700"
            style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
          ></div>

          {timelineData.map((item, index) => {
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];

            return (
              <TimelineNode
                key={item.id}
                item={item}
                index={index}
                total={timelineData.length}
                radius={radius}
                rotationAngle={rotationAngle}
                centerOffset={centerOffset}
                isExpanded={isExpanded}
                isRelated={isRelated}
                isPulsing={isPulsing}
                toggleItem={toggleItem}
                nodeRefs={nodeRefs}
                timelineData={timelineData}
                getStatusStyles={getStatusStyles}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const TimelineNode = ({
  item,
  index,
  total,
  radius,
  rotationAngle,
  centerOffset,
  isExpanded,
  isRelated,
  isPulsing,
  toggleItem,
  nodeRefs,
  timelineData,
  getStatusStyles,
}: any) => {
  const initialAngle = (index / total) * 360;

  const x = useTransform(rotationAngle, (rot: number) => {
    const angle = (initialAngle + rot) % 360;
    const radian = (angle * Math.PI) / 180;
    return Number((radius * Math.cos(radian) + centerOffset.x).toFixed(3));
  });

  const y = useTransform(rotationAngle, (rot: number) => {
    const angle = (initialAngle + rot) % 360;
    const radian = (angle * Math.PI) / 180;
    return Number((radius * Math.sin(radian) + centerOffset.y).toFixed(3));
  });

  const zIndex = useTransform(rotationAngle, (rot: number) => {
    if (isExpanded) return 200;
    const angle = (initialAngle + rot) % 360;
    const radian = (angle * Math.PI) / 180;
    return Math.round(100 + 50 * Math.cos(radian));
  });

  const opacity = useTransform(rotationAngle, (rot: number) => {
    if (isExpanded) return 1;
    const angle = (initialAngle + rot) % 360;
    const radian = (angle * Math.PI) / 180;
    return Number(
      Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))).toFixed(3)
    );
  });

  const Icon = item.icon;

  return (
    <motion.div
      ref={(el) => {
        if (nodeRefs.current) {
          nodeRefs.current[item.id] = el;
        }
      }}
      className="absolute transition-all duration-60 cursor-pointer"
      style={{ x, y, zIndex, opacity }}
      onPointerDown={(e) => {
        e.stopPropagation();
        toggleItem(item.id);
      }}
    >
      <div
        className={`absolute rounded-full -inset-1 ${
          isPulsing ? "animate-pulse duration-1000" : ""
        }`}
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
          width: `${item.energy * 0.5 + 40}px`,
          height: `${item.energy * 0.5 + 40}px`,
          left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
          top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
        }}
      ></div>

      <div
        className={`
        w-10 h-10 rounded-full flex items-center justify-center
        ${
          isExpanded
            ? "bg-white text-black"
            : isRelated
            ? "bg-white/50 text-black"
            : "bg-black text-white"
        }
        border-2 
        ${
          isExpanded
            ? "border-white shadow-lg shadow-white/30"
            : isRelated
            ? "border-white animate-pulse"
            : "border-white/40"
        }
        transition-all duration-300 transform
        ${isExpanded ? "scale-150" : ""}
      `}
      >
        <Icon size={16} />
      </div>

      <div
        className={`
        absolute top-12 whitespace-nowrap
        text-xs font-semibold tracking-wider
        transition-all duration-300
        ${isExpanded ? "text-white scale-125" : "text-white/70"}
      `}
      >
        {item.title}
      </div>

      {isExpanded && (
        <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <Badge className={`px-2 text-xs ${getStatusStyles(item.status)}`}>
                {item.status === "Vision"
                  ? "VISION"
                  : item.status === "Design"
                  ? "DESIGN"
                  : item.status === "Code"
                  ? "CODE"
                  : item.status === "System"
                  ? "SYSTEM"
                  : "GROWTH"}
              </Badge>
              <span className="text-xs font-mono text-white/50">{item.date}</span>
            </div>
            <CardTitle className="text-sm mt-2">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-md text-white/80">
            <p>{item.content}</p>

            <div className="mt-4 pt-3 border-t border-white/10">
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="flex items-center">
                  <Zap size={10} className="mr-1" />
                  Energy Level
                </span>
                <span className="font-mono">{item.energy}%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: `${item.energy}%` }}
                ></div>
              </div>
            </div>

            {item.relatedIds.length > 0 && (
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="flex items-center mb-2">
                  <Link size={10} className="text-white/70 mr-1" />
                  <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">
                    Connected Nodes
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.relatedIds.map((relatedId: number) => {
                    const relatedItem = timelineData.find((i: any) => i.id === relatedId);
                    return (
                      <Button
                        key={relatedId}
                        variant="outline"
                        size="sm"
                        className="flex items-center h-6 px-2 py-0 text-xs rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all"
                        onPointerDown={(e) => {
                          e.stopPropagation();
                          toggleItem(relatedId);
                        }}
                      >
                        {relatedItem?.title}
                        <ArrowRight size={8} className="ml-1 text-white/60" />
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
};
