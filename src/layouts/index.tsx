import { FunctionComponent } from 'react';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import Head from 'next/head';

type Props = {
  component?: JSX.Element;
};

export const Layout: FunctionComponent<Props> = ({ children, component }) => {
  return (
    <>
      <Head>
        <title>demographic-transition-chart-app</title>
        <meta name="description" content="demographic-transition-chart-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {component}
      <Header />
      {children}
      <Footer />
    </>
  );
};
