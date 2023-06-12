import { Button, Icon, Input } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { guardar } from "../services/ProductosSrv";


export const ProductosFrom = ({ navigation, route }) => {
  const [codigo, setCodigo] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [precio, setPrecio] = useState(null);

  const guardarProducto = () => {
    guardar({
      codigo: codigo,
      nombre: nombre,
      precio: parseFloat(precio),
    });
    limpiar();
    navigation.goBack();
    if(route.params && route.params.fnRepintarList())
        //params en el acceso al objeto
    route.params.fnRepintarList()
  };

  const limpiar = () => {
    setCodigo(null);
    setNombre(null);
    setPrecio(null);
  };
  return (
    <View style={styles.container}>
      {/* <Text> FORMULARIO PRODUCTO </Text> */}
      <Input
        value={codigo}
        onChangeText={setCodigo}
        label="Código"
        keyboardType="number-pad"
        leftIcon={
          <Icon name="form" size={24} color="black" type="ant-design" />
        }
      />
      <Input
        value={nombre}
        onChangeText={setNombre}
        label="Nombre"
        leftIcon={
          <Icon name="idcard" size={24} color="black" type="ant-design" />
        }
      />
      <Input
        value={precio}
        onChangeText={setPrecio}
        label="Precio"
        keyboardType="number-pad"
        leftIcon={
          <Icon name="money" size={24} color="black" type="font-awesome" />
        }
      />
      <Button title="Guardar" onPress={guardarProducto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start", //eje principal
  },
});
