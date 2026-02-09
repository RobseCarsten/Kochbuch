import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cooking from "./cooking";
import Navbar from "./NavBar";
import Dish from "./dish";
import Landing from "./landing";
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
    const [activeDish, setActiveDish] = useState<Dish | null>(null);

    useEffect(() => {
        const init = () => {
            setDishes(DB.dishes as Dish[]);
        };
        init();
    }, []);

    return (
        <>
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route
                        path="/cooking"
                        element={
                            <Cooking
                                dishes={dishes}
                                setActiveDish={setActiveDish}
                            />
                        }
                    />
                    <Route
                        path="/dish"
                        element={<Dish activeDish={activeDish} />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
