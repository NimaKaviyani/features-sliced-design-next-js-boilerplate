"use client";
import React, { ReactNode } from "react";
import { Grid } from "@mantine/core";
import AddTags from "@/features/single-sms/add-tags";
import LabelInput from "@/entities/single-sms/ui/label";

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
        </Grid.Col>
      </form>
    </Grid>
  );
};

export default SingleSmsWidget;
