import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";
import shadcnConfig from "@repo/tailwind-config/shadcn-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig, shadcnConfig],
};

export default config;
