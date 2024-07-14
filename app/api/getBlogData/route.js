import { NextResponse } from "next/server";

const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
    process.env.BASE_NAME
);

export const GET = async (req, res) => {

    const getYoutubePreviewImg = (youtubeLink) => {
        const extractVideoId = (youtubeLink) => {
            const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
            const match = youtubeLink.match(regex);
            return match ? match[1] : null;
        };

        const videoId = extractVideoId(youtubeLink);
        const imageUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null
        return imageUrl
    }

    try {
        const fetchData = (tableName, cb) => {
            return new Promise((resolve, reject) => {
                base(tableName).select().all((err, records) => {
                    if (err) {
                        console.error("Error fetching data:", err);
                        reject(err);
                        return;
                    }
                    let data = records.map((record) => {
                        return {
                            id: record.fields["מזהה"],
                            image: (!record.fields["תמונות"]) ? cb(record.fields["קישור"]) : record.fields["תמונות"][0].url, // in case there isnt an img
                            contentTitle: record.fields["שם"],
                            text: record.fields["תוכן"],
                            ingredients: record.fields["מצרכים"], // This field is specific to recipes tables
                            location: record.fields["מיקום"], // This field is specific to trips & restaurants tables
                            link: record.fields["קישור"] // This field is specific to playlist table
                        };
                    });
                    data = { title: tableName, content: [...data] }
                    resolve(data);
                });
            });
        };

        const arrayData = await Promise.all([
            fetchData("טיולים"),
            fetchData("מתכונים"),
            fetchData("מסעדות"),
            fetchData("פלייליסט", getYoutubePreviewImg)
        ]);
        return new NextResponse(JSON.stringify(arrayData), { status: 200 })
    } catch (error) {
        console.error("Server error:", error);
        return new NextResponse(`Internal Server Error, ${error}`, { status: 500 })
    }
}