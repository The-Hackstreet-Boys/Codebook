import dayjs from 'dayjs';
import { FC } from 'react';

import Typography from '../Typography';

interface Props {
  date: Date;
}

const Timestamp: FC<Props> = ({ date }) => (
  <Typography transform="capitalize">
    {/* { dayjs(date).format('DD MMM YYYY')} */}
    {dayjs(date).from(dayjs())}
  </Typography>
);

export default Timestamp;
