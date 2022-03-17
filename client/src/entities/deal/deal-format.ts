import { getDate, getTime } from '@/lib/date'

export const dealFormat = (date: Date | null): string => date ? `${getDate(date)} ${getTime(date)}` : ''
