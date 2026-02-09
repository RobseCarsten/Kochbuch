import { useState, useEffect } from "react";
import Cooking from "./cooking";
import Navbar from "./NavBar";
import Dish from "./dish";
import DB from "./assets/db.json";
import type { ReactNode } from "react";

export type Dish = {
    title: string;
    time: number;
    difficulty: number;
    ingredients: string[];
    herbs: string[];
    steps: ReactNode[];
};

function App() {
    const [dishes, setDishes] = useState<Dish[] | []>([]);
    const [isActive, setIsActive] = useState<string | "">("");
    const [activeDish, setActiveDish] = useState<Dish | null>(null);

    useEffect(() => {
        const init = () => {
            setDishes(DB.dishes as Dish[]);
        };
        init();
    }, []);

    return (
        <>
            <Navbar isActive={isActive} setIsActive={setIsActive} />
            {isActive == "cooking" && (
                <Cooking
                    dishes={dishes}
                    setDishes={setDishes}
                    setIsActive={setIsActive}
                    setActiveDish={setActiveDish}
                />
            )}
            {isActive == "dish" && <Dish activeDish={activeDish} />}
        </>
    );
}

export default App;
