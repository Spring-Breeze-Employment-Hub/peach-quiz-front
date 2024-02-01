'use client';
import { useNicknameStore } from '@/store/userInfoStore';
import React from 'react';
import { useMounted } from '@/hooks/useMounted';

const InfoInput = ({
  placeholder,
  name,
}: {
  placeholder: string;
  name: 'nickname' | 'photo';
}) => {
  const { nickname, image, onChangeNickname, onChangeImage } = useNicknameStore(
    (state) => state
  );
  const { isMounted } = useMounted();

  return (
    <>
      {isMounted && name === 'nickname' ? (
        <input
          type="text"
          placeholder={placeholder}
          className="h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          name={name}
          onChange={(e) => onChangeNickname(e.target.value)}
        />
      ) : image.length === 0 ? (
        <label className="relative flex rounded-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[150px] h-[150px] cursor-pointer justify-center items-center hover:bg-[#FFBE98] text-[#856778]">
          <input
            type="file"
            className=" opacity-0 absolute h-full w-full cursor-pointer"
            placeholder={placeholder}
            name={name}
            accept=".png, .jpg, .jpeg"
            onChange={(e) => {
              onChangeImage(e.target.files);
            }}
          />
          Click!
        </label>
      ) : (
        <img
          src={image}
          className="rounded-full h-[150px] w-[150px] cur"
          alt="사용자 이미지"
        />
      )}
    </>
  );
};

export default InfoInput;
