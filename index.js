const data = require('./data');

class Tin {
    constructor(title, desc, image, link) {
        this.title = title;
        this.image = image;
        this.desc = desc;
        this.link = link;
    }
}

const arrItems = data.split('<item>');
arrItems.shift();

const arrTin = arrItems.map(e => getNewsFromItem(e));
console.log(arrTin);

function getNewsFromItem(item) {
    const title = getBody(item, '<title>', '</title>').trim();
    const link = getBody(item, '<link>', '</link>').trim();
    const image = getBody(item, 'src="', '" ></a>').trim();
    const desc = getBody(item, '</a></br>', ']]>').trim();
    return new Tin(title, desc, image, link);
}

function getBody(item, pre, post) {
    const startIndex = item.indexOf(pre) + pre.length;
    const endIndex = item.indexOf(post);
    return item.slice(startIndex, endIndex);
}

getNewsFromItem(arrItems[24]);
