import Converter from '../features/converter/Converter';
import DetailsContainer from './DetailsContainer';

export default function ContentContainer() {
  return (
    <div className="laptop:mx-50.5 mx-4 mt-8 lg:mx-35">
      <Converter />
      <DetailsContainer />
    </div>
  );
}
