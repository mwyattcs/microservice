import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.get('/cases/:_state', asyncHandler(async (req, res) => {
    const { _state } = req.params;
    const response = await fetch(`https://data.cdc.gov/resource/pwn4-m3yp.json?state=${_state}`);
    const data = await response.json();
    const sorted_data = data.sort((a, b) => {
        return new Date(b.date_updated) - new Date(a.date_updated);
    });
    const cases_sixteen_weeks = sorted_data.slice(0, 16);

    const cases = cases_sixteen_weeks.map((week) => {
        let new_obj = {};
        new_obj['date_updated'] = week.date_updated;
        new_obj['new_cases'] = week.new_cases;
        return new_obj;
    });
    res.json(cases);
}));

app.get('/deaths/:_state', asyncHandler(async (req, res) => {
    const { _state } = req.params;
    const response = await fetch(`https://data.cdc.gov/resource/pwn4-m3yp.json?state=${_state}`);
    const data = await response.json();

    const sorted_data = data.sort((a, b) => {
        return new Date(b.date_updated) - new Date(a.date_updated);
    });
    const deaths_sixteen_weeks = sorted_data.slice(0, 16);

    const deaths = deaths_sixteen_weeks.map((week) => {
        let new_obj = {};
        new_obj['date_updated'] = week.date_updated;
        new_obj['new_deaths'] = week.new_deaths;
        return new_obj;
    });

    res.json(deaths);
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});