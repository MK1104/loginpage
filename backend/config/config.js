// Browser Sync
export const config = {
    proxy: "http://localhost:3000",
    files: [
      "public/**/*.{css,js}", 
      "src/views/**/*.ejs",
      "src/routes/index.js"
    ],
    ui: {
        port: 7000
      },
    // server: {
    //   baseDir: "public",
    //   views: "src/views"
    // },
    port: 3000,
    open: false,
    reloadOnRestart: true
  };