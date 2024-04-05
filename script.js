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

