import Link from 'next/link';
import { FC } from 'react';

import Layout from '../components/Layout';
import Button from '../components/elements/Button';
import Flexbox from '../components/elements/Flexbox';
import Typography from '../components/elements/Typography';

const NotFoundPage: FC = () => (
  <Layout>
    <Flexbox direction="column" alignItems="center" isFullWidth>
      <Typography variant="h1">404</Typography>
      <Typography>Page not found...</Typography>
      <Link href="/" passHref>
        <Button isFullWidth>Return to homepage</Button>
      </Link>
    </Flexbox>
  </Layout>
);

export default NotFoundPage;
