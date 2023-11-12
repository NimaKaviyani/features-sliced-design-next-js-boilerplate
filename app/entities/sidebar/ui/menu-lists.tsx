"use client";
import { data } from "../model";
import { ScrollArea } from "@mantine/core";
import MenuItems from "@shared/ui/menu-items";
import React, { ReactNode, useState } from "react";

/* todo: change with real data */

export default function MenuLists(): ReactNode {
  const [active, setActive] = useState(0);

  return (
    <ScrollArea>
      {data.map((item, index) => (
        <MenuItems {...item} active={active} setActive={setActive} index={index} key={index} />
      ))}
    </ScrollArea>
  );
}
