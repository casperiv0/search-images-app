const url = "https://nature-image-api.now.sh/search?q=";
const imageContainer = document.getElementById("imageContainer")
let loading = false;

async function onSubmit() {
    const searchQuery = document.getElementById("searchQuery").value;
    console.log(searchQuery);
    loading = true;
    checkLoading()
    fetch(url + searchQuery)
        .then((res) => {
            if (res.status !== 200) {
                return console.log("There was an error!");
            }

            res.json().then((data) => {
                console.log(data);
                imageContainer.innerHTML = ""

                displayImages(data.images);
            })
                .catch(err => console.log(err));
        });
};

function displayImages(images) {
    console.log(imageContainer);
    
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.image;
        imageContainer.append(img)
    })
    loading = false;
    checkLoading()
}

function checkLoading() {
    if (loading) {
        document.getElementById("loader").style.display = "block"
    } else {
        document.getElementById("loader").style.display = "none"
    }
}
