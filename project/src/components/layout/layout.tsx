import React from 'react';
import {Outlet} from 'react-router-dom';

import Header from '../header/header';

type LayoutScreenProps = {
  offersNumber: number;
}

function Layout({offersNumber}: LayoutScreenProps): JSX.Element {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default Layout;
