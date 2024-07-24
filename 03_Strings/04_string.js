const url="http://localhost.com//localhost%20.F%2F.com"
console.log(url)
console.log(url.replace('%20', '-'))
console.log(url.includes('http://localhost'))
    //true
console.log(url.includes('httpsss://localhost'))
console.log(url.split('.'))