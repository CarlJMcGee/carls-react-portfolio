import React, { useRef, useState } from "react";

export interface IContactProps {}

export default function Contact(props: IContactProps) {
  const [valErrMsg, setErrMsg] = useState("");

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const msgRef = useRef<HTMLTextAreaElement | null>(null);

  const nameVal = (name: string): boolean => {
    const val = name !== null && name !== "" ? true : false;
    val ? setErrMsg(``) : setErrMsg(`Must Enter a name`);
    return val;
  };

  const emailVal = (email: string): boolean => {
    const regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+\.[A-Z]{2,4}/gim;
    const val = regex.test(email);
    val ? setErrMsg(``) : setErrMsg(`Must Have a Valid Email`);
    return val;
  };

  const msgVal = (msg: string): boolean => {
    const val = msg !== null && msg !== "" ? true : false;
    val ? setErrMsg(``) : setErrMsg(`Must Enter a Message`);
    return val;
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nameVal || !emailVal || !msgVal) {
      setErrMsg(`Please Complete Form Before Submiting`);
      return;
    }

    if (!nameRef.current || !emailRef.current || !msgRef) {
      return console.log(`Message package wraping failed`);
    }
    const message = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      body: msgRef.current?.value,
    };

    console.log(message);
  };

  return (
    <div className="block columns is-multiline m-6 is-centered">
      <h3 className="title column is-full has-text-centered">Get in Touch:</h3>
      <form
        action=""
        className="column columns is-5 is-multiline is-centered is-mobile"
        onSubmit={sendMessage}
      >
        <div className="column columns is-full m-2 is-mobile">
          <label htmlFor="name" className={`column is-1 px-0`}>
            <i className="fi fi-rr-user"></i>
          </label>
          <input
            className="input column"
            type="text"
            id="name"
            placeholder="Full Name"
            ref={nameRef}
            onBlur={(e) => nameVal(e.target.value)}
          />
        </div>

        <div className="column columns is-full m-2 is-mobile">
          <label htmlFor="email" className={`column is-1 px-0`}>
            <i className="fi fi-rr-envelope"></i>
          </label>
          <input
            className="input column"
            type="text"
            id="email"
            placeholder="Email"
            ref={emailRef}
            onBlur={(e) => emailVal(e.target.value)}
          />
        </div>
        <textarea
          className="textarea column is-full m-2"
          id="message"
          placeholder="Message"
          ref={msgRef}
          onBlur={(e) => msgVal(e.target.value)}
        ></textarea>
        <p className="column is-full has-text-danger has-text-weight-bold">
          {valErrMsg}
        </p>
        <input
          className="button column is-8 m-2 p-2"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}
