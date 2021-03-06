import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';

import Box, { Flexbox } from '@/components/elements/Box';
import Button from '@/components/elements/Button';
import Card from '@/components/elements/Card';
import Typography from '@/components/elements/Typography';
import MainLayout from '@/components/layout/MainLayout';

const NotFoundPage: FC = () => (
  <MainLayout>
    <Head>
      <title>404 | Codebook</title>
    </Head>
    <Flexbox direction="column" alignItems="center" justifyContent="center" height="100%">
      <Box width="fit-content">
        <Card>
          <Flexbox direction="column" alignItems="center">
            <Typography variant="h1">404</Typography>
            <Typography>Page not found...</Typography>
            <Flexbox marginTop="2rem" gap="0.5rem" direction="column">
              <Link href="/" passHref>
                <Button>Return to homepage</Button>
              </Link>
            </Flexbox>
          </Flexbox>
        </Card>
      </Box>
    </Flexbox>
  </MainLayout>
);

export default NotFoundPage;
