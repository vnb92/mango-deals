import { getDate, getTime } from '@/lib/date'

export const dealDateFormat = (date: Date | null): string => date ? `${getDate(date)} ${getTime(date)}` : ''
