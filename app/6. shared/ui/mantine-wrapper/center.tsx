import { ReactNode } from "react";
import { Center as MantineCenter } from "@mantine/core";
import { CenterProps } from "@mantine/core/lib/Center/Center";

const Center = ({ children }: CenterProps): ReactNode => {
  return (
    <>
      <MantineCenter>{children}</MantineCenter>
    </>
  );
};

export default Center;
