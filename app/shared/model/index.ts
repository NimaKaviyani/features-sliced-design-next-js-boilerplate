import {SVGProps} from "react";

export interface SVGFile extends SVGProps<SVGSVGElement> {
  src: string;
}