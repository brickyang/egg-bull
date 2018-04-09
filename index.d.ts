import { QueueOptions } from 'bull';

interface IBullConfig extends QueueOptions {
  name?: string;
}

declare module 'egg' {
  interface EggAppConfig {
    bull: {
      client?: IBullConfig;
      clients?: {
        [key: string]: IBullConfig;
      };
      default?: IBullConfig;
    };
  }
}
