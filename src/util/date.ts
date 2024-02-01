import { format } from 'date-fns'

const date = new Date()

/**
 * 현재 시간을 yyyy/MM/dd 형식으로 만든다.
 */
export const formattedDate = format(date, 'yyyy-MM-dd')
