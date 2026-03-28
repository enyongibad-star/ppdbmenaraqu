import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Pendaftaran Posdok – Pesantren Menara Al-Quran Parakan' },
      {
        name: 'description',
        content:
          'Daftar Program Posdok (Pondok Doktoral/Pascasarjana) Pesantren Menara Al-Quran Parakan. Program S2 dan S3 berbasis pesantren di Temanggung, Jawa Tengah.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
