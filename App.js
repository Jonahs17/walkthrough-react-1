import './App.css';

function Person(props){
  return (
    <p>The name of the Person is {props.name} and the age of the person is {props.age} </p>
  );
};

function Button(props){
  return(
    <button onClick={props.onClick}> 
      {props.text}
    </button>
  )
};

function Header(props){
  return(
    <h1>{props.title}</h1>
  )
};
function List(props) {
  const listItems = [];
  for (let i = 0; i < props.items.length; i++) {
    listItems.push(<li key={i}>{props.items[i]}</li>);  
  }
  
  return <ul>{listItems}</ul>;
}

// Usage



function App() {
  return (
    <>
    <Person name="Ravi" age="22" />
    <Button text="Submit" onClick={()=>console.log("BUTTON CLICKED")} />
    <Header title="HELLO WORLD"/>
    <List items={['apple', 'banana', 'orange']} />
    </>
    
  );
}

export default App;
