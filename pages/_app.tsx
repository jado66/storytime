import '../styles/globals.css'
import '../styles/styles.scss'

import App from 'next/app'
import type { AppProps } from 'next/app'
import { SessionProvider, getSession } from 'next-auth/react'

import { createContext, useEffect, useState } from 'react';
import useUser from '../hooks/user'



export const UserContext = createContext<any>({}) 

function MyApp({ Component, pageProps, session }: any) {
  
  const user = useUser(session)    
 
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    // require("https://js.stripe.com/v3/pricing-table.js")
  }, []); 
  
  

  return(
    <SessionProvider session={session}>
      <UserContext.Provider
        value={{
          user:user,
        }} 
      >
        <Component {...pageProps} />
      </UserContext.Provider>
    </SessionProvider>
  ) 
  
}

MyApp.getInitialProps = async (appContext: any) => {
  // perhaps getSession(appContext.ctx) would also work
  const session = await getSession({ req: appContext.ctx.req })
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps, session }
}

export default MyApp