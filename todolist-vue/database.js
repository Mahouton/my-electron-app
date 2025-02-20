const Database = require('better-sqlite3')

// Chemin vers la base de données SQLite
const db = new Database('database.sqlite')

// Créer les tables
db.exec(`
    CREATE TABLE IF NOT EXISTS companies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE NOT NULL,
        address TEXT,
        description TEXT,
        acronym VARCHAR(20) UNIQUE,
        email TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS annexes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE NOT NULL,
        companie_id INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (companie_id) REFERENCES companies(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS agents (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lastname TEXT NOT NULL,
        firstname TEXT NOT NULL,
        registration_number TEXT UNIQUE NOT NULL,
        companie_id INTEGER NOT NULL,
        annexe_id INTEGER,
        hiring_date DATE NOT NULL,
        salary DECIMAL(15, 2) NOT NULL,
        status TEXT CHECK(status IN ('active', 'inactive')) DEFAULT 'active',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (companie_id) REFERENCES companies(id) ON DELETE CASCADE,
        FOREIGN KEY (annexe_id) REFERENCES annexes(id) ON DELETE SET NULL
    );

    CREATE TABLE IF NOT EXISTS invoices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        number TEXT UNIQUE NOT NULL,
        date_emission DATE NOT NULL,
        month_concern TEXT NOT NULL,
        companie_id INTEGER NOT NULL,
        annexe_id INTEGER,
        number_agents INTEGER NOT NULL,
        cost_service_excl_tax DECIMAL(15, 2) NOT NULL,
        commission_amount DECIMAL(15, 2) NOT NULL,
        aib DECIMAL(15, 2) NOT NULL,
        tva DECIMAL(15, 2) NOT NULL,
        cost_service_incl_tax DECIMAL(15, 2) NOT NULL,
        salaries_to_pay DECIMAL(15, 2) NOT NULL,
        total_amount_to_transfer DECIMAL(15, 2) NOT NULL,
        net_amount_to_transfer DECIMAL(15, 2) NOT NULL,
        status TEXT CHECK(status IN('draft', 'validated', 'paid')) NOT NULL DEFAULT 'draft',
        observations TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (companie_id) REFERENCES companies(id) ON DELETE CASCADE,
        FOREIGN KEY (annexe_id) REFERENCES annexes(id) ON DELETE SET NULL
    );
`)

export default db
