import { ClientProvider } from "./ClientProvider";
import "./globals.css";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Dados ficam "frescos" por 5 minutos
      retry: 3, // Número de tentativas em caso de falha
      refetchOnWindowFocus: false, // Não refazer ao mudar de aba
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ClientProvider>
        {children}
        </ClientProvider>
      </body>
    </html>
  );
}
