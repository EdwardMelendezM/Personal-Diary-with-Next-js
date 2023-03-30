import './../styles/globals.css'
import React from 'react'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>Mi diario</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
