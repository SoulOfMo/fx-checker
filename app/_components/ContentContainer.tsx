import Calculator from "./Calculator";
import DetailsContainer from "./DetailsContainer";

export default function ContentContainer() {
  return (
    <div className="mt-8 mx-4 lg:mx-35 laptop:mx-50.5">
      <Calculator />
      <DetailsContainer />
    </div>
  );
}
