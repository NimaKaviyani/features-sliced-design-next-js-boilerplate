"use client";
import { ReactNode } from "react";
import { Group as MantineGroup } from "@mantine/core";
import { GroupProps } from "@mantine/core/lib/Group/Group";

const Group = ({ children }: GroupProps): ReactNode => {
  return (
    <>
      <MantineGroup>{children}</MantineGroup>
    </>
  );
};

export default Group;

