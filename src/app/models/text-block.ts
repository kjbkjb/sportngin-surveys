namespace SportNgin {
  export interface TextBlockInterface {
    id: number,
    subtitle: string,
    content: string,
    updated_on: string,
    created_on: string,
    display_size: string,
    alignment: string,
    url: string,
    protocol: string,
    has_url: boolean,
    action: string,
    image_id: number,
    subtitle_alignment: string,
    cutline: string
  }

  export class TextBlock implements TextBlockInterface {
    id: number;
    subtitle: string;
    content: string;
    updated_on: string;
    created_on: string;
    display_size: string;
    alignment: string;
    url: string;
    protocol: string;
    has_url: boolean;
    action: string;
    image_id: number;
    subtitle_alignment: string;
    cutline: string;
  }
}

