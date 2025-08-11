import "../../css/MegaMenu.css";
import Accordion from "react-bootstrap/Accordion";

export default function MegaMenu() {
  const accordions = [
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  ];

  return (
    <Accordion className="accordionMenuDiv">
      {accordions.map((accordion, index) => (
        <Accordion.Item key={index} eventKey={index}>
          <Accordion.Header> <img src="/src/assets/images/image.png" alt="" className="accordionMenuIcon m-1"/> {accordion.title}</Accordion.Header>
          <ul style={{
                padding:'0',
              }}>
            {accordion.content.map((surAccordion, subIndex) => (
              <Accordion.Body key={subIndex} className="border-y" style={{
                borderBottom:'1px solid #ccc',
                padding:'10px 15px'
              }}>{surAccordion}</Accordion.Body>
            ))}
          </ul>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
