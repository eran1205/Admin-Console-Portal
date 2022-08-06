import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Head from 'next/head';
import { SidebarProvider } from '@/contexts/SidebarContext';
import ThemeProvider from 'src/theme/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '@/createEmotionCache';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface AdminAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

function AdminConsoleApp(props: AdminAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Hello, my admin</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <SidebarProvider>
        <ThemeProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </LocalizationProvider>
        </ThemeProvider>
      </SidebarProvider>
    </CacheProvider>
  );
}

export default AdminConsoleApp;
