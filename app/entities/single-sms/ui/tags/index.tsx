import React, { ReactNode } from "react";
import { useTag } from "@shared/state-management/single-sms-store";
import { Badge, Grid } from "@mantine/core";

const Tags = (): ReactNode => {
  const tags = useTag(state => state.tags);
  return (
    <Grid.Col span={12} hidden={tags.length === 0}>
      {tags.map((items: string, key: number) => (
        <Badge p={12} ta="center" className="mx-1" key={key}>
          #{items}
        </Badge>
      ))}
    </Grid.Col>
  );
};

export default Tags;
