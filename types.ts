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

export type OperatorCircleResponse = {
  err: null | string;
  message: string;
  data: {
    circle_code: string;
    operator_code: string;
    circle: {
      name: string;
    };
    operator: {
      name: string;
    };
  };
};
