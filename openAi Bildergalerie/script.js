const images = [
    "/img/jp-14.jpg",
    "/img/jp-15.jpg",
    "/img/jp-16.jpg",
    "/img/jp-17.jpg",
    "/img/jp-18.jpg",
    "/img/jp-19.jpg"
  ];

  function render() {
 
  
    const container = document.getElementById('container');
  
    // Clear the container before rendering
    container.innerHTML = '';
  
    // Use a for loop to append each image to the container's innerHTML
    for (let i = 0; i < images.length; i++) {
      container.innerHTML += `<img src="${images[i]}" alt="Image ${i + 1}">`;
    }
  }
  