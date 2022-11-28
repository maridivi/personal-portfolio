// const Airtable = require("airtable");
// const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
//   process.env.AIRTABLE_BASE_ID
// );

import { table } from "../../utils/airtable";

// const table = base(process.env.AIRTABLE_TABLE_NAME);

export default async function getProjects(req, res) {
  try {
    const records = await table.select({}).firstPage();

    const projects = records
      .map((record) => ({
        title: record.fields.Title,

        img: record.fields.Image?.[0].url,

        description: record.fields.Description,
        id: record.id,
      }))
      .filter((project) => project.title);

    res.status(200).json(projects);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
