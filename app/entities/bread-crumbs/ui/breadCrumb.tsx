"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Anchor, Breadcrumbs } from "@mantine/core";
import { page, BreadCrumbItem } from "@entities/bread-crumbs/model";
const BreadCrumb = (): React.ReactNode => {
  const pathName = usePathname().replace("/", "");
  const getPageName = (path: string): BreadCrumbItem => {
    return page[path] ?? { href: "", label: "" };
  };
  const paths = pathName.split("/");

  return (
    <Breadcrumbs separator=">" mb={10}>
      {paths.map((path, index) => (
        <Anchor href={getPageName(path).href} key={index}>
          {getPageName(path).label}
        </Anchor>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCrumb;
