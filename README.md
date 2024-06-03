# google-sheets-compare-update

I need to create Google app scrip, that compares two Gooogle Sheets. One have data for production and another one have fresh data that updates daily. 

Google Sheets have following structure:
InsertedOn	Product	Family Name	LicenseType	Platform	PlatformDisplay	FamilyKey	TotalSoFar

1. I need to compare two Google Sheets in following way:
if rows matches on:  Product	and LicenseType, then compare TotalSoFar, if it is different then update Google Sheet for production with new values for TotalSoFar and also update InsertedOn.

2. After we update all data, we should order by TotalSoFar desc




## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/google-sheets-compare-update.git
cd google-sheets-compare-update
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
