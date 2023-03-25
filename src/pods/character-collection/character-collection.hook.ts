import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );
  const [ page, setPage ] = React.useState<number>(1);
  const [ totalPages, setTotalPages ] = React.useState<number>(1);


  const loadCharacterCollection = () => {
    getCharacterCollection(page).then((result) => {
      setCharacterCollection(mapToCollection(result.results, mapFromApiToVm));
      setTotalPages(result.info.pages);
    });
  };

  const loadPage = (actPage) => {
    setPage(actPage);
  }

  return { characterCollection, loadCharacterCollection, page, loadPage, totalPages };
};
