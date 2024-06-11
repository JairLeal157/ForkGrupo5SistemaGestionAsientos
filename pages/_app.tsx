import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api/graphql",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Theme grayColor="slate" accentColor="iris" radius="large" scaling="95%">
      <SessionProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </SessionProvider>
    </Theme>
  );
}

export default App;