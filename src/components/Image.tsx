import { MergeClassName } from '../utils/mergeClassName';

type ImageProps = {
  src: string;
  className?: string;
};

export const Image = ({ src, className }: ImageProps) => {
  return (
    <div className={MergeClassName('w-full h-full bg-white', className)}>
      <img src={src} alt={src} className="w-full h-full object-contain" />
    </div>
  );
};
