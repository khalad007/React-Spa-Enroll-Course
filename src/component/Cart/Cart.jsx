const Cart = ({ selectedCourse }) => {
    console.log(selectedCourse);
    return (
        <div>
            <p className="font-bold text-lg">Course Name C</p>
            {selectedCourse.map((card) => (
                <li className="font-normal text-sm text-gray-500 mt-1">{card.title}</li>
            ))}
        </div>
    );
    };
   

export default Cart;