function fetchQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quote = data.content;
            const author = data.author;
            const imageUrl = data.authorSlug ? `https://quotes.rest/quote/image?author=${data.authorSlug}` : '';

            document.getElementById("quote").innerText = `"${quote}"`;
            document.getElementById("author").innerText = `- ${author}`;
            document.getElementById("author-image").src = imageUrl;
        })
        .catch(error => console.error('Error fetching quote:', error));
}

// Call the function to fetch and display a random quote when the page loads
fetchQuote();
