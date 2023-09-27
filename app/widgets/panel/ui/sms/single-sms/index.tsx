"use client";
import React, { ReactNode } from "react";
import { Grid, Group } from "@mantine/core";
import AddTags from "@/features/single-sms/add-tags";
import LabelInput from "@/entities/single-sms/ui/label";
import Tags from "@entities/single-sms/ui/tags";
import TextArea from "@entities/single-sms/ui/textarea";

const SingleSmsWidget = (): ReactNode => {
  return (
    <form>
      <Grid className="flex flex-col">
        <Grid.Col span={12}>
          <Group>
            <LabelInput />
            <AddTags />
          </Group>
        </Grid.Col>
        <Grid.Col span={12}>
          <Tags />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextArea />
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default SingleSmsWidget;
