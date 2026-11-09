import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Thiago Eduardo Alves | Portfólio', description: 'Ideias ganham vida em código. Explore o portfólio de Thiago Eduardo Alves.', icons: {icon:'/favicon.svg'} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
