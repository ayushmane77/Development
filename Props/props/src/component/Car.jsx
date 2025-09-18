function Car(props){
    return(
        <>
        <h1>car</h1>
        <h2>the message is : {props.msg}</h2>
        <h2>addiotn is : {props.name}</h2>
        <h2>addiotn is : {props.b}</h2>
        <h2>array is : {props.array + " "}</h2>
        <h2>array is : {props.array[0]}</h2>
        <h2>the object is :{props.Object.id}</h2>
        <h2>the object is :{props.Object.Name}</h2>
        <h2>the new array is  : {props.array2 + " "}</h2>
        </>
    )
}
export default Car;