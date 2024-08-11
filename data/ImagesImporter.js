const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace('./', '')] = r(item).default.src; // Extracting the URL directly
    });
    return images;
  };
  
  const images = importAll(require.context('./ALL SINMAG IMAGE IN ATTACHMENT1', true, /\.(png|jpe?g|svg)$/));
  
  export default images;
  