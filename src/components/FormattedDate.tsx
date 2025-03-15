type FormattedDateProps = {
  date: Date;
};

const FormattedDate = ({ date }: FormattedDateProps) => {
  return (
    <time className="text-gray-600" dateTime={date.toISOString()}>
      {date.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </time>
  );
};

export default FormattedDate;
