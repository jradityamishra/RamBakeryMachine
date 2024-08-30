import "@styles/globals.css";
import SubNavbar from "@components/SubNavbar";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";

export const metadata = {
  title: "RamBakeryMachines",
  description: "RamBakeryMachine & Engineers",
  icons: {
    icon: '/assets/images/logo.jpeg',  // replace with your actual icon path
    type: "image/png",  // replace with your actual image type
  }
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          <SubNavbar />
          {children}
          {/* <Footer /> */}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
