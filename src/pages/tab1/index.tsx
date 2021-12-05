import { usePage } from "./logic";
import { Tab1Template } from "./template";

export default (): JSX.Element => {
  const logic = usePage();
  return <Tab1Template {...logic} />;
};
