interface Props {
  title: string;
}

const Heading = ({ title }: Props) => {
  return <h2 className="text-2xl font-semibold text-slate-50">{title}</h2>;
};

export default Heading;
