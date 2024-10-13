import { type MouseEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Text, Button } from "../../ui";
export const Generator = () => {
  const [id, setId] = useState(uuidv4());
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setId(uuidv4());
  };

  return (
    <div>
      <Text>{id}</Text>
      <Button label="Refresh" onClick={handleClick}></Button>
    </div>
  );
};
