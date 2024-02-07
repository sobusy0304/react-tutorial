import List from "./List";
function App() {

  const fruits = [];
  //[{id: 1, name: "apple", calories: 95}, 
  //                  {id: 2, name: "banana", calories: 100}, 
  //                  {id: 3, name: "grape", calories: 85}, 
  //                  {id: 4, name: "pineapple", calories: 65}, 
  //                  {id: 5, name: "orange", calories: 70}];

  const vegetables = [{id: 1, name: "celery", calories: "apple"}, 
                      {id: 2, name: "potatoes", calories: 75}, 
                      {id: 3, name: "ginger", calories: 130}, 
                      {id: 4, name: "onion", calories: 180}, 
                      {id: 5, name: "pickles", calories: 120}];
  
  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
    
  );
}

export default App
