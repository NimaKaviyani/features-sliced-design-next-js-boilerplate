import React, { ReactNode } from "react";
import { Badge, Grid } from "@mantine/core";
import { IconX } from '@tabler/icons-react';
import { useTag } from "@/shared/state-management/single-sms";
const Tags = (): ReactNode => {
  const tags = useTag(state => state.tags);
  const removeTag = useTag(state => state.removeTag);

  return (
    <Grid.Col span={12} hidden={tags.length === 0}>
      {tags.map((tag: string, index: number) => (
        <Badge onClick={()=>removeTag(tag)} py={12}   className="mx-1 !cursor-pointer" key={index}>
          <div className="flex text-center  items-center justify-between">
            <IconX  size={14}/>
            <p className="mt-1 mr-1">#{tag}</p>
          </div>
        </Badge>
      ))}
    </Grid.Col>
  );
};

export default Tags;
