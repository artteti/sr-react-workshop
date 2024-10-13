import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "../../ui";
import { type RegistrationFormData, validationSchema } from "./types";

export const RegistrationFormRefsHookFormZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
  });

  const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (
    data
  ) => {
    console.log(data); //send to API
  };

  return (
    <form onSubmit={handleSubmit(handleRegistrationForm)}>
      <Input
        label="E-mail"
        {...register("email", { required: true })}
        type="email"
        error={errors.email}
      />
      <Input
        label="Password"
        {...register("password", { required: true })}
        type="password"
        error={errors.password}
      />
      <Input
        label="Language"
        {...register("language")}
        type="text"
        error={errors.language}
      />
      <Button label="Send" type="submit" />
    </form>
  );
};
