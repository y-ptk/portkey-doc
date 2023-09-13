import React from "react";

export function HighlightBlock(props) {
  const { children } = props;

  return <div className="highlight-block-container">{children}</div>;
}
