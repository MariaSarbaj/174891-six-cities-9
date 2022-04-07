import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory, History} from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import ErrorPage from './404';
import {AppRoute} from '../../const';

const renderNotFoundPage = (history: History) => {
  render(
    <HistoryRouter history={history}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<h1>Main page</h1>}
        />
        <Route
          path={AppRoute.NotFound}
          element={<ErrorPage />}
        />
      </Routes>
    </HistoryRouter>,
  );
};

const history = createMemoryHistory();

describe('Component: 404Page', () => {
  beforeEach(() => {
    history.push(AppRoute.NotFound);
  });

  it('should render correctly', () => {
    renderNotFoundPage(history);

    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });

  it('should navigate to MainPage if user click link', () => {
    renderNotFoundPage(history);

    userEvent.click(screen.getByRole('link'));

    expect(history.location.pathname).toBe(AppRoute.Main);
    expect(screen.getByText('Main page')).toBeInTheDocument();
  });
});
