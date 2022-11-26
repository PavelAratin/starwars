import { ADD_PERSON_TO_FAVORIT, REMOVE_PERSON_TO_FAVORITE } from "../constans/actionTypes"

export const addPersonToFavorit = (person) => ({
  type: ADD_PERSON_TO_FAVORIT,
  payload: person
})

export const removePersonFavorit = (personId) => ({
  type: REMOVE_PERSON_TO_FAVORITE,
  payload: personId
})
