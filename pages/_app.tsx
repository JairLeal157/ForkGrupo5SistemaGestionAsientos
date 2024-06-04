import '@/styles/globals.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: '/api/graphql'
});


const App = ({ Component, pageProps: { session, ...pageProps } }: any) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
