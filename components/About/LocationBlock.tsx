"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import { FC } from "react";
import Block from "./Block";

const MapComponent = dynamic(() => import("./MapComponent"), { ssr:false });
const LocationBlock: FC = () => (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-4">
      <MapComponent 
        center={[52.5200, 13.4050]} // Berlin coordinates
        zoom={12}
        markerPosition={[52.5200, 13.4050]} // Berlin coordinates
        markerTitle="Berlin"
      />
    </Block>
  );

export default LocationBlock;