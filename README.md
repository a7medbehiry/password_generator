# Password Generator
#### Video Demo:  <https://youtu.be/WtXmhIhm8KA>
#### Description: I make a Google chrome extension for my final project it about password generator. I use HTML, CSS, JAVASCRIPT, JSON to uploat on google chrome extension

# HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Final Project</title>
    <link rel="icon" href="AMB.png">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="content">
            <h1>Random Password Generator</h1>
            <div class="input">
                <input type="text" id="password" autofocus="">
                <button id= "copyPassword"><i class="fas fa-copy"></i></button>
            </div>
            <button class="generate">generate password</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

# CSS
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html {
    background-color: #0f0f0f;
}

.container {
    background-color: #181818;
    width: 456px;
    height: 224px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    position: relative;
    top: calc(50vh - 224px / 2);
}

.content {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.content h1 {
    color: #e3e3e3;
    font-size: 22px;
    font-weight: 500;
}

.content .input {
    display: flex;
    justify-content: center;
}

.content .generate {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 38px;
    text-transform: uppercase;
    background: #222;
    border: 1px solid #e3e3e3;
    color: #e3e3e38b;
    cursor: pointer;
}

.content .input input {
    height: 38px;
    width: 100%;
    background: #222;
    border: none;
    color: #e3e3e3;
    padding: 3px 9px;
    border-radius: 2px 0 0 2px;
    outline: none;
    pointer-events: none;
}

.content .input button {
    width: 38px;
    height: 38px;
    background: #222;
    border: none;
    color: #e3e3e3;
    border-radius: 0 2px 2px 0;
    cursor: pointer;
}

.content .input button i {
    font-size: 18px;
}

# JAVASCRIPT
const chars = "abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+`|{}[]:;?><,./\-=";

const passwordInput = document.querySelector('#password');
const copyButton = document.querySelector('#copyPassword');
const generateButton = document.querySelector('.generate');

let password = "";

function generate(count)
{
    const min = 8;
    if (count == "random")
    {
        count = min + Math.floor(Math.random() * 9);
    }

    password = "";

    for (let i = 0; i < count; i++)
    {
        let selected = Math.floor(Math.random() * chars.length);

        let char = chars.charAt(selected);
        password += char;

        passwordInput.value = password;
    }
}

function copy()
{
    passwordInput.select();
    document.execCommand("copy");
}

copyButton.addEventListener('click', () => {
    copy();
});

generateButton.addEventListener("click", () => {
    generate("random");
});

# JSON for upload to google chrome
{
    "manifest_version": 3,
    "name": "Password Generator",
    "description": "A simple password generator extension",
    "version": "1.0",
    "action": {
        "default_popup": "index.html"
    },
    "icons": {
        "16": "AMB.png",
        "32": "AMB.png",
        "48": "AMB.png",
        "128": "AMB.png"
    }
}