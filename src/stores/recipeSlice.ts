import { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipesById } from "../services/RecipeService"
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"



export type RecipiesSliceType = {
    categories: Categories
    drinks: Drinks
    modal: boolean
    selectedRecipe: Recipe
    fetchCategories: () => Promise<void>
    searchRecepies: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void


}

export const createRecipeSlice : StateCreator<RecipiesSliceType>= (set) => ({
    categories: {
        drinks: []
    },

    drinks : {
        drinks:[]
    },

    selectedRecipe: {} as Recipe,

    modal : false,

    fetchCategories: async () =>{
        const categories = await getCategories()
        set({
            categories
        })
    },

    searchRecepies: async (filters) =>{
        const drinks = await getRecipes(filters)
        set({
            drinks
        })

    },

    selectRecipe: async (id) =>{
       const selectedRecipe = await getRecipesById(id)
       set({
            selectedRecipe,
            modal: true
       })

    },

    closeModal: () => {
        set({
            modal: false,
            selectedRecipe:{} as Recipe
        })
    },
})