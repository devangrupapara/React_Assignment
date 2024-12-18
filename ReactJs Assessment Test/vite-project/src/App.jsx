import React, { useState } from "react";
import "./App.css"; 

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.title}</h3>
          </div>
          
          <div
            className="accordion-body"
            style={{ display: activeIndex === index ? "block" : "none" }}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const accordionData = [
  { title: "Accordion Item 1", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe architecto, explicabo quia, necessitatibus voluptatum quam obcaecati reprehenderit accusantium sint dignissimos cum, delectus voluptate nesciunt consectetur officiis laudantium aut? Reprehenderit, ab. This is the content of item 1." },
  { title: "Accordion Item 2", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe architecto, explicabo quia, necessitatibus voluptatum quam obcaecati reprehenderit accusantium sint dignissimos cum, delectus voluptate nesciunt consectetur officiis laudantium aut? Reprehenderit, ab. This is the content of item 2." },
  { title: "Accordion Item 3", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe architecto, explicabo quia, necessitatibus voluptatum quam obcaecati reprehenderit accusantium sint dignissimos cum, delectus voluptate nesciunt consectetur officiis laudantium aut? Reprehenderit, ab. This is the content of item 3." },
];

const App = () => {
  return (
    <div className="app">
      <h1>React Accordion</h1>
      <Accordion data={accordionData} />
      
    </div>
  );
};

export default App;

