// // import api from "./api";
// import { USER_ID } from "../config";
// import api from "../lib/axios";

import api from "../lib/axios";

// // yeh reusable function hai
// export const fetchWallet = async () => {
//   const res = await api.post(
//     "/wallet/getByUserId",
//     new URLSearchParams({ userId: USER_ID }).toString(),
//     {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     }
//   );
//   return res.data; // sirf data return karega
// };



// src/services/walletService.ts
// import api from "./api";

export const fetchWallet = async (userId: string) => {
  const res = await api.post(
    "/wallet/getByUserId",
    new URLSearchParams({ userId }).toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return res.data;
};