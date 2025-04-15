import {create} from 'zustand'
import { createRecipeSlice, RecipiesSliceType } from './recipeSlice'
import {devtools} from 'zustand/middleware'
import {FavoritesSliceType, createFavoritesSlice} from './favoritesSlice'
import { createNotificationSlice, NotificationSliceType } from './notificationSilce' 

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))