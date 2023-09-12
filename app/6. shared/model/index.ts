import { SVGProps } from "react";
import { MantineTheme as MantineMantineTheme, CSSObject as MantineCSSObject  } from "@mantine/core";

export interface SVGFile extends SVGProps<SVGSVGElement> {
  src: string;
}

export interface MantineTheme extends MantineMantineTheme {
  
}
export interface CSSObject extends MantineCSSObject {
  
}