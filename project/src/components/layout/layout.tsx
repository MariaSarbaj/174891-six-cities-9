import Header from '../header/header';

import HomePage from '../home-page/home-page';

type LayoutScreenProps = {
  offersNumber: number;
}

function Layout({offersNumber}: LayoutScreenProps): JSX.Element {
  return (
    <>
      <Header />

      <HomePage
        offersNumber = {offersNumber}
      />
    </>
  );
}

export default Layout;
