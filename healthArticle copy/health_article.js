const link = "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/health.json"
const url = './health_article.json';

const createArticleHTML = (article) => {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    const title = document.createElement('h2');
    title.textContent = article.title;
    articleDiv.appendChild(title);

    const description = document.createElement('p');
    description.textContent = article.description;
    articleDiv.appendChild(description);

    const waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve';
    articleDiv.appendChild(waysHeader);

    const waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(way => {
        const listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
    });
    articleDiv.appendChild(waysList);

    const benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits';
    articleDiv.appendChild(benefitsHeader);

    const benefitsList = document.createElement('ul');
    article.benefits.forEach(benefit => {
        const listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
    });
    articleDiv.appendChild(benefitsList);
    
    return articleDiv;
};

async function fetchArticles(url, containerId) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch articles');
        }

        const data = await response.json();
        const container = document.getElementById(containerId);
        
        data.articles.forEach(article => {
            const articleHTML = createArticleHTML(article);
            container.appendChild(articleHTML);
        });

    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

fetchArticles(link, 'articlesLink');
fetchArticles(url, 'articlesLocal');