interface Props {
  title: string;
}

const Heading = ({ title }: Props) => {
  return (
    <div className="flex dark:text-slate-50 dark:bg-slate-800 bg-slate-100 p-10 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold ">{title}</h2>
    </div>
  );
};

export default Heading;
