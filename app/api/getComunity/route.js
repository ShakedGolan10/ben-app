const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  process.env.BASE_NAME
);

export const GET = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  try {
    const { id } = JSON.parse(req.body);
    if (!id) {
      res.status(400).send("Record ID is required");
      return;
    }

    // Assuming 'CommunityId' is the field that links to the community in the 'סיפורים' table
    const filterFormula = `FIND(AND({מאושר},FIND(${id}, {קבוצה}) > 0)`;

    base("סיפורים")
      .select({ filterByFormula: filterFormula })
      .all((err, records) => {
        if (err) {
          console.error("Error fetching data:", err);
          res.status(500).send("Error fetching data");
          return;
        }

        // Convert records to a more friendly format if needed
        const stories = records.map((record) => record.fields);
        console.log(records);
        res.send(stories);
      });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Internal Server Error");
  }
};

