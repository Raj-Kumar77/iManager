import React, { useState } from "react";
import "./Value.css";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import data from "../..//utils/accordion";
import { assets } from "../../assets/assets";

const Value = () => {
    const [className,setClassName] = useState(null)
  return (
    <section className="v-wrapper" id="value">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side  */}
        <div className="v-left">
          <div className="image-container">
            <img src={assets.value} alt="" />
          </div>
        </div>

        {/* right side  */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we give to you</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We beleive a good tool to manage your tasks can boost your productivity.
          </span>

          <Accordion
            className="accordian"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem
                className={`accordianItem ${className}`}
                key={i}
                uuid={i}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordianItemButton">
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded
                          ? setClassName("collapsed")
                          : setClassName("expanded")
                      }
                    </AccordionItemState>
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
