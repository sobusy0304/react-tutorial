import PropTypes from 'prop-types';

function List(props){
    //const fruits = [{id: 1, name: "apple", calories: 95}, 
    //                {id: 2, name: "banana", calories: 100}, 
    //                {id: 3, name: "grape", calories: 85}, 
    //                {id: 4, name: "pineapple", calories: 65}, 
    //                {id: 5, name: "orange", calories: 70}];
    
    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    //fruits.sort((a,b) => a.calories - b.calories); //NUMERIC
    //fruits.sort((a,b) => b.calories - a.calories); //REVERSE NUMERIC

    //const lowCalFruits = fruits.filter(fruits => fruits.calories < 100);
    const category = props.category;
    const itemList = props.items;
    const listFruit = itemList.map(item => 
        <li key={item.id}> 
            {item.name}: &nbsp; <b>{item.calories}</b>
        </li>
        )

    //const listFruit = lowCalFruits.map(lowCalFruit => 
    //    <li key={lowCalFruit.id}> 
    //        {lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b>
    //    </li>
    //
    //)

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-item">{listFruit}</ol>
        </>
        
    );
}

List.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({id : PropTypes.number, name : PropTypes.string, calories : PropTypes.number})), 
}

List.defaultProps = {
    category : "Category",
    items : [],
}

export default List