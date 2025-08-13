import { Link } from "react-router-dom";
import "../../css/MegaMenu.css";
import Accordion from "react-bootstrap/Accordion";

export default function MegaMenu({ categories }) {
  // const accordions = [
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  // ];

  const convertToString = (catName) => {
    const newCatName = catName.split(" ").join("-");
    return newCatName.toLowerCase();
  };

  return (
    <Accordion className="accordionMenuDiv">
      {categories.map((category, index) => (
        <Accordion.Item key={index} eventKey={index}>
          <Link
            to={`/${convertToString(category.cat_name)}`}
            className="product-name-on-card"
          >
            <Accordion.Header>
              {" "}
              <img
                src="/src/assets/images/image.png"
                alt=""
                className="accordionMenuIcon m-1"
              />{" "}
              {category.cat_name}
            </Accordion.Header>
             </Link>
            <ul
              style={{
                padding: "0",
              }}
            >
              {category.sub_cat_name.map((subCategories, subIndex) => (
                <Link
                  to={`/${convertToString(category.cat_name)}/${subCategories.sub_cat_name}`}
                  className="product-name-on-card"
                >
                  <Accordion.Body
                    key={subIndex}
                    className="border-y"
                    style={{
                      borderBottom: "1px solid #ccc",
                      padding: "10px 15px",
                    }}
                  >
                    {subCategories.sub_cat_name}
                  </Accordion.Body>
                </Link>
              ))}
            </ul>
         
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
