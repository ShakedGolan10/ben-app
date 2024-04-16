import { NextResponse } from "next/server";

const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  process.env.BASE_NAME
);

export async function GET(req) {

  try {
    let stories = [];
    console.log('the startttttt! ====>', base)
    await base("סיפורים")
      .select({ view: "מאושרים" })
      .eachPage((records, fetchNextPage) => {
        console.log('the records! ====>', records)
        records.forEach((record) => {
          console.log('Step 1 complete! =====)', record)
          const story = {
            id: record.get("מזהה"),
            text: record.get("תיאור"),
            name: record.get("שם המספר"),
            date: record.get("תאריך סיפור"),
            headline: record.get("כותרת"),
            files: record.get("תמונות"),
          };
          stories.push(story);
        });
        console.log('Step 2 complete! =====)', stories)
        fetchNextPage();
      });
    return new NextResponse(JSON.stringify(stories), { status: 200 })

  } catch (error) {
    console.error("Error fetching data from Airtable:", error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
};

