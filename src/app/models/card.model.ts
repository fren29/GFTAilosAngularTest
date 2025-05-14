import { ActionBase } from "./action-base.model";

export interface Card {
  readonly title: TextWithValue;
  readonly infos?: CardInfo[];
  readonly actions?: CardAction[];
}

export interface TextWithValue {
  readonly label: string;
  readonly value: string;
}

export interface CardInfo extends TextWithValue {
  readonly icon?: string;
}

export interface CardAction extends ActionBase {
  readonly url?: string;
}
