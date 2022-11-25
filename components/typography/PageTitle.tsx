import React from "react";

interface Props {
  text: string;
}

const PageTitle = (props: Props) => {
  return <h2>{props.text}</h2>
};

export default PageTitle;
