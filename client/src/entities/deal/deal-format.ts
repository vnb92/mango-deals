import { getDate, getTime } from '@/lib/date'

export const dealFormat = (date: Date) => `${getDate(date)} ${getTime(date)}`