import { ReactNode } from "react";
import { Container as MantineContainer } from "@mantine/core";
import { ContainerProps } from "@mantine/core/lib/Container/Container";

const Container = ({ children }: ContainerProps): ReactNode => {
  return (
    <>
      <MantineContainer>{children}</MantineContainer>
    </>
  );
};

export default Container;
