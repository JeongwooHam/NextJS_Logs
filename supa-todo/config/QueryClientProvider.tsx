"use client";

import {
  QueryClient,
  QueryClientProvider as ClientProvider,
} from "@tanstack/react-query";

export const queryClient = new QueryClient({});

export default function QueryClientProvider({
  children,
}: React.PropsWithChildren) {
  return <ClientProvider client={queryClient}>{children}</ClientProvider>;
}
