const Airtable = require("airtable");

// Authenticate
Airtable.configure({
  apiKey: process.env.airtableApiKey,
});

// Initialize a base
const base = Airtable.base(process.env.airtableBaseId);

// Reference a table
const table = base(process.env.airtableTableName);

export { table, base };
