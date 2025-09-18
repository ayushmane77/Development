function Fruits(props){
    let Names = props.b;
    let [num1,num2,num3,num4] = props.numbers;
    let {id:elem1,elem2} = props.newObject;
    return(
        <>
        <h1>Fruit component</h1>
        <h2>{Names}</h2>
        <h1>{num1}</h1>
        <h2>{elem1}</h2>
        </>
    )
}
export default Fruits;