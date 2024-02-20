import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

export function Custom_accordion(p: {
  children?: any;
  eventKey?: any;
  callback?: any;
}) {
  // Access AccordionContext to manage active accordion state
  const { activeEventKey } = useContext(AccordionContext);

  // Handle accordion button functionality:
  // - Toggles the accordion section open/closed when clicked
  // - Calls an optional callback function if provided
  const decoratedOnClick = useAccordionButton(
    p.eventKey,
    () => p.callback && p.callback(p.eventKey)
  );

  // Determine if the current accordion item is expanded:
  const isCurrentEventKey = activeEventKey === p.eventKey;

  return (
    <div onClick={decoratedOnClick} className="main-accordion-header">
      {p.children} {/* Display the content of the accordion header */}
      <div>
        {isCurrentEventKey && <ChevronDown />}
        {/* Show down chevron if expanded */}
        {!isCurrentEventKey && <ChevronUp />}
        {/* Show up chevron if collapsed */}
      </div>
    </div>
  );
}

function Main_accordion(p: { text: any; children: React.ReactNode }) {
  return (
    <>
      <Accordion className="main-accordion">
        {/* Main accordion container */}
        <Card.Header>
          {/* Accordion header */}
          <Custom_accordion eventKey="0">{p.text}</Custom_accordion>
          {/* Use custom accordion for header */}
        </Card.Header>
        {/* Accordion content */}
        <Accordion.Collapse eventKey="0">
          {/* Display the content of the accordion */}
          <Card.Body>{p.children}</Card.Body>
        </Accordion.Collapse>
      </Accordion>
    </>
  );
}

export default Main_accordion;
