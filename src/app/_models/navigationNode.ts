export interface NavigationNode {
  id: number;
  url?: string;
  title?: string;
  tooltip?: string;
  hidden?: boolean;
  children?: NavigationNode[];
}
