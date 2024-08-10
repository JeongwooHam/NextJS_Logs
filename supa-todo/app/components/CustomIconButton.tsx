import { IconButton } from "@material-tailwind/react";

type IconButtonProps = {
  className: string;
  onClick?: () => void;
};

export default function CustomIconButton({
  className,
  onClick,
}: IconButtonProps) {
  return (
    <IconButton onClick={onClick} className='min-w-10'>
      <i className={className} />
    </IconButton>
  );
}
