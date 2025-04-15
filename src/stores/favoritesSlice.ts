import {StateCreator} from 'zustand'
import { Recipe } from '../types'
import { createNotificationSlice, NotificationSliceType } from './notificationSilce'


export type FavoritesSliceType = {
    favorites: Recipe[]
    modal: boolean
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExist: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) =>({
    favorites: [],
    modal: false,
    handleClickFavorite: (recipe) => {
            if (get().favoriteExist(recipe.idDrink)) {
                set((state) => ({
                    favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
                }))
                createNotificationSlice(set,get,api).showNotification({
                    text: 'Se elimino de favoritos', 
                    error:false})
            } else {
                set((state) => ({
                    favorites: [...state.favorites, recipe]
                }));

                createNotificationSlice(set, get, api).showNotification({
                    text: 'Se Añadio correctamente a favoritos', 
                    error:false})
            }

            localStorage.setItem('favorites', JSON.stringify(get().favorites))
            
    },
   

    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
       
    },

    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites){
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
    
})