/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tutorials').del()
  await knex('tutorials').insert([
    {
      tutorial_id: 1,
      build_name: 'Castle',
      build_creator: 'Alex',
      category: 'Architecture',
      instructions: 'Build a majestic castle with towers and walls.',
      views: 100,
      likes: 20,
      image_path: 'images/castle.jpeg',
      create_time: '2022-01-01 12:00:00',
      user_id: 3,
    },
    {
      tutorial_id: 2,
      build_name: 'Farm',
      build_creator: 'Steve',
      category: 'Nature',
      instructions: 'Create a functional farm with crops and animals.',
      views: 80,
      likes: 15,
      image_path: 'images/farm.png',
      create_time: '2022-01-02 14:30:00',
      user_id: 2,
    },
    {
      tutorial_id: 3,
      build_name: 'Underwater base',
      build_creator: 'Steve',
      category: 'Architecture',
      instructions: 'Build a small underwater base beneath the waves.',
      views: 150,
      likes: 30,
      image_path: 'images/underwater-base.jpg_large',
      create_time: '2022-01-04 10:15:00',
      user_id: 2,
    },
    {
      tutorial_id: 4,
      build_name: 'Redstone Chicken Farm',
      build_creator: 'Jerstin',
      category: 'Redstone',
      instructions: 'Learn to build a chicken farm with redstone contraptions.',
      views: 120,
      likes: 25,
      image_path: 'images/auto-chicken-farm.jpeg',
      create_time: '2022-01-03 16:45:00',
      user_id: 1,
    },
    {
      tutorial_id: 5,
      build_name: 'Treehouse',
      build_creator: 'Alex',
      category: 'Architecture',
      instructions: 'Construct a simple treehouse in the forest.',
      views: 90,
      likes: 18,
      image_path: 'images/treehouse.jpeg',
      create_time: '2022-01-05 09:00:00',
      user_id: 3,
    },
  ]);
};
