import { NextPage } from 'next';
import { Layout } from '../layouts';
import { Home } from 'components/home';

const Page: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default Page;
