import { usePage } from "./logic";
import { Tab3Template } from "./template";

export default (): JSX.Element => {
  const logic = usePage();
  return <Tab3Template {...logic} />;
};
