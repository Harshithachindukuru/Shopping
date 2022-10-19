export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('movie', 10);
  server.create('movie',{
    title:"movie1",
    year:2020,
    rating:4.0
  });
  server.create('movie',{
    title:"movie2",
    year:2021,
    rating:4.0
  });
  server.create('product',{
    title: "T-Shirt",
    brand: "Puma",
    occasion: "Casual",
    cost:"Rs.500",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/532763/02/fv/fnd/IND/fmt/png"
  });
  server.create('product',{
    title: "Kurta",
    brand: "Vishudh",
    occasion: "Festive",
    cost:"Rs.1000",
    image: "https://i.pinimg.com/736x/cd/f5/be/cdf5be9a87113115dddba01ab956ef6a.jpg"
  });
  server.create('product',{
    title: "Shirt",
    brand: "Raymond",
    occasion: "Formal",
    cost:"Rs.1500",
    image: "https://m.media-amazon.com/images/I/81i7eTHH5DL._UY550_.jpg"
  });
}
