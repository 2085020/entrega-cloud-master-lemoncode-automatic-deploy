import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateHotel: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onChangePage: (page:number) => void;
  totalPages: number;
  actualPage: number;
}

export const HotelCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateHotel, onEdit, onDelete, onChangePage, totalPages, actualPage } = props;
  const sliceInit = actualPage<5?0:actualPage-5;
  const pages = [...Array(totalPages+1).keys()].slice(1).slice(sliceInit, sliceInit+10); //.slice(1).slice(actualPage-5, actualPage+5);
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateHotel}>
        Add hotel
      </Button>
      <div>
      <span>Pages</span>
      {pages.map((actPage) => (
          <span key={`page${actPage}`} className={actualPage!==actPage?classes.pagination:""}  onClick={() => onChangePage(actPage)}> - {actPage}</span>
        ))}
      </div>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};
