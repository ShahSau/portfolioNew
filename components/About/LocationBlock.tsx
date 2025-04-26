import { MapPin } from "lucide-react";
import { FC } from "react";
import Block from "./Block";

const LocationBlock: FC = () => (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-4">
      <MapPin className="text-3xl" />
      <p>ToDo: use map to show the location</p>
      <p className="text-center text-lg text-zinc-400">Helsinki, Finland</p>
    </Block>
  );

export default LocationBlock;