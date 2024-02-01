import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { getImageUrl, uploadImage } from '../../supabase/api';

interface State {
  nickname: string;
  image: string;
}

interface Action {
  onChangeNickname: (nickname: State['nickname']) => void;
  onChangeImage: (image: FileList | null) => void;
}

interface SupabaseStorageProps {
  fullPath: string;
  id: string;
  path: string;
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
      onChangeImage: async (image: FileList | null) => {
        if (image && image.length > 0) {
          const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
          if (allowedTypes.includes(image[0].type)) {
            const uploadURL = await uploadImage(image[0]);
            console.log(uploadURL, 'upload');
            set((state) => ({
              ...state,
              image: `${process.env.NEXT_PUBLIC_STORAGE_URL}/user-image/${uploadURL}`,
            }));
          } else {
            alert('지원하지 않는 파일 형식입니다!');
          }
        }
      },
    }),

    {
      name: 'user-info',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
