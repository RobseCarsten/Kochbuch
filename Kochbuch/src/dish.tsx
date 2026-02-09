import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Dish } from "./App";

type dishProps = {
    activeDish: Dish | null;
};

function dish({ activeDish }: dishProps) {
    const [Pages, setPages] = useState<ReactNode[] | [""]>([""]);
    const [i, setI] = useState<number | 0>(0);

    useEffect(() => {
        const init = () => {
            setPages([
                <>
                    <h4 className="font-bold">Zutaten:</h4>
                    <ul>
                        {activeDish?.ingredients.map((ingredient) => (
                            <li className="pl-2">{ingredient}</li>
                        ))}
                        <li className="pl-2">
                            <p className="font-bold">Gewürze:</p>
                            <ul>
                                {activeDish?.herbs.map((herbs) => (
                                    <li className="pl-2">{herbs}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </>,
            ]);
            activeDish?.steps.map((step) => {
                setPages((prev) => [...prev, step]);
            });
        };
        init();
    }, []);

    function bookPage(value: number) {
        if (value == 0 && i >= 2) {
            setI(i - 2);
        }
        if (value == 1 && i <= Pages.length - 2) {
            setI(i + 2);
        }
    }

    return (
        <div className="recipe">
            <h2 id="heading">{activeDish?.title}</h2>
            <div className="img-cookingbook">
                <img src="../pics/dishes/cookbook.png" alt="" />
            </div>
            <div className="inner-book" id="inner-book">
                <button className="btn-book l-b" onClick={() => bookPage(0)}>
                    {"<"}
                </button>
                <div className="page-js" id="page-js">
                    <div className="page" id="page" data-page="true">
                        <div
                            className="left-side"
                            style={{ textAlign: i > 0 ? "center" : "left" }}
                        >
                            <div className="text-l">{Pages[i]}</div>
                        </div>
                        <div
                            className="right-side"
                            style={{ textAlign: "center" }}
                        >
                            <div className="text-r">{Pages[i + 1]}</div>
                        </div>
                    </div>
                </div>
                <button className="btn-book r-b" onClick={() => bookPage(1)}>
                    {">"}
                </button>
            </div>
        </div>
    );
}
export default dish;
