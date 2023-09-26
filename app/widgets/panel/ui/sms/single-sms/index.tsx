"use client";
import React, { ReactNode } from "react";
import { Badge, Grid } from "@mantine/core";
import AddTags from "@/features/single-sms/add-tags";
import LabelInput from "@/entities/single-sms/ui/label";
import Tags from "@entities/single-sms/ui/tags";

const SingleSmsWidget = (): ReactNode => {
  return (
    <Grid>
      <form className="flex flex-row">
        <Grid.Col span={12}>
          <Grid>
            <Grid.Col span={6}>
              <LabelInput />
            </Grid.Col>
            <Grid.Col span={6}>
              <AddTags />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col className="mt-3" span={12}>
              <Tags />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </form>
    </Grid>
  );
};

export default SingleSmsWidget;
