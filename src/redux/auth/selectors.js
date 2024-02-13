import { createSelector } from '@reduxjs/toolkit';

export const selectorIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserData = state => state.auth.user;

export const selectError = state => state.auth.error;

export const selectorName = state => state.auth.user.name;

export const selectEmail = createSelector(selectUserData, user => user.email);
