function getData(){
   return fetch("https://cdn.contentful.com/spaces/u97ry1xzor32/environments/master/entries/3KVqUQFvPFTH1dtbx9DxHa?access_token=2siqKp84SqK3CSwNXOiTtOqTbJiFrJVoQpkL6s5Gh6E")
    .then(res=>res.json())
    .then(res=>res.fields)
};
class PageData{
    constructor(obj){
        this.appCertificados = obj.appCertificados ;
        this.appHobies = obj.appHobies ;
        this.devCl = obj.devCl ;
        this.footer = obj.footer ;
        this.header = obj.header ;
        this.hero = obj.hero ;
        this.heroCertificados = obj.heroCertificados ;
        this.heroContactForm = obj.heroContactForm ;
        this.heroHobbies = obj.heroHobbies ;
    }
};
const data = await getData()
const pagesOptions = new PageData(data)
export {pagesOptions}