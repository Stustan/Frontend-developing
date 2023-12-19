export const process = {
    dev: true,
};

export const site = {
    home: process.dev ? "http://localhost:8080/" : "https://app.tocode.ru/",
};

export const app = {
    title: "Template test",
};

export const links_array = [
    {
        title: "Home",
        alias: "home",
        url: "/",
    },
    {
        title: "About",
        alias: "about",
        url: "/about",
    },
];