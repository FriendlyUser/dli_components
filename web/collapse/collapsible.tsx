import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

// header children react prop types
export interface CollapsibleProps {
  header?: JSX.Element;
  children: React.children;
}

export function Collapsible(props: CollapsibleProps) {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  function toggleCollapsed() {
    setCollapsed(prevState => !prevState);
  }

  const { header, children } = props;

  return (
    <div>
      <div onClick={toggleCollapsed}>
        {header}
        <FontAwesomeIcon
          icon={collapsed ? faCaretDown : faCaretUp}
          style={{
            transform: `rotate(${collapsed ? '0' : '180'}deg)`,
            transition: 'transform 0.25s ease-in-out',
          }}
        />
      </div>
      {!collapsed && <div>{children}</div>}
    </div>
  );
}