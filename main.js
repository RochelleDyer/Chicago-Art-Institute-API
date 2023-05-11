let art;
let showArt;

//Function to get art info when the image is clicked
/**
 * @param img_index
 * @param item_index
 */
async function clickedEvent (img_index, item_index) {
    let art_image = document.getElementsByTagName('img')[img_index].attributes[1].value

    let request = new Request (`https://api.artic.edu/api/v1/artworks/search?q=${art_image}&fields=id,title,artist,main_reference_number`, {
        method: 'GET',
        headers : headers
    });

    let result = await fetch (request);

    let response = await result.json();

    console.log(response);

    let art = `https://www.artic.edu/iiif/2/${response.data[item_index].image_id}/full/843,/0/default.jpg`

        //Chec if showArt is true. If it is, stop it.
    if (showArt) {
        stopDisplay ();
    }
    addImage (art)
}

/**
 * @param id
 * @param event 
 * 
 * id = image id for gallery image
 * event = mouse event given by the action from the user
 * 
 * Function produces images from the clickedEvent based on idex of image
 */

function getArt(id, event) {
    switch(id) {
        case 'fig1' : {
            event.stopPropagation ();
            openArtgallery(1)
            clickedEvent (0,0)
            break;
        }

        case 'fig2' : {
            event.stopPropagation ();
            openArtgallery(2)
            clickedEvent (1,0)
            break;
        }

        case 'fig3' : {
            event.stopPropagation ();
            openArtgallery(3)
            clickedEvent (2,0)
            break;
        }

        case 'fig4' : {
            event.stopPropagation ();
            openArtgallery(4)
            clickedEvent (3,0)
            break;
        }

        case 'fig5' : {
            event.stopPropagation ();
            openArtgallery(5)
            clickedEvent (4,0)
            break;
        }

        case 'fig6' : {
            event.stopPropagation ();
            openArtgallery(6)
            clickedEvent (5,0)
            break;
        }

        case 'fig7' : {
            event.stopPropagation ();
            openArtgallery(7)
            clickedEvent (6,0)
            break;
        }

        case 'fig8' : {
            event.stopPropagation ();
            openArtgallery(8)
            clickedEvent (7,0)
            break;
        }

        case 'fig9' : {
            event.stopPropagation ();
            openArtgallery(9)
            clickedEvent (8,0)
            break;
        }

        case 'fig10' : {
            event.stopPropagation ();
            openArtgallery(10)
            clickedEvent (9,0)
            break;
        }

        case 'fig11' : {
            event.stopPropagation ();
            openArtgallery(11)
            clickedEvent (10,0)
            break;
        }

        case 'fig12' : {
            event.stopPropagation ();
            openArtgallery(12)
            clickedEvent (11,0)
            break;
        }
    }
}

/**
 * @param url
 * 
 * url = art
 * 
 * Function will display art given by the display url
 */

/**
 * NO PARAMS
 * 
 * Function will return event to stop art display
 */

function openArtgallery (img_index) {
    switch (img_index) {
        case 1: {
            document.getElementById('myGallery1').style.display = "block";
            break;
        }

        case 2: {
            document.getElementById('myGallery2').style.display = "block";
            break;
        }

        case 3: {
            document.getElementById('myGallery3').style.display = "block";
            break;
        }

        case 4: {
            document.getElementById('myGallery4').style.display = "block";
            break;
        }

        case 5: {
            document.getElementById('myGallery5').style.display = "block";
            break;
        }

        case 6: {
            document.getElementById('myGallery6').style.display = "block";
            break;
        }

        case 7: {
            document.getElementById('myGallery7').style.display = "block";
            break;
        }

        case 8: {
            document.getElementById('myGallery8').style.display = "block";
            break;
        }

        case 9: {
            document.getElementById('myGallery9').style.display = "block";
            break;
        }

        case 10: {
            document.getElementById('myGallery10').style.display = "block";
            break;
        }

        case 11: {
            document.getElementById('myGallery11').style.display = "block";
            break;
        }

        case 12: {
            document.getElementById('myGallery12').style.display = "block";
            break;
        }
    }
}

function addImage(url) {
    document.getElementById('img1').src = new URL(url);
    document.getElementById('img2').src = new URL(url);
    document.getElementById('img3').src = new URL(url);
    document.getElementById('img4').src = new URL(url);
    document.getElementById('img5').src = new URL(url);
    document.getElementById('img6').src = new URL(url);
    document.getElementById('img7').src = new URL(url);
    document.getElementById('img8').src = new URL(url);
    document.getElementById('img9').src = new URL(url);
    document.getElementById('img10').src = new URL(url);
    document.getElementById('img11').src = new URL(url);
    document.getElementById('img12').src = new URL(url);
}

function stopDisplay (img_index) {
    switch (img_index) {
        case 1: {
            document.getElementById('myGallery1').style.display = "none";
            break;
        }

        case 2: {
            document.getElementById('myGallery2').style.display = "none";
            break;
        }

        case 3: {
            document.getElementById('myGallery3').style.display = "none";
            break;
        }

        case 4: {
            document.getElementById('myGallery4').style.display = "none";
            break;
        }

        case 5: {
            document.getElementById('myGallery5').style.display = "none";
            break;
        }

        case 6: {
            document.getElementById('myGallery6').style.display = "none";
            break;
        }

        case 7: {
            document.getElementById('myGallery7').style.display = "none";
            break;
        }

        case 8: {
            document.getElementById('myGallery8').style.display = "none";
            break;
        }

        case 9: {
            document.getElementById('myGallery9').style.display = "none";
            break;
        }

        case 10: {
            document.getElementById('myGallery10').style.display = "none";
            break;
        }

        case 11: {
            document.getElementById('myGallery11').style.display = "none";
            break;
        }

        case 12: {
            document.getElementById('myGallery12').style.display = "none";
            break;
        } 
    }
}