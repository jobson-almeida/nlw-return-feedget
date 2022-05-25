export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackUpdateData {
  id: string;
  type: string;
  comment: string;
  screenshot?: string;
}

export type FeedbackOutput = {
  id: string;
  type: string;
  comment: string;
  screenshot?: string | null;
  created_at: Date;
  updated_at: Date;
};

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
  findAll: () => Promise<Array<FeedbackOutput> | null>;
  findById: (id: string) => Promise<FeedbackOutput | null>;
  update: (data: FeedbackUpdateData) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
