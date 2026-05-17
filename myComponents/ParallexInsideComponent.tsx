import { TextMarquee } from "@/components/ui/text-marquee"

export default function Marquee() {
  return (
    <div className="flex items-center justify-end w-full py-4">
      <TextMarquee
        prefix={<span className="text-2xl md:text-4xl font-semibold text-muted-foreground mr-2">Me/</span>}
        height={180}
        speed={0.9}
        className="text-2xl md:text-4xl font-bold"
      >
        <span>Weaving</span>
        <span>Transforming</span>
        <span>Designing</span>
        <span>Coding</span>
        <span>Innovating</span>
      </TextMarquee>
    </div>
  )
}
