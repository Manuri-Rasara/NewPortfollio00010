"use client"

import * as React from "react"
import AnimatedDownloadButton from "@/components/ui/download-hover-button"

function ResumeDownload() {
  return (
    <div className="flex items-center justify-center bg-background mb-30">
      <AnimatedDownloadButton />
    </div>
  )
}

export { ResumeDownload }
