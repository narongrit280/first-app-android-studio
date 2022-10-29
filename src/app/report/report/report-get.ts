import { Value } from "./value-get";
export interface RootObject {
    IsSuccess: boolean;
    StatusCode: number;
    Message: string;
    StatusDateTime: string;
    Value: Value[];
  }
  
 