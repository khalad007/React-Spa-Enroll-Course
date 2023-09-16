const Cart = ({ selectedCourse, remaining, totalCost }) => {
    console.log(selectedCourse);
    return (
        <div>
            <h1 className="text-blue-600 font-semibold text-base ">Credit Hour Remaining {remaining} hr</h1>
            <hr className="border-[1px] text-gray-600 mt-2" />
            <p className="font-bold text-lg">Course Name</p>
            {selectedCourse.map((card) => (
                <li key={card.id} className="font-normal text-sm text-gray-500 mt-1">{card.title}</li>
            ))}
            <hr className="border-[1px] text-gray-600 mt-2" />
            <p className="text-base font-medium text-gray-500">Total Credit Hour : {totalCost} hr</p>
                <hr className="border-[1px] text-gray-600 mt-2" />
            
            
        </div>
    );
    };
   

export default Cart;