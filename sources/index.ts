import { Plugin } from "@yarnpkg/core";
import { InfoEnhancedCommand } from "./commands/InfoEnhancedCommand";

const plugin: Plugin = {
  commands: [InfoEnhancedCommand],
};

export default plugin;
