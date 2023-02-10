var images = document.getElementsByClassName("ck-retina");

const handleResize = () => {
    for (var i = 0; i < images.length; i++) {
        const sources = images[i].dataset.srcset.split(",");
        const width = window.innerWidth;
        const currentSource = sources.find((source) => {
          const [url, size] = source.trim().split(" ");
          return width < parseInt(size);
        });
        images[i].src = currentSource.split(" ")[0];
    }
};

handleResize();

window.onresize = handleResize;
