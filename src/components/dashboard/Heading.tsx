interface Props {
  title: string;
}

const Heading = ({ title }: Props) => {
  return (
    <h2 className="text-2xl font-semibold dark:text-slate-50 dark:bg-slate-600 bg-slate-100 p-10 rounded-md">
      {title}
    </h2>
  );
};

export default Heading;
