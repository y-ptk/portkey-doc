const Overview = require("./overview.json");
const quickstart = require("./quickstart.json");
const SDKs = require("./SDKs.json");
const APIReference = require("./APIReference.json");
const Environmental = require("./Environmental.json");

module.exports = {
  label: "Docs Sidebar",
  items: [
    Overview,
    quickstart,
    SDKs,
    APIReference,
    Environmental,
  ],
};
