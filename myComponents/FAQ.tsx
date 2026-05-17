import { UniqueAccordion } from "@/components/interactive-accordion"

export default function Page() {
  return (
    <main className=" flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-10 text-balance">What I do</h1>
          <p className="text-muted-foreground text-lg">Transforming ideas into exceptional digital experiences.</p>
        </div>
        <UniqueAccordion />
      </div>
    </main>
  )
}
