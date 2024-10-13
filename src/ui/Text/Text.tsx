type Props = {
  //label: string;\
  children: string | string[] | number;
};

export const Text = (props: Props) => {
  return <p className="dark:text-slate-300">{props.children}</p>;
};
