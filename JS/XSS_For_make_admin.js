fetch("http://localhost:12345/ums/user-management/assign-role", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "X-Requested-With": "XMLHttpRequest",
    "CSRF-TOKEN": document.cookie.match(/BOLD-UMS-XSRF-TOKEN=([^;]+)/)[1]
  },
  body: "users=1b6b5ae3-c116-446a-b820-60e63d4d8a81"
})
.then(res => res.text().then(text => console.log("Success:", res.status, text)))
.catch(err => console.error("Error:", err));
