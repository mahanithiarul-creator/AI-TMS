import { Injectable, Logger } from '@nestjs/common';
import { SearchDocument } from '../domain/search-document.model';

@Injectable()
export class SearchService {
  private readonly logger = new Logger(SearchService.name);
  
  // In-memory mock of an Elasticsearch index
  private index: SearchDocument[] = [];

  /**
   * Consumes domain events from Kafka to index data for full-text search.
   * Isolates search load from transactional databases.
   */
  public indexDocument(doc: SearchDocument): void {
    // Upsert logic for mock index
    const existing = this.index.findIndex(d => d.id === doc.id);
    if (existing >= 0) {
      this.index[existing] = doc;
    } else {
      this.index.push(doc);
    }
    this.logger.log(`Indexed ${doc.type} document: ${doc.id}`);
  }

  /**
   * Provides global search across all domains.
   */
  public search(query: string): SearchDocument[] {
    this.logger.log(`Executing global search for: "${query}"`);
    const lowerQuery = query.toLowerCase();
    
    return this.index.filter(doc => 
      doc.title.toLowerCase().includes(lowerQuery) ||
      doc.body.toLowerCase().includes(lowerQuery) ||
      doc.tags.some(t => t.toLowerCase().includes(lowerQuery))
    );
  }
}
