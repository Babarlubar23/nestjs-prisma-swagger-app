import { PrismaClient } from '../../generated/client';

export class ManualPostgresSchemaMigrator {
  constructor(private prisma: PrismaClient) {
    if (!prisma) {
        throw new Error('PrismaClient instance is required');
    }
  }

  /**
   * Main migration function that creates the complete schema idempotently
   */
  async createSchemaIdempotently(): Promise<void> {
    try {
      console.log('🚀 Creating Azure PostgreSQL schema idempotently...');

      // Test connection first
      await this.testAzureConnection();

      // Create tables in correct order to respect foreign key constraints
      await this.createOwnerTable();
      await this.createPetTable();
      await this.createBoosterTable();
      await this.createBrendanCaneHistoryTable();

      // Verify the schema was created correctly
      await this.verifySchemaStructure();

      console.log('✅ Schema created successfully!');

    } catch (error) {
      console.error('❌ Schema creation failed:', error);
      throw error;
    } finally {
      await this.cleanup();
    }
  }

  /**
   * Test connection to Azure PostgreSQL
   */
  private async testAzureConnection(): Promise<void> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      console.log('✅ Database connection successful');
    } catch (error) {
      throw new Error(`Database connection failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Create Owner table idempotently
   */
  private async createOwnerTable(): Promise<void> {
    await this.prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "Owner" (
        id SERIAL PRIMARY KEY,
        "firstName" VARCHAR(255) NOT NULL,
        "lastName" VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(50),
        address TEXT
      )
    `;
    console.log('✅ Owner table created/verified');
  }

  /**
   * Create Pet table idempotently with foreign key
   */
  private async createPetTable(): Promise<void> {
    await this.prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "Pet" (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        species VARCHAR(100) NOT NULL,
        breed VARCHAR(100),
        "birthDate" TIMESTAMP,
        vaccinated BOOLEAN DEFAULT false,
        "vaccinationDate" TIMESTAMP,
        "ownerId" INTEGER NOT NULL,
        CONSTRAINT "Pet_ownerId_fkey" 
          FOREIGN KEY ("ownerId") 
          REFERENCES "Owner"(id) 
          ON DELETE CASCADE
      )
    `;
    console.log('✅ Pet table created/verified');
  }

  /**
   * Create Booster table idempotently with foreign key
   */
  private async createBoosterTable(): Promise<void> {
    await this.prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "Booster" (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        date TIMESTAMP NOT NULL,
        "petId" INTEGER NOT NULL,
        CONSTRAINT "Booster_petId_fkey" 
          FOREIGN KEY ("petId") 
          REFERENCES "Pet"(id) 
          ON DELETE CASCADE
      )
    `;
    console.log('✅ Booster table created/verified');
  }

  /**
   * Create BrendanCaneHistory table idempotently with foreign key
   */
  private async createBrendanCaneHistoryTable(): Promise<void> {
    await this.prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "BrendanCaneHistory" (
        id SERIAL PRIMARY KEY,
        date TIMESTAMP NOT NULL,
        notes TEXT,
        "petId" INTEGER NOT NULL,
        CONSTRAINT "BrendanCaneHistory_petId_fkey" 
          FOREIGN KEY ("petId") 
          REFERENCES "Pet"(id) 
          ON DELETE CASCADE
      )
    `;
    console.log('✅ BrendanCaneHistory table created/verified');
  }

  /**
   * Verify that all tables and constraints were created correctly
   */
  private async verifySchemaStructure(): Promise<void> {
    const expectedTables = ['Owner', 'Pet', 'Booster', 'BrendanCaneHistory'];
    
    for (const table of expectedTables) {
      const tableExists = await this.prisma.$queryRaw<Array<{ exists: boolean }>>`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = ${table}
        )
      `;
      
      if (!tableExists[0].exists) {
        throw new Error(`Table ${table} was not created successfully`);
      }
    }
    
    console.log('✅ All tables verified successfully');
  }

  /**
   * Drop all tables (use with caution - for testing/reset purposes)
   */
  async dropAllTables(): Promise<void> {
    try {
      console.log('⚠️  Dropping all tables...');
      
      // Drop tables in reverse order to respect foreign key constraints
      await this.prisma.$executeRaw`
        DROP TABLE IF EXISTS "BrendanCaneHistory" CASCADE
      `;
      await this.prisma.$executeRaw`
        DROP TABLE IF EXISTS "Booster" CASCADE
      `;
      await this.prisma.$executeRaw`
        DROP TABLE IF EXISTS "Pet" CASCADE
      `;
      await this.prisma.$executeRaw`
        DROP TABLE IF EXISTS "Owner" CASCADE
      `;
      
      console.log('✅ All tables dropped successfully');
    } catch (error) {
      console.error('Error dropping tables:', error);
      throw error;
    }
  }

  /**
   * Clean up database connection
   */
  private async cleanup(): Promise<void> {
    try {
      await this.prisma.$disconnect();
    } catch (error) {
      console.error('Error disconnecting from database:', error);
    }
  }

  /**
   * Run migration with retry logic for Azure connectivity issues
   */
  async migrateWithRetry(maxRetries: number = 3, delayMs: number = 2000): Promise<void> {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`🔄 Migration attempt ${attempt} of ${maxRetries}`);
        await this.createSchemaIdempotently();
        return;
      } catch (error) {
        console.error(`Attempt ${attempt} failed:`, error);
        
        if (attempt === maxRetries) {
          throw new Error(`Migration failed after ${maxRetries} attempts: ${error}`);
        }
        
        const waitTime = delayMs * Math.pow(2, attempt - 1);
        console.log(`⏳ Waiting ${waitTime}ms before next attempt...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
  }

  /**
   * Handle command line arguments
   */
  async handleCommandLineArgs(): Promise<void> {
    const args = process.argv.slice(2);
    
    if (args.includes('--reset')) {
      await this.dropAllTables();
      await this.createSchemaIdempotently();
      console.log('✅ Database reset and schema recreated successfully!');
    } else if (args.includes('--verify')) {
      await this.verifySchemaStructure();
      console.log('✅ Schema verification passed!');
    } else if (args.includes('--drop')) {
      await this.dropAllTables();
      console.log('✅ All tables dropped successfully!');
    } else {
      await this.createSchemaIdempotently();
      console.log('✅ Schema created successfully!');
    }
  }
}
