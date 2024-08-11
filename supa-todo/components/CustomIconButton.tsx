import { IconButton, Spinner } from "@material-tailwind/react";

type IconButtonProps = {
  className: string;
  onClick?: () => void;
  isLoading: boolean;
};

export default function CustomIconButton({
  className,
  onClick,
  isLoading,
}: IconButtonProps) {
  return (
    <IconButton onClick={onClick} className='min-w-10'>
      {isLoading ? <Spinner /> : <i className={className} />}
    </IconButton>
  );
}
