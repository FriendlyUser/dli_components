import React from 'react';

export type ShowmoreProps = {
  /**
   * Props to be passed to the Showmore component.
   * @params text: string - a node to be rendered in the special component.
   * @params truncateLength: number - the number of characters to show before truncating.
   */
  text: string;
  truncateLength?: number
};

function truncateString(str, num) {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + '...'
}

export function Showmore({text, truncateLength = 50}: ShowmoreProps) {

    const [showMore, setShowMore] = React.useState(false);

    if (showMore) {
        return(<div>
          <p>{text}</p>
          <button onClick={() => setShowMore(false)}>Show less</button> 
          </div>
          );
    }
    return (
        <div>
            <p>{truncateString(text, truncateLength)}</p>
            <button onClick={() => setShowMore(true)}>Show more</button>  
        </div>
    );
};
