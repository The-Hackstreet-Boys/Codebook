import dayjs from 'dayjs';
import { FC } from 'react';

import Typography from '../Typography';

interface Props {
  date: Date;
}

const Timestamp: FC<Props> = ({ date: normalDate }) => {
  const currentDate = dayjs();
  const date = dayjs(normalDate);

  return (
    <Typography transform="capitalize">
      {currentDate.diff(date, 'days') < 1
        ? dayjs(date).from(dayjs())
        : dayjs(date).format('DD MMM YYYY')}
    </Typography>
  );
};

export default Timestamp;
