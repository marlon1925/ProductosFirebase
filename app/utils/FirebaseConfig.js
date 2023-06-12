import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const cargarConfiguracion = () => {
  console.log("Carga configuracion firebase");
  const app = initializeApp(firebaseConfig);
  global.dbCon = getFirestore(app);
};

const firebaseConfig = {
  apiKey: "AIzaSyAjfLRaWe2LanoxP9H3fy33_wE-nYCvXGE",
  authDomain: "fir-rn-c7259.firebaseapp.com",
  projectId: "fir-rn-c7259",
  storageBucket: "fir-rn-c7259.appspot.com",
  messagingSenderId: "607121449396",
  appId: "1:607121449396:web:2c56825250ca29014952e1",
};
