declare global {
  interface Window {
    __gameCanvasBridge?: {
      start: () => void;
      pause: () => void;
      reset: () => void;
      getState: () => { running: boolean; paused: boolean; time: { now: number; delta: number; elapsed: number } };
    };
  }
}

export {};
