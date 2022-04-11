import React, {Component} from 'react';
import {Text, View} from 'react-native';
import shortNotes from '../../data/noteBase/ShortBaseNotesAll';

const returnData = async catId => {
  const data = shortNotes.filter(note => note.cat === catId);

  return data;
};
export default returnData;
