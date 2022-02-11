import Layout from '../layout/layout';

type AppScreenProps = {
  offersNumber: number;
}

function App({offersNumber}: AppScreenProps): JSX.Element {
  return (
    <Layout
      offersNumber = {offersNumber}
    />
  );
}

export default App;
