import { useRef } from "react";
import useInput from "../../hooks/use-input";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./BillingAddressForm.module.css";
import { useAuth } from "../../api/authentication";
import { CREATE_ORDER } from "../../graphql/mutation";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import NewLoading from "../Message/NewLoading";
import NewError from "../Message/NewError";

const BillingAddressForm = (props) => {
  const router = useRouter();

  const { userID } = useAuth();

  const [createOrderUser, { data, loding, error }] = useMutation(CREATE_ORDER);
  if (loding) return <NewLoading />;
  if (error) return <NewError />;
  console.log(data);
  if(data){
    router.push('/')
  }
  const streetRef = useRef();
  const landmarkRef = useRef();

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameInputResetHandler,
    valueRef: firstNameRef,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameInputResetHandler,
    valueRef: lastNameRef,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPhoneNo,
    isValid: enteredPhoneNoIsValid,
    hasError: phoneNoInputHasError,
    valueChangeHandler: phoneNoChangeHandler,
    inputBlurHandler: phoneNoBlurHandler,
    reset: phoneNoInputResetHandler,
    valueRef: phoneNoRef,
  } = useInput((value) => value.length === 10);

  const {
    value: enteredAddress1,
    isValid: enteredAddress1IsValid,
    hasError: address1HasError,
    valueChangeHandler: address1ChangeHandler,
    inputBlurHandler: address1BlurHandler,
    reset: address1InputResetHandler,
    valueRef: address1Ref,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: cityInputResetHandler,
    valueRef: cityRef,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredState,
    isValid: enteredStateIsValid,
    hasError: stateInputHasError,
    valueChangeHandler: stateChangeHandler,
    inputBlurHandler: stateBlurHandler,
    reset: stateInputResetHandler,
    valueRef: stateRef,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCountry,
    isValid: enteredCountryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: countryInputResetHandler,
    valueRef: countryRef,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPinCode,
    isValid: enteredPinCodeIsValid,
    hasError: pincodeInputHasError,
    valueChangeHandler: pinCodeChangeHandler,
    inputBlurHandler: pinCodeBlurHandler,
    reset: pinCodeInputResetHandler,
    valueRef: pincodeRef,
  } = useInput((value) => value.length === 6);

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredPhoneNoIsValid &&
    enteredAddress1IsValid &&
    enteredCityIsValid &&
    enteredStateIsValid &&
    enteredCountryIsValid &&
    enteredPinCodeIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    createOrderUser({
      variables: {
        userId: userID,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        add1: address1Ref.current.value,
        street: streetRef.current.value,
        landmark: landmarkRef.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
        phoneNo: phoneNoRef.current.value,
        pincode: parseInt(pincodeRef.current.value),
      },
    });
    firstNameInputResetHandler();

    lastNameInputResetHandler();

    phoneNoInputResetHandler();

    address1InputResetHandler();

    cityInputResetHandler();

    stateInputResetHandler();

    countryInputResetHandler();

    pinCodeInputResetHandler();
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
        <h3 className={classes.subHeading}>Billing Address</h3>
        <div className={classes.content}>
          <div className={classes.controlGroup}>
            <div className={classes.formControl}>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                value={enteredFirstName}
                ref={firstNameRef}
              />
              {firstInputHasError && (
                <p className={classes.errorText}>
                  First name can not be blank.
                </p>
              )}
            </div>
            <div className={classes.formControl}>
              <label htmlFor="lname">Last Name</label>
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
          </div>
          <div className={classes.controlSingle}>
            <label htmlFor="address1">
              Address(Apartment no./ Housing complex)
            </label>
            <input
              type="text"
              id="address1"
              onChange={address1ChangeHandler}
              onBlur={address1BlurHandler}
              value={enteredAddress1}
              ref={address1Ref}
            />
            {address1HasError && (
              <p className={classes.errorText}>Address is required.</p>
            )}
          </div>
          <div className={classes.controlGroup}>
            <div className={classes.formControl}>
              <label htmlFor="street">Street name(optional)</label>
              <input type="text" id="street" ref={streetRef} />
            </div>
            <div className={classes.formControl}>
              <label htmlFor="landmark">Landmark(optional)</label>
              <input type="text" id="landmark" ref={landmarkRef} />
            </div>
          </div>
          <div className={classes.controlGroup}>
            <div className={classes.formControl}>
              <label htmlFor="city">Town/City:.</label>
              <input
                type="text"
                id="city"
                onChange={cityChangeHandler}
                onBlur={cityBlurHandler}
                value={enteredCity}
                ref={cityRef}
              />
              {cityHasError && (
                <p className={classes.errorText}>Enter a city/town name.</p>
              )}
            </div>
            <div className={classes.formControl}>
              <label htmlFor="state">State:.</label>
              <input
                type="text"
                id="state"
                onChange={stateChangeHandler}
                onBlur={stateBlurHandler}
                value={enteredState}
                ref={stateRef}
              />
              {stateInputHasError && (
                <p className={classes.errorText}>Enter a state.</p>
              )}
            </div>
          </div>
          <div className={classes.controlGroup}>
            <div className={classes.formControl}>
              <label htmlFor="country">Phone No</label>
              <input
                inputMode="numeric"
                id="phoneno"
                onChange={phoneNoChangeHandler}
                onBlur={phoneNoBlurHandler}
                value={enteredPhoneNo}
                ref={phoneNoRef}
              />
              {phoneNoInputHasError && (
                <p className={classes.errorText}>
                  Please enter valid phone number.
                </p>
              )}
            </div>
            <div className={classes.formControl}>
              <label htmlFor="pincode">Pin Code:.</label>
              <input
                inputMode="numeric"
                id="pincode"
                onChange={pinCodeChangeHandler}
                onBlur={pinCodeBlurHandler}
                value={enteredPinCode}
                ref={pincodeRef}
              />
              {pincodeInputHasError && (
                <p className={classes.errorText}>Enter location Pin code.</p>
              )}
            </div>
          </div>
          <div className={classes.buttonAlign}>
            <Button type="submit" disabled={!formIsValid}>
              Procced
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default BillingAddressForm;
