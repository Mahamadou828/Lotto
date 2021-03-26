import Link from "next/link";
import React from "react";
import { Field, FormErrors, InjectedFormProps, reduxForm } from "redux-form";
import { FieldInput } from "../../components/FieldInput";
import { ConnectUser, Route } from "../../typescript";

const { AuthPath } = Route;

/** @tofix */
interface ILogin {
  _handleSubmit: (value: ConnectUser) => void;
}

enum FormField {
  fullName = "full Name",
  email = "email",
  password = "password",
}

interface State {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps;

export class _Unconnect_Login
  extends React.Component<InjectedFormProps<ConnectUser, Props> & Props, State>
  implements ILogin {
  _handleSubmit = (value: ConnectUser) => {
    console.log(value);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <section className="d-flex d-row auth">
        <div className="auth-bg__container">
          <img className="auth-bg__img" src="/img/auth_bg.svg" />
        </div>
        <div className="auth-form__container">
          <div className="auth-form-items">
            <header>
              <h3>Get more things done with Loggin platform.</h3>
              <p>
                Access to the most powerfull tool in the entire design and web
                industry.
              </p>
            </header>
            <div>
              <Link href={AuthPath.login}>
                <a className="auth-form__link">Login</a>
              </Link>
              <Link href={AuthPath.signup}>
                <a className="auth-form__link">Register</a>
              </Link>
            </div>
            <form
              className="auth-form"
              onSubmit={handleSubmit(this._handleSubmit)}
            >
              <Field
                name={FormField.fullName}
                id={FormField.fullName}
                component={FieldInput}
                props={{
                  placeholder: "Entrez Votre nom",
                  idField: 10,
                  type: FormField.fullName,
                  class: "form-input",
                }}
              />
              <Field
                name={FormField.email}
                id={FormField.email}
                component={FieldInput}
                props={{
                  placeholder: "Entrez Votre email",
                  idField: 10,
                  type: FormField.email,
                  class: "form-input",
                }}
              />
              <Field
                name={FormField.password}
                id={FormField.password}
                component={FieldInput}
                props={{
                  placeholder: "Entrez Votre mot de passe",
                  idField: 10,
                  type: FormField.password,
                  class: "form-input",
                }}
              />

              <div className="d-flex d-row d-align btn-container">
                <button className="btn-secondary btn-medium btn-login">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const validate = (values: any): FormErrors => {
  return {};
};

export default reduxForm({
  form: "login",
  validate,
})(_Unconnect_Login);
