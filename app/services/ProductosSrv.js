import { collection, doc, getDocs, setDoc } from "firebase/firestore";

export const guardar = (producto) => {
  const productRef = doc(global.dbCon, "Productos", producto.codigo);
  setDoc(productRef, producto);
};

export const consultar = async (fnSetProductos) => {
  const productosRef = collection(global.dbCon, "Productos");
  const productSnap = await getDocs(productosRef); // es un metodo asincrono continua la ejecucion sin esperar la respues, para hacerle sincronico se usa async await
  let productoArray = [];
  productSnap.forEach((documento) => {
    console.log("doc", documento.data());
    productoArray.push(documento.data());
  });
  fnSetProductos(productoArray);
};
