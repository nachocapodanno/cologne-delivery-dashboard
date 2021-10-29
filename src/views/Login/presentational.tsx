import css from './css.module.scss'

const Login = () => {
  return (
    <main className={css.formSignin}>
      <form>
        <h1 className="h3 mb-3 fw-normal">Cologne Delivery</h1>
        <h1 className="h3 mb-3 fw-normal">Please log in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="username"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary mt-10" type="submit">
          Log in
        </button>
      </form>
      </main>
  );
};

export default Login;
