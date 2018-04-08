import { Queue, QueueOptions } from 'bull';

interface IBullConfig extends QueueOptions {
  name?: string;
}

declare namespace Bull {
  interface Queues {
    get: (key: string) => Queue;
  }
}

declare module 'egg' {
  interface Application {
    bull: Queue | Bull.Queues;
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

export = Bull;
