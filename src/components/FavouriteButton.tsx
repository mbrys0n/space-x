import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
interface FavouriteButtonProps {
  onClick: () => void;
  isFavourite: boolean;
}
const testId = 'favourite-button';
export const FavouriteButton = ({ onClick, isFavourite }: FavouriteButtonProps): JSX.Element => {
  return isFavourite ? (
    <StarIcon onClick={onClick} style={{ cursor: 'pointer' }} data-testid={testId} />
  ) : (
    <StarOutlineIcon style={{ cursor: 'pointer' }} onClick={onClick} data-testid={testId} />
  );
};
