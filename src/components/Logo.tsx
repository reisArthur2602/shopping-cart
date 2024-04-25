import { Gamepad } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-1 text-zinc-100">
      <Gamepad size={40} />
      <span className='font-semibold text-3xl'>Games</span>
    </div>
  );
};
