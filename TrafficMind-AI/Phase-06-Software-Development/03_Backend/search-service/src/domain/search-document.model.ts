export interface SearchDocument {
  id: string; // The original entity ID (e.g., INC-123)
  type: 'INCIDENT' | 'ASSET' | 'WORKFLOW';
  title: string;
  body: string;
  tags: string[];
  timestamp: Date;
}
