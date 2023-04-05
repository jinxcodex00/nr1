import createSlice from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

export const selectFeaturedPromotion = () => {
  return PROMOTIONS.find((promotion) => promotion.featured);
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

const initialState = {
  campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
  name: 'campsites',
  initialState
});

export const campsitesReducer = campsitesSlice.reducer;


