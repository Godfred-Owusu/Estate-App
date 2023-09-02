import React, { useState } from 'react'
import { 
Accordion,
AccordionItem,
AccordionItemButton,
AccordionItemHeading,
AccordionItemPanel,
AccordionItemState 
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'
const Value = () => {
  return (
    <section id='value' className='value-wrapper'>
      <div className="paddings innerWidth flexCenter value-container">
       {/* value left */}
       <div className="value-left">
        <div className="image-container">
          <img src="./value.png" alt="" />
         </div>
        </div>
        {/* value right */}
        <div className="flexColStart value-right">
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value We Give To You</span>
          <span className='secondaryText'>We always ready to help by providing the best service for you 
            <br />
            We believe a good place to live can make your life better.
          </span>

          <Accordion
          className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]}
          >
              {
                data.map((item,index)=>{
                  const [className, setClassName] = useState(null)
                  return(
                    <AccordionItem className={`accordionItems ${className}`} key={index} uuid={index}>
                      <AccordionItemHeading>
                       <AccordionItemButton className='accordionItemButton flexCenter'>
                        <AccordionItemState>
                          {({expanded})=> expanded ? setClassName('expanded') : setClassName('collapsed')}
                        </AccordionItemState>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className='primaryText'>{item.heading}</span>
                        <div className="flexCenter icon"><MdOutlineArrowDropDown size={20}/></div>
                       </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="secondaryText">{item.detail}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  )
                })
              }
          </Accordion>

        </div>
      </div>
    </section>
  )
}

export default Value