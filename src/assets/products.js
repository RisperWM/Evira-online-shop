const products = [
  {
    id: 1,
    name: "Alexa Speakers",
    prodGroup: "Speakers",
    imageUrl: "./src/assets/products/alexa-speaker.jpeg",
    description: "lorem ipsum fjkdf kdjks jskd sieoe",
    status: "latest",
    price: "$45",
  },
  {
    id: 2,
    name: "Lenovo Headphones",
    prodGroup: "Headphones",
    imageUrl: "src/assets/products/1886335a-1ad6-4f94-a7d6-8f8a5ece5d18.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$55",
  },
  {
    id: 3,
    name: " Thin Headphones",
    prodGroup: "Headphones",
    imageUrl: "src/assets/products/AëdleHeadphones.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$455",
  },
  {
    id: 4,
    name: " AIHOOR Wireless Earbuds",
    prodGroup: "Earbuds",
    imageUrl: "src/assets/products/AIHOORWirelessEarbuds.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$145",
  },
  {
    id: 5,
    name: " Amazon Speaker",
    prodGroup: "Speaker",
    imageUrl: "src/assets/products/AmazonTapSpeaker.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$67",
  },
  {
    id: 6,
    name: " Anker PowerCore",
    prodGroup: "PowerBank",
    imageUrl: "src/assets/products/AnkerPowerCore20100.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$120",
  },
  {
    id: 7,
    name: "Anker Soundcore Wireless Headphones",
    prodGroup: "Headphones",
    imageUrl: "src/assets/products/AnkerSoundcoreLife.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$490",
  },
  {
    id: 8,
    name: "Beats By Dre Headphones",
    prodGroup: "Headphones",
    imageUrl: "src/assets/products/BeatsByDreHeadphones.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$32",
  },
  {
    id: 9,
    name: " Beats Studio3 Wireless Headphones",
    prodGroup: "Headphones",
    imageUrl: "src/assets/products/BeatsStudio3Wireless.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$65",
  },
  {
    id: 10,
    name: "JBL Portable Bluetooth Speaker",
    prodGroup: "Speaker",
    imageUrl: "src/assets/products/BestBuy_JBL.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$67",
  },
  {
    id: 11,
    name: " TLogitech Trackball Mouse",
    prodGroup: "Mouse",
    imageUrl: "src/assets/products/BestBuy_Logitech.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$109",
  },
  {
    id: 12,
    name: "Bose Earbuds",
    prodGroup: "Earbuds",
    imageUrl: "src/assets/products/Bose.jpeg",
    description: "Description of product 2.",
    status: "latest",
  },
  {
    id: 13,
    name: "Buddyphones Cosmos",
    prodGroup: "Headphones",
    imageUrl: "src/assets/products/Buddyphones.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$290",
  },
  {
    id: 14,
    name: "Lena AI",
    prodGroup: "Camera",
    imageUrl:
      "src/assets/products/camera-photographic-equipment-lens-technology-generative-ai.jpg",
    description: "Description of product 2.",
    status: "latest",
    price: "$167",
  },
  {
    id: 15,
    name: "Canon Eos R50 Aps-C Mirrorless",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/CanonCanonEosR50.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$25",
  },
  {
    id: 16,
    name: "Canon EOS R6",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/CanonEOSR6.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$189",
  },
  {
    id: 17,
    name: "Canon EOS R7 Digital Camera",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/CanonEOSR7.jpg",
    description: "Description of product 2.",
    status: "latest",
    price: "$132",
  },

  {
    id: 18,
    name: "Canon EOS R8",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/CanonEOSR8.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$90",
  },
  {
    id: 19,
    name: "Canon EOS R10 W",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/CanonEOSR10.jpeg",
    description: "Description of product 2.",
    status: "latest",
    price: "$100",
  },
  {
    id: 20,
    name: "Canon EOS R10",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/CanonEOSR10-systeemcamera.jpg",
    description: "Description of product 2.",
    status: "latest",
    price: "$160",
  },
  {
    id: 21,
    name: "Canon EOS R100",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/CanonEOSR100.jpg",
    description: "Description of product 2.",
    status: "latest",
    price: "$245",
  },
  {
    id: 22,
    name: "Game Controller",
    prodGroup: "Game-Controller",
    imageUrl: "src/assets/products/Controlecom.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$84",
  },
  {
    id: 23,
    name: "Canon EOS Rebel T7i DSLR",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/CanonEOSRebel.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$991",
  },
  {
    id: 24,
    name: "Xbox Game Controller",
    prodGroup: "Game-Controller",
    imageUrl: "src/assets/products/Controlesem.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$445",
  },
  {
    id: 25,
    name: "Cool Headphones",
    prodGroup: "Headphones",
    imageUrl: "src/assets/products/coolearphones.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$145",
  },
  {
    id: 26,
    name: "DJI Osmo Pocket Camera",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/DJIOsmoPocket.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$76",
  },
  {
    id: 27,
    name: "Osmo Pocket Camera",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/DJIOsmoPocket3.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$45",
  },
  {
    id: 28,
    name: "DJI Ronin-S Camera",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/DJIRonin-S.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$78",
  },

  {
    id: 29,
    name: "Dreamcontroller Custom Xbox Elite Controller",
    prodGroup: "Game-Controller",
    imageUrl: "src/assets/products/DreamcontrollerCustom.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$444",
  },
  {
    id: 30,
    name: "DSLR Camera",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/dslrcamera.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$767",
  },
  {
    id: 31,
    name: "Fitbit Adds Caller Watch",
    prodGroup: "Smart-watch",
    imageUrl: "src/assets/products/FitbitAdds.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$343",
  },

  {
    id: 32,
    name: "Forget Apple Watch Series 6",
    prodGroup: "Smart-watch",
    imageUrl: "src/assets/products/ForgetAppleWatch.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$453",
  },
  {
    id: 33,
    name: "GameSir G3w Wired PC Controller",
    prodGroup: "Game-Controller",
    imageUrl: "src/assets/products/GameSirG3w.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$766",
  },
  {
    id: 34,
    name: "Gray studio condenser microphone",
    prodGroup: "Microphone",
    imageUrl: "src/assets/products/Graystudio.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$345",
  },
  {
    id: 35,
    name: "Siletto Life Speaker",
    prodGroup: "Speaker",
    imageUrl: "src/assets/products/HolidayWish.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$456",
  },

  {
    id: 36,
    name: "Beats by dre",
    prodGroup: "Headphones",
    imageUrl: "src/assets/products/HowToFix.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$643",
  },
  {
    id: 37,
    name: "Canon EOS Rebel T6",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/HowtoTake.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$700",
  },
  {
    id: 38,
    name: "Speaker EOS R10 W",
    prodGroup: "Speaker",
    imageUrl: "src/assets/products/Inquinamento.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$890",
  },
  {
    id: 39,
    name: "RIPTIDZ Bluetooth® Earbuds",
    prodGroup: "Earbuds",
    imageUrl: "src/assets/products/JVC®.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$45",
  },
  {
    id: 40,
    name: "Samsung NX1 Mirrorless Camera",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/LeakedPhotos.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$2100",
  },

  {
    id: 41,
    name: "Silicone Watch Band",
    prodGroup: "Smart-watch",
    imageUrl: "src/assets/products/LEDDisplay.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$4532",
  },
  {
    id: 42,
    name: "Dualshock PS4 Controller",
    prodGroup: "Game-controller",
    imageUrl: "src/assets/products/MightySkins.jpeg",
    description: "Description of product 2.",
    status: "best-seller",
    price: "$435",
  },

  {
    id: 43,
    name: "Smartwatch Waterproof Activity",
    prodGroup: "Smart-watch",
    imageUrl: "src/assets/products/moreFit.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$657",
  },
  {
    id: 44,
    name: "New COWIN SE7 Headphone",
    prodGroup: "Headphones",
    imageUrl: "src/assets/products/src/assets/products/NewCOWIN.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$890",
  },
  {
    id: 45,
    name: "Panasonic LUMIX",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/PanasonicLUMIX.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$555",
  },
  {
    id: 46,
    name: "S4 manette officielle",
    prodGroup: "Game-Controller",
    imageUrl: "src/assets/products/PS4manette.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$405",
  },
  {
    id: 47,
    name: "PC and PS3 controller",
    prodGroup: "Game-Controller",
    imageUrl: "src/assets/products/PCandPS3.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$785",
  },
  {
    id: 48,
    name: "Plantronics SUPRA PLUS",
    prodGroup: "Headphones",
    imageUrl: "src/assets/products/PlantronicsSUPRA.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$679",
  },
  {
    id: 49,
    name: "PIONEER Bluetooth and High-Resolution",
    prodGroup: "Headphones",
    imageUrl: "src/assets/products/PIONEERBluetooth.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$120",
  },
  {
    id: 50,
    name: "PTZOptics 2_12MP FHD USB",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/PTZOptics.jpg",
    description: "Description of product 2.",
    status: "featured",
  },
  {
    id: 51,
    name: "rendering-smart-home",
    prodGroup: "Speaker",
    imageUrl: "src/assets/products/rendering.jpg",
    description: "Description of product 2.",
    status: "featured",
    price: "$310",
  },
  {
    id: 52,
    name: "Shop Smartwatches",
    prodGroup: "Smart-watch",
    imageUrl: "src/assets/products/ShopSmartwatches.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$56",
  },
  {
    id: 53,
    name: "Yanko Design Smartwatches",
    prodGroup: "Smart-watch",
    imageUrl: "src/assets/products/ShouldtheFlick.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$45",
  },
  {
    id: 54,
    name: "Shure MV5 Digital Condenser",
    prodGroup: "Microphone",
    imageUrl: "src/assets/products/ShureMV5.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$678",
  },
  {
    id: 55,
    name: "Diaphragm Condenser Microphone",
    prodGroup: "Microphone",
    imageUrl: "src/assets/products/ShureSM27.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$895",
  },
  {
    id: 56,
    name: "Sony WF-1000XM4 Earbuds",
    prodGroup: "Earbuds",
    imageUrl: "src/assets/products/SonyWF.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$450",
  },
  {
    id: 57,
    name: "Sony ZV-1F Vlogging Camera",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/SonyZV.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$415",
  },
  {
    id: 58,
    name: "Sports  Smartwatches",
    prodGroup: "Smart-watch",
    imageUrl: "src/assets/products/SportsWatches.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$645",
  },
  {
    id: 59,
    name: "Techlicious 2015",
    prodGroup: "Headphoness",
    imageUrl: "src/assets/products/Techlicious2015.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$45",
  },
  {
    id: 60,
    name: "Canon EOS-RP Camera",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/This.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$90",
  },
  {
    id: 61,
    name: "TOZO NC2 Hybrid Earbuds",
    prodGroup: "Earbuds",
    imageUrl: "src/assets/products/TOZONC2.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$74",
  },

  {
    id: 62,
    name: "Buds Pro Bluetooth Earbuds",
    prodGroup: "Earbuds",
    imageUrl: "src/assets/products/Urbanx.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$75",
  },

  {
    id: 63,
    name: "Black VC-V-1013B",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/Valcom.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$145",
  },

  {
    id: 64,
    name: "Vlog & Compact Cameras",
    prodGroup: "Camera",
    imageUrl: "src/assets/products/Vlog.jpeg",
    description: "Description of product 2.",
    status: "featured",
    price: "$85",
  },
];

export default products;
