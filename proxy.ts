import middleware from "./middleware";

export default middleware;

// Re-export the config so builds referencing proxy.ts find the matcher
export const config = (middleware as any).config;
