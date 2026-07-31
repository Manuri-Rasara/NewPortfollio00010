import { MagneticText } from "../components/morphing-cursor"

export default function Magnetic() {
  return (
    <main className=" bg-background flex flex-col items-center justify-center gap-12 p-8 mt-12 mb-40">
      <p className="text-muted-foreground text-[14px] tracking-[0.25em] uppercase">Call Me AXO.</p>

      <div className="flex flex-col items-center gap-6">
        <MagneticText text="SHARP" hoverText="SHARP" />
        <MagneticText text="STRONG" hoverText="STRONG" />
      </div>
    </main>
  )
}
