import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/auth";
import { RootState } from "../../redux/reducers";
import css from "./css.module.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const errorMessage = useSelector(
    (state: RootState) => state.auth.signInForm.errorMessage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.signOut)
  }, [])

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    if (username && password) {
      dispatch(
        actions.signIn({
          username,
          password,
        })
      );
    }
  };

  return (
    <main className={css.formSignin}>
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Cologne Delivery</h1>
        <h1 className="h3 mb-3 fw-normal">Please log in</h1>
        <div className="form-floating">
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !username ? " is-invalid" : "")
            }
            id="username"
            placeholder="Username"
          />
          <label htmlFor="floatingInput">Username</label>
          {submitted && !username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>
        <div className="form-floating">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !password ? " is-invalid" : "")
            }
            id="password"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <button className="w-100 btn btn-lg btn-primary mt-10" type="submit">
          {isLoading && (
            <span className="spinner-border spinner-border-sm mr-1"></span>
          )}
          Log in
        </button>
      </form>
    </main>
  );
};

export default Login;
