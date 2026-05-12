import FlowArtDefaultDemo from "@/myComponents/FlowArtDefaultDemo";
import Work from "@/myComponents/Work";
import Image from "next/image";
import { Knowladge } from "@/myComponents/Knowladge";
import { Links } from "@/myComponents/Links";
import Parallax from "@/myComponents/Parallex";
import Connect from "@/myComponents/Connect";


export default function Home() {
  return (
    <div>
      <FlowArtDefaultDemo />
      <Work />
      <Knowladge/>
       <Parallax/>
       <Connect/>

  
    </div>
  );
}
