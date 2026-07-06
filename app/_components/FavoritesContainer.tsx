import FavPair from "./FavPair";

export default function FavoritesContainer() {
  return (
    <div className="p-4  rounded-16 bg-neutral-700 border flex border-neutral-600 flex-col gap-4">
      <div className="w-full gap-2.5 flex sm:flex-row flex-col justify-between text-neutral-200 text-sm uppercase">
        <span className="text-normal text-neutral-50">Pinned Pairs</span>
        <span className="">10 favorites</span>
      </div>
      <div className="flex flex-col gap-3 ">
        <FavPair fromCode="USA" toCode="INR" rate={736.45} change={-0.22} />
        <FavPair fromCode="EUR" toCode="USD" rate={1.08} change={0.15} />
        <FavPair fromCode="GBP" toCode="JPY" rate={156.32} change={0.08} />
      </div>
    </div>
  );
}
