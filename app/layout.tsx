
import React from 'react'
import Navigator from './components/Navigator'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>My fist proyect</title>
      </head>
      <body>
        <Navigator />
        {children}
      </body>
    </html>
  )
}
