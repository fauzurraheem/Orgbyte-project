export type ApiParams = {
  limit?: number;
  sort?: 'asc' | 'desc';
  category?: string;
  [key: string]: string | number | undefined;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CustomObject = Record<string, any>;
