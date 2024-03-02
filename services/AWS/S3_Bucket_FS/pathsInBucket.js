class WebsiteS3Paths { 
    constructor (name, languages) { 
        if(!Array.isArray(languages)) throw new Error('Second argument must be an array of languages string');
        this.s3root = name; 
        this.languages = 
            languages.reduce(
                (accObj, language)=>{ 
                    accObj[language]=`${name}/languages/${language}.json`; 
                    return accObj},{});  
        this.languages.history = 
            languages.reduce(
                (accObj, language)=>{ 
                    accObj[language]=`${name}/languages/history/${language}.json`; 
                    return accObj},{});
    }
}

export const urbanWebS3Paths = new WebsiteS3Paths("lack-docktor",["DE","EN"]);