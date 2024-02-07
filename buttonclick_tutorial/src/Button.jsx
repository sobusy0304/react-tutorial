function Button(){
    //let count = 0;
    //const handleClick = (name) => {
    //    if(count < 3 ) {
    //        count ++;
    //        console.log(`${name} you clicked me ${count} time/s`);
    //    }
    //    else{
    //        console.log(`${name} stop clicking me!`);
    //    }
    //};   
    //() => console.log("OUCH!");
    //const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    const handleClick = (e) => e.target.textContent = "OUCH!";//console.log(e);
    //onDoubleClick
    return (<button onClick={(e) => handleClick(e)}>Click me</button>);
}

export default Button;