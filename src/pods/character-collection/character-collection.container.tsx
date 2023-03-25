import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { HotelCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection, page, loadPage, totalPages } = useCharacterCollection();

  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, [page]);

  const handleCreateHotel = () => {
    return true;
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editHotel(id));
  };

  const handleDelete = async (id: string) => {

  };

  const handleChangePage = (newPage:number) => {
    loadPage(newPage);
  }

  return (
    <HotelCollectionComponent
      characterCollection={characterCollection}
      onCreateHotel={handleCreateHotel}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onChangePage={handleChangePage}
      totalPages={totalPages}
      actualPage={page}
    />
  );
};
