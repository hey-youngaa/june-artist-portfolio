import React, {useState} from 'react'
import { introText } from '../data/AboutText';
import { essayContent } from '../data/AboutText';
import { references } from '../data/AboutText';
import { citations } from '../data/AboutText';
import { IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io";

const About = () => {
  const [isEssayOpen, setIsEssayOpen] = useState(false);
  const toggleEssay = () => setIsEssayOpen(!isEssayOpen);

  return (
    <div>
      {/* Introduction */}
      <div className="intro">
        <p>{introText}</p>
      </div>

      {/* Essay */}
      <div className="essay">
        <div className="essay-header" onClick={toggleEssay}>
          <h2>unable to contain myself: creation about object feeling (May 2024)</h2>
          {isEssayOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>

        {isEssayOpen && (
          <div className="essay-content">
            {essayContent.map((item, index) => {
              if (item.type === "paragraph"){
                const parts = [];
                let lastIndex = 0;

                item.references?.forEach(({index, ref}, i) => {
                  parts.push(item.text.slice(lastIndex, index));
                  parts.push(<sup key={i}>{ref}</sup>);
                  lastIndex = index;
                });

                parts.push(item.text.slice(lastIndex));
                return <p key={index}>{parts}</p>;
              }
              if (item.type === "blockquote"){
                return <blockquote key={index}>{item.text}</blockquote>;
              }
              return null;
            })}

            {/* End notes */}
            <ol className="essay-references">
              {references.map((ref, index) => (
                <li key={index}>{ref}</li>
              ))}
            </ol>

            {/* Bibliography */}
            <ul className="essay-citations">
              {citations.map((cite, index) => (
                <li key={index}>{cite}</li>
              ))}
            </ul>
          </div>
        )}

      </div>

    </div>
  )
}

export default About