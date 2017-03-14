import moment from 'moment';

export const format = time => moment(time).format('LLLL');
export const when = time => moment(time).fromNow();
