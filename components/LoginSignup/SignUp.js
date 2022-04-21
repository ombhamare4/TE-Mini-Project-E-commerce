import Card from "../UI/Card";
import Button from "../UI/Button";
import useInput from "../../hooks/use-input";
import Link from "next/link";
import { useRouter } from "next/router";
import Loading from "../Loading/Loading";
import classes from "./SignUp.module.css";
import { useEffect, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      userInput: {
        name: { firstName: $firstName, lastName: $lastName }
        email: $email
        password: $password
      }
    ) {
      email
      password
    }
  }
`;

const SignUp = () => {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isError, setIsError] = useState(false);

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      if (data) {
        setIsSignUp(true);
      }
    },
    onError: (error) => {
      if (error) {
        setIsError(true);
      }
    },
  });
  if (isSignUp) {
    router.push(`/account`);
  }
  // if (loading) return <Loading/>;

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameInputResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameInputResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailInputResetHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordInputResetHandler,
  } = useInput((value) => value.length >= 8);

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true  ;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    firstNameInputResetHandler();

    lastNameInputResetHandler();

    emailInputResetHandler();

    passwordInputResetHandler();
    createUser({
      variables: {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    });
  };

  return (
    <Card className={classes.form}>
      <form onSubmit={formSubmissionHandler}>
        <div className={classes.header}>
          <h1>
            <span className="text-red-500">J</span>upiter
            <span className="text-red-500">.</span>
            <span>com</span>
          </h1>
        </div>
        <h3 className={classes.subHeading}>Register</h3>
        {isError && (
          <p className="text-center my-5 text-lg text-red-500">
            User Already Exists
          </p>
        )}
        <div className={classes.content}>
          <div className={classes.formControl}>
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
              value={enteredFirstName}
              ref={firstNameRef}
            />
            {firstInputHasError && (
              <p className={classes.errorText}>First name can not be blank.</p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
              value={enteredLastName}
              ref={lastNameRef}
            />
            {lastInputHasError && (
              <p className={classes.errorText}>Last name can not be blank.</p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
              ref={emailRef}
            />
            {emailInputHasError && (
              <p className={classes.errorText}>Enter a valid email.</p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
              ref={passwordRef}
            />
            {passwordInputHasError && (
              <p className={classes.errorText}>
                Enter a password with more then or equal to 8 characters.
              </p>
            )}
          </div>
          <div className={classes.buttonAlign}>
            <Button type="submit" disabled={!formIsValid}>
              SignUp
            </Button>
          </div>
          <div>
            <h4 className={classes.headref}>
              Registered User?
              <Link href="/account">
                <span className={classes.blue}>Log in</span>
              </Link>
            </h4>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default SignUp;
