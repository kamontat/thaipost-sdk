export type StatusType = "all" | "EMA";

export type LanguageType = "TH" | "EN" | "CN";

export interface BarcodeResponse {
  barcode: string;
  status: StatusType;
  status_description: string;
  /**
   * format as dd/mm/yyyy hh:mm:ss+07:00
   */
  status_date: string;
  location: string;
  postcode: string;
  delivery_status: number;
  delivery_description: string;
  delivery_datetime: string;
  receiver_name: string;
  signature: string;
}

export interface GetItemResponse {
  status: boolean;
  message: string;
  response: {
    items: {
      [barcode: string]: BarcodeResponse[];
    };
    track_count: {
      track_date: string;
      count_number: number;
      track_count_limit: number;
    };
  };
}
