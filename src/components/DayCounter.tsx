type DayCounterProps = {
  startDate: string;
};

const DayCounter = ({ startDate }: DayCounterProps) => {
  const pastDateCount = new Date(startDate).getTime();
  const nowDateCount = new Date().getTime();
  const diffTime = Math.abs(nowDateCount - pastDateCount);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return <time dateTime={new Date(diffTime).toISOString()}>{diffDays}</time>;
};

export default DayCounter;
