import { table } from "./airtable";

export default async function getProjects(req, res) {
  try {
    const records = await table.select({}).firstPage();

    const projects = records
      .map((record) => ({
        title: record.fields.Title,
        linkRepo: record.fields.Repo,
        img: record.fields.Image?.[0].url,
        techList: record.fields.Tech,
        description: record.fields.Description,
        id: record.id,
        linkSite: record.fields.Site,
      }))
      .filter((project) => project.title);

    // res.status(200).send(JSON.stringify(projects));
    return JSON.parse(JSON.stringify(projects));
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}
