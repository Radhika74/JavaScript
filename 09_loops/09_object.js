//objects are not directly iterable like maps so we use for in loop
const objects= {
    js: 'javascript',
    python: 'python',
    java: 'java',
    c: 'c++',
    go: 'go',
    php: 'php',
    html: 'hypertext markup language',
    swift: 'swift',
    dart: 'dart',
    css: 'cascading styling sheets',

}

for (const key in objects){

    console.log(`${key} shortcut is for ${objects[key]}`)

}

