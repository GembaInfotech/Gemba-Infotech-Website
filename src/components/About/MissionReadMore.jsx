import React, { useState } from 'react';

const ReadMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="w-[560px] rounded-xl overflow-hidden md:max-w-2xl">
      <div className="px-2 flex flex-wrap">
        <ol
          className={`list-decimal pl-5 ${
            isExpanded ? 'max-h-full' : 'max-h-1 overflow-hidden'
          } transition-all duration-300 ease-in-out`}
        >
          <li>Leveraging strong Domain Expertise.</li>
          <li>Focus on value-added services.</li>
          <li>Deploy state-of-the-art technologies.</li>
          <li>Groom Competency-based organization to foster Innovation and creativity.</li>
          <li>Effective client communication to breed Reliability and Trust.</li>
          <li>Optimize & improve Process & Quality initiatives.</li>
          <li>Provide right balance of business and technology to the client.</li>
          <li>Establishing and monitoring easy-to-quantify performance metrics.</li>
        </ol>
        <button
          className="mx-12 text-blue-500 hover:underline"
          onClick={toggleExpansion}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};
export default ReadMore;
