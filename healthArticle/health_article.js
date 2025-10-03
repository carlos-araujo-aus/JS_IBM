var xhr1 = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
let link = "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/health.json"
var url = './health_article.json';

xhr1.open('GET', link, true); // true means asynchronous
xhr1.responseType = 'json';

xhr1.onload = function() {
    var articlesLink = xhr1.response.articles;
    var articlesDiv = document.getElementById('articlesLink');

    articlesLink.forEach(articlesLink => {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = articlesLink.title;
        articleDiv.appendChild(title);

        var description = document.createElement('p');
        description.textContent = articlesLink.description;
        articleDiv.appendChild(description);

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve';
        articleDiv.appendChild(waysHeader);

        var waysList = document.createElement('ul');
        articlesLink.ways_to_achieve.forEach(way => {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });
        articleDiv.appendChild(waysList);

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits';
        articleDiv.appendChild(benefitsHeader);

        var benefitsList = document.createElement('ul');
        articlesLink.benefits.forEach(benefit => {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });
}
xhr1.send(null);


xhr2.open('GET', url, true); // true means asynchronous
xhr2.responseType = 'json';

xhr2.onload = function() {
    var articlesLocal = xhr2.response.articles;
    var articlesDiv = document.getElementById('articlesLocal');

    articlesLocal.forEach(articlesLocal => {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = articlesLocal.title;
        articleDiv.appendChild(title);

        var description = document.createElement('p');
        description.textContent = articlesLocal.description;
        articleDiv.appendChild(description);

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve';
        articleDiv.appendChild(waysHeader);

        var waysList = document.createElement('ul');
        articlesLocal.ways_to_achieve.forEach(way => {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });
        articleDiv.appendChild(waysList);

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits';
        articleDiv.appendChild(benefitsHeader);

        var benefitsList = document.createElement('ul');
        articlesLocal.benefits.forEach(benefit => {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    })
}
xhr2.send(null);