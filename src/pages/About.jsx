import React from 'react'
import { introText } from '../data/AboutText';
import { essayContent } from '../data/AboutText';
import { footnotes } from '../data/AboutText';
import { citations } from '../data/AboutText';

const About = () => {

  return (
    <div className='about-page'>
      {/* Introduction */}
      <div className="intro">
        <p>{introText}</p>
      </div>

      {/* Essay */}
      <div className="essay">
        <div className="essay-header">
          <h2>unable to contain myself: creation about object feeling (May 2024)</h2>
        </div>

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
            
          <hr />

          {/* End notes */}
          <ol className="essay-footnotes">
            {footnotes.map((ref, index) => (
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

      </div>

    </div>
  )
}

export default About