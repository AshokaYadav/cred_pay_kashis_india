// types.ts

export type Plan = {
  rs: number;
  validity: string;
  desc: string;
};

export type RData = {
  [key: string]: Plan[];
};

export type PlansResponse = {
  ERROR: string;
  STATUS: string;
  Operator: string;
  Circle: string;
  RDATA: RData;
};

export type plansRes = {
  err: null;
  message: string;
  data: PlansResponse;
};    

// types.ts में

export interface Operator {
  id: string;
  name: string;
  image_url: string;
}

export interface Circle {
  id: string;
  name: string;
}

export interface OperatorCircleData {
  circle: Circle;
  circle_code: string;
  circle_id: string;
  createdAt: string;
  id: string;
  operator: Operator;
  operator_code: string;
  operator_id: string;
  provider_api: any;
  provider_api_id: string;
  updatedAt: string;    
}   

export interface OperatorCircleResponse {
  err: any;
  message: string;
  data: OperatorCircleData;
}

