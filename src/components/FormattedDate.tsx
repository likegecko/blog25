type FormattedDateProps = {
  date: Date;
};

const FormattedDate = ({ date }: FormattedDateProps) => {
  return (
    <time className="text-gray-500 text-sm font-light" dateTime={date.toISOString()}>
      {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
    </time>
  );
};

export default FormattedDate;
