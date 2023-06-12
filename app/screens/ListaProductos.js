import { Button } from "@rneui/themed";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { consultar } from "../services/ProductosSrv";
import { useEffect, useState } from "react";
import { FAB, ListItem } from "@rneui/base";

const ItemListaProductos = ({ productos }) => {
  return (
    <ScrollView>
      <TouchableHighlight>
        <ListItem>
          <View style={styles.caja}>
            <ListItem.Content style={styles.itemCodigo}>
              <ListItem.Title>{productos.codigo}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Content style={styles.itemNombreProducto}>
              <ListItem.Title>{productos.nombre}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Content style={styles.itemPrecioProdct}>
              <ListItem.Title>{productos.precio}</ListItem.Title>
            </ListItem.Content>
          </View>
        </ListItem>
      </TouchableHighlight>
    </ScrollView>
  );
};

export const ListaProductos = ({ navigation }) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    recuperarProductos();
    console.log("Se dispara");
  }, []);
  const recuperarProductos = () => {
    console.log("Recuperando productos");
    consultar(setProductos);
  };
  return (
    <View style={styles.container}>
      {/* <Text> LISTA DE PRODUCTOS </Text> */}

      <FlatList
        data={productos}
        renderItem={({ item }) => {
          return <ItemListaProductos productos={item} />;
        }}
        keyExtractor={(item) => {
          return item.codigo;
        }}
      />
      <FAB
        title="+"
        placement="right"
        onPress={() => {
          navigation.navigate("ProductoFromNav",{fnRepintarList:recuperarProductos});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  caja: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 1,
    borderRadius: 8,
    padding: 5,
  },
  itemCodigo: {
    flex: 2,
    justifyContent: "center",
    alignContent: "center",
    paddingLeft: 2,
  },
  itemNombreProducto: {
    flexDirection: "row",
    paddingLeft: 5,
    flex: 9,
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemPrecioProdct: {
    flex: 2,
  },
});
