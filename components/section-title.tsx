import React from 'react'

export default function SectionTitle({ 
  children,
  color = "cyan" 
}: { 
  children: React.ReactNode
  color?: "cyan" | "yellow"
}) {
  return (
    <h2 className="section-title">
      <span className={color === "cyan" ? "variable" : "comment"}>
        {children}
      </span>
    </h2>
  )
}

