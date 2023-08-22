import "./App.css";
// import Form from "./Components/Global/Form";
// import RefForm from "./Components/Global/RefForm";
import Home from "./Pages/Home";
// import Heading from "./Components/Shared/Heading";
// import Logo from "./Components/Shared/Logo";
import RouterRoot from "./Routes/RouterRoot"

// import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      {/* <Logo />
      <h1 className="App-header">My React App</h1>
      {/* <Form /> */}
      {/* <Counter count={0} color="white"/> */}
      {/* <RefForm />

      <Heading heading="Learning React JS" />
      <Heading subHeading="Learning  JavaScripts" color='red' backgroundColor="lightblue"/>
      <Heading styleHeading="Style me" color="white" backgroundColor="blue"/> */}
  
    <Home />
        <RouterRoot />
    </div>
  );
}

export default App;
