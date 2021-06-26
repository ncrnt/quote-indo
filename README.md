### A Simple Indonesian Quotes API.

## **Installation ⚡**
[![NPM INSTALL](http://img.shields.io/badge/npm-install-blue.svg?style=flat&logo=npm)](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) ![NODE JS](http://img.shields.io/badge/Node-JS-teal.svg?style=flat&logo=node.js)
```
$ npm install quote-indo
```
## **Usage 🔰**
```js
const quoteAPI = require('quote-indo');

(async () => {
    const query = 'bucin'
    const quote = await quoteAPI.Quotes(query);

    console.log(quote);
})()
```
### **Quote List 📕**
| No | Query | Description |
| :-: | :-----: | :---------: |
| 1 | bucin | Menampilkan Quote-quote bucin |
| 2 | galau | Menampilkan Quote-quote menggalau |
| 3 | kehidupan | Menampilkan Quote-quote tentang kehidupan |
| 4 | random | Menampilkan Quotes secara acak |

### **Links 🔗**
* [`Buy Me A Coffee☕ ~ Saweria`](https://saweria.co/Natsu062)
