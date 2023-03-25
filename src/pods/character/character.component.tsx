import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
} from 'common/components';
import { formValidation } from './hotel.validations';
import { CharacterEntityVm } from './character.vm';
import * as classes from './character.styles';
import { TextareaAutosize } from '@mui/material/';

interface Props {
  character: CharacterEntityVm;
  onSave: (hotel: CharacterEntityVm) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <img src={character.picture} width="150px"/>
          <TextFieldComponent name="id" label="Id" disabled={true} />
          <TextFieldComponent name="description" label="Description" disabled={true} />
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="location" label="Location" />
          <TextFieldComponent name="species" label="Species" />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
