import React from "react";
import { CircularProgress } from "@nextui-org/react";

function Loader() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <CircularProgress
      aria-label="Loading..."
      size="lg"
      value={value}
      color="warning"
      showValueLabel={true}
    />
  );
}

export default Loader;
