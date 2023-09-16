import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Credit from "../Credit/Credit";
import swal from 'sweetalert';

const Cards = () => {
    const [cards, setCards] = useState([]);

    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(20);
    const [totalCost, settotalCost] = useState(0);


    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    const handleSelectCourse = (card) => {

        const isExist = selectedCourse.find((item) => item.id == card.id);

        // let count = <Credit></Credit>
        let count = card.video_length;

        if (isExist) {
            return swal("What..?", "Course is already selected", "error");
        } else {


            selectedCourse.forEach(item => {
                count = count + item.video_length;
            });
            console.log(count);

            const totalRemaining = 20 - count;
            

            if (count > 20) {
                return swal("Sorry", "You'r Credit Hour Is Finished", "warning");
            } else {
                settotalCost(count);
                setRemaining(totalRemaining);
                setSelectedCourse([...selectedCourse, card]);
            }
            // ........................for remaining 
            // ........................for remaining 
            // if(remaining <= 0){
            //     alert('hello')
            // }

        }

    }

    console.log(selectedCourse);
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
                            <p className="text-gray-500 mt-4 text-sm font-normal">$ Price: {card.price}</p>
                            <img className="h-5 w-5 mt-4 ml-2" src={card.icon} alt="image" /><p className="text-gray-500 mt-4 text-sm font-normal"> Creadit: {card.video_length}</p>
                        </div>
                        <button onClick={() => handleSelectCourse(card)} className="bg-blue-600 h-10 w-full rounded-md text-white font-semibold mt-3">Select</button>
                    </div>))
                }
            </div>

            {/* cart section  */}

            <div className="h-96 w-72 mt-7 bg-white rounded-md p-4">



                <Cart selectedCourse={selectedCourse} remaining={remaining} totalCost={totalCost}></Cart>



            </div>
        </div>

    );
};

export default Cards;