import * as React from "react";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      // style={styles.container}
      // originWhitelist={["*"]}
      // source={{ uri: "http://115.85.182.215/" }}
      source={{
        uri: "https://63493e5e839390275a6867fd--muritest.netlify.app/",
      }} //expo build:android
    />
  );
}

// const styles = StyleSheet.create({ ... });
