import React from 'react';
import {Outlet} from 'react-router-dom';

import HeaderNavLogged from '../../components/header-nav-logged/header-nav-logged';
import HeaderNavNotLogged from '../../components/header-nav-not-logged/header-nav-not-logged';

import {useAppSelector} from '../../hooks/hooks';

function Layout(): JSX.Element {
  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    <>
      {authorizationStatus === 'authorized'
        ? <HeaderNavLogged />
        : <HeaderNavNotLogged />}

      <Outlet />
    </>
  );
}

export default Layout;
