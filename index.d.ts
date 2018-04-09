import { Queue, QueueOptions } from 'bull';

export {
  RateLimiter,
  QueueOptions,
  AdvancedSettings,
  DoneCallback,
  JobId,
  Job,
  JobStatus,
  BackoffOptions,
  RepeatOptions,
  JobOptions,
  JobCounts,
  JobInformation,
  Queue,
  EventCallback,
  ErrorEventCallback,
  JobPromise,
  ActiveEventCallback,
  StalledEventCallback,
  ProgressEventCallback,
  CompletedEventCallback,
  FailedEventCallback,
  CleanedEventCallback,
} from 'bull';

interface IBullConfig extends QueueOptions {
  name?: string;
}

export interface Queues {
  get: (key: string) => Queue;
}

declare module 'egg' {
  interface Application {
    bull: Queue | Queues;
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
