import { formattedDate } from '@/util/date'
import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from 'uuid'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string,
)

/**
 * supabase에 image 업로드. !! 서버에 url 저장하는 api 요망.
 * 한글 파일명을 넣을 수 없기 때문에 uuid를 붙임.
 * @param file
 */
export const uploadImage = async (file: any) => {
  const { data, error } = await supabase.storage
    .from('user-image')
    .upload(`images/${formattedDate}${uuidv4()}`, file)
  if (error) {
    return console.log(error)
  }

  console.log(data, 'image data')
  return data
}

export const getImageUrl = async (imageName: string) => {
  const { data } = await supabase.storage
    .from('user-image')
    .getPublicUrl(imageName, {
      transform: {
        width: 150,
        height: 150,
      },
    })
  console.log(data, 'image url')
  return data
}
