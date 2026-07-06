import CompareContainer from "./CompareContainer";
import FavoritesContainer from "./FavoritesContainer";
import History from "./History";
import Logs from "./Logs";
import TabsContainer from "./TabsContainer";

export default function DetailsContainer() {
  return (
    <div className="flex gap-5 mt-8 flex-col">
      <TabsContainer />
      <History />
      {/* <CompareContainer />
      <FavoritesContainer />
      <Logs /> */}
    </div>
  );
}
