export interface ActionBase {
  readonly label: string;
  readonly action?: () => void;
}
