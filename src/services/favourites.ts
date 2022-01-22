import LocalStorage from './localStorage';
import { useCallback, useState } from 'react';

const FAVOURITES_LOCAL_STORAGE_KEY = 'favourites';
export const useFavourites = (): [Set<string>, (newSet: Set<string>) => void] => {
  const [value, setValue] = useState(LocalStorage.getSet(FAVOURITES_LOCAL_STORAGE_KEY) ?? new Set<string>());
  const updatedSetValue = useCallback(
    (newSet: Set<string>) => {
      LocalStorage.writeSet(FAVOURITES_LOCAL_STORAGE_KEY, newSet);
      setValue(new Set(newSet.values())); //Make a new set due to the way react hooks detects state changes via obj references
    },
    [value, FAVOURITES_LOCAL_STORAGE_KEY],
  );
  return [value, updatedSetValue];
};
