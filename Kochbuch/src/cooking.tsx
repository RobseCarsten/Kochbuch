import { useState } from "react";
import type { Dish } from "./App";

type cookingProps = {
    dishes: Dish[] | [];
    setDishes: (value: React.SetStateAction<Dish[] | []>) => void;
    setIsActive: (s: string) => void;
    setActiveDish: (D: Dish) => void;
};

function cooking({
    dishes,
    setDishes,
    setIsActive,
    setActiveDish,
}: cookingProps) {
    const [filteredDishes, setFilteredDishes] = useState<Dish[] | []>(dishes);

    function searchRecepies(event: string) {
        const filterDishes = dishes?.filter((dish) =>
            dish.title.toLowerCase().includes(event.toLowerCase()),
        );

        setFilteredDishes(filterDishes);
        return filterDishes;
    }

    return (
        <>
            <div className="cooking">
                <div className="intro">
                    <img
                        className="pan2"
                        src="../pics/kochen/pan.png"
                        alt="pan with vegetables"
                    />
                    <h1 className="heading">Kochbuch</h1>
                </div>
                <div className="searchbar-cooking">
                    <input
                        type="text"
                        id="searchCookInput"
                        placeholder="Search Recepies..."
                        onChange={(event) =>
                            searchRecepies(event.target.value.toLowerCase())
                        }
                    />
                </div>
                <div className="cooking-book" id="cooking-book">
                    {filteredDishes &&
                        filteredDishes.map((dish) => {
                            return (
                                <a
                                    className="dish-click hover:cursor-pointer"
                                    onClick={() => {
                                        setActiveDish(
                                            searchRecepies(dish.title)[0],
                                        );
                                        setIsActive("dish");
                                        console.log(searchRecepies(dish.title));
                                    }}
                                >
                                    <div className="dish">
                                        <div className="dish-left-side">
                                            <img
                                                className="dish-img"
                                                src="../pics/dishes/${title}.png"
                                                alt=""
                                            />
                                            <h2 className="dish-title">
                                                {dish.title}
                                            </h2>
                                            <div className="dish-info">
                                                <div className="dish-time">
                                                    <p>Zeit:</p>
                                                    <p>{dish.time} min</p>
                                                </div>
                                                <div className="dish-difficulty">
                                                    <p>Aufwand:</p>
                                                    <p>{dish.difficulty}/10</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dish-right-side">
                                            <img
                                                className="papyrus"
                                                src="../pics/kochen/papyrus-top.png"
                                                alt=""
                                            />
                                            <div className="dish-ingredients">
                                                <h4>Zutaten:</h4>
                                                <ul>
                                                    {dish.ingredients.map(
                                                        (ingredient) => {
                                                            return (
                                                                <li>
                                                                    {ingredient}
                                                                </li>
                                                            );
                                                        },
                                                    )}
                                                    <li>
                                                        Gewürze:
                                                        <ul>
                                                            {dish.herbs.map(
                                                                (herbs) => {
                                                                    return (
                                                                        <li>
                                                                            {
                                                                                herbs
                                                                            }
                                                                        </li>
                                                                    );
                                                                },
                                                            )}
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img
                                                className="papyrus"
                                                src="../pics/kochen/papyrus-bottom.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                </div>
            </div>
        </>
    );
}

export default cooking;
