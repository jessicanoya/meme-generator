// Store 'form' ID in a variable
const memeForm = document.getElementById('meme-form')

// Final meme output store in variable meme
const meme = document.getElementById('meme-container')

// Attach event listener to variable and listen for submit event 'type attribute of submit'
memeForm.addEventListener('submit', function(event){
    // Prevent the page from refreshing
    event.preventDefault()

    // Store top text, bottom text and image in a varibale
    const topText = document.getElementById('top-text')
    const bottomText = document.getElementById('bottom-text')
    const imageURL = document.getElementById('image-url')

    // Check for empty fields
    if (topText.value == '' || bottomText.value == '' || imageURL.value == ''){
        alert('Please fill out all the fields.')
    } else {
        // Create meme container
        const memeContainer = document.createElement('div')
        memeContainer.className = 'container'

        // Create top and bottom text container and give them a class name
        const topTextContainer = document.createElement('div')
        topTextContainer.className = 'top-text'
        topTextContainer.innerText = topText.value.toUpperCase()

        const bottomTextContainer =  document.createElement('div')
        bottomTextContainer.className = 'bottom-text'
        bottomTextContainer.innerText = bottomText.value.toUpperCase()

        // Create image element
        const img = document.createElement('img')
        img.src = imageURL.value

        // Append image, top and bottom text containers to meme container
        memeContainer.append(img, topTextContainer, bottomTextContainer)

        // Append the meme container to #meme-container div
        meme.append(memeContainer)
    }

    // Reset form fields
    topText.value = ''
    bottomText.value = ''
    imageURL.value = ''

})

// Add event delegation to remove memeContainers (div)
meme.addEventListener("click", function(event) {
    // If user clicks on image, remove parent element (div)
    if (event.target.tagName == 'IMG') {
      event.target.parentElement.remove();
    }
})