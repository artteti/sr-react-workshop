import { FormEventHandler, useRef } from "react";
import { Button, Input } from "../../ui";

type RegistrationFormData = {
  email: string;
  password: string;
  language: string;
};

export const RegistrationFormRefs = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const data: RegistrationFormData = {
      email: emailFieldRef.current?.value || "",
      password: passwordFieldRef.current?.value || "",
      language: languageFieldRef.current?.value || "",
    };
    console.log(data); //send to API
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-2">
        <label htmlFor="email" className="mr-2">
          E-mail
        </label>
        <input id="email" ref={emailFieldRef} type="email" className="border" />
      </div>
      <div className="my-2">
        <label htmlFor="password" className="mr-2">
          Password
        </label>
        <input
          id="password"
          ref={passwordFieldRef}
          type="password"
          className="border"
        />
      </div>
      <div className="my-2">
        <label htmlFor="language" className="mr-2">
          Language
        </label>
        <input
          id="language"
          ref={languageFieldRef}
          type="text"
          className="border"
        />
      </div>
      <Button label="Send" type="submit" />
    </form>
  );
};
