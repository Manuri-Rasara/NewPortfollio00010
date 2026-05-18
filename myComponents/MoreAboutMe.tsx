import MotionButton from "../components/ui/motion-button";
import Link from "next/link";

export default function MoreAboutMe() {
  return (
    <div className="flex items-center justify-center mt-4 md:mt-6">
      <Link href="/AboutMe">
        <MotionButton label="More About Me" />
      </Link>
    </div>
  );
}