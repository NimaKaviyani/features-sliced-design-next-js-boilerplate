"use client";
import React, { ReactNode } from "react";
import { Grid } from "@mantine/core";
import AddTags from "@/features/single-sms/add-tags";
import LabelInput from "@/entities/single-sms/ui/label";
import Tags from "@entities/single-sms/ui/tags";
import TextArea from "@entities/single-sms/ui/textarea";

const SingleSmsWidget = (): ReactNode => {
  return (
    <form>
      <Grid>
        <Grid.Col xs={12} md={4} lg={3}>
          <LabelInput />
        </Grid.Col>
        <Grid.Col xs={12} md={4} lg={3}>
          <AddTags />
        </Grid.Col>
        <Tags />
        <Grid.Col xs={12}>
          <Grid>
            <Grid.Col xs={12} md={8} lg={6}>
              <TextArea />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default SingleSmsWidget;
