export const priceList = {
  fish: [
    {
      name: "Catfish",
      image: "/catfish.jpg",
      varieties: [
        { type: "Fingerlings", price: "₦120 / piece" },
        { type: "Juvenile", price: "₦250 / piece" },
        { type: "Table Size (Live)", price: "₦3,500 / kg" },
        { type: "Smoked", price: "₦4,500 / kg" },
      ],
    },
    {
      name: "Tilapia",
      image: "/tilapia.jpg",
      varieties: [
        { type: "Live", price: "₦3,000 / kg" },
        { type: "Frozen", price: "₦3,800 / kg" },
      ],
    },
  ],

  poultry: [
    {
      name: "Broilers",
      image: "/brioler.jpg",
      varieties: [
        { type: "Live", price: "₦6,500 / bird" },
        { type: "Dressed", price: "₦7,500 / bird" },
      ],
    },
    {
      name: "Layers",
      image: "/layer.jpg",
      varieties: [
        { type: "Point of Lay", price: "₦8,000 / bird" },
        { type: "Spent Layers", price: "₦4,000 / bird" },
      ],
    },
  ],

  eggs: [
    {
      type: "Table Eggs (Crate)",
      image: "/table eggs.jpg",
      price: "₦1,400 / crate",
    },
    {
      type: "Fertile Eggs",
      image: "/fertegg.jpg",
      price: "₦1,800 / crate",
    },
  ],

  feed: [
    {
      type: "Fish Feed (Floating)",
      image: "/judofeed.jpeg",
      price: "₦10,500 / bag",
    },
    {
      type: "Poultry Feed",
      image: "/poufeed.jpg",
      price: "₦9,200 / bag",
    },
  ],
};
