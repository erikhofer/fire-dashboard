import moment from 'moment'

export const renderDate = (date: moment.MomentInput) =>
  moment(date).format('LL')
