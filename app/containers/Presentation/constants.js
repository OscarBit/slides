/*
 * PresentationConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ADD_SLIDE = 'Slides/Presentation/ADD_SLIDE';
export const REMOVE_SLIDE = 'Slides/Presentation/REMOVE_SLIDE';
export const ADD_TEXT = 'Slides/Presentation/ADD_TEXT';
export const REMOVE_TEXT = 'Slides/Presentation/REMOVE_TEXT';
export const ADD_DATA = 'Slides/Presentation/ADD_DATA';
export const CHANGE_POSITION = 'Slides/Presentation/CHANGE_POSITION';
export const SET_THEME = 'Slides/Presentation/SET_THEME';

export const CHANGE_SLIDE = '@@router/LOCATION_CHANGE';
