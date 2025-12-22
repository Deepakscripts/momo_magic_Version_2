import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Load cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("momoMagicCart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart:", error);
      return [];
    }
  });

  // Load order history from localStorage
  const [orderHistory, setOrderHistory] = useState(() => {
    try {
      const savedOrders = localStorage.getItem("momoMagicOrders");
      return savedOrders ? JSON.parse(savedOrders) : [];
    } catch (error) {
      console.error("Error loading orders:", error);
      return [];
    }
  });

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("momoMagicCart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  }, [cartItems]);

  // Save orders to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("momoMagicOrders", JSON.stringify(orderHistory));
      console.log("Orders saved:", orderHistory); // Debug log
    } catch (error) {
      console.error("Error saving orders:", error);
    }
  }, [orderHistory]);

  // Get total items in cart
  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  // Calculate totals
  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const taxRate = 0.08;
    const tax = subtotal * taxRate;
    const deliveryFee = 0;
    const total = subtotal + tax + deliveryFee;

    return { subtotal, tax, deliveryFee, total };
  };

  // Add item to cart
  const addToCart = (item) => {
    console.log("Adding to cart:", item);
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex((i) => i.id === item.id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...prev];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        return [
          ...prev,
          {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            quantity: 1,
            image: item.image,
            isVeg: item.isVeg,
          },
        ];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex((i) => i.id === itemId);

      if (existingItemIndex !== -1) {
        const updatedItems = [...prev];
        if (updatedItems[existingItemIndex].quantity > 1) {
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity - 1,
          };
          return updatedItems;
        } else {
          return updatedItems.filter((i) => i.id !== itemId);
        }
      }
      return prev;
    });
  };

  // Delete item completely
  const deleteFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // Get item quantity
  const getItemQuantity = (itemId) => {
    const item = cartItems.find((i) => i.id === itemId);
    return item ? item.quantity : 0;
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("momoMagicCart");
  };

  // Place order
  const placeOrder = (orderDetails) => {
    const now = new Date();
    const { subtotal, tax, total } = calculateTotals();

    const newOrder = {
      id: orderDetails.orderNumber,
      orderNumber: orderDetails.orderNumber,
      tableNumber: orderDetails.tableNumber,
      status: "PREPARING",
      items: cartItems.map((item) => ({
        quantity: item.quantity,
        name: item.name.toUpperCase(),
        description: item.description,
        price: item.price,
      })),
      itemCount: cartItems.length,
      total: total,
      subtotal: subtotal,
      tax: tax,
      date: now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      fullDate: now.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
      }),
      time: now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      estimatedTime: orderDetails.estimatedTime,
      image: cartItems[0]?.image || "/api/placeholder/80/80",
      timestamp: now.toISOString(),
      barcode: `0192847${Math.floor(10000 + Math.random() * 90000)}`,
    };

    console.log("Placing order:", newOrder); // Debug log

    // Add to order history
    setOrderHistory((prev) => {
      const updated = [newOrder, ...prev];
      console.log("Updated order history:", updated); // Debug log
      return updated;
    });

    // Clear cart after placing order
    clearCart();

    return newOrder;
  };

  // Get today's orders
  const getTodaysOrders = () => {
    const today = new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });

    return orderHistory.filter((order) => order.fullDate === today);
  };

  console.log("Current order history:", orderHistory); // Debug log
  
  const getTotalPrice = () => {
  return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        orderHistory,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getItemQuantity,
        getTotalItems,
        calculateTotals,
        clearCart,
        placeOrder,
        getTodaysOrders,
         getTotalPrice, // <- add this
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
