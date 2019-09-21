export { ThaiPost } from "./src/models/thaipost";
export { Exception, ExceptionType } from "./src/models/error";
export * from "./src/models/interface";

// (async () => {
//   const thaipost = new ThaiPost(
//     "A9CQI;D~QOCMX9H#U&FjH$NUTkM5BxV3VaNWB/V_A#DDKiD8YGWwZZNOPOSORdW%XhZrZIB+ZBFcO/Z/D_IhSvQuBlQ$TyK^OHWc"
//   );

//   await thaipost.setup();

//   const response = await thaipost.getItem({ barcode: ["EY145587896TH", "RC338848854TH"] });

//   console.log(response.status);
//   console.log(response.response.track_count);
//   console.log(response.response.items);
// })();
