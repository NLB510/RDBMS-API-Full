
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex("students").insert([
        {
          name: "Nate",
          cohort_id: 1
        },
        {
          name: "Hank",
          cohort_id: 1
        },
        {
          name: "Bob",
          cohort_id: 2
        },
        {
          name: "Jake",
          cohort_id: 3
        },
        {
          name: "Nick",
          cohort_id: 5
        },
        {
          name: "Steph",
          cohort_id: 4
        },
        {
          name: "Frank",
          cohort_id: 2
        },
        {
          name: "Mike",
          cohort_id: 5
        }
      ]);
    });
};
