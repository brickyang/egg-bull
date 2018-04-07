import * as Bull from 'bull';

export { Queue, Job } from 'bull';

interface IBullConfig extends Bull.QueueOptions {
  name?: string;
}

declare module 'egg' {
  interface Application {
    bull: Bull.Queue;
  }

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
