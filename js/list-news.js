async function loadNews()
{
    try
    {
        const response = await fetch("../data/news.json");
        return await response.json();
    }
    catch (error)
    {
        console.error("Failed to load file!", error);
        return [];
    }
}

document.addEventListener("DOMContentLoaded", async function(event) {
    const ul = document.querySelector(".news-list");
    const newsList = await loadNews();
    
    newsList.forEach(newsArticle => {
        const li = document.createElement("li");
        li.className = "news-item"
        li.innerHTML = `
            <p class="news-type">${newsArticle.type.toUpperCase()}</p>
            <a href="${newsArticle.link}" class="news-headline">${newsArticle.headline}</a>
            <p class="news-date">${newsArticle.date}</p>
        `;
        ul.append(li);
    });
})