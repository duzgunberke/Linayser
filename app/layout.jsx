import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata = {
    title: "Lınayser",
    description: "Lınayser LinkedIn Analizer AI Powered Tools",
}

const RootLayout = ({children},  session, ...pageProps) => {
  
    return (
  <html lang="en">
    <body>
        <Provider>
            <div className="main">
                <div className="gradient"/>
            </div>

            <main className="app">
                <Nav />
                {children}
            </main>
        </Provider>
    </body>
  </html>
  )
}

export default RootLayout
