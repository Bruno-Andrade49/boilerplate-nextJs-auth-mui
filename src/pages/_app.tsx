import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from "../styles/globals"
import CustomThemeProvider, { CustomThemeContext } from 'context/themeContext'
import { DrawerContextProvider } from 'context/drawerContext'



function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <DrawerContextProvider>
        <CustomThemeProvider>
          <Head>
            <title>Boilerplate Next 13</ title >
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />

            <meta
              name="description"
              content="A simple Project starter to work with Typescript, React, NextJs and styled-components"
            />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </CustomThemeProvider>
      </DrawerContextProvider>
    </>
  )
}

export default App