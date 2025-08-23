async function loadNews()
{
    try
    {
        const response = await fetch("/data/news.json");
        return await response.json();
    }
    catch (error)
    {
        console.error("Failed to load file!", error);
        return [];
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");

    newsList = await loadNews();
    article = newsList.find(article => article.slug === slug);
    
    if (article)
    {
        document.getElementById("article-type").innerHTML = article.type.toUpperCase();
        document.getElementById("article-date").innerHTML = article.date;
        document.querySelector(".article-headline").innerHTML = article.headline;
    }
    else
    {
        window.location.href = "/404.html"
    }
    
    fetch(`${article.slug}.html`)
        .then(response => response.text())
        .then(html => {
            document.querySelector(".article-body").innerHTML = html;
        });
})