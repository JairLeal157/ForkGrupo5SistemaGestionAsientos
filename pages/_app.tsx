import '@/styles/globals.css';

const App = ({ Component, pageProps: { session, ...pageProps } }: any) => {
  return (
    <Component {...pageProps} />
  );
};

export default App;
