import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { getImageUrl, uploadImage } from '../../supabase/api'
import { formattedDate } from '@/util/date'
import { v4 as uuidv4 } from 'uuid'

interface State {
  nickname: string
  image: string
}

interface Action {
  onChangeNickname: (nickname: State['nickname']) => void
  onChangeImage: (image: any) => void
}

/**
 * 유저의 닉네임을 저장한다.
 */
export const useNicknameStore = create(
  persist<State & Action>(
    (set) => ({
      nickname: '',
      image: '',
      onChangeNickname: (nickName: string) =>
        set((state) => ({ ...state, nickname: nickName })),
      onChangeImage: async (image: any) => {
        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg']
        if (allowedTypes.includes(image?.type)) {
          const upload = await uploadImage(image)
          console.log(upload, 'upload')
          set((state) => ({
            ...state,
            image: `${process.env.NEXT_PUBLIC_STORAGE_URL}${upload?.fullPath}`,
          }))
        } else {
          alert('지원하지 않는 파일 형식입니다!')
        }
      },
    }),

    {
      name: 'user-info',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
