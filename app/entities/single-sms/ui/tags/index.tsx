import React, { ReactNode } from "react";
import { useSingleSMS } from "@shared/state-management/tags";
import { Badge, Grid } from "@mantine/core";

const Tags = (): ReactNode => {
  const tags = useSingleSMS(state => state.singleSMS.tags);
  console.log(tags)
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
