import { createSlice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';

const initialState = {
    campsitesArray: CAMPSITES
const initialState = {
    campsitesArray: CAMPSITES
};

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

//export const selectRandomCampsite = () => {
  //return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
//};

export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
};