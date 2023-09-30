"use client";
import React, { ReactNode } from "react";
import { Grid, Button, Text, Group } from "@mantine/core";
import AddTags from "@/features/single-sms/add-tags";
import Tags from "@entities/single-sms/ui/tags";
import TextArea from "@entities/single-sms/ui/textarea";
import LabelInput from "@/entities/single-sms/ui/label";
import Reject from "@/features/single-sms/reject";
import Send from "@/features/single-sms/send";

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
        <Grid.Col className="flex justify-end items-end" xs={12} md={4} lg={6}>
          <Group>
            <Reject/>
            <Send/>
          </Group>
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default SingleSmsWidget;
