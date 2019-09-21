import debug from "debug";

const root = debug("thaipost");

export const CORE_LOGGER = root.extend("core");

export const API_LOGGER = root.extend("api");

export const MODEL_LOGGER = root.extend("model");
