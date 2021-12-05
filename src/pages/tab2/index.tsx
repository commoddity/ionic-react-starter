import { usePage } from "./logic";
import { Tab2Template } from "./template";

export default (): JSX.Element => {
  const logic = usePage();
  return <Tab2Template {...logic} />;
};
