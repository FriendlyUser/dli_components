import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

// header children react prop types
export interface CollapsibleProps {
  header?: JSX.Element;
  children: any;
}

export function Collapsible(props: CollapsibleProps) {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  function toggleCollapsed() {
    setCollapsed(prevState => !prevState);
  }

  const { header, children } = props;

  return (
    <div style={{
      width: "100%",
    }}>
      <div onClick={toggleCollapsed} style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}>
        {header}
        <div style={{
            display: "inlineBlock",
            width: "0",
            height: "0",
            marginLeft: "5px",
            verticalAlign: "middle",
            borderTop: "solid 5px black",
            borderRight: "solid 5px transparent",
            borderLeft: "solid 5px transparent",
            transform: `rotate(${collapsed ? '0' : '180'}deg)`,
            transition: 'transform 0.25s ease-in-out',
        }}
        />
      </div>
      {!collapsed && <div>{children}</div>}
    </div>
  );
}

