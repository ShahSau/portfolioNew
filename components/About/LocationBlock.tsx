import { MapPin } from "lucide-react";
import Block from "./Block";

const LocationBlock = () => (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-4">
      <MapPin className="text-3xl" />
      <p className="text-center text-lg text-zinc-400">Helsinki, Finland</p>
    </Block>
  );

export default LocationBlock;