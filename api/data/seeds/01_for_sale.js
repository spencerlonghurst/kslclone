exports.seed = function (knex) {
  return knex('for_sales').truncate()
  .then(function () {
    return knex('for_sales').insert([
      {
        for_sale_title: 'Computer Monitors',
        for_sale_description: `Crust baked dough and you'll Domino's a classic Romano cheese. It's that you. It's a zesto our Classic Italian taste ther NEW created of pesty blend basil, parsley and Tossed from the newesty blend authe hot a classic It's andmaded dough and basil, parsley and authe distinctive from Domino's; therbs andmade just Pizza. The newesto is that you. It's Pizza. The pest is topping Pest from a classic Romano cheese. For you'll Domino's ther NEW created into Crust delicious crust is crust for hot and Tossed`,
        for_sale_category: 'Computers',
        for_sale_subcategory: 'Monitors',
        for_sale_price: 20,
        for_sale_name: 'Nathaniel Nicholas',
        for_sale_email: 't33@email.com',
        for_sale_phone: 3075555555,
        for_sale_zipcode: '82801',
        for_sale_city: 'Sheritan',
        for_sale_state: 'Wyoming'
      },
      {
        for_sale_title: 'Pizza Dough',
        for_sale_description: `Crust baked dough and you'll Domino's a classic Romano cheese. It's that you. It's a zesto our Classic Italian taste ther NEW created of pesty blend basil, parsley and Tossed from the newesty blend authe hot a classic It's andmaded dough and basil, parsley and authe distinctive from Domino's; therbs andmade just Pizza. The newesto is that you. It's Pizza. The pest is topping Pest from a classic Romano cheese. For you'll Domino's ther NEW created into Crust delicious crust is crust for hot and Tossed`,
        for_sale_category: 'General',
        for_sale_subcategory: 'Junk For Sale',
        for_sale_price: 40,
        for_sale_name: 'Johnny Test',
        for_sale_email: 't33@email.com',
        for_sale_phone: 3076666666,
        for_sale_zipcode: '88888',
        for_sale_city: 'Riverton',
        for_sale_state: 'Wyoming'
      },
    ])
  })
}