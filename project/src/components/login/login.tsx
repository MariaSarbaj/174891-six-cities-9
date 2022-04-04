import React from 'react';
import {Link} from 'react-router-dom';
import {SyntheticEvent} from 'react';
import {useAppDispatch} from '../../hooks/hooks';
import {authAction} from '../../store/api-actions';

function Login():JSX.Element {
  const dispatch = useAppDispatch();

  function handleSubmit(evt: SyntheticEvent) {
    evt.preventDefault();
    if (evt.target instanceof HTMLFormElement) {
      const formData = new FormData(evt.target);
      const email = formData.get('email');
      const password = formData.get('password');
      dispatch(authAction({email, password}));
    }
  }

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" type="email" name="email" placeholder="Email" required />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" type="password" name="password" placeholder="Password" required />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="/property">
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
