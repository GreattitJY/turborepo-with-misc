import type { Config } from "tailwindcss";
import shadcnConfig from "@repo/tailwind-config/shadcn-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  presets: [shadcnConfig],
};

export default config;
