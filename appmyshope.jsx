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

// Full Complete Product Catalog
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
      includedComponents: '1 x Amphibious RC Car, 1 x Remote Control, 1 x Rechargeable Battery, 1 x Type-C Charging Cable',
      countryOfOrigin: 'India'
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
    description: '1:24 High Speed 4WD Racing & Drifting RC Car reaching speeds up to 25 KM/H. Includes rechargeable battery, extra interchangeable drift tires, and high-traction rubber tires.',
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
      netQuantity: '1'
    },
    additionalDetails: {
      brand: 'SUPER TOY',
      genericName: 'Remote Control Drift Car',
      countryOfOrigin: 'India'
    }
  },
  {
    id: 'p2',
    name: 'Remote Control Sports Car Toy for Kids | Rechargeable RC Car with LED Lights, Music & Smoke Effect | Orange',
    category: 'Toys & RC Cars',
    price: 814,
    deliveryFee: 0,
    rating: 3.5,
    ratingsCount: 14,
    reviewsCount: 3,
    size: 'Free Size',
    description: 'High-speed rechargeable RC Sports Car featuring bright LED headlights, engine sound effects, and cool rear exhaust smoke spray effects.',
    image: 'https://images.meesho.com/images/products/1123067628/m76qz_512.avif?width=360',
    gallery: ['https://images.meesho.com/images/products/1123067628/m76qz_512.avif?width=360'],
    highlights: {
      batteryAvailable: 'Yes',
      recommendedAge: '10+ Years',
      netQuantity: '1'
    }
  },
  {
    id: 'p3',
    name: 'Remote Control Sports Racing Car with Rechargeable Battery, Extra Wheels, Traffic Cones and USB Charging Cable',
    category: 'Toys & RC Cars',
    price: 2299,
    deliveryFee: 0,
    rating: 4.5,
    ratingsCount: 18,
    reviewsCount: 5,
    size: 'Free Size',
    description: 'Pro drifting & racing RC Car setup complete with additional drift tires, traffic cones for track setup, and high-speed rechargeable motor drive.',
    image: 'https://images.meesho.com/images/products/1126465817/lngvr_512.avif?width=360',
    gallery: ['https://images.meesho.com/images/products/1126465817/lngvr_512.avif?width=360'],
    highlights: {
      batteryAvailable: 'Yes',
      recommendedAge: 'Above 4-6 Years',
      netQuantity: '1'
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
    description: 'Indoor hand motion sensor RC Helicopter. Features height locking sensor flight and lightweight safe blades for indoor playing.',
    image: 'https://images.meesho.com/images/products/1128527617/0fkkt_512.avif?width=360',
    gallery: ['https://images.meesho.com/images/products/1128527617/0fkkt_512.avif?width=360'],
    highlights: {
      sensorFlight: 'Yes',
      recommendedAge: 'Above 4-6 Years',
      netQuantity: '1'
    }
  },
  {
    id: 'p5',
    name: 'RC Racing Sports Car Pack of 1 | Remote Control Toy with Steering',
    category: 'Toys & RC Cars',
    price: 319,
    deliveryFee: 0,
    rating: 3.8,
    ratingsCount: 6,
    reviewsCount: 1,
    size: 'Free Size',
    description: 'Compact RC Racing Sports Car with steering remote control. Designed for early age kids with durable body and simple steering controls.',
    image: 'https://images.meesho.com/images/products/1123910228/zhqig_512.avif?width=360',
    gallery: ['https://images.meesho.com/images/products/1123910228/zhqig_512.avif?width=360']
  },
  {
    id: 'p6',
    name: 'Remote Control Car Rechargeable Rc Car Toys for Kids 1:24 High Speed Racing Remote Car',
    category: 'Toys & RC Cars',
    price: 848,
    deliveryFee: 0,
    rating: 4.2,
    ratingsCount: 8,
    reviewsCount: 2,
    size: 'Free Size',
    description: '1:24 High Speed Racing RC Car for kids with rechargeable battery system, easy steering controls, and high-performance racing tires.',
    image: 'https://images.meesho.com/images/products/729920067/hshsl_512.avif?width=512',
    gallery: ['https://images.meesho.com/images/products/729920067/hshsl_512.avif?width=512']
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
        gallery: ['https://images.meesho.com/images/products/638901927/a7moi_512.avif?width=512']
      },
      {
        name: 'Black',
        image: 'https://images.meesho.com/images/products/638901924/zym31_512.avif?width=512',
        gallery: ['https://images.meesho.com/images/products/638901924/zym31_512.avif?width=512']
      },
      {
        name: 'Brown',
        image: 'https://images.meesho.com/images/products/638901929/g0kcm_512.avif?width=512',
        gallery: ['https://images.meesho.com/images/products/638901929/g0kcm_512.avif?width=512']
      }
    ],
    description: "These men’s EVA dual-strap slippers are designed for regular daily use. The open-toe structure offers easy wear, while the dual straps provide a secure fit.",
    image: 'https://images.meesho.com/images/products/638901927/a7moi_512.avif?width=512',
    gallery: ['https://images.meesho.com/images/products/638901927/a7moi_512.avif?width=512']
  },
  {
    id: 'p7',
    name: 'DOCTOR HEALTH SUPER SOFT Women’s Soft Cushion Flip-Flops | Lightweight Anti-Slip Comfort Slippers for Daily Wear',
    category: 'Footwear & Slippers',
    price: 499,
    originalPrice: 999,
    discount: '54% off',
    deliveryFee: 0,
    rating: 4.2,
    ratingsCount: 5055,
    reviewsCount: 2020,
    size: 'IND-5',
    availableSizes: ['IND-4', 'IND-5', 'IND-6', 'IND-7', 'IND-8'],
    colors: [
      {
        name: 'Baby Pink',
        image: 'https://m.media-amazon.com/images/I/71LkLNiASbL._SY695_.jpg',
        gallery: ['https://m.media-amazon.com/images/I/71LkLNiASbL._SY695_.jpg']
      },
      {
        name: 'Cream Brown',
        image: 'https://m.media-amazon.com/images/I/61lHUI-Df2L._SY695_.jpg',
        gallery: ['https://m.media-amazon.com/images/I/61lHUI-Df2L._SY695_.jpg']
      }
    ],
    description: "Soft cushion flip-flops for women designed with ultra-soft EVA platform base for daily comfort.",
    image: 'https://m.media-amazon.com/images/I/71LkLNiASbL._SY695_.jpg',
    gallery: ['https://m.media-amazon.com/images/I/71LkLNiASbL._SY695_.jpg']
  },
  {
    id: 'p8',
    name: 'Ronofic Tissue Therapy Acupressure Foot Massager Slippers for Blood Circulation',
    category: 'Footwear & Slippers',
    price: 349,
    originalPrice: 999,
    discount: '65% off',
    deliveryFee: 0,
    rating: 3.9,
    ratingsCount: 66,
    reviewsCount: 28,
    size: 'IND-7',
    availableSizes: ['IND-5', 'IND-6', 'IND-7', 'IND-8', 'IND-9'],
    description: "Acupressure and Magnetic Spring Slippers designed for blood circulation foot massage.",
    image: 'https://images.meesho.com/images/products/729030230/z2p3y_512.avif?width=512',
    gallery: ['https://images.meesho.com/images/products/729030230/z2p3y_512.avif?width=512']
  }
];

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
  const [activeTab, setActiveTab] = useState('user');
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [searchQuery, setSearchQuery] = useState('');

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSizeOption, setSelectedSizeOption] = useState('');
  const [selectedColorOption, setSelectedColorOption] = useState(null);

  const [instantBuyModalItem, setInstantBuyModalItem] = useState(null);

  const [variantSelectionProduct, setVariantSelectionProduct] = useState(null);
  const [variantSelectedColor, setVariantSelectedColor] = useState(null);
  const [variantSelectedSize, setVariantSelectedSize] = useState('');

  const [userPhoneSearch, setUserPhoneSearch] = useState('');
  const [activeUserPhone, setActiveUserPhone] = useState('');

  const [toastNotification, setToastNotification] = useState(null);
  const triggerNotification = (title, message, orderData = null) => {
    setToastNotification({ title, message, orderData });
    setTimeout(() => {
      setToastNotification(null);
    }, 5000);
  };

  useEffect(() => {
    if (!selectedProductDetails) return;
    const activeGallery = selectedColorOption?.gallery || selectedProductDetails?.gallery;
    if (!activeGallery || activeGallery.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % activeGallery.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedProductDetails, selectedColorOption]);

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

  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });
  const [isOrderPlacedSuccess, setIsOrderPlacedSuccess] = useState(false);

  const handleOpenInstantBuy = (product, size = '', color = '') => {
    if (!size && !color) {
      const hasColors = product.colors && product.colors.length > 0;
      const hasSizes = product.availableSizes && product.availableSizes.length > 0;

      if (hasColors || hasSizes) {
        setVariantSelectionProduct(product);
        setVariantSelectedColor(hasColors ? product.colors[0] : null);
        setVariantSelectedSize(hasSizes ? product.availableSizes[0] : (product.size || 'Free Size'));
        return;
      }
    }

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

  const handleConfirmVariantAndBuy = () => {
    if (!variantSelectionProduct) return;
    const chosenColorName = variantSelectedColor ? variantSelectedColor.name : '';
    const chosenSizeName = variantSelectedSize || variantSelectionProduct.size || 'Free Size';

    const selectedImage = variantSelectedColor ? variantSelectedColor.image : variantSelectionProduct.image;
    const productToBuy = variantSelectionProduct;
    setVariantSelectionProduct(null);

    setInstantBuyModalItem({
      items: [
        {
          ...productToBuy,
          selectedSize: chosenSizeName,
          selectedColor: chosenColorName,
          quantity: 1,
          image: selectedImage
        }
      ],
      totalAmount: productToBuy.price + (productToBuy.deliveryFee || 0)
    });
  };

  const handleCheckoutCart = () => {
    if (cart.length === 0) return;
    setIsCartOpen(false);
    setInstantBuyModalItem({
      items: [...cart],
      totalAmount: cartGrandTotal
    });
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
      items: [...instantBuyModalItem.items],
      totalAmount: instantBuyModalItem.totalAmount,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    setOrders([newOrder, ...orders]);
    setCart([]);
    setInstantBuyModalItem(null);
    setIsOrderPlacedSuccess(true);

    triggerNotification(
      'New Order Received! 🛒',
      `Order ${newOrder.id} from ${newOrder.customerName} for ₹${newOrder.totalAmount}.`,
      newOrder
    );
  };

  const handleReloadApp = () => {
    setProducts(INITIAL_PRODUCTS);
    setOrders(INITIAL_ORDERS);
    setCart([]);
    setIsCartOpen(false);
    setSelectedProductDetails(null);
    setIsAdminAuthenticated(false);
    setUserPhoneSearch('');
    setActiveUserPhone('');
    setSearchQuery('');
    triggerNotification('App Reloaded', 'All 10 storefront products reloaded.');
  };

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminLoginForm, setAdminLoginForm] = useState({ name: '', phone: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const [selectedOrderFilter, setSelectedOrderFilter] = useState('All');
  const [simulatedSmsModal, setSimulatedSmsModal] = useState(null);

  const filteredOrders = orders.filter(order => {
    if (selectedOrderFilter === 'All') return true;
    return order.status === selectedOrderFilter;
  });

  const handleAcceptOrder = (order) => {
    setOrders(orders.map(o => o.id === order.id ? { ...o, status: 'Confirmed' } : o));

    const itemsText = order.items.map(i => `- ${i.name} [${i.selectedSize || 'Free Size'}] x ${i.quantity} = ₹${i.price * i.quantity}`).join('\n');
    const msg = `Hello ${order.customerName},\n\nYour order ${order.id} is CONFIRMED!\n\n📦 *Items:*\n${itemsText}\n\n💰 *Total:* ₹${order.totalAmount}\n📍 *Address:* ${order.address}, ${order.city} - ${order.pincode}\n\nThank you for shopping!`;

    const cleanPhone = order.phoneNumber.replace(/\D/g, '');
    const fullPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
    const url = `https://wa.me/${fullPhone}?text=${encodeURIComponent(msg)}`;

    setSimulatedSmsModal({ recipientPhone: fullPhone, message: msg, whatsappUrl: url });
    triggerNotification('Order Confirmed!', `WhatsApp alert ready for ${order.id}`);
  };

  const handleRejectOrder = (orderId) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: 'Rejected' } : o));
    triggerNotification('Order Cancelled', `Order ${orderId} rejected.`);
  };

  // Smart Keyword & Price Query Search
  const filteredProducts = products.filter(product => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase().trim();

    const priceMatch = query.match(/(?:under|below|less than|within)\s*(\d+)/i);
    if (priceMatch) {
      const maxPrice = parseFloat(priceMatch[1]);
      const cleanText = query.replace(/(?:under|below|less than|within)\s*\d+/gi, '').trim();
      
      const fitsPrice = product.price <= maxPrice;
      if (!cleanText) return fitsPrice;

      const matchesText = product.name.toLowerCase().includes(cleanText) ||
        product.category.toLowerCase().includes(cleanText) ||
        (product.description && product.description.toLowerCase().includes(cleanText));

      return fitsPrice && matchesText;
    }

    const searchTokens = query.split(/\s+/);
    return searchTokens.every(token => {
      const pName = product.name.toLowerCase();
      const pCat = product.category.toLowerCase();
      const pDesc = (product.description || '').toLowerCase();
      const pColors = (product.colors || []).map(c => c.name.toLowerCase()).join(' ');

      if (token === 'offroad' || token === 'off-road') return pName.includes('rc') || pName.includes('stunt') || pName.includes('4x4') || pDesc.includes('terrain');
      if (token === 'car' || token === 'cars') return pName.includes('car') || pCat.includes('cars');

      return pName.includes(token) || pCat.includes(token) || pDesc.includes(token) || pColors.includes(token);
    });
  });

  const userOrders = activeUserPhone
    ? orders.filter(o => o.phoneNumber.replace(/\D/g, '') === activeUserPhone.replace(/\D/g, ''))
    : [];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col">
      {/* REALTIME TOAST NOTIFICATION */}
      {toastNotification && (
        <div className="fixed top-20 right-4 z-50 bg-slate-950 text-white p-4 rounded-2xl shadow-2xl border border-amber-500/50 max-w-sm animate-bounce">
          <div className="flex items-start space-x-3">
            <div className="bg-amber-500 text-slate-950 p-2 rounded-xl">
              <Bell className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="font-black text-amber-400 text-sm">{toastNotification.title}</h4>
              <p className="text-xs text-slate-300 mt-1">{toastNotification.message}</p>
            </div>
            <button onClick={() => setToastNotification(null)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* HEADER NAVBAR */}
      <header className="bg-slate-950 text-white sticky top-0 z-40 border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2.5">
            <div className="bg-amber-500 text-slate-950 p-2 rounded-xl shadow-lg">
              <Store className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h1 className="font-black text-base sm:text-lg tracking-tight text-white">My Shope</h1>
              <p className="text-[9px] sm:text-[10px] text-amber-400 font-semibold uppercase">Storefront & Orders</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleReloadApp}
              className="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-xl text-xs font-bold"
            >
              ↻ Reload All Products
            </button>

            <div className="hidden md:flex items-center bg-slate-900 p-1 rounded-2xl border border-slate-800 space-x-1">
              <button
                onClick={() => setActiveTab('user')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  activeTab === 'user' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Store
              </button>
              <button
                onClick={() => setActiveTab('my-orders')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  activeTab === 'my-orders' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                My Orders
              </button>
              <button
                onClick={() => setActiveTab('admin')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                  activeTab === 'admin' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Admin
              </button>
            </div>

            {activeTab === 'user' && (
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 bg-slate-900 border border-slate-800 text-white rounded-xl"
              >
                <ShoppingCart className="w-5 h-5 text-amber-400" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-950 font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {totalCartItems}
                  </span>
                )}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* USER STOREFRONT VIEW */}
      {activeTab === 'user' && (
        <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 space-y-4 sm:space-y-6 pb-20 md:pb-6">
          {/* SEARCH BAR */}
          <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-slate-200">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5" />
              <input
                type="text"
                placeholder="Search products, e.g. 'offroad car', 'under 2000'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 sm:py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center px-1">
            <h3 className="font-black text-sm text-slate-900">Products Collection ({filteredProducts.length})</h3>
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-xs text-amber-600 font-bold underline">
                Clear Filters
              </button>
            )}
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  setSelectedProductDetails(product);
                  setSelectedSizeOption(product.availableSizes ? product.availableSizes[0] : (product.size || 'Free Size'));
                  setSelectedColorOption(product.colors ? product.colors[0] : null);
                  setActiveImageIndex(0);
                }}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col group"
              >
                <div className="bg-slate-100 p-3 sm:p-6 flex items-center justify-center relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain max-h-36 sm:max-h-52 w-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-white/90 text-slate-800 text-[9px] sm:text-[10px] font-extrabold px-1.5 py-0.5 rounded-full border border-slate-200 truncate max-w-[85%]">
                    {product.category}
                  </span>
                </div>

                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-2 leading-snug group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h4>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-base sm:text-lg font-black text-slate-900">₹{product.price}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product, 1, product.availableSizes ? product.availableSizes[0] : product.size, product.colors ? product.colors[0].name : '');
                          setIsCartOpen(true);
                        }}
                        className="py-1.5 sm:py-2.5 bg-slate-100 text-slate-800 font-extrabold text-[10px] sm:text-[11px] rounded-lg sm:rounded-xl border border-slate-200 flex items-center justify-center space-x-1"
                      >
                        <ShoppingCart className="w-3 h-3" />
                        <span>Add Cart</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenInstantBuy(product);
                        }}
                        className="py-1.5 sm:py-2.5 bg-amber-500 text-slate-950 font-black text-[10px] sm:text-[11px] rounded-lg sm:rounded-xl shadow-md flex items-center justify-center space-x-1"
                      >
                        <Zap className="w-3 h-3 fill-current" />
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* MY ORDERS VIEW */}
      {activeTab === 'my-orders' && (
        <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-6 space-y-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl">
            <div className="text-center max-w-md mx-auto mb-6">
              <div className="w-14 h-14 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <MyBag className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-black text-slate-900">Track Your Orders</h2>
              <p className="text-xs text-slate-500 mt-1">Enter your 10-digit mobile number to view placed orders.</p>
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
                  placeholder="Enter Phone Number"
                  value={userPhoneSearch}
                  onChange={(e) => setUserPhoneSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-black text-xs rounded-xl shadow-md flex items-center justify-center space-x-2 shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>Find Orders</span>
              </button>
            </form>
          </div>

          {activeUserPhone && (
            <div className="space-y-4">
              <h3 className="font-black text-slate-900 text-base">
                Orders for Phone: <span className="text-amber-600">{activeUserPhone}</span> ({userOrders.length})
              </h3>

              {userOrders.length === 0 ? (
                <div className="bg-white rounded-3xl p-8 text-center text-slate-400 border border-slate-200">
                  <Package className="w-10 h-10 mx-auto mb-2 opacity-30" />
                  <p className="font-bold text-slate-700 text-sm">No orders found</p>
                </div>
              ) : (
                userOrders.map((order) => (
                  <div key={order.id} className="bg-white rounded-3xl p-5 border border-slate-200 shadow-md space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-black text-xs">{order.id}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${order.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                        {order.status}
                      </span>
                    </div>
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 bg-slate-50 p-2.5 rounded-xl">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-contain bg-white rounded border" />
                        <div className="flex-1">
                          <p className="font-bold text-xs truncate">{item.name}</p>
                          <p className="text-[10px] text-amber-600 font-bold">Qty: {item.quantity} {item.selectedColor ? `| Color: ${item.selectedColor}` : ''}</p>
                        </div>
                        <span className="font-black text-xs">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-xs font-black pt-2 border-t">
                      <span>Total Amount:</span>
                      <span className="text-emerald-600">₹{order.totalAmount}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </main>
      )}

      {/* ADMIN PORTAL VIEW */}
      {activeTab === 'admin' && (
        <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-6 space-y-6">
          {!isAdminAuthenticated ? (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl max-w-md mx-auto">
              <div className="text-center mb-6">
                <ShieldCheck className="w-10 h-10 text-amber-500 mx-auto mb-2" />
                <h2 className="text-lg font-black text-slate-900">Admin Login Portal</h2>
                <p className="text-xs text-slate-500">Enter password: 1234567890</p>
              </div>

              {loginError && <p className="text-xs text-red-600 font-bold mb-3">{loginError}</p>}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (adminLoginForm.password === '1234567890') {
                    setIsAdminAuthenticated(true);
                    setLoginError('');
                  } else {
                    setLoginError('Incorrect password!');
                  }
                }}
                className="space-y-3 text-xs"
              >
                <div>
                  <label className="block font-bold mb-1">Password</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={adminLoginForm.password}
                    onChange={(e) => setAdminLoginForm({ ...adminLoginForm, password: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300"
                  />
                </div>
                <button type="submit" className="w-full py-2.5 bg-slate-950 text-white font-black rounded-xl">
                  Access Dashboard
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-slate-950 text-white p-5 rounded-3xl flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-black">Admin Orders Hub</h2>
                  <p className="text-xs text-slate-400">Manage orders & dispatch WhatsApp messages</p>
                </div>
                <button onClick={() => setIsAdminAuthenticated(false)} className="px-3 py-1.5 bg-slate-800 text-xs font-bold rounded-xl">
                  Lock Portal
                </button>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-4 space-y-4">
                <h3 className="font-black text-sm">Customer Orders ({filteredOrders.length})</h3>
                {filteredOrders.map(order => (
                  <div key={order.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-black text-xs">{order.id} - {order.customerName} ({order.phoneNumber})</span>
                      <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded">{order.status}</span>
                    </div>
                    <div className="text-xs text-slate-600">
                      <p>Address: {order.address}, {order.city} - {order.pincode}</p>
                      <p className="font-bold text-slate-900 mt-1">Total: ₹{order.totalAmount}</p>
                    </div>
                    {order.status === 'Pending' && (
                      <div className="flex space-x-2 pt-2">
                        <button onClick={() => handleAcceptOrder(order)} className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-xl flex items-center space-x-1">
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Accept & WhatsApp</span>
                        </button>
                        <button onClick={() => handleRejectOrder(order.id)} className="px-3 py-1.5 bg-red-100 text-red-600 text-xs font-bold rounded-xl">
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      )}

      {/* MOBILE BOTTOM NAV */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950 border-t border-slate-800 flex items-center justify-around py-2 px-1 text-slate-400 shadow-2xl">
        <button onClick={() => setActiveTab('user')} className={`flex flex-col items-center text-[10px] font-bold ${activeTab === 'user' ? 'text-amber-400' : ''}`}>
          <Store className="w-5 h-5" />
          <span>Store</span>
        </button>
        <button onClick={() => setActiveTab('my-orders')} className={`flex flex-col items-center text-[10px] font-bold ${activeTab === 'my-orders' ? 'text-amber-400' : ''}`}>
          <MyBag className="w-5 h-5" />
          <span>My Orders</span>
        </button>
        <button onClick={() => setIsCartOpen(true)} className="flex flex-col items-center text-[10px] font-bold text-slate-400">
          <ShoppingCart className="w-5 h-5" />
          <span>Cart</span>
        </button>
        <button onClick={() => setActiveTab('admin')} className={`flex flex-col items-center text-[10px] font-bold ${activeTab === 'admin' ? 'text-amber-400' : ''}`}>
          <ShieldCheck className="w-5 h-5" />
          <span>Admin</span>
        </button>
      </div>

      {/* PRODUCT DETAILS MODAL */}
      {selectedProductDetails && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-5 shadow-2xl relative">
            <button onClick={() => setSelectedProductDetails(null)} className="absolute top-4 right-4 text-slate-400">
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-100 rounded-2xl p-4 flex items-center justify-center aspect-square">
                <img
                  src={selectedColorOption ? selectedColorOption.image : selectedProductDetails.image}
                  alt={selectedProductDetails.name}
                  className="object-contain max-h-56"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-black text-sm text-slate-900 leading-snug">{selectedProductDetails.name}</h3>
                <p className="text-xl font-black text-slate-900">₹{selectedProductDetails.price}</p>
                {selectedProductDetails.colors && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Color Options:</label>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProductDetails.colors.map(c => (
                        <button
                          key={c.name}
                          onClick={() => setSelectedColorOption(c)}
                          className={`px-2.5 py-1 text-xs font-bold rounded-xl border ${selectedColorOption?.name === c.name ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-slate-50'}`}
                        >
                          {c.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex space-x-2 pt-2">
                  <button
                    onClick={() => {
                      addToCart(selectedProductDetails, 1, selectedSizeOption, selectedColorOption?.name);
                      setSelectedProductDetails(null);
                      setIsCartOpen(true);
                    }}
                    className="flex-1 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      const prod = selectedProductDetails;
                      const col = selectedColorOption?.name;
                      const sz = selectedSizeOption;
                      setSelectedProductDetails(null);
                      handleOpenInstantBuy(prod, sz, col);
                    }}
                    className="flex-1 py-2.5 bg-amber-500 text-slate-950 font-black text-xs rounded-xl"
                  >
                    Buy Now
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
            <div className="p-4 bg-slate-950 text-white flex justify-between items-center">
              <h3 className="font-black text-base">Your Cart ({totalCartItems})</h3>
              <button onClick={() => setIsCartOpen(false)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <p className="text-center text-slate-400 font-bold py-12 text-sm">Cart is empty</p>
              ) : (
                cart.map(item => (
                  <div key={item.cartItemId} className="flex justify-between items-center p-3 bg-slate-50 rounded-2xl border">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-contain bg-white rounded border" />
                    <div className="flex-1 px-3">
                      <p className="font-bold text-xs truncate">{item.name}</p>
                      <p className="text-[10px] text-amber-600 font-bold">₹{item.price} x {item.quantity}</p>
                    </div>
                    <button onClick={() => updateCartQuantity(item.cartItemId, -item.quantity)} className="text-slate-400 hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-4 border-t bg-slate-50 space-y-2">
                <div className="flex justify-between font-black text-sm">
                  <span>Subtotal:</span>
                  <span>₹{cartSubtotal}</span>
                </div>
                <button onClick={handleCheckoutCart} className="w-full py-3 bg-amber-500 text-slate-950 font-black rounded-xl text-sm">
                  Proceed to Instant Buy
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* INSTANT BUY ADDRESS MODAL */}
      {instantBuyModalItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-slate-200">
            <button onClick={() => setInstantBuyModalItem(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-black text-base text-slate-900 mb-2">Instant Buy Checkout</h3>
            <form onSubmit={handlePlaceOrder} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Name</label>
                <input type="text" required value={checkoutForm.name} onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-slate-300" />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Phone Number</label>
                <input type="tel" required value={checkoutForm.phone} onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-slate-300" />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Delivery Address</label>
                <textarea required rows="2" value={checkoutForm.address} onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-slate-300" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">City</label>
                  <input type="text" required value={checkoutForm.city} onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-slate-300" />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Pincode</label>
                  <input type="text" required value={checkoutForm.pincode} onChange={(e) => setCheckoutForm({ ...checkoutForm, pincode: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-slate-300" />
                </div>
              </div>
              <button type="submit" className="w-full py-3 bg-amber-500 text-slate-950 font-black rounded-xl text-sm">
                Confirm & Place Order (₹{instantBuyModalItem.totalAmount})
              </button>
            </form>
          </div>
        </div>
      )}

      {/* VARIANT SELECTION MODAL */}
      {variantSelectionProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-5 shadow-2xl relative border border-slate-200">
            <button onClick={() => setVariantSelectionProduct(null)} className="absolute top-4 right-4 text-slate-400">
              <X className="w-4 h-4" />
            </button>
            <h3 className="font-bold text-xs text-slate-900 mb-2">Select Options for {variantSelectionProduct.name}</h3>
            {variantSelectionProduct.colors && (
              <div className="mb-3">
                <label className="block text-xs font-bold text-slate-700 mb-1">Color:</label>
                <div className="flex flex-wrap gap-2">
                  {variantSelectionProduct.colors.map(c => (
                    <button key={c.name} onClick={() => setVariantSelectedColor(c)} className={`px-2.5 py-1 text-xs font-bold rounded-xl border ${variantSelectedColor?.name === c.name ? 'bg-amber-500 text-slate-950' : 'bg-slate-50'}`}>
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button onClick={handleConfirmVariantAndBuy} className="w-full py-2.5 bg-amber-500 font-black text-xs rounded-xl">
              Continue to Delivery
            </button>
          </div>
        </div>
      )}

      {/* WHATSAPP MODAL */}
      {simulatedSmsModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl text-center relative">
            <h3 className="font-black text-base text-slate-900 mb-2">WhatsApp Notification Ready</h3>
            <p className="text-xs text-slate-500 mb-4">{simulatedSmsModal.message}</p>
            <a
              href={simulatedSmsModal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl block mb-2"
            >
              Open WhatsApp
            </a>
            <button onClick={() => setSimulatedSmsModal(null)} className="text-xs font-bold text-slate-500">Close</button>
          </div>
        </div>
      )}

      {/* SUCCESS MODAL */}
      {isOrderPlacedSuccess && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
            <h3 className="font-black text-base">Order Placed Successfully!</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">Admin will send a WhatsApp confirmation once processed.</p>
            <button onClick={() => setIsOrderPlacedSuccess(false)} className="w-full py-2.5 bg-amber-500 font-black text-xs rounded-xl">
              Done
            </button>
          </div>
        </div>
      )}

      <footer className="bg-slate-900 text-slate-400 py-4 text-center text-xs border-t border-slate-800">
        <p className="font-bold text-slate-300">My Shope — Online Store</p>
      </footer>
    </div>
  );
}
