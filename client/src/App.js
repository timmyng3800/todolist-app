import React, { useEffect, useState } from "react";
import Header from "./Component/Header";
import Card from "./Component/Card";
import ListItem from "./Component/ListItem";

const App = () => {
  // const userEmail = "quanganhtin2000@gmail.com";
  // const [tasks, setTasks] = useState(null);

  // const getdata = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
  //     const json = await response.json();
  //     console.log(json);
  //     setTasks(json);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getdata();
  // }, []);
  // console.log(tasks);
  return (
    <div className="app">
      <Header />
      <Card/>
      {/* {tasks?.map((item) => {
        return <Card key={item.id} tasks={item} getData={getdata} />;
      })} */}
    </div>
  );
};

export default App;
