import { ReactNode } from "react";
import { Box as MantineBox} from "@mantine/core";
import { BoxProps } from "@mantine/core/lib/Box/Box";

const Box = ({ children }: BoxProps): ReactNode => {
  return (
    <>
      <MantineBox>{children}</MantineBox>
    </>
  );
};

export default Box;
