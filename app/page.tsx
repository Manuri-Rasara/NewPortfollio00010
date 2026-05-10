import FlowArtDefaultDemo from "@/myComponents/FlowArtDefaultDemo";
import Work from "@/myComponents/Work";
import Image from "next/image";
import { Knowladge } from "@/myComponents/Knowladge";

export default function Home() {
  return (
    <div>
      <FlowArtDefaultDemo />
      <Work />
      <Knowladge/>
    </div>
  );
}
