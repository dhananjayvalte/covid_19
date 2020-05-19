const rulesConfigInfra = require("rules-config/infra");
const IDI = require("openchs-idi");

module.exports = IDI.configure(
  {
    name: "COVID_demo",
    "chs-admin": "admin",
    "org-name": "covid",
    "org-admin": "admin@covid",
    secrets: "../secrets.json",
    files: {
      adminUsers: {
        // dev: ["users/admin-user.json"],
        staging: ["users/admin-user.json"]
      },
      forms: [
        "forms/Registration.json",
        "forms/COVID-19 Followup.json",
        "forms/Screening Details.json"
      ],
      formMappings: ["metadata/formMappings.json"],
      formDeletions: [],
      formAdditions: [],
      catchments: ["metadata/catchments.json"],
      checklistDetails: [
        
      ],
      concepts: [ "concepts.json"
              ],
      locations: ["metadata/locations.json"],
      programs: ["programs.json"],
      encounterTypes: ["metadata/encounterTypes.json"],
      operationalEncounterTypes: ["metadata/operationalEncounterTypes.json"],
      operationalPrograms: ["metadata/operationalPrograms.json"],
      subjectTypes: ["subjectTypes.json"],
      operationalSubjectTypes: ["metadata/operationalSubjectTypes.json"],
      users: {
        // dev: ["users/dev-users.json"],
        // staging: ["users/dev-users.json"]
      },
      rules: ["./rules.js"],
      organisationSql: [
        /* "create_organisation.sql"*/
      ],
      organisationConfig: ["organisationConfig.json"],
      translations: ["translations/en.json"]
    }
  },
  rulesConfigInfra
);
