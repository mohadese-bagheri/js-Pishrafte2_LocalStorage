const redbtn = document.getElementById("redbtn");
const bluebtn = document.getElementById("bluebtn");
const input = document.getElementById("input");
const saveBtn = document.querySelector(".button");
const greeting = document.getElementById("greeting");   // 👈 اضافه شد

// تابع نمایش سلام
function showGreeting(name) {
        greeting.textContent =  name ? "سلام " + name +"!" : "سلام کاربر!";
}

// بازیابی مقادیر ذخیره‌شده
const savedColor = localStorage.getItem("bgcolor");
const savedName = localStorage.getItem("name");

if (savedColor) {
    document.body.style.backgroundColor = savedColor;
}
if (savedName) {
    input.value = savedName;
    document.title = savedName;
    showGreeting(savedName);   // 👈 موقع لود، اسم ذخیره‌شده رو نشون بده
}

// ذخیره اسم
saveBtn.addEventListener("click", () => {
    const name = input.value.trim();
    if (!name) return;
    localStorage.setItem("name", name);
    document.title = name;
    showGreeting(name);        // 👈 بعد از ذخیره، سلام رو عوض کن
    console.log("ذخیره شد:", name);
});

// قرمز
redbtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
    localStorage.setItem("bgcolor", "red");
});

// آبی
bluebtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
    localStorage.setItem("bgcolor", "blue");
});