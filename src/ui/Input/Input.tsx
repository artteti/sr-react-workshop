import { type ComponentPropsWithRef, useId, forwardRef, type Ref } from "react";
import { type FieldError } from "react-hook-form";

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ label, error, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div className="my-2">
        <label htmlFor={id} className="mr-2 dark:text-slate-300">
          {label}
        </label>
        <input id={id} ref={ref} {...rest} className="border" />
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
    );
  }
);
