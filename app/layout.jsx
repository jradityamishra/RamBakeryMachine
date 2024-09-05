
import "@styles/globals.css";
import SubNavbar from "@components/SubNavbar";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {metadata} from "./metadata";


const RootLayout = ({ children }) => (
 

<html lang='en'>
<head>
<title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href={metadata.icons.icon} type={metadata.icons.type} />
</head>
  <body>
    <Provider>
      <div className='main'>
        <div className='gradient' />
      </div>

      <main className='app'>
        <Nav />
        <SubNavbar />
        <ToastContainer />
        {children}

        <Footer />
      </main>
    </Provider>
  </body>
</html>
);

export default RootLayout;
