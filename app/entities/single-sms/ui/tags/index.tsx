import React, { ReactNode } from "react";
import { useTags } from "@shared/state-management/tags";
import { Badge, Grid } from "@mantine/core";

const Tags = (): ReactNode => {
  const tags = useTags(state => state.tags);
  return (
    <Grid.Col span={12} hidden={tags.length === 0}>
      {tags.map((items: string, key: number) => (
        <Badge className="mx-1 text-center" key={key}>
          #{items}
        </Badge>
      ))}
    </Grid.Col>
  );
};

export default Tags;
