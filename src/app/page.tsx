'use client';
import InfoButton from '@/components/Button/InfoButton';
import InfoInput from '@/components/Input/InfoInput';
import { useMounted } from '@/hooks/useMounted';

export default function Home() {
  const { isMounted } = useMounted();
  return (
    isMounted && (
      <form className="mt-8 space-y-6" action="#" method="POST">
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="my-3 flex flex-col items-center">
            <InfoInput placeholder="photo" name="photo" />
          </div>
          <div className="my-3">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Nickname
            </label>
            <InfoInput placeholder="Nickname" name="nickname" />
          </div>
        </div>
        <div>
          <InfoButton buttonText="게임하러 가기!" />
        </div>
      </form>
    )
  );
}
