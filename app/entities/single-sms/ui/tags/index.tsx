import React, { ReactNode } from "react";
import { useTags } from "@shared/state-management/tags";
import { Badge } from "@mantine/core";

const Index = (): ReactNode => {
  const tags = useTags(state => state.tags);
  return (
    <>
      {tags.length > 0
        ? tags.map((items: string, key: number) => (
            <Badge className="mx-1 text-center" key={key}>
              #{items}
            </Badge>
          ))
        : null}
    </>
  );
};

export default Index;
