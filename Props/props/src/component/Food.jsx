function Food({favFood,Arr3}){ // function expression : way to retrieve data from components
    return(
        <>
        <h1>Food!</h1>
        <h2>{favFood}</h2>
        <h1>{Arr3[0]}</h1>
        <h1>{Arr3 + " "}</h1>
        </>
    )
}
export default Food;