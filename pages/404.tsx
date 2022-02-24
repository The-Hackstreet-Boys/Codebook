import Link from 'next/link';
import { FC } from 'react';

import Layout from '../components/Layout';
import Button from '../components/elements/Button';
import Flexbox from '../components/elements/Box';
import Typography from '../components/elements/Typography';

const NotFoundPage: FC = () => (
  <Layout>
    <Flexbox
      direction="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Typography variant="h1">404</Typography>
      <Typography>Page not found...</Typography>
      <Flexbox marginTop="2rem" gap="0.5rem" direction="column">
        <Link href="/" passHref>
          <Button>Return to homepage</Button>
        </Link>
        <Link href="/" passHref>
          <Button color="secondary">Return to previous page</Button>
        </Link>
      </Flexbox>
    </Flexbox>
  </Layout>
);

export default NotFoundPage;
