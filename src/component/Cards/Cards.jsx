import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    console.log(cards);
    return (
        <div className="flex justify-around">
            <div className="grid grid-cols-3">
                {/* card  section */}
                {/* card  section */}

                {
                    cards.map(card => (<div key={card.id} className="border-2 h-96 w-64 p-3 mr-10 mt-7 mb-7 bg-white rounded-md">
                        <img src={card.cover_img} alt="image" />
                        <h1 className="mt-3">{card.title}</h1>
                        <p className="text-gray-500 font-light text-sm mt-3">{card.description}</p>
                        <div className="flex justify-evenly">
                            <p className="text-gray-500 mt-4 text-sm font-normal">Price: {card.price}</p>
                            <p className="text-gray-500 mt-4 text-sm font-normal">Creadit: {card.video_length}</p>
                        </div>
                        <button className="bg-blue-600 h-10 w-full rounded-md text-white font-semibold mt-3">Select</button>
                    </div>))
                }
            </div>

            {/* cart section  */}

            <div className="h-96 w-64 mt-7 bg-white rounded-md p-4">
                <h1 className="text-blue-600 font-semibold text-base ">Credit Hour Remaining 7 hr</h1>
                <hr className="border-[1px] text-gray-600 mt-2" />
                <p className="font-bold text-lg">Course Name</p>
                <hr className="border-[1px] text-gray-600 mt-2" />
                <p className="text-base font-medium text-gray-500">Total Credit Hour : </p>
                <hr className="border-[1px] text-gray-600 mt-2" />
                <p className="text-base font-semibold text-gray-500">Total Price : </p>
            </div>
        </div>

    );
};

export default Cards;