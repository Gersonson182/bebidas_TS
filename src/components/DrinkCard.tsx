import type { Drink } from "../types"
import { useAppStore } from "../stores/useAppStore"

type DrinkcardProps = {
    drink: Drink
}

export default function DrinkCard({drink}:DrinkcardProps) {

    const selectRecipe = useAppStore ((state) => state.selectRecipe)
  return (
    <div className="border shadow-lg">
        <div className="overflow-hidden">
            <img className="hover:scale-125 transition-transform hover:rotate-2"
                 src={drink.strDrinkThumb}
                 alt={`Imagen de ${drink.strDrink}`}
            >
            </img>
        </div>

        <div className="p-5">
            <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
            <button
            onClick={() => selectRecipe(drink.idDrink)}
            type="button"
            className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold
                        text-white text-lg"   
            >Ver Receta</button>
        </div>
   
       
    </div>
  )
}
