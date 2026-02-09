import { useState } from "react";
import DB from "./assets/db.json";

type Groceries = {
    vegetables: {};
    freezer: {};
    dry: {};
};
function inventory() {
    const [groceries, setGroceries] = useState<Groceries | null>(null);
    return (
        <div className="content">
            <h2>Was hast du Zuhause?</h2>
            <div className="food-list">
                <form id="zutatenForm">
                    <div className="vegetables">
                        <h3>Gemüse:</h3>
                        {}
                        <label className="checkbox-v">
                            <input
                                id="Zwiebeln"
                                type="checkbox"
                                name="zutaten"
                                value="Zwiebeln"
                            />
                            <span className="checkbox-new"></span>
                            <img
                                src="pics/food/onion.png"
                                alt="onion"
                                className="veg-img"
                            />
                        </label>
                    </div>
                    <div className="freezer">
                        <h3>Kühlschrank:</h3>
                        <label className="checkbox-f">
                            <input
                                type="checkbox"
                                name="zutaten"
                                value="onion"
                            />
                            <span className="checkbox-new"></span>
                            <img
                                src="pics/food/onion.png"
                                alt="onion"
                                className="veg-img"
                            />
                        </label>
                    </div>
                    <button type="submit" id="btn-inv">
                        Küche Updaten
                    </button>
                </form>
            </div>
        </div>
    );
}

export default inventory;
