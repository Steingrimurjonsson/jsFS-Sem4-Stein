interface iBook {
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}

//The duck-typing feature provides type safety in TypeScript code.
//iBookObj looks if iBookObjTest has title or author (quack and walk)
function iBookObj(item: iBook) {
    if(typeof item === 'object'){
        console.log(item);
    }
}
var iBookObjTest = {
    title: 'Book1',
    author: 'SOMENAME',
    published: new Date(Date.now()),
    pages: 1000
};

iBookObj(iBookObjTest);