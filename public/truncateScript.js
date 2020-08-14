const blogText = document.querySelectorAll('.blog-card > p')
const pTags = Array.from(blogText)

pTags.forEach(pTag => {
    if (pTag.textContent.length > 100){
     pTag.textContent = truncateText(pTag.textContent, 150)
    }
})

function truncateText (text, length){
    text = text.substring(0, length) + '...'
    return text
}