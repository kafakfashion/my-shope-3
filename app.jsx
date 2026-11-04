import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  ShoppingCart, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  Plus, 
  Trash2, 
  Phone, 
  User, 
  MapPin, 
  Package, 
  X, 
  Check, 
  Store, 
  Bell, 
  Key, 
  Info,
  MessageCircle,
  AlertCircle,
  Zap,
  ShoppingBag as MyBag
} from 'lucide-react';

// Sample Product Catalog
const INITIAL_PRODUCTS = [
  {
    id: 'p10',
    name: 'Gator Amphibious RC Car for Kids, 4x4 Waterproof Land & Water Remote Control Car, All-Terrain Stunt Vehicle, 360° Spin, 2.4GHz, Type-C Rechargeable, LED Lights',
    category: 'Toys & RC Cars',
    price: 2999,
    originalPrice: 3499,
    discount: '29% off',
    deliveryFee: 0,
    rating: 4.4,
    ratingsCount: 320,
    reviewsCount: 85,
    size: 'Free Size',
    colors: [
      {
        name: 'Marsh Black',
        image: 'https://m.media-amazon.com/images/I/71B0BVid8+L._SX679_.jpg',
        gallery: [
          'https://m.media-amazon.com/images/I/71B0BVid8+L._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81W+BlhMD-L._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81jdRGqMHaL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81PgYWsiLuL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81bg-vSxaWL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81mnFlNSRbL._SX679_.jpg'
        ]
      },
      {
        name: 'Hammer Orange',
        image: 'https://m.media-amazon.com/images/I/71UTDYOrx5L._SX679_.jpg',
        gallery: [
          'https://m.media-amazon.com/images/I/71UTDYOrx5L._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81TcL8-LrtL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81S0zE8ytlL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81XhvVIJbML._SX679_.jpg',
          'https://m.media-amazon.com/images/I/817-MXDfb7L._SX679_.jpg'
        ]
      },
      {
        name: 'Hammer Green',
        image: 'https://m.media-amazon.com/images/I/71uWAlu-RUL._SX679_.jpg',
        gallery: [
          'https://m.media-amazon.com/images/I/71uWAlu-RUL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81oXn9YRj4L._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81iBKpOl6-L._SX679_.jpg',
          'https://m.media-amazon.com/images/I/813SdtRQDBL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81lwye4osHL._SX679_.jpg'
        ]
      },
      {
        name: 'Mash Green',
        image: 'https://m.media-amazon.com/images/I/71HjKjeDqmL._SX679_.jpg',
        gallery: [
          'https://m.media-amazon.com/images/I/71HjKjeDqmL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81wNTxgrr1L._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81iBKpOl6-L._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81lwye4osHL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81mnFlNSRbL._SX679_.jpg'
        ]
      },
      {
        name: 'Mash Orange',
        image: 'https://m.media-amazon.com/images/I/71QJeLoXVSL._SX679_.jpg',
        gallery: [
          'https://m.media-amazon.com/images/I/71QJeLoXVSL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81zPpD97ijL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81GSS2SmdXL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81emL5JzRBL._SX679_.jpg',
          'https://m.media-amazon.com/images/I/81L9Okx-cHL._SX679_.jpg'
        ]
      }
    ],
    description: 'All-Terrain Amphibious 4x4 Waterproof Land & Water Remote Control Car. Capable of driving on water, mud, sand, and snow. Features 360° spins, 2.4GHz anti-interference controller, Type-C rechargeable battery, and bright LED lights.',
    image: 'https://m.media-amazon.com/images/I/71B0BVid8+L._SX679_.jpg',
    gallery: [
      'https://m.media-amazon.com/images/I/71B0BVid8+L._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81W+BlhMD-L._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81jdRGqMHaL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81PgYWsiLuL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81bg-vSxaWL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81mnFlNSRbL._SX679_.jpg'
    ],
    highlights: {
      driveType: '4x4 All-Terrain',
      waterproof: 'Yes (Land & Water)',
      frequency: '2.4GHz',
      charging: 'Type-C Rechargeable',
      netQuantity: '1'
    },
    additionalDetails: {
      brand: 'Gator RC',
      genericName: 'Amphibious Stunt Remote Control Car',
      includedComponents: '1 x Amphibious RC Car, 1 x Remote Control, 1 x Rechargeable Battery, 1 x Type-C Charging Cable, 1 x User Manual',
      countryOfOrigin: 'India',
      safetyInfo: 'Product may be regulated by BIS Quality Control Order. Visit https://www.bis.gov.in/know-your-standard/ for more information.'
    }
  },
  {
    id: 'p9',
    name: 'SUPER TOY 1:24 RC Drift Car High Speed Racing 4x4 Remote Control Car 25KMH for Boys 4WD Rechargeable Extra Drifting Tires Birthday Gifts',
    category: 'Toys & RC Cars',
    price: 1999,
    originalPrice: 2999,
    discount: '33% off',
    deliveryFee: 0,
    rating: 3.6,
    ratingsCount: 500,
    reviewsCount: 100,
    size: 'Free Size',
    description: '1:24 High Speed 4WD Racing & Drifting RC Car reaching speeds up to 25 KM/H. Includes rechargeable battery, extra interchangeable drift tires, and high-traction rubber tires for ultimate control.',
    image: 'https://m.media-amazon.com/images/I/61EQBqsTgzL._SX679_.jpg',
    gallery: [
      'https://m.media-amazon.com/images/I/61EQBqsTgzL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/71ylPfdIT9L._SX679_.jpg',
      'https://m.media-amazon.com/images/I/61GOW1CtepL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/61V6ODfG7tL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/71ZPxo3XKmL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/61OPcc3GP3L._SX679_.jpg'
    ],
    highlights: {
      speed: '25 KM/H',
      scale: '1:24',
      driveType: '4WD',
      batteryAvailable: 'Yes',
      recommendedAge: '6+ Years',
      netQuantity: '1'
    },
    additionalDetails: {
      brand: 'SUPER TOY',
      genericName: 'Remote Control Drift Car',
      includedComponents: '1 x RC Drift Car, 1 x Remote Control, 1 x Rechargeable Battery, 1 x USB Cable, 4 x Extra Drift Tires',
      countryOfOrigin: 'India',
      safetyInfo: 'Product may be regulated by BIS Quality Control Order. Visit https://www.bis.gov.in/know-your-standard/ for more information.'
    }
  },
  {
    id: 'p2',
    name: 'Remote Control Sports Car Toy for Kids | Rechargeable RC Car with LED Lights, Music & Smoke Effect | Orange',
    category: 'Toys & RC Cars',
    price: 814,
    deliveryFee: 0,
    rating: 2.5,
    ratingsCount: 4,
    reviewsCount: 1,
    size: 'Free Size',
    description: 'High-speed rechargeable RC Sports Car featuring bright LED headlights, engine sound effects, and cool rear exhaust smoke spray effects.',
    image: 'https://images.meesho.com/images/products/1123067628/m76qz_512.avif?width=360',
    highlights: {
      batteryAvailable: 'Yes',
      recommendedAge: '10+ Years',
      batteryRequired: 'Yes',
      netQuantity: '1'
    },
    additionalDetails: {
      dimensions: '22 × 10 × 6 cm',
      genericName: 'Remote Control Toys',
      includedComponents: '1 x RC Car, 1 x Remote Control, 1 x Rechargeable Battery, 1 x USB Cable',
      countryOfOrigin: 'India',
      safetyInfo: 'Product may be regulated by BIS Quality Control Order. Visit https://www.bis.gov.in/know-your-standard/ for more information.'
    }
  },
  {
    id: 'p3',
    name: 'Remote Control Sports Racing Car with Rechargeable Battery, Extra Wheels, Traffic Cones and USB Charging Cable (Blue & White Colour)',
    category: 'Toys & RC Cars',
    price: 2299,
    deliveryFee: 0,
    rating: 4.5,
    ratingsCount: 18,
    reviewsCount: 5,
    size: 'Free Size',
    description: 'Pro drifting & racing RC Car setup complete with additional drift tires, traffic cones for track setup, and high-speed rechargeable motor drive.',
    image: 'https://images.meesho.com/images/products/1126465817/lngvr_512.avif?width=360',
    highlights: {
      batteryAvailable: 'Yes',
      recommendedAge: 'Above 4-6 Years',
      batteryRequired: 'Yes',
      netQuantity: '1'
    },
    additionalDetails: {
      dimensions: '25 x 12 x 7 cm',
      cmlNumber: 'na',
      genericName: 'Remote Control Toys',
      includedComponents: '1 x Remote Control Sports Racing Car, 1 x Remote Controller, 1 x Rechargeable Battery, 1 x USB Charging Cable, 1 x Screwdriver, 4 x Extra Wheels, 4 x Traffic Cones',
      countryOfOrigin: 'India',
      safetyInfo: 'Product may be regulated by BIS Quality Control Order. Visit https://www.bis.gov.in/know-your-standard/ for more information; check IS mark on item/ upon delivery.'
    }
  },
  {
    id: 'p4',
    name: 'Remote Control RC Helicopter Toy For Kids With Sensor',
    category: 'Toys & RC Cars',
    price: 699,
    deliveryFee: 0,
    rating: 4.1,
    ratingsCount: 12,
    reviewsCount: 3,
    size: 'Free Size',
    description: 'Indoor hand motion sensor RC Helicopter. Features height locking sensor flight and lightweight safe blades for safe indoor playing.',
    image: 'https://images.meesho.com/images/products/1128527617/0fkkt_512.avif?width=360',
    highlights: {
      batteryAvailable: 'No',
      recommendedAge: 'Above 4-6 Years',
      batteryRequired: 'Yes',
      netQuantity: '1',
      includedComponents: 'One Charging Cable'
    },
    additionalDetails: {
      dimensions: '17×3.5×10.5 cm',
      cmlNumber: 'IGI-0015',
      genericName: 'Remote Control Toys',
      includedComponents: 'One Charging Cable',
      batteryRequired: 'Yes',
      gender: 'Boys',
      countryOfOrigin: 'India',
      safetyInfo: 'Product may be regulated by BIS Quality Control Order. Visit https://www.bis.gov.in/know-your-standard/ for more information; check IS mark on item/ upon delivery'
    }
  },
  {
    id: 'p5',
    name: 'RC Racing Sports Car Pack of 1 | Remote Control Toy with Steering',
    category: 'Toys & RC Cars',
    price: 319,
    deliveryFee: 366,
    rating: 3.8,
    ratingsCount: 6,
    reviewsCount: 1,
    size: 'Free Size',
    description: 'Compact RC Racing Sports Car with steering remote control. Designed for early age kids with durable body and simple steering controls.',
    image: 'https://images.meesho.com/images/products/1123910228/zhqig_512.avif?width=360',
    highlights: {
      batteryAvailable: 'No',
      recommendedAge: '2-4 Years',
      batteryRequired: 'Yes',
      netQuantity: '1'
    },
    additionalDetails: {
      gender: 'Boys',
      dimensions: '30 × 14 × 8 cm',
      cmlNumber: '123',
      genericName: 'Remote Control car',
      includedComponents: 'Remote Control Racing Car with',
      countryOfOrigin: 'India',
      safetyInfo: 'Product may be regulated by BIS Quality Control Order. Visit https://www.bis.gov.in/know-your-standard/ for more information; check IS mark on item/ upon delivery.'
    }
  },
  {
    id: 'p6',
    name: 'Remote Control Car Rechargeable Rc Car Toys for Kids 1:24 High Speed Racing Remote Car for Kids',
    category: 'Toys & RC Cars',
    price: 848,
    deliveryFee: 0,
    rating: 4.2,
    ratingsCount: 8,
    reviewsCount: 2,
    size: 'Free Size',
    description: '1:24 High Speed Racing RC Car for kids with rechargeable battery system, easy steering controls, and high-performance racing tires.',
    image: 'https://images.meesho.com/images/products/729920067/hshsl_512.avif?width=512',
    highlights: {
      batteryAvailable: 'Yes',
      recommendedAge: 'Above 4-6 Years',
      batteryRequired: 'Yes',
      netQuantity: '1'
    },
    additionalDetails: {
      gender: 'Boys',
      dimensions: '10x10x4 cm',
      genericName: 'Remote Control car',
      includedComponents: 'CONTROLER AND CAR TOYS',
      countryOfOrigin: 'India',
      safetyInfo: 'Product may be regulated by BIS Quality Control Order. Visit https://www.bis.gov.in/know-your-standard/ for more information; check IS mark on item/ upon delivery.'
    }
  },
  {
    id: 'p1',
    name: 'DOCTOR HEALTH SUPER SOFT Men’s EVA Dual Strap Slippers for Daily Use | Lightweight Open Toe Footwear with Anti-Skid Sole',
    category: 'Footwear & Slippers',
    price: 599,
    deliveryFee: 0,
    rating: 4.3,
    ratingsCount: 24,
    reviewsCount: 8,
    size: 'IND-7',
    availableSizes: ['IND-6', 'IND-7', 'IND-8', 'IND-9', 'IND-10'],
    sizeChart: {
      'IND-6': 'Length: 25.4 cm, Width: 9.6 cm',
      'IND-7': 'Length: 26.1 cm, Width: 9.8 cm',
      'IND-8': 'Length: 26.8 cm, Width: 10.0 cm',
      'IND-9': 'Length: 27.5 cm, Width: 10.2 cm',
      'IND-10': 'Length: 28.2 cm, Width: 10.4 cm'
    },
    colors: [
      {
        name: 'Grey',
        image: 'https://images.meesho.com/images/products/638901927/a7moi_512.avif?width=512',
        gallery: [
          'https://images.meesho.com/images/products/638901927/a7moi_512.avif?width=512',
          'https://images.meesho.com/images/products/638901927/iuyhs_512.avif?width=512',
          'https://images.meesho.com/images/products/638901927/th6yb_512.avif?width=512'
        ]
      },
      {
        name: 'Black',
        image: 'https://images.meesho.com/images/products/638901924/zym31_512.avif?width=512',
        gallery: [
          'https://images.meesho.com/images/products/638901924/zym31_512.avif?width=512',
          'https://images.meesho.com/images/products/638901924/im2qk_512.avif?width=512',
          'https://images.meesho.com/images/products/638901924/s5pqg_512.avif?width=512',
          'https://images.meesho.com/images/products/638901924/qxwcr_512.avif?width=512'
        ]
      },
      {
        name: 'Brown',
        image: 'https://images.meesho.com/images/products/638901929/g0kcm_512.avif?width=512',
        gallery: [
          'https://images.meesho.com/images/products/638901929/g0kcm_512.avif?width=512',
          'https://images.meesho.com/images/products/638901929/obden_512.avif?width=512',
          'https://images.meesho.com/images/products/638901929/dy5rc_512.avif?width=512',
          'https://images.meesho.com/images/products/638901929/sjkxt_512.avif?width=512'
        ]
      },
      {
        name: 'Red',
        image: 'https://images.meesho.com/images/products/638901928/pi1tm_512.avif?width=512',
        gallery: [
          'https://images.meesho.com/images/products/638901928/pi1tm_512.avif?width=512',
          'https://images.meesho.com/images/products/638901928/937tp_512.avif?width=512',
          'https://images.meesho.com/images/products/638901928/et1nd_512.avif?width=512'
        ]
      },
      {
        name: 'Green',
        image: 'https://images.meesho.com/images/products/638901925/jsjhw_512.avif?width=512',
        gallery: [
          'https://images.meesho.com/images/products/638901925/jsjhw_512.avif?width=512',
          'https://images.meesho.com/images/products/638901925/dslpd_512.avif?width=512',
          'https://images.meesho.com/images/products/638901925/2r0bs_512.avif?width=512',
          'https://images.meesho.com/images/products/638901925/p2422_512.avif?width=512'
        ]
      },
      {
        name: 'Blue',
        image: 'https://images.meesho.com/images/products/638901926/fgwa9_512.avif?width=512',
        gallery: [
          'https://images.meesho.com/images/products/638901926/fgwa9_512.avif?width=512',
          'https://images.meesho.com/images/products/638901926/88vyu_512.avif?width=512',
          'https://images.meesho.com/images/products/638901926/hxr57_512.avif?width=512',
          'https://images.meesho.com/images/products/638901926/mg5ke_512.avif?width=512'
        ]
      }
    ],
    description: "These men’s EVA dual-strap slippers are designed for regular daily use. The open-toe structure offers easy wear, while the dual straps provide a secure fit. The EVA base makes the slippers lightweight and suitable for long hours of use. The anti-skid sole ensures better grip on different surfaces.",
    image: 'https://images.meesho.com/images/products/638901927/a7moi_512.avif?width=512',
    gallery: [
      'https://images.meesho.com/images/products/638901927/a7moi_512.avif?width=512',
      'https://images.meesho.com/images/products/638901927/iuyhs_512.avif?width=512',
      'https://images.meesho.com/images/products/638901927/th6yb_512.avif?width=512'
    ],
    highlights: {
      material: 'EVA',
      soleMaterial: 'EVA',
      fastening: 'Slip-On',
      pattern: 'Solid',
      netQuantity: '1'
    },
    additionalDetails: {
      brand: 'DOCTOR HEALTH SUPER SOFT',
      soleMaterial: 'EVA',
      netQuantity: '1',
      ankleHeight: 'Regular',
      fasteningAndBackDetail: 'Slip-On',
      cmlNumber: '8530131112',
      genericName: 'Flip Flops',
      countryOfOrigin: 'India',
      safetyInfo: 'Product may be regulated by BIS Quality Control Order. Visit https://www.bis.gov.in/know-your-standard/ for more information; check IS mark on item/ upon delivery.'
    }
  },
  {
    id: 'p7',
    name: 'DOCTOR HEALTH SUPER SOFT Women’s Soft Cushion Flip-Flops | Lightweight Anti-Slip Comfort Slippers for Daily Wear | Shock Absorbing EVA Platform Slipper',
    category: 'Footwear & Slippers',
    price: 499,
    originalPrice: 999,
    discount: '54% off',
    deliveryFee: 0,
    rating: 4.2,
    ratingsCount: 5055,
    reviewsCount: 2020,
    isOriginalBrand: true,
    isAuthorisedSeller: true,
    size: 'IND-5',
    availableSizes: ['IND-4', 'IND-5', 'IND-6', 'IND-7', 'IND-8'],
    colors: [
      {
        name: 'Baby Pink',
        image: 'https://m.media-amazon.com/images/I/71LkLNiASbL._SY695_.jpg',
        gallery: [
          'https://m.media-amazon.com/images/I/71LkLNiASbL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/61RzGnIVPuL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/61KBdTc4FxL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/61I+tXEPBYL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/61PoEaJzetL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/61ffxxV14VL._SY695_.jpg'
        ]
      },
      {
        name: 'Cream Brown',
        image: 'https://m.media-amazon.com/images/I/61lHUI-Df2L._SY695_.jpg',
        gallery: [
          'https://m.media-amazon.com/images/I/61lHUI-Df2L._SY695_.jpg',
          'https://m.media-amazon.com/images/I/71pFyQYQ6EL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/917GvyW8tYL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/81PxN6ou3cL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/716gChTEeUL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/61dG2YAbQIL._SY695_.jpg'
        ]
      },
      {
        name: 'Pista',
        image: 'https://m.media-amazon.com/images/I/71WqfLwxcfL._SY695_.jpg',
        gallery: [
          'https://m.media-amazon.com/images/I/71WqfLwxcfL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/71PioSbQboL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/71LplmcxRiL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/61Vyu89BrzL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/710gjMd2DaL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/61JBKQQDTfL._SY695_.jpg'
        ]
      },
      {
        name: 'Black',
        image: 'https://m.media-amazon.com/images/I/81PG986fNAL._SY695_.jpg',
        gallery: [
          'https://m.media-amazon.com/images/I/81PG986fNAL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/81NHTNPoVML._SY695_.jpg',
          'https://m.media-amazon.com/images/I/71Qfx8rUa-L._SY695_.jpg',
          'https://m.media-amazon.com/images/I/81YRSuSGf5L._SY695_.jpg',
          'https://m.media-amazon.com/images/I/81OmuMszQTL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/81JjNUboauL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/71rNHTjDQsL._SY695_.jpg'
        ]
      },
      {
        name: 'Choco+Beige',
        image: 'https://m.media-amazon.com/images/I/71HJPMhPOTL._SY695_.jpg',
        gallery: [
          'https://m.media-amazon.com/images/I/71HJPMhPOTL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/719dvY+eIBL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/81eoW71ejkL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/71rpjzATYPL._SY695_.jpg',
          'https://m.media-amazon.com/images/I/81skoM8B7-L._SY695_.jpg',
          'https://m.media-amazon.com/images/I/611G1TzxPlL._SY695_.jpg'
        ]
      }
    ],
    description: "DOCTOR HEALTH SUPER SOFT Women’s Soft Cushion Flip-Flops designed with ultra-soft shock-absorbing EVA platform base for maximum daily comfort. Features anti-slip textured grip, lightweight structure, and ergonomic arch support for long-hour wear.",
    image: 'https://m.media-amazon.com/images/I/71LkLNiASbL._SY695_.jpg',
    gallery: [
      'https://m.media-amazon.com/images/I/71LkLNiASbL._SY695_.jpg',
      'https://m.media-amazon.com/images/I/61RzGnIVPuL._SY695_.jpg',
      'https://m.media-amazon.com/images/I/61KBdTc4FxL._SY695_.jpg',
      'https://m.media-amazon.com/images/I/61I+tXEPBYL._SY695_.jpg',
      'https://m.media-amazon.com/images/I/61PoEaJzetL._SY695_.jpg',
      'https://m.media-amazon.com/images/I/61ffxxV14VL._SY695_.jpg'
    ],
    highlights: {
      material: 'EVA',
      pattern: 'Solid',
      netQuantity: '1'
    },
    additionalDetails: {
      brand: 'DOCTOR HEALTH SUPER SOFT',
      seller: 'Authorised Seller',
      authenticity: 'Original Brand',
      soleMaterial: 'EVA',
      netQuantity: '1',
      genericName: 'Women Slipper / Flip-Flops',
      countryOfOrigin: 'India',
      safetyInfo: 'Product may be regulated by BIS Quality Control Order. Visit https://www.bis.gov.in/know-your-standard/ for more information; check IS mark on item/ upon delivery.'
    }
  },
  {
    id: 'p8',
    name: 'Ronofic Tissue Therapy Acupressure and Magnetic Spring Slippers for Blood Circulation Foot Massager Slippers For Men and Women',
    category: 'Footwear & Slippers',
    price: 349,
    originalPrice: 999,
    discount: '65% off',
    deliveryFee: 375,
    rating: 3.9,
    ratingsCount: 66,
    reviewsCount: 28,
    size: 'IND-7',
    availableSizes: ['IND-5', 'IND-6', 'IND-7', 'IND-8', 'IND-9'],
    description: "Ronofic Tissue Therapy Acupressure and Magnetic Spring Slippers designed for enhancing blood circulation and overall foot wellness. Equipped with massage nodules and magnetic spring nodes for effective reflexology therapy for both men and women.",
    image: 'https://images.meesho.com/images/products/729030230/z2p3y_512.avif?width=512',
    gallery: [
      'https://images.meesho.com/images/products/729030230/z2p3y_512.avif?width=512',
      'https://images.meesho.com/images/products/729030230/xvskv_512.avif?width=512',
      'https://images.meesho.com/images/products/729030230/e6j8h_512.avif?width=512',
      'https://images.meesho.com/images/products/729030230/op4sc_512.avif?width=512'
    ],
    highlights: {
      netQuantity: '1'
    },
    additionalDetails: {
      soleMaterial: 'Eva',
      countryOfOrigin: 'India'
    }
  }
];

// Initial Demo Order
const INITIAL_ORDERS = [
  {
    id: 'ORD-9821',
    customerName: 'Anand Kumar',
    phoneNumber: '9847012345',
    address: 'Flat 4B, Silver Heights, Mavoor Road',
    city: 'Kozhikode',
    state: 'Kerala',
    pincode: '673001',
    items: [
      {
        id: 'p9',
        name: 'SUPER TOY 1:24 RC Drift Car High Speed Racing 4x4 Remote Control Car',
        price: 1999,
        quantity: 1,
        image: 'https://m.media-amazon.com/images/I/61EQBqsTgzL._SX679_.jpg'
      }
    ],
    totalAmount: 1999,
    status: 'Pending',
    createdAt: new Date(Date.now() - 25 * 60000).toISOString()
  }
];

export default function App() {
  // Navigation & View Mode: 'user' | 'my-orders' | 'admin'
  const [activeTab, setActiveTab] = useState('user');
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  
  // Shopping Cart & Product Detail Modal State
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSizeOption, setSelectedSizeOption] = useState('');
  const [selectedColorOption, setSelectedColorOption] = useState(null);
  const [showAdditionalDetails, setShowAdditionalDetails] = useState(false);

  // Direct Instant Buy Checkout Modal State
  const [instantBuyModalItem, setInstantBuyModalItem] = useState(null);

  // Auto-carousel slideshow effect for product images
  useEffect(() => {
    if (!selectedProductDetails) return;
    
    const activeGallery = selectedColorOption?.gallery || selectedProductDetails?.gallery;
    if (!activeGallery || activeGallery.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % activeGallery.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedProductDetails, selectedColorOption]);

  // My Orders User State
  const [userPhoneSearch, setUserPhoneSearch] = useState('');
  const [activeUserPhone, setActiveUserPhone] = useState('');

  // Toast Notification Trigger
  const [toastNotification, setToastNotification] = useState(null);
  const triggerNotification = (title, message, orderData = null) => {
    setToastNotification({ title, message, orderData });
    setTimeout(() => {
      setToastNotification(null);
    }, 5000);
  };

  // Cart Handlers
  const addToCart = (product, quantity = 1, size = '', color = '') => {
    const cartItemId = `${product.id}-${size || 'default'}-${color || 'default'}`;
    const selectedImage = color && product.colors 
      ? (product.colors.find(c => c.name === color)?.image || product.image) 
      : product.image;

    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += quantity;
      setCart(updated);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          cartItemId,
          quantity,
          selectedSize: size || product.size || 'Free Size',
          selectedColor: color || '',
          image: selectedImage
        }
      ]);
    }
    triggerNotification('Added to Cart', `Added ${product.name.slice(0, 25)}... to cart.`);
  };

  const updateCartQuantity = (cartItemId, delta) => {
    setCart(prevCart => 
      prevCart
        .map(item => {
          if (item.cartItemId === cartItemId || item.id === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartDeliveryFee = cart.reduce((sum, item) => sum + (item.deliveryFee || 0), 0);
  const cartGrandTotal = cartSubtotal + cartDeliveryFee;

  // Checkout Form State
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });
  const [isOrderPlacedSuccess, setIsOrderPlacedSuccess] = useState(false);

  // Trigger Instant Buy directly from product cards or detail modal
  const handleOpenInstantBuy = (product, size = '', color = '') => {
    const selectedImage = color && product.colors 
      ? (product.colors.find(c => c.name === color)?.image || product.image) 
      : product.image;

    setInstantBuyModalItem({
      items: [
        {
          ...product,
          selectedSize: size || product.size || 'Free Size',
          selectedColor: color || '',
          quantity: 1,
          image: selectedImage
        }
      ],
      totalAmount: product.price + (product.deliveryFee || 0)
    });
  };

  // Trigger Instant Buy for all Cart Items
  const handleCheckoutCart = () => {
    if (cart.length === 0) return;
    setInstantBuyModalItem({
      items: [...cart],
      totalAmount: cartGrandTotal
    });
    setIsCartOpen(false);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!instantBuyModalItem || instantBuyModalItem.items.length === 0) return;

    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: checkoutForm.name,
      phoneNumber: checkoutForm.phone,
      address: checkoutForm.address,
      city: checkoutForm.city,
      state: checkoutForm.state || 'Kerala',
      pincode: checkoutForm.pincode,
      items: instantBuyModalItem.items,
      totalAmount: instantBuyModalItem.totalAmount,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    setOrders([newOrder, ...orders]);
    if (isCartOpen || instantBuyModalItem.items.length > 1) {
      setCart([]);
    }
    setInstantBuyModalItem(null);
    setIsCartOpen(false);
    setIsOrderPlacedSuccess(true);

    triggerNotification(
      'New Order Received! 🛒',
      `Order ${newOrder.id} from ${newOrder.customerName} for ₹${newOrder.totalAmount}.`,
      newOrder
    );
  };

  // Reset Application State Action
  const handleReloadApp = () => {
    setProducts(INITIAL_PRODUCTS);
    setOrders(INITIAL_ORDERS);
    setCart([]);
    setIsCartOpen(false);
    setSelectedProductDetails(null);
    setInstantBuyModalItem(null);
    setIsAdminAuthenticated(false);
    setAdminLoginForm({ name: '', phone: '', password: '' });
    setLoginError('');
    setUserPhoneSearch('');
    setActiveUserPhone('');
    triggerNotification('App Reloaded', 'Storefront catalog and orders have been reloaded to initial state.');
  };

  // Admin Security Login State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminLoginForm, setAdminLoginForm] = useState({
    name: '',
    phone: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');

  // Admin Features State
  const [selectedOrderFilter, setSelectedOrderFilter] = useState('All');
  const [simulatedSmsModal, setSimulatedSmsModal] = useState(null);
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const [newProductForm, setNewProductForm] = useState({
    name: '',
    price: '',
    deliveryFee: '0',
    description: '',
    image: '',
    recommendedAge: '4-6 Years',
    size: 'Free Size'
  });

  // Filter orders for admin dashboard
  const filteredOrders = orders.filter(order => {
    if (selectedOrderFilter === 'All') return true;
    return order.status === selectedOrderFilter;
  });

  // Admin Order Action Handlers
  const handleAcceptOrder = (order) => {
    const updatedOrders = orders.map(o => 
      o.id === order.id ? { ...o, status: 'Confirmed' } : o
    );
    setOrders(updatedOrders);

    const itemsListText = order.items.map(item => {
      const itemSize = item.selectedSize || item.size || 'Free Size';
      const itemColor = item.selectedColor ? ` (Color: ${item.selectedColor})` : '';
      return `- ${item.name} [Size: ${itemSize}${itemColor}] x ${item.quantity} = ₹${item.price * item.quantity}`;
    }).join('\n');

    const whatsappMsg = `Hello ${order.customerName},\n\nYour order ${order.id} has been CONFIRMED!\n\n📦 *Purchased Items:*\n${itemsListText}\n\n💰 *Total Amount:* ₹${order.totalAmount}\n📍 *Delivery Address:* ${order.address}, ${order.city} - ${order.pincode}\n\nThank you for shopping with My Shope!`;

    const encodedMsg = encodeURIComponent(whatsappMsg);
    const cleanPhone = order.phoneNumber.replace(/\D/g, '');
    const fullPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
    const whatsappUrl = `https://wa.me/${fullPhone}?text=${encodedMsg}`;

    setSimulatedSmsModal({
      recipientPhone: fullPhone,
      message: whatsappMsg,
      whatsappUrl: whatsappUrl
    });

    triggerNotification('Order Confirmed!', `Order ${order.id} confirmed and WhatsApp notification generated.`);
  };

  const handleRejectOrder = (orderId) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: 'Rejected' } : o));
    triggerNotification('Order Rejected', `Order ${orderId} has been marked as rejected.`);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProductForm.name || !newProductForm.price) return;

    const createdProduct = {
      id: `p-${Date.now()}`,
      name: newProductForm.name,
      category: 'Toys & Accessories',
      price: parseFloat(newProductForm.price),
      deliveryFee: parseFloat(newProductForm.deliveryFee || 0),
      rating: 4.5,
      ratingsCount: 1,
      reviewsCount: 1,
      size: newProductForm.size,
      description: newProductForm.description || 'Newly added product to My Shope catalog.',
      image: newProductForm.image || 'https://images.meesho.com/images/products/1123067628/m76qz_512.avif?width=360',
      highlights: {
        recommendedAge: newProductForm.recommendedAge,
        netQuantity: '1'
      }
    };

    setProducts([createdProduct, ...products]);
    setShowAddProductModal(false);
    setNewProductForm({
      name: '',
      price: '',
      deliveryFee: '0',
      description: '',
      image: '',
      recommendedAge: '4-6 Years',
      size: 'Free Size'
    });
    triggerNotification('Product Added', `"${createdProduct.name}" is now live on the store!`);
  };

  const userOrders = activeUserPhone
    ? orders.filter(o => o.phoneNumber.replace(/\D/g, '') === activeUserPhone.replace(/\D/g, ''))
    : [];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col">
      {/* REALTIME TOAST NOTIFICATION FOR ADMIN */}
      {toastNotification && (
        <div className="fixed top-20 right-4 z-50 bg-slate-950 text-white p-4 rounded-2xl shadow-2xl border border-amber-500/50 max-w-sm animate-bounce">
          <div className="flex items-start space-x-3">
            <div className="bg-amber-500 text-slate-950 p-2 rounded-xl">
              <Bell className="w-5 h-5 animate-spin" />
            </div>
            <div className="flex-1">
              <h4 className="font-black text-amber-400 text-sm">{toastNotification.title}</h4>
              <p className="text-xs text-slate-300 mt-1">{toastNotification.message}</p>
              {toastNotification.orderData && (
                <button
                  onClick={() => {
                    setActiveTab('admin');
                    setToastNotification(null);
                  }}
                  className="mt-2 text-[11px] font-bold text-amber-400 underline hover:text-amber-300"
                >
                  View in Admin Portal →
                </button>
              )}
            </div>
            <button onClick={() => setToastNotification(null)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* HEADER NAVBAR */}
      <header className="bg-slate-950 text-white sticky top-0 z-40 border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center space-x-3">
            <div className="bg-amber-500 text-slate-950 p-2 rounded-xl shadow-lg shadow-amber-500/20">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-black text-lg tracking-tight text-white flex items-center space-x-2">
                <span>My Shope</span>
              </h1>
              <p className="text-[10px] text-amber-400 font-semibold tracking-wide uppercase">Storefront & Management Portal</p>
            </div>
          </div>

          {/* VIEW TOGGLE TABS & RELOAD BUTTON */}
          <div className="flex items-center space-x-2 flex-wrap">
            <button
              onClick={handleReloadApp}
              title="Reload App Data"
              className="px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-xl transition-all text-xs font-bold flex items-center space-x-1"
            >
              <span>↻ Reload</span>
            </button>

            <div className="flex items-center bg-slate-900 p-1.5 rounded-2xl border border-slate-800 space-x-1">
              <button
                onClick={() => setActiveTab('user')}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-black transition-all ${
                  activeTab === 'user'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Store className="w-4 h-4" />
                <span>Store</span>
              </button>

              <button
                onClick={() => setActiveTab('my-orders')}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-black transition-all ${
                  activeTab === 'my-orders'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <MyBag className="w-4 h-4" />
                <span>My Orders</span>
              </button>

              <button
                onClick={() => setActiveTab('admin')}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-black transition-all relative ${
                  activeTab === 'admin'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Admin</span>
                {orders.filter(o => o.status === 'Pending').length > 0 && (
                  <span className="bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold ml-1">
                    {orders.filter(o => o.status === 'Pending').length}
                  </span>
                )}
              </button>
            </div>

            {/* CART ICON FOR USER VIEW */}
            {activeTab === 'user' && (
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white rounded-2xl transition-all"
              >
                <ShoppingCart className="w-5 h-5 text-amber-400" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-950 font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow">
                    {totalCartItems}
                  </span>
                )}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ================= USER STOREFRONT VIEW ================= */}
      {activeTab === 'user' && (
        <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 space-y-6">
          {/* BANNER */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="relative z-10 max-w-xl">
              <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold text-xs px-3 py-1 rounded-full inline-block mb-3">
                🔥 Premium Collection
              </span>
              <h2 className="text-2xl md:text-3xl font-black leading-tight text-white">
                Quality Products at Unbeatable Prices
              </h2>
              <p className="text-slate-400 text-xs md:text-sm mt-2">
                Browse our curated selection. Place an order directly to sync with our store manager instantly.
              </p>
            </div>
          </div>

          {/* CATALOG HEADER */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-slate-900 flex items-center space-x-2">
              <Package className="w-5 h-5 text-amber-500" />
              <span>Available Products ({products.length})</span>
            </h3>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  setSelectedProductDetails(product);
                  setSelectedSizeOption(product.availableSizes ? product.availableSizes[0] : (product.size || 'Free Size'));
                  if (product.colors && product.colors.length > 0) {
                    setSelectedColorOption(product.colors[0]);
                  } else {
                    setSelectedColorOption(null);
                  }
                  setActiveImageIndex(0);
                }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col group"
              >
                <div className="bg-slate-100 p-6 flex items-center justify-center relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain max-h-52 w-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-slate-200 shadow-sm">
                    {product.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                        {product.rating} ★
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        ({product.ratingsCount} Ratings)
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-slate-900 line-clamp-2 leading-snug group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h4>

                    <div className="mt-2 flex items-center space-x-2 text-xs text-slate-500 font-medium">
                      <span>Size: <strong className="text-slate-800">{product.size}</strong></span>
                      {product.deliveryFee === 0 && (
                        <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Free Delivery</span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-black text-slate-900">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-slate-400 line-through ml-1 font-semibold">₹{product.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product, 1, product.availableSizes ? product.availableSizes[0] : product.size, product.colors ? product.colors[0].name : '');
                          setIsCartOpen(true);
                        }}
                        className="py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-[11px] rounded-xl transition-all border border-slate-200 flex items-center justify-center space-x-1"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add Cart</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenInstantBuy(product, product.availableSizes ? product.availableSizes[0] : product.size, product.colors ? product.colors[0].name : '');
                        }}
                        className="py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] rounded-xl transition-all shadow-md flex items-center justify-center space-x-1"
                      >
                        <Zap className="w-3.5 h-3.5 fill-current" />
                        <span>Instant Buy</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* ================= MY ORDERS VIEW ================= */}
      {activeTab === 'my-orders' && (
        <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-6 space-y-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl">
            <div className="text-center max-w-md mx-auto mb-6">
              <div className="w-14 h-14 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <MyBag className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-black text-slate-900">Track Your Orders (എന്റെ ഓര്‍ഡറുകള്‍)</h2>
              <p className="text-xs text-slate-500 mt-1">Enter the phone number used during checkout to see all your placed orders.</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setActiveUserPhone(userPhoneSearch.trim());
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  placeholder="Enter 10-digit Phone Number"
                  value={userPhoneSearch}
                  onChange={(e) => setUserPhoneSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-black text-xs rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>Find Orders</span>
              </button>
            </form>
          </div>

          {activeUserPhone && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-slate-900 text-base">
                  Orders for Phone: <span className="text-amber-600">{activeUserPhone}</span> ({userOrders.length})
                </h3>
              </div>

              {userOrders.length === 0 ? (
                <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-sm text-slate-400">
                  <Package className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="font-bold text-slate-700 text-sm">No orders found for this phone number</p>
                  <p className="text-xs text-slate-400 mt-1">Make sure you entered the exact phone number used while placing the order.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {userOrders.map((order) => (
                    <div key={order.id} className="bg-white rounded-3xl p-5 md:p-6 border border-slate-200 shadow-md space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div>
                          <span className="text-xs font-black text-slate-900">{order.id}</span>
                          <p className="text-[11px] text-slate-400">
                            Placed on {new Date(order.createdAt).toLocaleDateString()} at {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>

                        <span className={`px-3 py-1 rounded-full text-xs font-extrabold flex items-center space-x-1 ${
                          order.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
                          order.status === 'Rejected' ? 'bg-red-100 text-red-700 border border-red-200' :
                          'bg-amber-100 text-amber-700 border border-amber-200 animate-pulse'
                        }`}>
                          <span>•</span>
                          <span>{order.status === 'Confirmed' ? 'Confirmed & Dispatched' : order.status === 'Rejected' ? 'Order Cancelled' : 'Order Pending Verification'}</span>
                        </span>
                      </div>

                      <div className="space-y-3">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                            <img src={item.image} alt={item.name} className="w-14 h-14 object-contain rounded-xl bg-white p-1 border" />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-xs text-slate-900 line-clamp-1">{item.name}</h4>
                              <p className="text-[11px] font-bold text-amber-600 mt-0.5">
                                Size: {item.selectedSize || item.size || 'Free Size'} {item.selectedColor ? `| Color: ${item.selectedColor}` : ''}
                              </p>
                              <p className="text-xs text-slate-500 mt-0.5">Quantity: {item.quantity}</p>
                            </div>
                            <span className="font-black text-sm text-slate-900">₹{item.price * item.quantity}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex flex-wrap justify-between items-center gap-2 text-xs">
                        <div className="text-slate-600">
                          <span className="font-bold text-slate-800">Delivery Address: </span>
                          <span>{order.address}, {order.city} - {order.pincode}</span>
                        </div>
                        <div className="font-black text-base text-slate-900">
                          Total Paid/COD: <span className="text-emerald-600">₹{order.totalAmount}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      )}

      {/* ================= ADMIN PORTAL VIEW ================= */}
      {activeTab === 'admin' && (
        <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-6 space-y-6">
          {!isAdminAuthenticated ? (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl max-w-md mx-auto">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h2 className="text-xl font-black text-slate-900">Admin Login Portal</h2>
                <p className="text-xs text-slate-500 mt-1">Enter your credentials to manage store orders</p>
              </div>

              {loginError && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-xl text-xs font-bold border border-red-200 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (adminLoginForm.password === '1234567890') {
                    setIsAdminAuthenticated(true);
                    setLoginError('');
                  } else {
                    setLoginError('Incorrect password! Try again.');
                  }
                }}
                className="space-y-4 text-xs"
              >
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Muhammed Bishr"
                    value={adminLoginForm.name}
                    onChange={(e) => setAdminLoginForm({ ...adminLoginForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="9526290783"
                    value={adminLoginForm.phone}
                    onChange={(e) => setAdminLoginForm({ ...adminLoginForm, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Password</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={adminLoginForm.password}
                    onChange={(e) => setAdminLoginForm({ ...adminLoginForm, password: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-white font-black rounded-xl transition-all shadow-lg text-xs"
                >
                  Verify & Access Dashboard
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-slate-950 text-white p-6 rounded-3xl border border-slate-800 shadow-xl flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold text-[10px] px-2.5 py-0.5 rounded-full inline-block mb-1">
                    Authenticated Administrator
                  </span>
                  <h2 className="text-xl font-black text-white">Orders Management Hub</h2>
                  <p className="text-xs text-slate-400">Manage store orders and accept purchases with WhatsApp alerts</p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setShowAddProductModal(true)}
                    className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl transition-all shadow-md flex items-center space-x-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Product</span>
                  </button>

                  <button
                    onClick={() => setIsAdminAuthenticated(false)}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl transition-all border border-slate-700"
                  >
                    Lock Portal
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <h3 className="font-black text-slate-900 text-base">Customer Orders ({filteredOrders.length})</h3>

                  <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600">
                    {['All', 'Pending', 'Confirmed', 'Rejected'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setSelectedOrderFilter(filter)}
                        className={`px-3 py-1.5 rounded-lg transition-all ${
                          selectedOrderFilter === filter
                            ? 'bg-white text-slate-900 shadow-sm'
                            : 'hover:text-slate-900'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="divide-y divide-slate-100">
                  {filteredOrders.length === 0 ? (
                    <div className="p-12 text-center text-slate-400">
                      <Package className="w-12 h-12 mx-auto mb-2 opacity-40" />
                      <p className="font-bold text-sm text-slate-600">No orders found for this category</p>
                    </div>
                  ) : (
                    filteredOrders.map((order) => (
                      <div key={order.id} className="p-5 hover:bg-slate-50/80 transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-black text-slate-900 text-sm">{order.id}</span>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${
                                order.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' :
                                order.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                                'bg-amber-100 text-amber-700'
                              }`}>
                                {order.status}
                              </span>
                              <span className="text-[11px] text-slate-400 font-medium">
                                {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>

                            <div className="mt-3 bg-slate-50 p-3 rounded-2xl border border-slate-200/80 text-xs text-slate-700 space-y-1 max-w-md">
                              <p className="font-bold text-slate-900 flex items-center space-x-1">
                                <User className="w-3.5 h-3.5 text-slate-500" />
                                <span>{order.customerName}</span>
                              </p>
                              <p className="flex items-center space-x-1 text-slate-600 font-semibold">
                                <Phone className="w-3.5 h-3.5 text-slate-500" />
                                <span>{order.phoneNumber}</span>
                              </p>
                              <p className="flex items-start space-x-1 text-slate-600 pt-1 border-t border-slate-200">
                                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                                <span>{order.address}, {order.city}, {order.state} - {order.pincode}</span>
                              </p>
                            </div>
                          </div>

                          <div className="flex-1 max-w-sm bg-slate-50 p-3 rounded-2xl border border-slate-200/80 text-xs">
                            <h4 className="font-bold text-slate-800 mb-2 border-b border-slate-200 pb-1">Purchased Products</h4>
                            <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                              {order.items.map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <img src={item.image} alt={item.name} className="w-8 h-8 object-contain bg-white rounded border" />
                                  <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-slate-800 truncate">{item.name}</p>
                                    <p className="text-[10px] text-amber-600 font-bold">
                                      Size: {item.selectedSize || item.size || 'Free Size'} {item.selectedColor ? `| Color: ${item.selectedColor}` : ''} × {item.quantity}
                                    </p>
                                  </div>
                                  <span className="font-bold text-slate-900">₹{item.price * item.quantity}</span>
                                </div>
                              ))}
                            </div>
                            <div className="mt-2 pt-2 border-t border-slate-200 flex justify-between font-black text-slate-900">
                              <span>Total Amount:</span>
                              <span>₹{order.totalAmount}</span>
                            </div>
                          </div>

                          <div className="flex flex-col space-y-2 shrink-0">
                            {order.status === 'Pending' ? (
                              <>
                                <button
                                  onClick={() => handleAcceptOrder(order)}
                                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition-all shadow-md flex items-center space-x-1.5"
                                >
                                  <MessageCircle className="w-4 h-4" />
                                  <span>Accept & Send WhatsApp</span>
                                </button>

                                <button
                                  onClick={() => handleRejectOrder(order.id)}
                                  className="px-4 py-2 bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 font-bold text-xs rounded-xl transition-all border border-slate-200 flex items-center space-x-1.5"
                                >
                                  <XCircle className="w-4 h-4" />
                                  <span>Reject Order</span>
                                </button>
                              </>
                            ) : (
                              <div className="p-3 bg-slate-100 rounded-xl text-center">
                                <span className="text-xs font-bold text-slate-600">Action Completed</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      )}

      {/* PRODUCT DETAIL MODAL */}
      {selectedProductDetails && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => {
                setSelectedProductDetails(null);
                setShowAdditionalDetails(false);
                setActiveImageIndex(0);
                setSelectedColorOption(null);
              }}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-600 transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-3">
                  {(selectedColorOption?.gallery || selectedProductDetails.gallery) && (
                    <div className="flex flex-col space-y-2 shrink-0 max-h-72 overflow-y-auto pr-1">
                      {(selectedColorOption?.gallery || selectedProductDetails.gallery).map((imgUrl, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIndex(i)}
                          className={`w-12 h-12 rounded-xl border-2 p-0.5 overflow-hidden transition-all bg-slate-50 shrink-0 ${
                            activeImageIndex === i ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-slate-200 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={imgUrl} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-contain" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="bg-slate-100 rounded-2xl p-4 flex-1 flex items-center justify-center aspect-square border border-slate-200/80">
                    <img
                      src={
                        selectedColorOption
                          ? (selectedColorOption.gallery ? selectedColorOption.gallery[activeImageIndex] || selectedColorOption.image : selectedColorOption.image)
                          : (selectedProductDetails.gallery ? selectedProductDetails.gallery[activeImageIndex] || selectedProductDetails.image : selectedProductDetails.image)
                      }
                      alt={selectedProductDetails.name}
                      className="object-contain max-h-64 w-full"
                    />
                  </div>
                </div>

                {selectedProductDetails.colors && (
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                      Select Color: <span className="text-amber-600 font-extrabold">{selectedColorOption?.name}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {selectedProductDetails.colors.map((colorObj) => (
                        <button
                          key={colorObj.name}
                          onClick={() => {
                            setSelectedColorOption(colorObj);
                            setActiveImageIndex(0);
                          }}
                          className={`flex items-center space-x-2 px-3 py-2 text-xs font-extrabold rounded-xl border transition-all ${
                            selectedColorOption?.name === colorObj.name
                              ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md ring-2 ring-amber-500/20'
                              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          <img src={colorObj.image} alt={colorObj.name} className="w-6 h-6 object-contain rounded-md bg-white border" />
                          <span>{colorObj.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <span className="text-xs font-bold text-amber-600 uppercase bg-amber-50 px-2 py-1 rounded">
                  {selectedProductDetails.category}
                </span>
                <h2 className="text-lg font-black text-slate-900 mt-2 leading-snug">{selectedProductDetails.name}</h2>

                <div className="flex items-center space-x-2 mt-2">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                    {selectedProductDetails.rating} ★
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {selectedProductDetails.ratingsCount} Ratings, {selectedProductDetails.reviewsCount} Reviews
                  </span>
                </div>

                <div className="mt-4">
                  <span className="text-2xl font-black text-slate-900">₹{selectedProductDetails.price}</span>

                  {selectedProductDetails.availableSizes ? (
                    <div className="mt-3">
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">Select Size:</label>
                      <div className="flex flex-wrap gap-2">
                        {selectedProductDetails.availableSizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSizeOption(size)}
                            className={`px-3 py-1.5 text-xs font-extrabold rounded-xl border transition-all ${
                              selectedSizeOption === size
                                ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                                : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      {selectedProductDetails.sizeChart && selectedSizeOption && (
                        <p className="text-[11px] font-semibold text-emerald-600 mt-2 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                          📏 {selectedSizeOption}: {selectedProductDetails.sizeChart[selectedSizeOption]}
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 mt-0.5">Select Size: <span className="font-bold text-slate-800">{selectedProductDetails.size}</span></p>
                  )}
                </div>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">{selectedProductDetails.description}</p>

                {selectedProductDetails.highlights && (
                  <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                    <h4 className="font-bold text-slate-800 mb-1">Product Highlights</h4>
                    {Object.entries(selectedProductDetails.highlights).map(([k, v]) => (
                      <div key={k} className="flex justify-between text-slate-600">
                        <span className="capitalize">{k.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="font-semibold text-slate-800">{String(v)}</span>
                      </div>
                    ))}
                  </div>
                )}

                {selectedProductDetails.additionalDetails && (
                  <div className="mt-3 border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setShowAdditionalDetails(!showAdditionalDetails)}
                      className="w-full p-3 bg-slate-100 hover:bg-slate-200 flex items-center justify-between text-xs font-bold text-slate-800 transition-colors"
                    >
                      <span className="flex items-center"><Info className="w-4 h-4 mr-1.5 text-amber-600" /> Additional Details</span>
                      {showAdditionalDetails ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>

                    {showAdditionalDetails && (
                      <div className="p-3 bg-white text-xs space-y-2 border-t border-slate-200 text-slate-600">
                        {Object.entries(selectedProductDetails.additionalDetails).map(([key, val]) => (
                          <div key={key} className="border-b border-slate-100 pb-1">
                            <span className="font-bold capitalize text-slate-700 block">{key.replace(/([A-Z])/g, ' $1')}:</span>
                            <span className="text-slate-600">{String(val)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-5 flex space-x-3">
                  <button
                    onClick={() => {
                      addToCart(selectedProductDetails, 1, selectedSizeOption, selectedColorOption?.name);
                      setSelectedProductDetails(null);
                      setIsCartOpen(true);
                    }}
                    className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs rounded-xl transition-all border border-slate-200 flex items-center justify-center space-x-1"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add To Cart</span>
                  </button>

                  <button
                    onClick={() => {
                      handleOpenInstantBuy(selectedProductDetails, selectedSizeOption, selectedColorOption?.name);
                      setSelectedProductDetails(null);
                    }}
                    className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl transition-all shadow-md flex items-center justify-center space-x-1"
                  >
                    <Zap className="w-4 h-4 fill-current" />
                    <span>Instant Buy</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SHOPPING CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl">
            <div className="p-4 bg-slate-950 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5 text-amber-400" />
                <h3 className="font-black text-base">Your Shopping Cart</h3>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-between">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p className="font-bold text-slate-600 text-sm">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div key={item.cartItemId || item.id} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded-xl bg-white p-1" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-xs text-slate-900 truncate">{item.name}</h4>
                          <p className="text-[11px] font-bold text-amber-600">
                            Size: {item.selectedSize || item.size || 'Free Size'} {item.selectedColor ? `| Color: ${item.selectedColor}` : ''}
                          </p>
                          <p className="text-xs font-black text-slate-900 mt-0.5">₹{item.price}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button onClick={() => updateCartQuantity(item.cartItemId || item.id, -1)} className="w-6 h-6 bg-slate-200 rounded font-bold text-xs">-</button>
                            <span className="text-xs font-extrabold">{item.quantity}</span>
                            <button onClick={() => updateCartQuantity(item.cartItemId || item.id, 1)} className="w-6 h-6 bg-slate-200 rounded font-bold text-xs">+</button>
                          </div>
                        </div>
                        <button onClick={() => updateCartQuantity(item.cartItemId || item.id, -item.quantity)} className="text-slate-400 hover:text-red-500 p-1">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span>Subtotal</span>
                      <span>₹{cartSubtotal}</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-600 mb-1">
                      <span>Delivery</span>
                      <span>{cartDeliveryFee > 0 ? `₹${cartDeliveryFee}` : 'FREE'}</span>
                    </div>
                    <div className="flex justify-between font-black text-slate-900 text-sm pt-2 border-t border-slate-200">
                      <span>Total Amount</span>
                      <span>₹{cartGrandTotal}</span>
                    </div>

                    <button
                      onClick={handleCheckoutCart}
                      className="w-full mt-4 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl transition-all shadow-lg text-sm flex items-center justify-center space-x-2"
                    >
                      <Zap className="w-4 h-4 fill-current" />
                      <span>Proceed to Instant Buy</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* INSTANT BUY & ADDRESS ENTRY MODAL */}
      {instantBuyModalItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setInstantBuyModalItem(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 p-2 rounded-full text-slate-600 transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-amber-500 text-slate-950 rounded-xl flex items-center justify-center font-black">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-black text-base text-slate-900">Instant Buy Checkout</h3>
                <p className="text-[11px] text-slate-500">Enter your address below to complete purchase</p>
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80 mb-4 space-y-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Order Summary</span>
              {instantBuyModalItem.items.map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-contain bg-white rounded-xl p-1 border shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-xs text-slate-900 truncate">{item.name}</p>
                    <p className="text-[10px] text-amber-600 font-bold">
                      Size: {item.selectedSize || 'Free Size'} {item.selectedColor ? `| Color: ${item.selectedColor}` : ''} × {item.quantity || 1}
                    </p>
                  </div>
                  <span className="font-black text-xs text-slate-900 shrink-0">₹{item.price * (item.quantity || 1)}</span>
                </div>
              ))}

              <div className="pt-2 border-t border-slate-200 flex justify-between font-black text-xs text-slate-900">
                <span>Total Amount to Pay:</span>
                <span className="text-emerald-600 text-sm">₹{instantBuyModalItem.totalAmount}</span>
              </div>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Recipient Name"
                  value={checkoutForm.name}
                  onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit Phone Number"
                  value={checkoutForm.phone}
                  onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Delivery Address</label>
                <textarea
                  required
                  rows="2"
                  placeholder="House No., Street, Landmark"
                  value={checkoutForm.address}
                  onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">City</label>
                  <input
                    type="text"
                    required
                    placeholder="Kozhikode"
                    value={checkoutForm.city}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Pincode</label>
                  <input
                    type="text"
                    required
                    placeholder="673001"
                    value={checkoutForm.pincode}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, pincode: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl transition-all shadow-lg text-sm flex items-center justify-center space-x-2"
              >
                <span>Confirm & Place Order</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* SIMULATED WHATSAPP DISPATCH MODAL */}
      {simulatedSmsModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl text-center relative border border-slate-200">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-7 h-7" />
            </div>

            <h3 className="font-black text-lg text-slate-900">WhatsApp Notification Ready!</h3>
            <p className="text-xs text-slate-500 mt-1">Order status updated to <strong>CONFIRMED</strong></p>

            <div className="mt-4 bg-emerald-950 text-emerald-100 p-4 rounded-2xl text-left text-xs font-sans relative border border-emerald-800">
              <div className="flex items-center justify-between text-[10px] text-emerald-400 font-bold border-b border-emerald-800 pb-2 mb-2">
                <span>TO: +{simulatedSmsModal.recipientPhone}</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">WHATSAPP</span>
              </div>
              <p className="leading-relaxed whitespace-pre-line">{simulatedSmsModal.message}</p>
            </div>

            <div className="mt-5 space-y-2">
              <a
                href={simulatedSmsModal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 block"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp & Send Message</span>
              </a>

              <button
                onClick={() => setSimulatedSmsModal(null)}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ORDER SUCCESS MODAL */}
      {isOrderPlacedSuccess && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl border border-slate-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Order Placed Successfully!</h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Your order details have been instantly transmitted to the <strong>My Shope Admin Portal</strong>. Once verified by Admin, you will receive a WhatsApp confirmation.
            </p>

            <button
              onClick={() => setIsOrderPlacedSuccess(false)}
              className="mt-6 w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl transition-all shadow-lg text-sm"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {/* ADMIN ADD PRODUCT MODAL */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setShowAddProductModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-black text-lg text-slate-900 mb-1">Add Product to Store</h3>
            <p className="text-xs text-slate-500 mb-4">List a new product live on My Shope</p>

            <form onSubmit={handleAddProduct} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Product Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter full product title"
                  value={newProductForm.name}
                  onChange={(e) => setNewProductForm({ ...newProductForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Price (₹)</label>
                  <input
                    type="number"
                    required
                    placeholder="899"
                    value={newProductForm.price}
                    onChange={(e) => setNewProductForm({ ...newProductForm, price: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Delivery Fee (₹)</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={newProductForm.deliveryFee}
                    onChange={(e) => setNewProductForm({ ...newProductForm, deliveryFee: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Product Image URL</label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={newProductForm.image}
                  onChange={(e) => setNewProductForm({ ...newProductForm, image: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Description</label>
                <textarea
                  rows="2"
                  placeholder="Brief product description"
                  value={newProductForm.description}
                  onChange={(e) => setNewProductForm({ ...newProductForm, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-extrabold rounded-xl transition-all shadow-md text-xs mt-2"
              >
                Publish Product to Storefront
              </button>
            </form>
          </div>
        </div>
      )}

      <footer className="mt-auto bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800">
        <p className="font-bold text-slate-300">My Shope — Online Store</p>
        <p className="text-[11px] text-slate-500 mt-1">Live Order Syncing • Admin WhatsApp Confirmation</p>
      </footer>
    </div>
  );
}