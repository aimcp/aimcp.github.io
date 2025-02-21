'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import * as React from 'react'

export function Providers({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
