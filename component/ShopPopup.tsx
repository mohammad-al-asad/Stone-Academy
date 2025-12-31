import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import { moderateScale } from "react-native-size-matters";


export const products = [
  {
    id: "1",
    name: "Fitness Tracker",
    description: "Heart rate monitor",
    price: 129,
    rating: 5,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },
  {
    id: "2",
    name: "Whey Protein Plus",
    description: "Vanilla flavor 2lbs",
    price: 49,
    rating: 4,
    image: "https://images.unsplash.com/photo-1597076545399-91a3ff0e71b4",
  },
  {
    id: "3",
    name: "Sport Earbuds",
    description: "Wireless, waterproof",
    price: 89,
    rating: 5,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
  },
  {
    id: "4",
    name: "Premium Yoga Mat",
    description: "Non-slip, 6mm thick",
    price: 39,
    rating: 4,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
  },
];


type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function ShopModal({ visible, onClose }: Props) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Shop</Text>
            <Pressable onPress={onClose}>
              <Text style={styles.close}>✕</Text>
            </Pressable>
          </View>

          {/* Products */}
          <FlatList
            data={products}
            numColumns={2}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{ gap: 12 }}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />

                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.desc}>{item.description}</Text>

                <View style={styles.row}>
                  <Text style={styles.price}>${item.price}</Text>
                  <Text style={styles.rating}>
                    {"★".repeat(item.rating)}
                  </Text>
                </View>

                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </Pressable>
              </View>
            )}
          />
        </View>
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
overlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.4)",
  justifyContent: "center",
  alignItems: "center",
},

container: {
  backgroundColor: "#fff",
  borderRadius: moderateScale(10),
  padding: 16,
  width: "90%",
  maxHeight: "80%",
},

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  close: {
    fontSize: 18,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    flex: 1,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },

  name: {
    fontSize: 14,
    fontWeight: "700",
  },

  desc: {
    fontSize: 12,
    color: "#777",
    marginBottom: 6,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#5DA9E9",
  },

  rating: {
    fontSize: 12,
    color: "#F5A623",
  },

  button: {
    backgroundColor: "#6FAEF4",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
});
