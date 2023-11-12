export interface BreadCrumbItem {
  label: string;
  href: string;
}
export interface BreadCrumb {
  [key: string]: BreadCrumbItem;
}
