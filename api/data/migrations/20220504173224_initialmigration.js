/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('for_sales', table => {
      table.increments('for_sale_id')
      table.timestamp('for_sale_created_at').defaultTo(knex.fn.now())
      table.string('for_sale_image', 2048)
      table.string('for_sale_title').notNullable()
      table.string('for_sale_description', 2048).notNullable()
      table.string('for_sale_category', 2048).notNullable()
      table.string('for_sale_subcategory', 2048).notNullable()
      table.integer('for_sale_price').notNullable()
      table.string('for_sale_condition')
      table.string('for_sale_seller_type')
      table.string('for_sale_name').notNullable()
      table.string('for_sale_email').notNullable()
      table.varchar('for_sale_phone').notNullable()
      table.boolean('for_sale_accept_texts').defaultTo(true)
      table.integer('for_sale_zipcode').notNullable()
      table.string('for_sale_city').notNullable()
      table.string('for_sale_state').notNullable()
      table.boolean('for_sale_terms').defaultTo(false);
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('for_sales')
};
